import { Paper, Typography } from "@mui/material";

import "../styles/userList.scss";

export function UserList() {
  return (
    <div className="userListContainer">
      <div className="group">
        <div className="container">
          <Paper className="paper">
            <Typography>RGBank</Typography>
          </Paper>
        </div>
      </div>
    </div>
  );
}
