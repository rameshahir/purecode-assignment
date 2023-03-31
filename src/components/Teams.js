import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import PandTeam from "./PandTeam";

const card = (
  <React.Fragment>
    <CardHeader
      title="Projects and teams"
      titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
    />
    <CardContent>
      <PandTeam
        nameOfProject="New UI desing for project jumbo."
        progress={70}
        ProjectDepartment={"Development"}
        color={"turquoise"}
      />
      <PandTeam
        nameOfProject="New UI desing for project jumbo."
        progress={60}
        ProjectDepartment={"Desinging"}
        color={"turquoise"}
      />
    </CardContent>
  </React.Fragment>
);

export default function Teams() {
  return (
    <Box sx={{ minWidth: 275, textAlign: "start", boxShadow: 3 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
