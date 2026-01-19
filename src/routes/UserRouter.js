import express from "express"
import controller from "../controller/userController.js"
import { EmailExist } from "../middleware/Validation.js"
import { VerifyAccess } from "../middleware/VerifyAccess.js"

const router = express.Router()
router.post("/user", EmailExist, controller.signup)
router.post("/user/login",controller.login)
router.get("/users",VerifyAccess('admin'),controller.getAllUsers)
router.get("/user/:id",controller.getOneUser)
router.delete("/users",controller.deletAllUser)
router.patch("/user/:id",controller.updateUser)
export default router
