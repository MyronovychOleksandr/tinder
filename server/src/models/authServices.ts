import UserRepository from "../repository/userRepositry";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY as string;

class AuthService {
    async login({ email, password }: {email: string, password: string}) {
        const user = await UserRepository.findUserByEmail(email);
        if (!user || !await user.validPassword(password)) {
            return null;
        }
        const id = user.id;
        const payload = { id };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
        await UserRepository.updateToken(id, token);
        return token;
    }

    async logout(id: string) {
        return await UserRepository.updateToken(id, null);
    }
}

export default new AuthService