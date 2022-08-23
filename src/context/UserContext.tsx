import * as React from "react";
import { RegisterUser } from "../api/loginApi";

export type UserContextType = {
  user: RegisterUser;
  saveUser: (user: RegisterUser) => void;
  removeUser: () => void;
};

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<RegisterUser>({});

  const saveUser = (user: RegisterUser) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser({});
  };

  return (
    <UserContext.Provider value={{ user, saveUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
