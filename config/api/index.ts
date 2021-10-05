import axios, { AxiosRequestConfig } from 'axios';
import { ResponseAPIStructure } from '../../services/data-types';

export async function callAPI({ url, method, data }: AxiosRequestConfig) {
  const response = await axios({
    url,
    method,
    data,
  }).catch((error) => error.response);
  if (response.status > 300) {
    const res: ResponseAPIStructure = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res: ResponseAPIStructure = {
    error: false,
    message: 'Login berhasil',
    data: response.data.data,
  };
  return res;
}
