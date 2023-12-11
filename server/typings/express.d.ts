import { Request } from "express";

declare module "express" {
    import {IUser} from "../src/types/user";
    import {IImage} from "../src/types/image";

    interface Request {
        user?: IUser;
        files?: IImage[]
    }
}