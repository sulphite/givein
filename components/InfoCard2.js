import { Text, Card, List, ListItem } from "@tremor/react";
import { useContext, useEffect, useState } from "react";
import MessageContext from "@/contexts/messages";

export function InfoCard2() {
  const { messages } = useContext(MessageContext)
  const [headlines, setHeadlines] = useState([])
  useEffect(() => {
    fetch("/api/hello").then(response => response.json()).then(data => {
      console.log(data.data.results)
      setHeadlines(data.data.results)
    })
  },[])

  return (
    <Card>
      <Text>Global Headlines:</Text>
      <List>
        {headlines.map((item, i) => {
          return <ListItem key={i}>
            <a href={item.link}>
              {item.title}
            </a>
          </ListItem>
        })}
      </List>
    </Card>
  );
}
