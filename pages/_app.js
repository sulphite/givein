import "@/styles/globals.css";
import { MessageContextProvider } from "@/contexts/messages";

export default function App({ Component, pageProps }) {
  return (
    <MessageContextProvider>
      <Component {...pageProps} />
    </MessageContextProvider>
  );
}
