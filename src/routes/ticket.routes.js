import { Router } from "express";
import { ticketController } from "../controllers/index.js";
import { createTicketSchema, updateTicketSchema } from "../validators/index.js";
import { validateData } from "../middlewares/validateMiddleware.js";
export const ticketRouter = Router();

ticketRouter.get("/", ticketController.getAll);
ticketRouter.get("/:id", ticketController.getById);
ticketRouter.post("/",validateData(createTicketSchema), ticketController.create);
ticketRouter.put("/:id",validateData(updateTicketSchema), ticketController.update);
ticketRouter.delete("/:id", ticketController.delete);