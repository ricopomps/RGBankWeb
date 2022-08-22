import axios from "axios";

export type LoginUser = {
  cpf: string;
  password: string;
};

export type RegisterUser = {
  name?: string;
  lastName?: string;
  birthDate?: Date;
  email?: string;
  phone?: number;
  cpf?: string;
  password?: string;
};

const {
  VITE_API_PATH: baseUrl,
  VITE_API_PATH_USERS: usersUrl,
  VITE_API_PATH_LOGIN: loginUrl,
  VITE_API_PATH_REGISTER: registerUrl,
} = import.meta.env;

export async function login(user: LoginUser) {
  const response = await axios.post(`${baseUrl}${usersUrl}${loginUrl}`, user);
  console.log(response);
}

export async function register(user: RegisterUser) {
  console.log(user);
  const response = await axios.post(
    `${baseUrl}${usersUrl}${registerUrl}`,
    user
  );
  console.log(response);
}
