import { Card, Divider, Subtitle, Text } from "@tremor/react";
import { useContext } from "react";
import MessageContext from "@/contexts/messages";
import { data } from "@/data";

const PLANS = data.plan;

export function InfoCard1() {
  const [plan, setPlan] = useState("Thinking...");
  // const { plan } = useContext(MessageContext);

  useEffect(() => {
    const i = setInterval(() => {
      setPlan(PLANS[Math.floor(Math.random() * PLANS.length)]);
    }, 6500);

    return () => {
      clearInterval(i);
    };
  }, []);
  // let plan = [];
  // if (messages.length > 0 && messages[0].plan) {
  //   plan = messages[0].plan.split("\n").map((s) => s.substring(2));
  // }

  return (
    <Card className="h-64">
      <Subtitle>Plan</Subtitle>
      <Text className="text-4xl leading-relaxed">{plan}</Text>
    </Card>
  );
}
