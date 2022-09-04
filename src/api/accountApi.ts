import { toast } from "react-toastify";

import { api } from "./api";

const {
  VITE_API_PATH_ACCOUNTS: accountsUrl,
  VITE_API_PATH_CREATE_ACCOUNT: createUrl,
} = import.meta.env;
export type Account = {
  type: string;
};

export function currencyFormat(num: number) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export async function createAccount(account: Account) {
  try {
    const response = await api.post(`${accountsUrl}${createUrl}`, account);
    toast.success("Account created");
    return true;
  } catch (error: any) {
    toast.error("Account could not be created - " + error.message);
    return false;
  }
}
