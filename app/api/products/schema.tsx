import { z } from "zod";

const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Product name required and must be 3 chars long" }),
  price: z.number({ message: "Price required." }),
});

export default productSchema;
