import React from "react";
import Box from "@material-ui/core/Box";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

interface Props {
  elementKey: string;
  detailTitle: string;
  detailWork: string;
  detailRole: string;
  detailSkills: string;
  detailLearned: string;
}

let elementId = 0;
function breakLine(text: string, elementKey: string) {
  const regex = /(¥n)/g;
  return text.split(regex).map(function(line) {
    if (line.match(regex)) {
      elementId++;
      return React.createElement("br", {
        key: elementKey + elementId.toString()
      });
    } else {
      return line;
    }
  });
}

export default function HistoryCommonCardDetail(prop: Props) {
  return (
    <React.Fragment>
      <DialogTitle>
        <Box
          color="text.secondary"
          fontSize={13}
          fontWeight="fontWeightBold"
          key={0}
        >
          {prop.detailTitle}
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          <Box fontSize={12} component="span">
            【業務内容】
          </Box>
          <br />
          <Box color="text.primary" fontSize={12} component="span">
            {breakLine(prop.detailWork, prop.elementKey)}
          </Box>
          <br />
          <br />
          <Box fontSize={12} component="span">
            【ロール/担当フェーズ】
          </Box>
          <br />
          <Box color="text.primary" fontSize={12} component="span">
            {breakLine(prop.detailRole, prop.elementKey)}
          </Box>
          <br />
          <br />
          <Box fontSize={12} component="span">
            【言語(FW)/DB/インフラ/ツール,その他】
          </Box>
          <br />
          <Box color="text.primary" fontSize={12} component="span">
            {breakLine(prop.detailSkills, prop.elementKey)}
          </Box>
          <br />
          <br />
          <Box fontSize={12} component="span">
            【習得技術】
          </Box>
          <br />
          <Box color="text.primary" fontSize={12} component="span">
            {breakLine(prop.detailLearned, prop.elementKey)}
          </Box>
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
  );
}
