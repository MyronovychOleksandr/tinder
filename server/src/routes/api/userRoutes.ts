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
import {MAX_IMAGES_COUNT} from "../../constatns";

const router = express.Router();

router.post("/create", uploadMiddleware.array('images', MAX_IMAGES_COUNT), registrationController);
router.post("/login", loginController)
router.get("/", guard, getAllUsersController);
router.get("/me", guard, getMeController);
router.post("/logout", guard, logoutController);
router.put("/edit", guard, uploadMiddleware.array('images', MAX_IMAGES_COUNT), updateUserController);
router.post("/like", guard, likeUserController);
router.post("/unlike", guard, unlikeUserController);
router.get("/matched", guard, getMatchedUsersController);


export default router;