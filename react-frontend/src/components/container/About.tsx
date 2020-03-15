import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStyles } from "./History";

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography component="div" className={classes.topDiv}>
        <Typography component="div" className={classes.headerDiv}>
          <Box
            fontSize="h6.fontSize"
            fontWeight="fontWeightLight"
            letterSpacing={4}
          >
            ABOUT
          </Box>
        </Typography>
        <Typography component="div" className={classes.headerDiv}>
          <Box fontSize={10} fontWeight="fontWeightLight" letterSpacing={1}>
            -プロフィール-
          </Box>
        </Typography>
        <Container maxWidth="md">
          <br />
          <Typography component="div" paragraph>
            <Box fontSize={16}>Since 2006 I've been in Tokyo from China.</Box>
            <Box fontSize={16}>
              I write code, I play billiards, I go boxing and I love movies.
            </Box>
          </Typography>
          <Typography component="div" paragraph>
            <Box fontSize={14}>
              I'm an Engineer with over 7 years of experience. Mostly involved
              in backend web development.
            </Box>
            <Box fontSize={14}>
              This page is my personal website for describe about my skills,
              career and what I have created.
            </Box>
            <Box fontSize={14}>
              Feel free to have a look around if you like.
            </Box>
          </Typography>
          <Typography component="div">
            <Box fontSize={12}>
              これまでSIer企業に勤め、WEBアプリケーションをメインに要件定義から設計、開発、テスト、保守と一通り経験。
            </Box>
            <Box fontSize={12}>
              バックエンドの設計、開発業務を中心に経験を積んでおり、その他フロンドエンドやDevOps、機械学習など幅広く学習しております。
            </Box>
          </Typography>
          <br />
        </Container>
      </Typography>
    </React.Fragment>
  );
}
