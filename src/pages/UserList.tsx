import { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { list } from "../api/userListApi";
import { RegisterUser } from "../api/loginApi";

import "../styles/userList.scss";

export function UserList() {
  const [users, setUsers] = useState<RegisterUser[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await list();
      setUsers(response);
    };
    fetchData();
  }, []);

  return (
    <div className="userListContainer">
      <div className="group">
        <div className="container">
          <Paper className="paper">
            <Typography>RGBank</Typography>
            {users[0] && <Typography>{users[0].name}</Typography>}
            {users.map((user) => (
              <Typography key={user.cpf}>{user.name}</Typography>
            ))}
          </Paper>
        </div>
      </div>
    </div>
  );
}
