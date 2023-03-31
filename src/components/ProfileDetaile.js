import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import house from "../static/house.png";
import KemChho from "../static/kemChho.png";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import Avatar from "@mui/material/Avatar";

export default function ProfileDetaile() {
  return (
    <Card sx={{ boxShadow: 3 }}>
      <div style={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300px"
          image={KemChho}
        />

        <Avatar
          alt="Remy Sharp"
          src={house}
          sx={{
            position: "absolute",
            left: 10,
            bottom: -14,
          }}
        />
      </div>

      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <Button size="small">
          <FavoriteBorderOutlinedIcon />
        </Button>
        <Button size="small">
          <ChatBubbleOutlineOutlinedIcon />
        </Button>
        <Button size="small">
          <InsertLinkOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
