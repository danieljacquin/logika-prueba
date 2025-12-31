import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Spinner } from '@/components/ui/Spinner';

import { LoginSchema, type LoginFormData } from '../schema/login.schema';

type LoginFormProps = {
  onHandleLogin: (data: LoginFormData) => void;
  isSubmiting: boolean;
};

const initialValues: LoginFormData = {
  username: '',
  password: '',
};

const LoginForm = ({ onHandleLogin, isSubmiting }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (formData: LoginFormData) => {
    onHandleLogin(formData);
  };

  return (
    <div className="w-[581px] mx-auto mt-6 border border-gray-200 rounded-lg shadow-md bg-white">
      <div className="grid gap-4 m-8">
        <div className="flex justify-center">
          <img src="/login-icon.svg" alt="Icono" />
        </div>
        <div className="text-center">
          <p className="text-[28px] font-normal leading-9">
            ¡Empieza a conectar tu comunidad ante buenas acciones!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="correo" className="block mb-2.5 text-sm font-medium text-gray-700">
              Correo Electronico*
            </label>
            <input
              {...register('username')}
              type="text"
              placeholder="ingresar correo"
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
            {errors.username && (
              <p className="mt-1 text-xs text-red-600">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="contraseña" className="block mb-2.5 text-sm font-medium text-gray-700">
              Contraseña*
            </label>
            <input
              {...register('password')}
              type="text"
              placeholder="Ingresar contraseña"
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
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
            )}
          </div>
          <div className="pt-4 mt-2 text-center">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline hover:text-blue-700 transition"
            >
              Recuperar contraseña
            </button>
          </div>
          <div className="flex justify-center">
            <button
              disabled={isSubmiting}
              type="submit"
              className="w-[260px] bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmiting ? (
                <div className="flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                'Ingresar'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
