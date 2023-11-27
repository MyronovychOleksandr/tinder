import express from "express"
import {
    getAllUsersController,
    getUserByIdController,
    registrationController,
    updateUserController
} from "../../controlers/userControlers"

const router = express.Router();

router.get("/", getAllUsersController);
router.get("/:userId", getUserByIdController);
router.post("/create", registrationController);
router.put("/edit/:userId", updateUserController);


export default router;