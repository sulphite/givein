import { Card, Divider, Subtitle, Text } from "@tremor/react";
import { useContext } from "react";
import MessageContext from "@/contexts/messages";

export function InfoCard1() {
  const { messages } = useContext(MessageContext);

  let plan = [];
  if (messages.length > 0 && messages[0].plan) {
    plan = messages[0].plan.split("\n").map((s) => s.substring(2));
  }

  return (
    <Card className="h-64">
      <Subtitle>Plan</Subtitle>
      {plan.length === 0 && <Text>Thinking...</Text>}
      {plan.map((p, i) => (
        <div key={i}>
          {i !== 0 && <Divider />}
          {p}
        </div>
      ))}
    </Card>
  );
}
