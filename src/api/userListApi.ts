import axios from "axios";
import { toast } from "react-toastify";

const {
  VITE_API_PATH: baseUrl,
  VITE_API_PATH_USERS: usersUrl,
  VITE_API_PATH_LIST: userList,
} = import.meta.env;

export async function list() {
  try {
    const response = await axios.get(`${baseUrl}${usersUrl}${userList}`);
    return response.data;
  } catch (error: any) {
    toast.error("Error - " + error.message);
    return false;
  }
}
