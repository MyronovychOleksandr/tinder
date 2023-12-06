import UserRepository from "../repository/userRepositry";
import {IUser} from "../types/user";

class UserService {
    async createUser(body: IUser) {
        return await UserRepository.createUser(body);
    }

    async findUsers(
        gender?: string,
        minAge?: number,
        maxAge?: number,
        tags?: string[],
        search?: string,
        page?: number,
        pageSize?: number,
        coordinates?: number[],
        maxDistance?: number
    ) {
        const {users, totalPages, currentPage, totalUsers, pageSize: pageLimit} = await UserRepository.findUsers(gender, minAge, maxAge, tags, search, page, pageSize, coordinates, maxDistance);

        const usersList = users.map((item: any) => {
            return {...item.users}
        })
        return {users: usersList, totalPages, currentPage, totalUsers, pageSize: pageLimit}
    }

    findUserById(id: string) {
        return UserRepository.findUserById(id)
    }

    findUserByEmail(email: string) {
        return UserRepository.findUserByEmail(email);
    }

    updateUser(id: string, body: IUser, images: string[]) {
        return UserRepository.updateUser(id, body, images);
    };

    async likeUser(userId: string, likedUserId: string) {
        return UserRepository.likeUser(userId, likedUserId);
    }

    async unlikeUser(userId: string, unlikedUserId: string) {
        return UserRepository.unlikeUser(userId, unlikedUserId);
    }

    async getMatchedUsers(userId: string): Promise<IUser[]> {
        const user = await UserRepository.findUserById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        const likedByUsers = await UserRepository.findUsersLikedByUserId(userId);

        return likedByUsers.filter((likedByUser) =>
            likedByUser.likedUsers?.some((likedUserId) => likedUserId.toString() === userId.toString())
        );
    }
}

export default new UserService();

