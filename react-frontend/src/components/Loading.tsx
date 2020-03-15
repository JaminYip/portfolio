import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import Fade from "@material-ui/core/Fade";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      top: "0",
      position: "relative",
      width: "100vw",
      height: "100vh",
      background: "#000000"
    },
    grid: {
      [theme.breakpoints.down("xs")]: {
        minHeight: "95vh"
      },
      [theme.breakpoints.up("sm")]: {
        minHeight: "100vh"
      }
    },
    typography: {
      textAlign: "center"
    }
  })
);

export default function Loading() {
  const classes = useStyles();
  const [fade, setFade] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setFade(prev => !prev), 2500);
    return () => clearTimeout(timer);
  });

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        <Grid item>
          <Typography component="span" className={classes.typography}>
            <Fade in={fade} timeout={{ enter: 2000, exit: 1500 }}>
              <Box
                color="#f4f5f7"
                fontSize="h6.fontSize"
                fontWeight="fontWeightLight"
                fontFamily="Shadows Into Light"
                letterSpacing={1}
              >
                Now Loading
              </Box>
            </Fade>
            <Fade in={fade} timeout={{ enter: 2000, exit: 1500 }}>
              <Skeleton
                height={1}
                width={120}
                variant="rect"
                animation="wave"
              />
            </Fade>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
