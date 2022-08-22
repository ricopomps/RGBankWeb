import { useState } from "react";
import { Button, Paper, Typography, TextField, Link } from "@mui/material";

import { RegisterUser, register } from "../api/loginApi";

import "../styles/login.scss";

export function Register() {
  const [user, setUser] = useState<RegisterUser>({});
  const handleSubmit = () => {
    register(user);
  };
  const handleChange = (value: string, key: string) => {
    setUser({ ...user, [key]: value });
  };
  const handleChangeNumber = (value: string, key: string) => {
    setUser({ ...user, [key]: +value });
  };
  const handleChangeDate = (value: string, key: string) => {
    setUser({ ...user, [key]: new Date(value) });
  };
  return (
    <div className="loginContainer">
      <div className="group">
        <div className="container">
          <Paper className="paper">
            <Typography>RGBank</Typography>
            <div className="container">
              <Typography fontSize={36}>Register</Typography>
            </div>
          </Paper>
        </div>
        <div className="container">
          <Paper className="paper">
            <TextField
              onChange={(e) => handleChange(e.target.value, "name")}
              label="Name"
            />
            <TextField
              onChange={(e) => handleChange(e.target.value, "lastName")}
              label="Last name"
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              onChange={(e) => handleChangeDate(e.target.value, "birthDate")}
              type="date"
              label="Birth date"
            />
            <TextField
              onChange={(e) => handleChange(e.target.value, "email")}
              type="email"
              label="E-Mail"
            />
            <TextField
              onChange={(e) => handleChangeNumber(e.target.value, "phone")}
              label="Phone"
            />
            <TextField
              onChange={(e) => handleChange(e.target.value, "cpf")}
              label="Cpf"
            />
            <TextField
              onChange={(e) => handleChange(e.target.value, "password")}
              type="password"
              label="Password"
            />
            <div className="container spacer">
              <Link href="/">
                <Button onClick={() => handleSubmit()}>Sign In</Button>
              </Link>
              <Button className="loginButton" onClick={() => handleSubmit()}>
                Register
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
