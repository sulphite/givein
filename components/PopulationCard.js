import { Card, CategoryBar, Metric, Text } from "@tremor/react";
import { useEffect, useState } from "react";

export function PopulationCard() {
  const [population, setPopulation] = useState(8_032_291_613);
  const [danger, setDanger] = useState(72);

  useEffect(() => {
    const i = setInterval(() => {
      const percentChange = 0.000000001 * (Math.random() - 0.25);
      setPopulation(population - Math.floor(percentChange * population));
    }, 1700);
    const j = setInterval(() => {
      setDanger(60 + Math.random() * 35);
    }, 3500);

    return () => {
      clearInterval(i);
      clearInterval(j);
    };
  });

  return (
    <Card>
      {/* Placeholder to set height */}
      {/* <div className="h-28" /> */}
      <Text>Global Population</Text>
      <Metric>{population.toLocaleString("en")}</Metric>

      <Text className="mt-4">Danger Level</Text>
      <CategoryBar
        categoryPercentageValues={[40, 30, 20, 10]}
        colors={["emerald", "yellow", "orange", "rose"]}
        percentageValue={danger}
        className="mt-3"
      />
    </Card>
  );
}
