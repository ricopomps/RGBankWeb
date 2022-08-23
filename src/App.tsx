// import { AppBar } from "./components/AppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./routes";
import UserProvider from "./context/UserContext";
import "./styles/global.scss";

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      {/* <AppBar /> */}
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
