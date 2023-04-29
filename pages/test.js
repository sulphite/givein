import { useState, useEffect } from "react";
import { Card, Grid, List, ListItem, Metric, Tab, TabList, Text, Title } from "@tremor/react";
import { PopulationCard } from "@/components/PopulationCard";

export default function KpiCardGrid() {
  const [selectedView, setSelectedView] = useState("1");
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const ws = new WebSocket("wss://daz.eu.ngrok.io");

    ws.addEventListener("message", function message(message) {
      const data = JSON.parse(message.data);
      console.log("received", data);

      setMessages(oldMessages => [data,...oldMessages])
    });
  },[])

  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>Dashboard</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text> */}

      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Detail" />
      </TabList>

      {selectedView === "1" ? (
        <>
          <Grid numColsLg={3} className="mt-6 gap-6">
            <PopulationCard />
            <Card>
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
            <Card>
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
          </Grid>

          <div className="mt-6">
            <Card>
              <List>
                {messages.map(message => {
                  return <ListItem >{message.text}</ListItem>
                })}
              </List>
            </Card>
          </div>
        </>
      ) : (
        <Card className="mt-6">

        </Card>
      )}
    </main>
  );
}
