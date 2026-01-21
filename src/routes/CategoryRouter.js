import express from  "express"
import CategoryController from "../controller/CategoryController.js"

const router = express.Router()

router.get("/create", CategoryController.createCategory)
router.post("/category", CategoryController.createCategory)

export default router
