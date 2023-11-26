import {createUserRepository} from "../repository/userRepositry"
import {IUser} from "../types/user";

export const createUserService = async (body: IUser) => {
    return await createUserRepository(body);
}


