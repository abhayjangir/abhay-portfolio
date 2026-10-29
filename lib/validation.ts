import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must not exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(120, { message: "Subject must not exceed 120 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2000, { message: "Message must not exceed 2000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

