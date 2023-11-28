import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import  UserService  from "../models/userService" ;
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const params = {
    secretOrKey: SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
    new Strategy(params, async (payload, done) => {
        try {
            const user = await UserService.findUserById(payload.id);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }
    })
);