import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function NewApp() {
  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography component="div" gutterBottom>
              <Box fontSize="h6.fontSize" fontWeight="fontWeightLight">
                Coming soon.
              </Box>
            </Typography>
            <Typography component="div" color="textSecondary" gutterBottom>
              <Box fontSize="caption.fontSize" fontWeight="fontWeightLight">
                The new app will be coming soon.
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
