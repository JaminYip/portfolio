import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface Props {
  overview: string;
  process: string[];
  skills: string[];
}

function GetChip(chipList: string[]) {
  const list: JSX.Element[] = [];

  for (const i in chipList) {
    list.push(
      <Chip
        key={i}
        variant="outlined"
        size="small"
        label={chipList[i]}
        style={{
          fontSize: 9,
          margin: 2,
          borderColor: "#9e9e9e",
          color: "#f4f5f7"
        }}
      />
    );
  }

  return list;
}

export default function HistoryCommonCardContent(prop: Props) {
  const processChip: JSX.Element[] = GetChip(prop.process);
  const skillsChip: JSX.Element[] = GetChip(prop.skills);

  return (
    <div style={{ background: "#616161" }}>
      <CardContent>
        <Typography component="div" gutterBottom>
          <Box fontSize={11} color="#bdbdbd">
            ＜概要＞
          </Box>
          <Box fontSize={10.5} color="#f4f5f7">
            {prop.overview}
          </Box>
        </Typography>
        <Typography component="div" gutterBottom>
          <Box fontSize={11} color="#bdbdbd">
            ＜担当フェーズ＞
          </Box>
          <Box>{processChip}</Box>
        </Typography>
        <Typography component="div">
          <Box fontSize={11} color="#bdbdbd">
            ＜経験技術＞
          </Box>
          <Box>{skillsChip}</Box>
        </Typography>
      </CardContent>
      <Typography component="div" style={{ display: "flex" }}>
        <Box ml={2} mb={1} color="#b2dfdb" fontSize={11}>
          SEE MORE
        </Box>
        <Box ml={0.5} mb={1} color="#b2dfdb">
          <ExpandMoreIcon style={{ fontSize: 11, marginBottom: 4 }} />
        </Box>
      </Typography>
    </div>
  );
}
