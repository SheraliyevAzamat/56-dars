import { Router } from "express";
import { orderController } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const orderRouter = Router();

orderRouter.get("/", orderController.getAll);
orderRouter.get("/:id", orderController.getById);
orderRouter.post("/", authMiddleware, orderController.create);
orderRouter.put("/:id", authMiddleware, orderController.update);
orderRouter.delete("/:id", authMiddleware, orderController.delete);