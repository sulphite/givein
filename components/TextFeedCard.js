import { Card, List, ListItem } from "@tremor/react";
import { useContext, useEffect, useState } from "react";
import MessageContext from "@/contexts/messages";

export function TextFeedCard() {
  const { messages } = useContext(MessageContext);

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
