import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CardHeader from "@mui/material/CardHeader";

const card = (
  <React.Fragment>
    <CardHeader title="  Our Office" 
    
    titleTypographyProps={{variant:'h6' , fontWeight: "bold"}}
    />
    <CardContent>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          padding: "12px",
          display: "flex",
          whiteSpace: "pre",
          alignItems: "center",
        }}
      >
        <LocationOnIcon />{" "}
        <p style={{ whiteSpace: "break-spaces" }}>
          488, blingum road ,JP street, NJ, Calfornia
        </p>
      </Typography>
      <Divider />
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          padding: "12px",
          display: "flex",
          whiteSpace: "pre",
          alignItems: "center",
        }}
      >
        <CallIcon />
        +01 - 9687764902
      </Typography>
      <Divider />

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          padding: "12px",
          display: "flex",
          whiteSpace: "pre",
          alignItems: "center",
        }}
      >
        <MailOutlineIcon /> rameshgagal777@gmail.com
      </Typography>
    </CardContent>
    <CardActions sx={{ paddingLeft: "24px" }}>
      <TwitterIcon
        sx={{
          backgroundColor: "deepskyblue",
          borderRadius: "50%",
          minWidth: 50,
          height: 48,
          color: "white",
          padding: 1,
        }}
      />
      <FacebookIcon
        sx={{
          backgroundColor: "blue",
          borderRadius: "50%",
          minWidth: 50,
          height: 48,
          color: "white",
          padding: 1,
        }}
      />

      <InstagramIcon
        sx={{
          backgroundColor: "crimson",
          borderRadius: "50%",
          minWidth: 50,
          height: 48,
          color: "white",
          padding: 1,
        }}
      />

      <LinkedInIcon
        sx={{
          backgroundColor: "deepskyblue",
          borderRadius: "50%",
          minWidth: 50,
          height: 48,
          color: "white",
          padding: 1,
        }}
      />
    </CardActions>
  </React.Fragment>
);

export default function OurOffice() {
  return (
    <Box sx={{ minWidth: 275, textAlign: "start", boxShadow: 3 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
