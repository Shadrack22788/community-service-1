import express from "express"
import controller from "../controller/userController.js"
import { EmailExist } from "../middleware/Validation.js"
import { VerifyAccess } from "../middleware/VerifyAccess.js"

const router = express.Router()
router.post("/", EmailExist, controller.signup)
router.post("/login",controller.login)
router.get("/users",VerifyAccess('user'),controller.getAllUsers)
router.get("/:id",controller.getOneUser)
router.delete("/users",controller.deletAllUser)
router.patch("/:id",controller.updateUser)
export default router
