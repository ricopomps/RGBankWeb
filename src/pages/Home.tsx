import { useEffect, useContext } from "react";
import { Paper, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { currencyFormat } from "../api/accountApi";
import { UserContext, UserContextType } from "../context/UserContext";
import { List } from "../context/List";
import "../styles/home.scss";

export function Home() {
  const { user, saveUser, removeUser } = useContext(
    UserContext
  ) as UserContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.balance) navigate("/accountcreation");
  }, []);
  const data = [{ data: "Transfer" }, { data: "Deposit" }, { data: "Pix" }];

  return (
    <div className="homeContainer">
      <div className="group">
        <div className="container">
          <Paper className="paper">
            <div className="container">
              <Typography fontSize={36}>
                Account code: {user?.accountCode}
              </Typography>
            </div>
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
