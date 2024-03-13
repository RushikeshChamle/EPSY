import * as z from "zod"

export const userAuthSchemaregister = z.object({
  email: z.string().email(),
  password: z.string(), 

  name: z.string(),
  contact_no: z.string(),


})