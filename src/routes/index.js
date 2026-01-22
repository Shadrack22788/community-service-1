import express from "express";
import UserRouter from "./UserRouter.js";
import CategoryRouter from "./CategoryRouter.js";
import serviceRouter from "./ServiceRouter.js"

const router = express.Router();
router.use("/user", UserRouter);
router.use("/category", CategoryRouter);
router.use("/service", serviceRouter);
export default router;