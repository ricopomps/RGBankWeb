import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext, UserContextType } from "../context/UserContext";

type PrivateRouteProps = {
  children: any;
};
export function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useContext(UserContext) as UserContextType;
  const storedUser = sessionStorage.getItem("user");
  return Object.keys(user).length || storedUser ? (
    children
  ) : (
    <Navigate to="/" />
  );
}
