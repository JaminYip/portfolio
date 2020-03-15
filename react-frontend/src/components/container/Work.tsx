import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./History";
import Portfolio from "../work/Portfolio";
import NewApp from "../work/NewApp";

export default function Work() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography component="div" paragraph className={classes.topDiv}>
        <Typography component="div" className={classes.headerDiv}>
          <Box
            fontSize="h6.fontSize"
            fontWeight="fontWeightLight"
            letterSpacing={4}
          >
            WORK
          </Box>
        </Typography>
        <Typography component="div" className={classes.headerDiv}>
          <Box fontSize={10} fontWeight="fontWeightLight" letterSpacing={2}>
            -個人制作-
          </Box>
        </Typography>
      </Typography>
      <Container maxWidth="md" style={{ background: "#f4f5f7" }}>
        <br />
        <Typography component="div" color="textSecondary">
          <Grid container spacing={3} justify="center">
            <Portfolio />
            <NewApp />
          </Grid>
        </Typography>
        <br />
      </Container>
    </React.Fragment>
  );
}
