import UserService from "../models/userService"
import AuthService from "../models/authServices"
import {HttpCode} from "../constatns/httpCodes";
import {IUser} from "../types/user";
import {NextFunction, Request, Response} from "express";

export const registrationController = async (req: Request, res: Response, next: NextFunction) => {
    const {firstName, lastName, age, tags, email, gender, password} = req.body;

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
            password,
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
                email: newUser.email,
                gender: gender,
                id: newUser.id,
            },
        });
    } catch (e) {
        next(e);
    }
};

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = await AuthService.login(req.body);

        if (token) {
            return res.status(HttpCode.OK).json({
                status: "success",
                code: HttpCode.OK,
                token
            });
        }
        next({
            status: HttpCode.UNAUTHORIZED,
            message: "Invalid credentials",
        });
    } catch (error) {
        next(error);
    }
};

export const logoutController = async (req: Request, res: Response) => {
    const user = req.user;
    const {id} = user as IUser

    await AuthService.logout(id as string);
    return res
        .status(HttpCode.NO_CONTENT)
        .json({status: "success", code: HttpCode.NO_CONTENT});
};

export const getAllUsersController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gender = req.query.gender ? String(req.query.gender) : undefined
        const minAge = req.query.minAge ? Number(req.query.minAge) : undefined
        const maxAge = req.query.maxAge ? Number(req.query.maxAge) : undefined
        const tags = req.query.tags ? String(req.query.tags).split(",") : undefined
        const page = req.query.page ? Number(req.query.page) : undefined
        const pageSize = req.query.pageSize ? Number(req.query.pageSize) : undefined

        const data = await UserService.findUsers(gender, minAge, maxAge, tags, page, pageSize);

        res.json({
            status: "success",
            code: HttpCode.OK,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const getMeController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.user;
        const {id} = userData as IUser
        const user = await UserService.findUserById(id as string);
        if (user) {
            return res.json({
                status: "success",
                code: HttpCode.OK,
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    tags: user.tags,
                    age: user.age,
                    email: user.email,
                    gender: user.gender,
                    id: user.id,
                },
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
        const userData = req.user;
        const {id} = userData as IUser
        const user = await UserService.updateUser(id as string, req.body);
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

export const likeUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.user;
        const { id } = userData as IUser;
        const { likedUserId } = req.body;

        await UserService.likeUser(id as string, likedUserId);

        return res.json({
            status: "success",
            code: HttpCode.OK,
        });
    } catch (error) {
        next(error);
    }
};

export const unlikeUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.user;
        const { id } = userData as IUser;
        const { unlikedUserId } = req.body;

        await UserService.unlikeUser(id as string, unlikedUserId);

        return res.json({
            status: "success",
            code: HttpCode.OK,
        });
    } catch (error) {
        next(error);
    }
};

export const getMatchedUsersController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.user;
        const { id } = userData as IUser;

        const matchedUsers = await UserService.getMatchedUsers(id as string);

        return res.json({
            status: "success",
            code: HttpCode.OK,
            data: matchedUsers,
        });
    } catch (error) {
        next(error);
    }
};
