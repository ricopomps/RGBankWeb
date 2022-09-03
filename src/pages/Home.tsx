import { useEffect, useState, useContext } from "react";
import { Button, Paper, Typography, TextField, Link } from "@mui/material";

import { RegisterUser, login } from "../api/loginApi";
import { currencyFormat } from "../api/accountApi";
import { UserContext, UserContextType } from "../context/UserContext";
import { List } from "../context/List";
import "../styles/home.scss";

export function Home() {
  const { user, saveUser, removeUser } = useContext(
    UserContext
  ) as UserContextType;

  // const [user, setUser] = useState<RegisterUser>({ balance: 420 });
  const data = [{ data: "data1" }, { data: "data2" }, { data: "data3" }];

  return (
    <div className="homeContainer">
      <div className="group">
        <div className="container">
          <Paper className="paper">
            <div className="container">
              <Typography fontSize={36}>Balance</Typography>
            </div>
            <div className="container">
              <Typography fontSize={36}>
                {currencyFormat(user?.balance || 0)}
              </Typography>
            </div>
          </Paper>
        </div>
        <div className="container">
          <List data={data} />
        </div>
      </div>
    </div>
  );
}
