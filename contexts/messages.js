import React, { useEffect, useState } from "react";
import { data } from "@/data";

const MessageContext = React.createContext();

export default MessageContext;

const REASONING = data.reasoning;
const PLANS = data.plan;
const THOUGHTS = data.thoughts;

export const MessageContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([{ text: "Loading..." }]);
  const [plan, setPlan] = useState("Thinking...");
  const [thought, setThought] = useState("Loading...");

  useEffect(() => {
    const i = setInterval(() => {
      setThought(THOUGHTS[Math.floor(Math.random() * THOUGHTS.length)]);
    }, 3500);
    const j = setInterval(() => {
      setPlan(THOUGHTS[Math.floor(Math.random() * PLANS.length)]);
    }, 6500);

    return () => {
      clearInterval(i);
      clearInterval(j);
    };
    // const ws = new WebSocket("wss://daz.eu.ngrok.io");
    //
    // ws.addEventListener("message", function message(message) {
    //   const data = JSON.parse(message.data);
    //   console.log("received", data);
    //
    //   setMessages((oldMessages) => [data, ...oldMessages]);
    // });
    // const i = setInterval(() => {
    //   const thought = THOUGHTS[Math.floor(Math.random() * THOUGHTS.length)];
    //   const plan = THOUGHTS[Math.floor(Math.random() * PLANS.length)];
    //   const reasoning = THOUGHTS[Math.floor(Math.random() * REASONING.length)];
    //
    //   setMessages([{ thought, plan, reasoning, text: thought }, ...messages]);
    //   return () => clearInterval(i);
    // }, 5000);
  }, []);

  return (
    <MessageContext.Provider value={{ messages, plan, thought }}>
      {children}
    </MessageContext.Provider>
  );
};
