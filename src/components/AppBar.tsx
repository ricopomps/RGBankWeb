import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar as AppBarMui,
  Toolbar,
  IconButton,
  Stack,
  Button,
  Link,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

import "../styles/appBar.scss";
import { UserContext, UserContextType } from "../context/UserContext";

type AppBarProps = {};
export function AppBar(props: AppBarProps) {
  const navigate = useNavigate();

  const { user, removeUser } = useContext(UserContext) as UserContextType;
  const storedUser = sessionStorage.getItem("user");
  if (!(Object.keys(user).length && storedUser)) return <></>;
  return (
    <AppBarMui position="static">
      <Toolbar>
        <Link href="/">
          <IconButton
            className="link"
            size="large"
            edge="start"
            aria-label="logo"
          >
            <HomeIcon />
          </IconButton>
        </Link>
        <Stack direction="row" spacing={2} className="grow">
          <Link className="link" href="/list">
            <Button color="inherit">List</Button>
          </Link>
        </Stack>
        <IconButton
          className="link"
          size="large"
          edge="start"
          aria-label="logo"
          onClick={() => {
            navigate("/");
            removeUser();
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBarMui>
  );
}
