import { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { list } from "../api/userListApi";
import { RegisterUser } from "../api/loginApi";

import "../styles/userList.scss";

type UserBoxProps = {
  user: RegisterUser;
};
export function UserList() {
  const [users, setUsers] = useState<RegisterUser[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await list();
      setUsers(response);
    };
    fetchData();
  }, []);

  const UserBox = ({ user }: UserBoxProps) => {
    return (
      <Paper className="paper">
        <Typography>
          {user.name} {user.lastName}
        </Typography>
      </Paper>
    );
  };

  return (
    <div className="userListContainer">
      <div className="group">
        <Paper className="paper">
          <Typography className="main">RGBank</Typography>
        </Paper>
        {users.map((user) => (
          <UserBox user={user} />
        ))}
      </div>
    </div>
  );
}
