import { FC, useState } from "react";
import { Button } from "@mui/material";
import { useBingo } from "./bingoHook";

import "./board.style.css";

export interface BoardProps {
  nbMax: number;
  onAbort: () => void;
}

export const Board: FC<BoardProps> = ({ nbMax, onAbort }) => {
  const [boules, tirage, end] = useBingo(nbMax);
  const [last, setLast] = useState<number>();

  const handleTirage = () => {
    setLast(tirage());
  };

  return (
    <div className="board">
      {!end && <Button onClick={handleTirage}>Tirer une boule</Button>}
      <div>
        <h2>Dernière boule</h2>
        <span className="last">{last}</span>
      </div>
      <div>
        <h2>Historique</h2>
        <div className="histo">
          {boules.map((boule, i) => (
            <span key={i} className="boule">
              {boule.num}
            </span>
          ))}
        </div>
        <hr/>
        <div className="histo">
          {[...boules]
            .sort((a, b) => a.num - b.num)
            .map((boule, i) => (
              <span key={i} className="boule">
                {boule.num}
              </span>
            ))}
        </div>
      </div>
      <Button onClick={onAbort}>Stop</Button>
    </div>
  );
};

export default Board;
