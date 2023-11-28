import { Request, Response, NextFunction } from "express";
import passport from "passport";
import "../config/passport";
import {IUser} from "../types/user";
import {HttpCode} from "../constatns/httpCodes";


export const guard = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("jwt", { session: false }, (err: Error, user: IUser) => {

        if (err || !user) {
            return next({
                status: HttpCode.FORBIDDEN,
                message: "Forbidden",
            });
        }
        req.user = user;
        return next();
    })(req, res, next);
};