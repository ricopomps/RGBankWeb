import { useState } from "react";
import { Button, Paper, Typography, TextField } from "@mui/material";

import { User, login } from "../api/loginApi";

import "../styles/login.scss";

export function Login() {
  const [user, setUser] = useState<User>({ cpf: "", password: "" });
  const handleSubmit = () => {
    login(user);
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
            <Button onClick={() => handleSubmit()}>Login</Button>
            <Button onClick={() => handleSubmit()}>Register</Button>
          </Paper>
        </div>
      </div>
    </div>
  );
}
