import { useState, useCallback, useMemo } from "react";

interface BouleTiree {
  num: number;
  order: number;
}

const getRandomNumber = (max: number): number => {
  return Math.floor(max * Math.random());
};

const range = (max: number): number[] => {
  const out: number[] = [];
  for (let i = 0; i < max; i++) {
    out.push(i + 1);
  }
  return out;
};

export const useBingo = (nb: number) => {
  const [boulesATirer, setBoulesATirer] = useState<number[]>(range(nb));
  const [boulesTiree, setBoulesTiree] = useState<BouleTiree[]>([]);

  const tirerUneBoule = useCallback(() => {
    const rnd = getRandomNumber(boulesATirer.length);
    const boule = boulesATirer[rnd];
    const newBoulesATirer = [
      ...boulesATirer.slice(0, rnd),
      ...boulesATirer.slice(rnd + 1),
    ];
    // console.log({
    //   boule,
    //   avant: boulesATirer,
    //   aprs: newBoulesATirer
    // })
    setBoulesATirer(newBoulesATirer);
    setBoulesTiree((bls) => [
      ...bls,
      {
        num: boule,
        order: boulesTiree.length + 1,
      },
    ]);
    return boule;
  }, [boulesATirer, boulesTiree]);

  const end = useMemo(() => boulesATirer.length === 0, [boulesATirer]);

  return [boulesTiree, tirerUneBoule, end] as const;
};
