import UserService from "../models/userService"
import {HttpCode} from "../constatns/httpCodes";
import {IUser} from "../types/user";
import {NextFunction, Request, Response} from "express";
import {debuglog, log} from "util";

export const registrationController = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, age, tags, email, gender } = req.body;

    try {
        const user = await UserService.findUserByEmail(email)
        if (user) {
            return next({
                status: HttpCode.CONFLICT,
                data: "Conflict",
                message: "Email in use",
            });
        }

        const newUser: IUser = await UserService.createUser({
            firstName,
            lastName,
            age,
            tags,
            email,
            gender
        });
        return res.status(HttpCode.CREATED).json({
            status: "success",
            code: HttpCode.CREATED,
            data: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                tags: newUser.tags,
                age: newUser.age,
                id: newUser.id,
            },
        });
    } catch (e) {
        next(e);
    }
};

export const getAllUsersController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gender = req.query.gender ?  String(req.query.gender) : undefined
        const minAge = req.query.minAge ? Number(req.query.minAge) : undefined
        const maxAge = req.query.maxAge ? Number(req.query.maxAge) : undefined
        const tags = req.query.tags ? String(req.query.tags).split(",") : undefined
        const page = req.query.page ? Number(req.query.page) : undefined
        const pageSize = req.query.pageSize ? Number(req.query.pageSize) : undefined

        const data = await UserService.findUsers(gender, minAge,maxAge, tags, page, pageSize);

        res.json({
            status: "success",
            code: HttpCode.OK,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserService.findUserById(req.params.userId);
        if (user) {
            return res.json({
                status: "success",
                code: HttpCode.OK,
                user,
            });
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "Not found contact",
                data: "Not Found",
            });
        }
    } catch (error) {
        next(error);
    }
};

export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserService.updateUser(req.params.userId, req.body);
        if (user) {
            return res.json({
                status: "success",
                code: HttpCode.OK,
                user,
            });
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "Not found contact",
                data: "Not Found",
            });
        }
    } catch (error) {
        next(error);
    }
};
