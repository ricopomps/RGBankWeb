import axios from "axios";
import { toast } from "react-toastify";

export type LoginUser = {
  cpf: string;
  password: string;
};

export type RegisterUser = {
  id?: string;
  name?: string;
  lastName?: string;
  birthDate?: Date;
  email?: string;
  phone?: number;
  cpf?: string;
  password?: string;
  balance?: number;
  accountCode?: number;
};

const {
  VITE_API_PATH: baseUrl,
  VITE_API_PATH_USERS: usersUrl,
  VITE_API_PATH_LOGIN: loginUrl,
  VITE_API_PATH_REGISTER: registerUrl,
} = import.meta.env;

export async function login(inputUser: LoginUser) {
  try {
    const response = await axios.post(
      `${baseUrl}${usersUrl}${loginUrl}`,
      inputUser
    );
    toast.success("Sucess");
    const user = response.data.secureUser as RegisterUser;
    const token = response.data.accessToken as string;
    return { user, token };
  } catch (error: any) {
    toast.error("Error - " + error.message);
    return false;
  }
}

export async function register(user: RegisterUser) {
  try {
    const response = await axios.post(
      `${baseUrl}${usersUrl}${registerUrl}`,
      user
    );
    toast.success("Sucess");
    return true;
  } catch (error: any) {
    toast.error("Error - " + error.message);
    return false;
  }
}
