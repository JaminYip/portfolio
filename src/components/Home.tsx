import React, { useRef } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Top from "./container/Top";
import About from "./container/About";
import Skills from "./container/Skills";
import History from "./container/History";
import Work from "./container/Work";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

window.addEventListener("load", () => {
  document.body.style.transition = "background-color 1.0s";
});

window.addEventListener("wheel", () => {
  setScrollState(null);
});

window.addEventListener("touchmove", () => {
  setScrollState(null);
});

const defaultBackgroundColor = "#000000";
const aboutSectionBackgroundColor = "#203a3d";
const skillsSectionBackgroundColor = "#3d203a";
const historySectionBackgroundColor = "#3a3d20";
window.addEventListener("scroll", () => {
  if (
    document.getElementById("aboutDiv") === null ||
    document.getElementById("skillsDiv") === null ||
    document.getElementById("historyDiv") === null ||
    document.getElementById("workDiv") === null
  ) {
    return;
  }

  if (
    document.getElementById("workDiv")!.getBoundingClientRect().top <= 1 &&
    document.body.style.backgroundColor !== defaultBackgroundColor
  ) {
    document.body.style.backgroundColor = defaultBackgroundColor;
  } else if (
    document.getElementById("historyDiv")!.getBoundingClientRect().top <= 1 &&
    document.body.style.backgroundColor !== historySectionBackgroundColor
  ) {
    document.body.style.backgroundColor = historySectionBackgroundColor;
  } else if (
    document.getElementById("skillsDiv")!.getBoundingClientRect().top <= 1 &&
    document.body.style.backgroundColor !== skillsSectionBackgroundColor
  ) {
    document.body.style.backgroundColor = skillsSectionBackgroundColor;
  } else if (
    document.getElementById("aboutDiv")!.getBoundingClientRect().top <= 1 &&
    document.body.style.backgroundColor !== aboutSectionBackgroundColor
  ) {
    document.body.style.backgroundColor = aboutSectionBackgroundColor;
  } else {
    if (document.body.style.backgroundColor !== defaultBackgroundColor) {
      document.body.style.backgroundColor = defaultBackgroundColor;
    }
  }
});

let scrollState: boolean[] = [false, false, false, false, false];
const setScrollState = (scrollEventIndex: number | null) => {
  for (let i = 0; i < scrollState.length; i++) {
    if (i === scrollEventIndex) {
      scrollState[i] = true;
    } else {
      scrollState[i] = false;
    }
  }
};

const scrollToRef = (
  ref: any | null,
  clickPositionY: number,
  scrollEventIndex: number
) => {
  const targetPositionY: number = ref.current.offsetTop;
  if (targetPositionY !== clickPositionY) {
    if (scrollState[scrollEventIndex]) {
      setTimeout(() => {
        let arriveTargetOffset: number;
        let isDownDirection: boolean;
        if (targetPositionY - clickPositionY > 0) {
          arriveTargetOffset = targetPositionY - clickPositionY;
          isDownDirection = true;
        } else {
          arriveTargetOffset = clickPositionY - targetPositionY;
          isDownDirection = false;
        }
        const calcOffset: number = Number((arriveTargetOffset / 10).toFixed(1));
        if (calcOffset > 10) {
          clickPositionY += scrollOffset(
            isDownDirection,
            arriveTargetOffset,
            45,
            1
          );
        } else if (calcOffset > 5) {
          clickPositionY += scrollOffset(
            isDownDirection,
            arriveTargetOffset,
            50,
            1
          );
        } else if (calcOffset > 1) {
          clickPositionY += scrollOffset(
            isDownDirection,
            arriveTargetOffset,
            55,
            2
          );
        } else if (calcOffset > 0) {
          clickPositionY += isDownDirection ? +0.1 : -0.1;
        } else {
          clickPositionY = targetPositionY;
        }
        window.scrollTo({ top: clickPositionY, left: 0 });
        scrollToRef(ref, clickPositionY, scrollEventIndex);
      }, 1);
    }
  }
};

const scrollOffset = (
  isDownDirection: boolean,
  arriveTargetOffset: number,
  distanceCoefficient: number,
  decimalDigit: number
) => {
  return isDownDirection
    ? +Number((arriveTargetOffset / distanceCoefficient).toFixed(decimalDigit))
    : -Number((arriveTargetOffset / distanceCoefficient).toFixed(decimalDigit));
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: "3vmin",
      paddingRight: "3vmin"
    },
    menuContainerAbout: {
      marginTop: 105,
      [theme.breakpoints.down("sm")]: {
        marginTop: 65
      },
      [theme.breakpoints.only("md")]: {
        paddingLeft: "7vmin"
      },
      background: "rgba(0,0,0,0.0)"
    },
    menuContainerCommon: {
      marginTop: 105,
      [theme.breakpoints.down("sm")]: {
        marginTop: 65
      },
      [theme.breakpoints.only("md")]: {
        paddingLeft: "7vmin",
        paddingRight: "7vmin"
      }
    },
    footerOffset: {
      height: 105,
      [theme.breakpoints.up("xl")]: {
        height: 265
      }
    },
    footerDiv: {
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  })
);

export enum ScrollEventIndex {
  Top,
  About,
  Skills,
  History,
  Work
}

export default function Home() {
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const historyRef = useRef(null);
  const workRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const topExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.Top);
    scrollToRef(topRef, window.pageYOffset, ScrollEventIndex.Top);
  };
  const aboutExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.About);
    scrollToRef(aboutRef, window.pageYOffset, ScrollEventIndex.About);
    setAnchorEl(null);
  };
  const skillsExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.Skills);
    scrollToRef(skillsRef, window.pageYOffset, ScrollEventIndex.Skills);
    setAnchorEl(null);
  };
  const historyExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.History);
    scrollToRef(historyRef, window.pageYOffset, ScrollEventIndex.History);
    setAnchorEl(null);
  };
  const workExecuteScroll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setScrollState(ScrollEventIndex.Work);
    scrollToRef(workRef, window.pageYOffset, ScrollEventIndex.Work);
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="xl" className={classes.root}>
      <div id="topDiv" ref={topRef} />
      <Top
        executeScroll={[
          topExecuteScroll,
          aboutExecuteScroll,
          skillsExecuteScroll,
          historyExecuteScroll,
          workExecuteScroll
        ]}
        scrollEventIndex={ScrollEventIndex}
        anchorEl={[anchorEl, setAnchorEl]}
      />
      <div style={{ height: 5 }} />
      <div id="aboutDiv" ref={aboutRef} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container
          maxWidth="md"
          disableGutters
          className={classes.menuContainerAbout}
        >
          <About />
        </Container>
      </Fade>
      <div style={{ height: 5 }} />
      <div id="skillsDiv" ref={skillsRef} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container
          maxWidth="md"
          disableGutters
          className={classes.menuContainerCommon}
        >
          <Skills />
        </Container>
      </Fade>
      <div style={{ height: 5 }} />
      <div id="historyDiv" ref={historyRef} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container
          maxWidth="md"
          disableGutters
          className={classes.menuContainerCommon}
        >
          <History />
        </Container>
      </Fade>
      <div style={{ height: 5 }} />
      <div id="workDiv" ref={workRef} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container
          maxWidth="md"
          disableGutters
          className={classes.menuContainerCommon}
        >
          <Work />
        </Container>
      </Fade>
      <div className={classes.footerOffset} />
      <Fade in timeout={{ enter: 4000, exit: 1500 }}>
        <Container maxWidth="xl" className={classes.footerDiv}>
          <Typography component="div" style={{ textAlign: "right" }}>
            <Box color="#f4f5f7" fontSize={11} fontWeight="fontWeightLight">
              ©︎ 2020 Jamin Yip.
            </Box>
          </Typography>
        </Container>
      </Fade>
      <br />
      <br />
    </Container>
  );
}
