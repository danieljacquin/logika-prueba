import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { notify } from '@/utils/toast';

import { CategorySchema, type CategoryFormData } from '../schema/category.schema';

type CategoriesFormProps = {
  onCreateCategory: (formData: unknown) => void;
  onCLose: () => void;
  isSubmiting: boolean;
};

const initialValues = {
  name: '', // string vacío
  description: '', // string vacío, se llenará con 150-200 caracteres
  file: null, // inicialmente sin archivo
  color: '#1E1B4D', // valor HEX por defecto
  status: false, // checkbox desactivado
};

const CategoriesForm = ({ onCreateCategory, onCLose, isSubmiting }: CategoriesFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(CategorySchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (data: CategoryFormData) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('icon', data.file[0]);
    formData.append('color', data.color);
    formData.append('status', data.status ? '1' : '0');
    await onCreateCategory(formData);
    notify.success('Se ha creado exitosamente');
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="correo" className="block mb-2.5 text-sm font-medium text-gray-700">
            Nombre de la categoria*
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Escribe el Nombre de la buena accion"
            className="w-full px-3 py-2.5
             text-sm text-gray-800
             placeholder:text-gray-400
             border border-gray-300
             rounded-lg
             shadow-sm
             focus:outline-none
             focus:ring-2 focus:ring-blue-500
             focus:border-blue-500"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="descripcion" className="block mb-2.5 text-sm font-medium text-gray-700">
            Descripción de la buena acción*
          </label>
          <textarea
            {...register('description')}
            id="descripcion"
            placeholder="Agregar descripción"
            className="w-full px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 
           border border-gray-300 rounded-lg shadow-sm 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          ></textarea>
          <div className="text-right text-xs text-gray-500 mt-1">150/200</div>
          {errors.description && (
            <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="correo" className="block mb-2.5 text-sm font-medium text-gray-700">
            logo*
          </label>
          <input
            {...register('file')}
            type="file"
            placeholder="Cargar archivo"
            className="w-full px-3 py-2.5
             text-sm text-gray-800
             placeholder:text-gray-400
             border border-gray-300
             rounded-lg
             shadow-sm
             focus:outline-none
             focus:ring-2 focus:ring-blue-500
             focus:border-blue-500"
          />
          {errors.file && (
            <p className="mt-1 text-xs text-red-600">
              {typeof errors.file.message === 'string' ? errors.file.message : 'Invalid file'}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contraseña" className="block mb-2.5 text-sm font-medium text-gray-700">
            Color*
          </label>
          <input
            {...register('color')}
            type="text"
            placeholder="Registrar color codigo HEX"
            className="w-full px-3 py-2.5
             text-sm text-gray-800
             placeholder:text-gray-400
             border border-gray-300
             rounded-lg
             shadow-sm
             focus:outline-none
             focus:ring-2 focus:ring-blue-500
             focus:border-blue-500"
          />
          {errors.color && <p className="mt-1 text-xs text-red-600">{errors.color.message}</p>}
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input {...register('status')} type="checkbox" className="sr-only peer" />
          <div
            className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 
                  peer-checked:bg-blue-600 transition-colors duration-300"
          ></div>
          <span className="text-gray-700 font-medium">Activo</span>
          <div
            className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full 
                  peer-checked:translate-x-5 transition-transform duration-300"
          ></div>
        </label>

        <div className="flex justify-between gap-2">
          <button
            disabled={isSubmiting}
            onClick={onCLose}
            type="button"
            className="w-[260px] bg-gray-300 text-gray-800 py-3 px-4 rounded-lg font-medium 
               hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 
               focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancelar
          </button>

          <button
            disabled={isSubmiting}
            type="submit"
            className="w-[260px] text-white py-3 px-4 rounded-lg font-medium 
               hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 
               transition disabled:opacity-50 disabled:cursor-not-allowed focus:ring-[#1E1B4D]"
            style={{ backgroundColor: '#1E1B4D' }}
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoriesForm;
