import express from "express"
import {
    getAllUsersController,
    getMeController,
    registrationController,
    updateUserController,
    loginController,
    logoutController,
    likeUserController,
    unlikeUserController,
    getMatchedUsersController
} from "../../controlers/userControlers"

import {guard} from "../../helpers/guard";
import uploadMiddleware from '../../helpers/uploadMiddleware';

const router = express.Router();

router.post("/create", uploadMiddleware.array('images', 3), registrationController);
router.post("/login", loginController)
router.get("/", guard, getAllUsersController);
router.get("/me", guard, getMeController);
router.post("/logout", guard, logoutController);
router.put("/edit", guard, uploadMiddleware.array('images', 3), updateUserController);
router.post("/like", guard, likeUserController);
router.post("/unlike", guard, unlikeUserController);
router.get("/matched", guard, getMatchedUsersController);


export default router;