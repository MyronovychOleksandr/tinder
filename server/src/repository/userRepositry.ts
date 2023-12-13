import User from "../schemas/userSchemas";
import {IGetUsersParams, IUser} from "../types/user";
import mongoose from "mongoose";
import {DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE} from "../constatns";

interface IMatchQuery {
    _id?: { $ne: mongoose.Types.ObjectId };
    gender?: string;
    age?: {
        $gte?: number;
        $lte?: number;
    };
    tags?: { $elemMatch: { value: { $in: string[] } } };
    $or?: Array<{
        firstName?: { $regex: string; $options: 'i' };
        lastName?: { $regex: string; $options: 'i' };
    }>;
}

class UserRepository {
    async createUser(body: IUser) {
        const user = new User(body);
        return user.save();
    }

    async findUsers({
                        gender,
                        minAge,
                        maxAge,
                        tags,
                        search,
                        page= DEFAULT_PAGE_NUMBER,
                        pageSize= DEFAULT_PAGE_SIZE,
                        coordinates,
                        maxDistance,
                        currentUserId
                    }: IGetUsersParams): Promise<{ users: IUser[], currentPage: number, totalPages: number, pageSize: number, totalUsers: number }> {
        const pipeline: any[] = [];

        if (coordinates && maxDistance) {
            pipeline.push({
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: coordinates,
                    },
                    distanceField: "distance",
                    maxDistance: maxDistance * 1000,
                    spherical: true,
                },
            });
        }

        const matchQuery: IMatchQuery = {};

        if (currentUserId) {
            matchQuery._id = { $ne: new mongoose.Types.ObjectId(currentUserId) };
        }

        if (gender) {
            matchQuery.gender = gender;
        }

        if (minAge !== undefined || maxAge !== undefined) {
            matchQuery.age = {};

            if (minAge !== undefined) {
                matchQuery.age.$gte = minAge;
            }

            if (maxAge !== undefined) {
                matchQuery.age.$lte = maxAge;
            }
        }

        if (tags && tags.length > 0) {
            matchQuery.tags = {$elemMatch: {value: {$in: tags}}};
        }

        if (search) {
            matchQuery.$or = [
                {firstName: {$regex: search, $options: 'i'}},
                {lastName: {$regex: search, $options: 'i'}},
            ];
        }

        pipeline.push({$match: matchQuery});

        pipeline.push({
            $group: {
                _id: null,
                count: {$sum: 1},
                users: {$push: "$$ROOT"},
            },
        });

        const totalUsers = await User.aggregate<{ count: number, users: any[] }>(pipeline);

        const startIndex = (page - 1) * pageSize;

        pipeline.push({$unwind: "$users"});
        pipeline.push({$skip: startIndex});
        pipeline.push({$limit: pageSize});

        const users = await User.aggregate(pipeline);

        const totalPages = Math.ceil(totalUsers[0]?.count / pageSize) || 0;

        return {
            users,
            currentPage: page,
            totalPages,
            pageSize,
            totalUsers: totalUsers[0]?.count || 0,
        };
    }


    findUserById(id: string) {
        return User.findById(id)
    }

    findUserByEmail(email: string) {
        return User.findOne({email});
    }

    async updateUser(id: string, body: IUser, images: string[]) {
        return User.findByIdAndUpdate(
            id,
            {...body, images},
            {new: true}
        );
    }

    async updateToken(id: string, token: string | null) {
        await User.updateOne({_id: id}, {token});
    }

    async likeUser(userId: string, likedUserId: string) {
        return User.findByIdAndUpdate(
            userId,
            {$addToSet: {likedUsers: likedUserId}},
            {new: true}
        );
    }

    async unlikeUser(userId: string, unlikedUserId: string) {
        return User.findByIdAndUpdate(
            userId,
            {$pull: {likedUsers: unlikedUserId}},
            {new: true}
        );
    }

    async findUsersLikedByUserId(userId: string): Promise<IUser[]> {
        const user = await User.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        return User.find({
            _id: {$in: user.likedUsers},
        });
    }
}

export default new UserRepository();
