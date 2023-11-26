import {createUser} from "../models/userServices"
import {HttpCode} from "../constatns/httpCodes";

export const reg = async (req, res, next) => {
    const { firstName, lastName } = req.body;


    try {
        const newUser = await createUser({
            firstName,
            lastName
            // avatarURL,
        });
        return res.status(HttpCode.CREATED).json({
            status: "success",
            code: HttpCode.CREATED,
            data: {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
            },
        });
    } catch (e) {
        next(e);
    }
};