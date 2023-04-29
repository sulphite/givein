import { Card, List, ListItem } from "@tremor/react";
import { useEffect, useState } from "react";

export function TextFeedCard() {
  const [messages, setMessages] = useState([{ text: "Loading..." }]);

  useEffect(() => {
    const ws = new WebSocket("wss://daz.eu.ngrok.io");

    ws.addEventListener("message", function message(message) {
      const data = JSON.parse(message.data);
      console.log("received", data);

      setMessages((oldMessages) => [data, ...oldMessages]);
    });
  }, []);

  return (
    <Card className="h-20 max-h-20 overflow-hidden">
      <List>
        {messages.map((message, i) => {
          return <ListItem key={i}>{message.text}</ListItem>;
        })}
      </List>
    </Card>
  );
}
