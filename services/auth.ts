import axios from 'axios';
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setSignUp(data: FormData) {
  const URL = 'auth/signup';
  const response = await axios
    .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
    .catch((err) => err.response);
  if (response?.error === 1) {
    return response;
  }
  return response.data;
}
