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
}

export default new UserService();

