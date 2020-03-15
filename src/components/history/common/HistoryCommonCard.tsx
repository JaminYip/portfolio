import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import HistoryCommonCardHeader from "./HistoryCommonCardHeader";
import HistoryCommonCardContent from "./HistoryCommonCardContent";
import HistoryCommonCardDetail from "./HistoryCommonCardDetail";

interface Props {
  elementKey: string;
  title: string;
  subheader: string;
  backgroundHex: string;
  overview: string;
  process: string[];
  skills: string[];
  detailTitle: string;
  detailWork: string;
  detailRole: string;
  detailSkills: string;
  detailLearned: string;
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
    buttonClose: {
      color: "#9e9e9e",
      fontSize: 13
    }
  })
);

export default function HistoryCommonCard(prop: Props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const classes = useStyles();

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card variant="outlined" className={classes.card}>
      <Tooltip title="Click the CARD to see more information" arrow>
        <CardActionArea onClick={handleClickOpen("paper")}>
          <HistoryCommonCardHeader
            title={prop.title}
            subheader={prop.subheader}
            backgroundHex={prop.backgroundHex}
          />
          <HistoryCommonCardContent
            overview={prop.overview}
            process={prop.process}
            skills={prop.skills}
          />
        </CardActionArea>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        transitionDuration={{ enter: 600, exit: 350 }}
      >
        <HistoryCommonCardDetail
          elementKey={prop.elementKey}
          detailTitle={prop.detailTitle}
          detailWork={prop.detailWork}
          detailRole={prop.detailRole}
          detailSkills={prop.detailSkills}
          detailLearned={prop.detailLearned}
        />
        <DialogActions>
          <Button onClick={handleClose} className={classes.buttonClose}>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
