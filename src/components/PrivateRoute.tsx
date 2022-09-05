import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext, UserContextType } from "../context/UserContext";

type PrivateRouteProps = {
  children: any;
};
export function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useContext(UserContext) as UserContextType;
  return user && Object.keys(user).length ? children : <Navigate to="/login" />;
}
