import {
  Grid,
  Button,
  Paper,
  Typography,
  TextField,
  Link,
} from "@mui/material";
import { ListItem, ListItemProps } from "./ListItem";
import "../styles/list.scss";

type ListProps = {
  data: ListItemProps[];
};

export function List(item: ListProps) {
  const treatedData = [];
  const size = 2;
  for (let i = 0; i < item.data.length; i += size) {
    treatedData.push(item.data.slice(i, i + size));
  }

  return (
    <div className="listContainer">
      <div className="container">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {treatedData.map((it) => (
            <div>
              <Grid item xs={12} md={12} xl={6}>
                <ListItem data={it[0].data} link={it[0]?.link} />
              </Grid>
              {it[1] && (
                <Grid item xs={12} md={12} xl={6}>
                  <ListItem data={it[1].data} link={it[1]?.link} />
                </Grid>
              )}
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
}
