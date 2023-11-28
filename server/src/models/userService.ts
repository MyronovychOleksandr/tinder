import UserRepository from "../repository/userRepositry";
import {IUser} from "../types/user";

class UserService {
    async createUser(body: IUser) {
        return await UserRepository.createUser(body);
    }

    findUsers(gender?: string, minAge?: number, maxAge?: number, tags?: string[], page?: number, pageSize?: number) {
        return UserRepository.findUsers(gender, minAge, maxAge, tags, page, pageSize);
    }

    findUserById(id: string){
        return UserRepository.findUserById(id)
    }

    findUserByEmail(email: string) {
        return UserRepository.findUserByEmail(email);
    }

    updateUser(id: string, body: IUser) {
        return UserRepository.updateUser(id, body);
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

