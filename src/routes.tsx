import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "./components/PrivateRoute";
import { Home } from "./pages/Home";
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
