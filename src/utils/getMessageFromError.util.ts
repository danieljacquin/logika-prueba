import axios from 'axios';

export const getMessagesFromError = (error: unknown): string[] => {
  const defaultMessage = 'Something went wrong.';

  if (!axios.isAxiosError(error)) {
    return [defaultMessage];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = error.response?.data as any;

  if (data && typeof data === 'object') {
    return data[0].Message;
  }

  return [defaultMessage];
};
