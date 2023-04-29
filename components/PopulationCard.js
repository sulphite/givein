import {
  BadgeDelta,
  Card,
  CategoryBar,
  Flex,
  Metric,
  Text,
} from "@tremor/react";
import { useEffect, useState } from "react";

export function PopulationCard() {
  const [population, setPopulation] = useState(8_032_291_613);
  const [populationChange, setPopulationChange] = useState(`0`);
  const [danger, setDanger] = useState(72);
  const [deltaType, setDeltaType] = useState("unchanged");

  useEffect(() => {
    const i = setInterval(() => {
      const percentChange = 0.000000001 * (Math.random() - 0.25);
      setPopulationChange(
        `${Math.abs(Math.floor(percentChange * population))}`
      );
      setPopulation(population - Math.floor(percentChange * population));
      if (Math.floor(percentChange * population) === 0) {
        setDeltaType("unchanged");
      } else {
        setDeltaType(
          percentChange > 0 ? "moderateDecrease" : "moderateIncrease"
        );
      }
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
      <Flex alignItems="start">
        <Text>Global Population</Text>
        <BadgeDelta deltaType={deltaType}>{populationChange}</BadgeDelta>
      </Flex>

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
