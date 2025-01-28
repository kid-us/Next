import { z } from "zod";

const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Product name required and must be 3 chars long" }),
});

export default productSchema;
