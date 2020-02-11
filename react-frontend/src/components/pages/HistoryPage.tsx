import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import EnergyWebService from "../histories/EnergyWebService";
import EnergyCloud from "../histories/EnergyCloud";
import MembershipManagement from "../histories/MembershipManagement";
import FinanceCRM from "../histories/FinanceCRM";
import POS from "../histories/POS";
import StockManagement from "../histories/StockManagement";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timeLine: {
      borderLeft: "thin solid #bbbbbb",
      marginBottom: -30
    }
  })
);

export default function HistoryPage() {
  const classes = useStyles();

  return (
    <Container>
      <Typography gutterBottom>
        <Box
          fontSize="h2.fontSize"
          fontWeight="fontWeightLight"
          letterSpacing={8}
        >
          History
        </Box>
        <Box
          fontSize="overline.fontSize"
          fontWeight="fontWeightLight"
          letterSpacing={6}
        >
          -業務経歴-
        </Box>
        <br />
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} lg={9}>
          <Typography align="center">
            <Box
              fontSize="overline.fontSize"
              fontWeight="fontWeightLight"
              letterSpacing={5}
            >
              future
            </Box>
          </Typography>
        </Grid>
        <Grid item xs lg={4}>
          <EnergyWebService />
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs lg={4}>
          <Typography align="left">
            <Box fontSize={9}>
              <br />
              2019/02 -
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={9} />
        <Grid item xs lg={4}>
          <EnergyCloud />
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs lg={4}>
          <Typography style={{ textAlign: "left" }}>
            <Box fontSize={9}>
              <br />
              2017/01 -
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={9} />
        <Grid item xs lg={4}>
          <Typography style={{ textAlign: "right" }}>
            <Box fontSize={9}>
              <br />
              2016/04 - 2016/12
            </Box>
          </Typography>
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs lg={4}>
          <MembershipManagement />
        </Grid>
        <Grid item xs={12} lg={9} />
        <Grid item xs lg={4}>
          <FinanceCRM />
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs lg={4}>
          <Typography style={{ textAlign: "left" }}>
            <Box fontSize={9}>
              <br />
              2014/07 - 2016/03
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={9} />
        <Grid item xs lg={4}>
          <Typography style={{ textAlign: "right" }}>
            <Box fontSize={9}>
              <br />
              2013/02 - 2013/03
            </Box>
          </Typography>
        </Grid>
        <Typography className={classes.timeLine} />
        <Grid item xs lg={4}>
          <POS />
        </Grid>
        <Grid item xs={12} lg={9} />
        <Grid item xs lg={4}>
          <Typography style={{ textAlign: "right" }}>
            <Box fontSize={9}>
              <br />
              2012/08 - 2012/09
            </Box>
          </Typography>
        </Grid>
        <Typography style={{ borderLeft: "thin solid #bbbbbb" }} />
        <Grid item xs lg={4}>
          <StockManagement />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Typography align="center">
            <Box
              fontSize="overline.fontSize"
              fontWeight="fontWeightLight"
              letterSpacing={5}
            >
              past
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
