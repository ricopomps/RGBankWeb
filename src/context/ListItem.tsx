import { Button, Paper, Typography, TextField, Link } from "@mui/material";
import "../styles/listItem.scss";

export type ListItemProps = {
  data: string;
  link?: string;
};

export function ListItem(item: ListItemProps) {
  return (
    <div className="listItemContainer">
      <Paper className="paper">
        {item?.link ? (
          <Link href={`/${item.link}`} className="link">
            {item.data}
          </Link>
        ) : (
          <Typography>{item.data}</Typography>
        )}
      </Paper>
    </div>
  );
}
