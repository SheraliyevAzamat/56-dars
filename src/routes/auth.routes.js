import { Router } from "express";
import { validate, ValidationError } from "express-validation";
import { authController } from "../controllers/index.js";
import {
	loginValidation,
	userLoginSchema,
	userRegistrationSchema,
} from "../validators/index.js";
import { validateData } from "../middlewares/validateMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const authRouter = Router();

authRouter.post(
	"/register",
	validateData(userRegistrationSchema),
	authController.register,
);
authRouter.post("/login", validateData(userLoginSchema), authController.login);
authRouter.get("/logout", authController.logout);
authRouter.get("/profile", authMiddleware, authController.profile);