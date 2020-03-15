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
            <Box fontSize={16}>Based in Tokyo since 2006, originally from China.</Box>
            <Box fontSize={16}>
              I write code, play billiards, do boxing, and love movies.
            </Box>
          </Typography>
          <Typography component="div" paragraph>
            <Box fontSize={14}>
              A web application engineer with full-lifecycle experience,
              from requirements and design through development, testing, and operations.
            </Box>
            <Box fontSize={14}>
              Primarily focused on backend development, but also comfortable
              working across frontend and infrastructure.
            </Box>
          </Typography>
          <Typography component="div">
            <Box fontSize={12}>
              Webアプリケーション開発を中心に、要件定義から設計・開発・テスト・運用まで一貫して経験。
            </Box>
            <Box fontSize={12}>
              バックエンドを軸に、フロントエンドやインフラ領域にも対応しています。
            </Box>
          </Typography>
          <br />
        </Container>
      </Typography>
    </React.Fragment>
  );
}
