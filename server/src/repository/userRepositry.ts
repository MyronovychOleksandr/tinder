import User from "../schemas/userSchemas";
import {IUser} from "../types/user";

class UserRepository {
    async createUser(body: IUser) {
        const user = new User(body);
        return user.save();
    }

    async findUsers(
        gender?: string,
        minAge?: number,
        maxAge?: number,
        tags?: string[],
        page: number = 1,
        pageSize: number = 10
    ) {
        const query: any = {};

        if (gender) {
            query.gender = gender;
        }

        if (minAge !== undefined || maxAge !== undefined) {
            query.age = {};

            if (minAge !== undefined) {
                query.age.$gte = minAge;
            }

            if (maxAge !== undefined) {
                query.age.$lte = maxAge;
            }
        }

        if (tags && tags.length > 0) {
            query.tags = { $elemMatch: { value: { $in: tags } } };
        }

        const totalUsers = await User.countDocuments(query);

        const startIndex = (page - 1) * pageSize;

        const users = await User.find(query)
            .skip(startIndex)
            .limit(pageSize);

        const totalPages = Math.ceil(totalUsers / pageSize);

        return {
            users,
            currentPage: page,
            totalPages,
            pageSize,
            totalUsers
        };
    }


    findUserById(id: string) {
        return User.findById(id)
    }

    findUserByEmail(email: string) {
        return User.findOne({email});
    }

    updateUser(id: string, body: IUser) {
        return User.findByIdAndUpdate(
            id,
            {...body},
            {new: true}
        );
    };
}

export default new UserRepository();
