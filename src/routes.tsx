import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserList } from "./pages/UserList";
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/list"
          element={
            <PrivateRoute>
              <UserList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
