import { useEffect, useState, useContext } from "react";
import {
  Button,
  Paper,
  Typography,
  TextField,
  Link,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { LoginUser, login } from "../api/loginApi";
import { Account, createAccount } from "../api/accountApi";
import { UserContext, UserContextType } from "../context/UserContext";

// import "../styles/accoun.scss";

export function AccountCreation() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext) as UserContextType;
  console.log("USEER", user);
  const [account, setAccount] = useState<Account>({
    user: user.id || "",
    type: "",
  });
  console.log("account", account);

  const accountTypes = ["checking account", "savings account"];

  const handleSubmit = async () => {
    const created = await createAccount(account);
    if (created) {
      navigate("/");
    }
  };

  return (
    <div className="loginContainer">
      <div className="group">
        <div className="container">
          <Paper className="paper">
            <div className="container">
              <Typography fontSize={36}>Account Creation</Typography>
            </div>
          </Paper>
        </div>
        <div className="container">
          <Paper className="paper">
            <TextField
              type="password"
              onChange={(e) =>
                setAccount({ user: user.id || "", type: e.target.value })
              }
              label="Choose what kind of account to create"
              select
            >
              {accountTypes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <div className="container spacer">
              <Button className="loginButton" onClick={() => handleSubmit()}>
                Create
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
