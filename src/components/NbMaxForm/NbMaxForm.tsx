import React, { FC, useState } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";
export interface NbMaxFormProps {
  nbMax: number;
  setNbMax: (n: number) => void;
}

export const NbMaxForm: FC<NbMaxFormProps> = ({ nbMax, setNbMax }) => {
  const [value, setValue] = useState<number>(nbMax);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setNbMax(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: 300 }} alignItems="center">
        <Typography>Bingo avec {value} boules</Typography>
        <Slider
          aria-label="nombre de cases max"
          defaultValue={value}
          getAriaValueText={(v: number) => `${v}`}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={40}
          max={120}
          onChange={(_, value) =>
            setValue(Array.isArray(value) ? value[0] : value)
          }
        />
        <Button type="submit">Enregistrer</Button>
      </Box>
    </form>
  );
};

export default NbMaxForm;
