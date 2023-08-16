import { FC, useState } from "react";
import Board from "../Board/Board";
import NbMaxForm from "../NbMaxForm/NbMaxForm";

export const Preparation: FC = () => {
  const [nbMax, setNbMax] = useState<number>(40);
  const [start, setStart] = useState<boolean>(false);

  const handleSetNbMax = (nm: number) => {
    setStart(true);
    setNbMax(nm);
  };

  return start ? (
    <Board nbMax={nbMax} onAbort={() => setStart(false)} />
  ) : (
    <NbMaxForm nbMax={nbMax} setNbMax={handleSetNbMax} />
  );
};

export default Preparation;
