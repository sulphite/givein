import { Card, Metric, Text } from "@tremor/react";
import { useEffect, useState } from "react";

export function PopulationCard() {
  const [population, setPopulation] = useState(8_032_291_613);

  useEffect(() => {
    const i = setInterval(() => {
      const percentChange = 0.000000001 * (Math.random() - 0.25);
      console.log(percentChange);
      setPopulation(population - Math.floor(percentChange * population));
    }, 2000);

    return () => clearInterval(i);
  });

  return (
    <Card>
      {/* Placeholder to set height */}
      {/* <div className="h-28" /> */}
      <Text>Global Population</Text>
      <Metric>{population.toLocaleString("en")}</Metric>
    </Card>
  );
}
