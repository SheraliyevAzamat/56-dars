import { z } from "zod";

export const userRegistrationSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const userLoginSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
  email: z.string().email(),
});



export const loginValidation = {
  body: z.object({
    email: z.string().email(),
    password: z.string(),
    username: z.string()
  }),
};