import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import EnergyWebService from "../history/EnergyWebService";
import EnergyCloud from "../history/EnergyCloud";
import MembershipManagement from "../history/MembershipManagement";
import FinanceCRM from "../history/FinanceCRM";
import POS from "../history/POS";
import StockManagement from "../history/StockManagement";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topDiv: {
      color: "#cfd8dc"
    },
    headerDiv: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center"
      }
    },
    timeLine: {
      borderLeft: "thin solid #bdbdbd",
      marginBottom: -30
    },
    timeLineLast: {
      borderLeft: "thin solid #bdbdbd"
    }
  })
);

export default function History() {
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
            HISTORY
          </Box>
        </Typography>
        <Typography component="div" className={classes.headerDiv}>
          <Box fontSize={10} fontWeight="fontWeightLight" letterSpacing={2}>
            -業務経歴-
          </Box>
        </Typography>
      </Typography>
      <Container maxWidth="md" style={{ background: "#f4f5f7" }}>
        <br />
        <Typography component="div" color="textSecondary">
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={11} md={11} lg={11} xl={11}>
              <Container>
                <Typography component="div" align="center">
                  <Box
                    fontSize="overline.fontSize"
                    fontWeight="fontWeightLight"
                    letterSpacing={5}
                  >
                    future
                  </Box>
                </Typography>
              </Container>
            </Grid>
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <EnergyWebService />
              </Container>
            </Grid>
            <Typography component="div" className={classes.timeLine} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <Typography component="div" align="left">
                  <Box fontSize={9}>
                    <br />
                    2019/02 -
                  </Box>
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={11} md={11} lg={11} xl={11} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <EnergyCloud />
              </Container>
            </Grid>
            <Typography component="div" className={classes.timeLine} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <Typography component="div" style={{ textAlign: "left" }}>
                  <Box fontSize={9}>
                    <br />
                    2017/01 -
                  </Box>
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={11} md={11} lg={11} xl={11} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <Typography component="div" style={{ textAlign: "right" }}>
                  <Box fontSize={9}>
                    <br />
                    2016/04 - 2016/12
                  </Box>
                </Typography>
              </Container>
            </Grid>
            <Typography component="div" className={classes.timeLine} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <MembershipManagement />
              </Container>
            </Grid>
            <Grid item xs={12} sm={11} md={11} lg={11} xl={11} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <FinanceCRM />
              </Container>
            </Grid>
            <Typography component="div" className={classes.timeLine} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <Typography component="div" style={{ textAlign: "left" }}>
                  <Box fontSize={9}>
                    <br />
                    2014/07 - 2016/03
                  </Box>
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={11} md={11} lg={11} xl={11} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <Typography component="div" style={{ textAlign: "right" }}>
                  <Box fontSize={9}>
                    <br />
                    2013/02 - 2013/03
                  </Box>
                </Typography>
              </Container>
            </Grid>
            <Typography component="div" className={classes.timeLine} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <POS />
              </Container>
            </Grid>
            <Grid item xs={12} sm={11} md={11} lg={11} xl={11} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <Typography component="div" style={{ textAlign: "right" }}>
                  <Box fontSize={9}>
                    <br />
                    2012/08 - 2012/09
                  </Box>
                </Typography>
              </Container>
            </Grid>
            <Typography component="div" className={classes.timeLineLast} />
            <Grid item xs sm={5} md={5} lg={5} xl={5}>
              <Container disableGutters>
                <StockManagement />
              </Container>
            </Grid>
            <Grid item xs={12} sm={11} md={11} lg={11} xl={11}>
              <Container>
                <Typography component="div" align="center">
                  <Box
                    fontSize="overline.fontSize"
                    fontWeight="fontWeightLight"
                    letterSpacing={5}
                  >
                    past
                  </Box>
                </Typography>
              </Container>
            </Grid>
          </Grid>
          <Grid container spacing={0} />
        </Typography>
        <br />
      </Container>
    </React.Fragment>
  );
}
