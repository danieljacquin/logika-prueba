import * as z from 'zod';

export const LoginSchema = z.object({
  username: z.email({
    message: 'El correo electrónico no tiene un formato válido',
  }),
  password: z.string().min(5, 'La contraseña debe tener al menos 5 caracteres'),
});

export type LoginFormData = z.infer<typeof LoginSchema>;
