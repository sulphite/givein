import { Card, List, ListItem, Text } from "@tremor/react";
import { useContext, useEffect, useState } from "react";
import MessageContext from "@/contexts/messages";

export function TextFeedCard() {
  const { thought } = useContext(MessageContext);

  return (
    <Card className="h-30 max-h-30 overflow-hidden">
      <List>
        <Text className="text-2xl">{thought}</Text>
      </List>
    </Card>
  );
}
