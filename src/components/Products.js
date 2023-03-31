import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import SingleProduct from "./singleProduct";
import house from "../static/house.png";
import KemChho from "../static/kemChho.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";

const card = (
  <React.Fragment>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Popular Products"
      subheader="Checkout what other people likeing the most"
      titleTypographyProps={{variant:'h6', 
      fontWeight: "bold" }}

    />
    <CardContent>
      <Grid
        container
        spacing={2}
        sx={{ flexGrow: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid xs={3} md={6} sm={4}>
          <SingleProduct imageSrc={house} />
        </Grid>
        <Grid xs={6} md={6} sm={4}>
          <SingleProduct imageSrc={KemChho} />
        </Grid>
        <Grid xs={3} md={6} sm={4}>
          <SingleProduct imageSrc={house} />
        </Grid>
        <Grid xs={6} md={6} sm={4}>
          <SingleProduct imageSrc={KemChho} />
        </Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary">
        View All
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function Products() {
  return (
    <Box sx={{ minWidth: 275, textAlign: "start", boxShadow: 3 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
