import { FC } from "react";
import { Button } from "@mui/material";

export interface BoardProps {
  nbMax: number;
  onAbort: () => void;
}

export const Board: FC<BoardProps> = ({ nbMax, onAbort }) => {
  return (
    <>
      <p>{nbMax}</p>
      <Button onClick={onAbort}>Stop</Button>
    </>
  );
};

export default Board;
