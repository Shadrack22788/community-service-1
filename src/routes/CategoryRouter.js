import express from  "express"
import CategoryController from "../controller/CategoryController.js"


const router = express.Router()

router.post("/category", CategoryController.createCategory)
export default router
