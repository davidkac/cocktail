import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={2}
    >
      <BottomNavigation value={value} onChange={handleChange}>
      <Typography variant="subtitle1" mt={2} mb={1} textAlign={"center"} color={"gray"}>
        Coctails Website © 2023
      </Typography>
      </BottomNavigation>
    </Paper>
  );
}
