import React, { useEffect, useState } from "react";

const MessageContext = React.createContext();

export default MessageContext;

export const MessageContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([{ text: "Loading..." }]);

  useEffect(() => {
    const ws = new WebSocket("wss://daz.eu.ngrok.io");

    ws.addEventListener("message", function message(message) {
      const data = JSON.parse(message.data);
      // console.log("received", data);

      setMessages((oldMessages) => [data, ...oldMessages]);
    });
  }, []);

  return (
    <MessageContext.Provider value={{ messages }}>
      {children}
    </MessageContext.Provider>
  );
};
