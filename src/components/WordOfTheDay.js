import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import CachedIcon from "@mui/icons-material/Cached";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <CachedIcon />
        </IconButton>
      }
      title="Word of the Day"
      titleTypographyProps={{variant:'h6' , 
      fontWeight: "bold" }}
     
    />
    <CardContent>
      <Typography sx={{ fontWeight: "bold" }} gutterBottom></Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2" color="text.secondary">
        The defination of envelonet is enjoying helping other or someone whose
        charactersic is being friendly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="contained" color="secondary">
        <VolumeUpIcon />
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function WordOfTheDay() {
  return (
    <Box sx={{ minWidth: 275, textAlign: "start" , boxShadow:3   }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
