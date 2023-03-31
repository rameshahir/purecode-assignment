import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import house from "../static/house.png";
import Stack from "@mui/material/Stack";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

export default function SideIcons() {
  return (
    <Box sx={{ color: "action.active" }}>
      <Stack direction="row" spacing={2}>
        <Badge color="secondary" variant="dot">
          <Avatar alt="Remy Sharp" sx={{ bgcolor: "white", cursor: "pointer" }}>
            <ChatBubbleOutlineOutlinedIcon sx={{ color: "black" }} />
          </Avatar>
        </Badge>
        <Badge color="secondary" variant="dot">
          <Avatar
            alt="Travis Howard"
            sx={{ bgcolor: "white", cursor: "pointer" }}
          >
            <NotificationImportantIcon sx={{ color: "black" }} />
          </Avatar>
        </Badge>

        <Avatar alt="Remy Sharp" src={house} sx={{ cursor: "pointer" }} />
      </Stack>
    </Box>
  );
}
