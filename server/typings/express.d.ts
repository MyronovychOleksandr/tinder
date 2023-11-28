import { Request } from "express";

declare module "express" {
    import {IUser} from "../src/types/user";

    interface Request {
        user?: IUser;
    }
}