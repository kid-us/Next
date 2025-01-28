import { z } from "zod";

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name is required and must be 3 chars long" }),
  email: z.string().email({ message: "Valid email address required." }),
});

export default userSchema;
