import express from  "express"
import CategoryController from "../controller/CategoryController.js"

const router = express.Router()

router.post("/create", CategoryController.createCategory)
export default router
