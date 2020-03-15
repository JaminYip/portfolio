import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface Props {
  image: string;
  contentURL: string;
  title: string;
  description: string;
  chip: string[];
  gitHubRepositoryURL: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.5))",
      transform: "translateZ(0)",
      transition: "0.5s",
      "&:hover": {
        opacity: 0.9
      }
    },
    chip: {
      fontSize: 9,
      margin: theme.spacing(0, 0.15),
      background: "#546e7a",
      color: "#f4f5f7"
    },
    cardFooterDiv: {
      display: "flex",
      justifyContent: "center",
      margin: 5
    },
    git: {
      color: "#000000",
      transform: "scale(0.8,0.8)",
      transition: "0.5s",
      "&:hover": {
        opacity: 0.6
      }
    }
  })
);

const linkAttr = {
  target: "_blank",
  rel: "noopener noreferrer"
};

function GetChip(chipList: string[]) {
  const classes = useStyles();
  const list: JSX.Element[] = [];

  for (const i in chipList) {
    list.push(
      <Chip key={i} size="small" label={chipList[i]} className={classes.chip} />
    );
  }

  return list;
}

export default function WorkCommonCard(prop: Props) {
  const chip: JSX.Element[] = GetChip(prop.chip);
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Card className={classes.card}>
        <Tooltip title="Click to open the Content" arrow placement="top">
          <CardActionArea {...linkAttr} href={prop.contentURL}>
            <CardMedia component="img" image={prop.image} title={prop.title} />
            <CardContent>
              <Typography component="div" gutterBottom>
                <Box fontSize="h6.fontSize" fontWeight="fontWeightLight">
                  {prop.title}
                </Box>
              </Typography>
              <Typography component="div" color="textSecondary" gutterBottom>
                <Box fontSize="caption.fontSize" fontWeight="fontWeightLight">
                  {prop.description}
                </Box>
              </Typography>
              <Typography component="div">
                <Box>{chip}</Box>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Tooltip>
        <Typography
          component="div"
          color="textSecondary"
          className={classes.cardFooterDiv}
        >
          <Box fontSize={13} mt={1} mr={1}>
            See more on GitHub
          </Box>
          <Box mt={0.6}>
            <a
              href={prop.gitHubRepositoryURL}
              {...linkAttr}
              className={classes.git}
            >
              <Tooltip title="Click to open the GitHub Repository" arrow>
                <GitHubIcon />
              </Tooltip>
            </a>
          </Box>
        </Typography>
      </Card>
    </Grid>
  );
}
