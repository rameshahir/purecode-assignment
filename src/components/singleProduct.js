import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function SingleProduct(props) {

  return (
    <Card sx={{ display: "flex", padding: "10px", boxShadow: 0 }}>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, boxShadow: 3, borderRadius: "20%" }}
        image={props?.imageSrc}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h7">
            The Future Bulb
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Lorem text
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            2324 $ 5665
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
