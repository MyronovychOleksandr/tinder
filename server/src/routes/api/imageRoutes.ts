import {deleteImageController} from "../../controlers/imageControllers";
import router from "./userRoutes";

router.delete('/delete-image/:filename', deleteImageController);


export default router;