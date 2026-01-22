import express from "express"
import ServiceController from "../controller/ServiceController.js"
import { VerifyAccess } from "../middleware/VerifyAccess.js"

const router = express.Router()
router.post("/",VerifyAccess("provider"), ServiceController.createService)
router.get("/",ServiceController.findServices)

export default router;