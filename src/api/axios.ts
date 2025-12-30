import axios from 'axios';

import { getMessagesFromError } from '@/utils/getMessageFromError.util';

// Instancia para autenticación
export const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Instancia para acciones
export const actionsApi = axios.create({
  baseURL: import.meta.env.VITE_API_ACTIONS_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//interceptar respuestas
authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(getMessagesFromError(error));
  }
);
