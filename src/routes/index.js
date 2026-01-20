import express from "express";
import UserRouter from "./UserRouter.js";
import CategoryRouter from "./CategoryRouter.js";;

const router = express.Router();
router.use("/user", UserRouter);
router.use("/create", CategoryRouter);
export default router;