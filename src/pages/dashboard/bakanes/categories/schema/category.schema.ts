import { z } from 'zod';

// Validación para color HEX
const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;

export const CategorySchema = z.object({
  name: z.string().nonempty('El nombre es obligatorio'),

  description: z
    .string()
    .min(30, 'La descripción debe tener al menos 150 caracteres')
    .max(200, 'La descripción no puede superar los 200 caracteres'),

  file: z
    .any()
    .refine((files) => files && files.length > 0, 'Se debe subir un archivo')
    .refine(
      (files) =>
        files && ['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(files[0].type),
      'El archivo debe ser una imagen (jpg, png, gif, webp)'
    ),

  color: z.string().regex(hexColorRegex, 'Debe ser un color HEX válido, por ejemplo #1E1B4D'),

  status: z.boolean(),
});

export type CategoryFormData = z.infer<typeof CategorySchema>;
