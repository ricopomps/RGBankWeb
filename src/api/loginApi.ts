import axios from "axios";
export type User = {
  cpf: string;
  password: string;
};
export async function login(user: User) {
  const { VITE_API_PATH: baseUrl, VITE_API_PATH_LOGIN: loginUrl } = import.meta
    .env;
  const response = await axios.post(`${baseUrl}${loginUrl}`, user);
  console.log(response);
}
