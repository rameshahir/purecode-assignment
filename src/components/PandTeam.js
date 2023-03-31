import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import house from "../static/house.png";
import KemChho from "../static/kemChho.png";

export default function PandTeam(props) {
  return (
    <Box sx={{ width: "100%", textAlign: "start", paddingBottom: "15px" }}>
      <Badge
        color="secondary"
        badgeContent={props?.ProjectDepartment}
        sx={{ paddingLeft: 5 }}
      ></Badge>
      <Typography sx={{ fontWeight: "bold" }} gutterBottom>
        {props?.nameOfProject}
      </Typography>
      <Typography color="text.secondary" gutterBottom sx={{ lineHeight: 2 }}>
        {`${props?.progress}% complated`}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={props?.progress}
        style={{ backgroundColor: "lightgray" }}
        sx={{
          marginBottom: 2,

          "& .MuiLinearProgress-bar1Determinate": {
            backgroundColor: "turquoise",
          },
        }}
      />

      <AvatarGroup total={6} sx={{ placeContent: "start" }}>
        <Avatar alt="Remy Sharp" src={house} />
        <Avatar alt="Travis Howard" src={KemChho} />
        <Avatar alt="Agnes Walker" src={KemChho} />
        <Avatar alt="Trevor Henderson" src={house} />
      </AvatarGroup>
    </Box>
  );
}
