import { useEffect, useState, useContext } from "react";
import { Button, Paper, Typography, TextField, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { LoginUser, login } from "../api/loginApi";
import { UserContext, UserContextType } from "../context/UserContext";

import "../styles/login.scss";

export function Login() {
  useEffect(() => {
    removeUser();
  }, []);
  const { saveUser, removeUser } = useContext(UserContext) as UserContextType;

  const [user, setUser] = useState<LoginUser>({ cpf: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const logged = await login(user);
    if (logged) {
      saveUser(logged.user, logged.token);
      navigate("/");
    }
  };

  return (
    <div className="loginContainer">
      <div className="group">
        <div className="container">
          <Paper className="paper">
            <Typography>RGBank</Typography>
            <div className="container">
              <Typography fontSize={36}>Login</Typography>
            </div>
          </Paper>
        </div>
        <div className="container">
          <Paper className="paper">
            <TextField
              onChange={(e) => setUser({ ...user, cpf: e.target.value })}
              label="Cpf"
            />
            <TextField
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              label="Password"
            />
            <div className="container spacer">
              <Link href="/register">
                <Button onClick={() => handleSubmit()}>Register</Button>
              </Link>
              <Button className="loginButton" onClick={() => handleSubmit()}>
                Login
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
