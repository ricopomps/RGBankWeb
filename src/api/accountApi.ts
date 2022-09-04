import axios from "axios";
import { toast } from "react-toastify";

const {
  VITE_API_PATH: baseUrl,
  VITE_API_PATH_ACCOUNTS: accountsUrl,
  VITE_API_PATH_CREATE_ACCOUNT: createUrl,
} = import.meta.env;
export type Account = {
  user: string;
  type: string;
};

export function currencyFormat(num: number) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export async function createAccount(account: Account) {
  try {
    axios.interceptors.request.use(function (config) {
      const token =
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWN1cmVVc2VyIjp7Il9pZCI6IjYzMDI2MTI5ZjNmNDY4YmNjMWJmOGMwYyIsIm5hbWUiOiJNYXJjbyIsImxhc3ROYW1lIjoiQW50w7RuaW8iLCJiaXJ0aERhdGUiOiIyMDAwLTAyLTE4VDAwOjAwOjAwLjAwMFoiLCJlbWFpbCI6Im1hcmNvQGdtYWlsLmNvbSIsInBob25lIjo4MTU2NjU2NTY1NSwiY3BmIjoiMTIzNTU2Nzg5MTAiLCJjcmVhdGVkQXQiOiIyMDIyLTA4LTIxVDE2OjQ1OjI5LjgwMloiLCJ1cGRhdGVkQXQiOiIyMDIyLTA4LTIxVDE2OjQ1OjI5LjgwMloifSwiaWF0IjoxNjYxMTAwODk3fQ.GNPSDdMD4oYpz0e6s65wNxSnC3kBF33l34llNZCeR-I";
      console.log("tsetes", config.headers);
      if (config.headers) {
        config.headers.Authorization = token;

        return config;
      }
    });
    const response = await axios.post(
      `${baseUrl}${accountsUrl}${createUrl}`,
      account
    );
    toast.success("Account created");
    return true;
  } catch (error: any) {
    toast.error("Account could not be created - " + error.message);
    return false;
  }
}
