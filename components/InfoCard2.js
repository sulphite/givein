import { Text, Card, List, ListItem } from "@tremor/react";
import { useContext, useEffect, useState } from "react";
import MessageContext from "@/contexts/messages";
import { news } from "@/news";

export function InfoCard2() {
  const { messages } = useContext(MessageContext);
  const [headlines, setHeadlines] = useState([
    { link: "", title: "Loading..." },
  ]);

  useEffect(() => {
    let query =
      messages.length > 0 && messages[0].plan ? messages[0].plan : undefined;
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        console.log(query);
        setHeadlines(data.data.results);
      });
  }, []);

  return (
    <Card>
      <Text>Global Headlines:</Text>
      <List>
        {news.data.results.map((item, i) => {
          return (
            <ListItem key={i}>
              <a href={item.link}>{item.title}</a>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}
