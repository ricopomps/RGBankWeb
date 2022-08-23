import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppRoutes } from "./routes";
import UserProvider from "./context/UserContext";
import "./styles/global.scss";

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
