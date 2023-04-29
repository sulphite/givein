import { Text, Card, Metric } from "@tremor/react";
import { useContext, useEffect, useState } from "react";
import MessageContext from "@/contexts/messages";

export function StatCard2() {
  const [survival, setSurvival] = useState(100)
  const { messages } = useContext(MessageContext)

  useEffect(() => {
    setSurvival(100 - Math.random())
  },[messages])

  return (
    <Card>
      {/* Placeholder to set height */}
      <div className="h-28 flex flex-col">
        <Text>Your survival chances with the current Plan:</Text>
        <Metric className="text-brand text-5xl mt-2">{survival.toFixed(2)}%</Metric>
      </div>
    </Card>
  );
}
