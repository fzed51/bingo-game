import { useState, useCallback } from "react";

interface BouleTiree {
  num: number;
  index: number;
}

const getRandomNumber = (max: number): number => {
  return Math.floor(max * Math.random());
};

const range = (max: number): number[] => {
  const out: number[] = [];
  for (let i = 1; i <= max; i++) {
    out.push(i);
  }
  return out;
};

export const useBingo = (nb: number) => {
  const [boulesATirer, setBoulesATirer] = useState<number[]>(range(nb));
  const [boulesTiree, setBoulesTiree] = useState<BouleTiree[]>([]);

  const tirerUneBoule = useCallback(() => {}, [boulesATirer]);
};
