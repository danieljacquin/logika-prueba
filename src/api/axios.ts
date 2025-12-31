import axios, { type AxiosRequestConfig } from 'axios';

import { getMessagesFromError } from '@/utils/getMessageFromError.util';
import { getLocalStorage } from '@/utils/localStorage.util';

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
});

const updateHeader = (request: AxiosRequestConfig) => {
  // Asegurarse de que headers exista
  request.headers = request.headers || {};

  const { token } = JSON.parse(getLocalStorage('token') as string);

  request.headers = {
    ...request.headers,
    Authorization: 'Bearer ' + token.token,
  };

  return request;
};

actionsApi.interceptors.request.use((request) => {
  updateHeader(request);
  return request;
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
