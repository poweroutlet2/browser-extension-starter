import { Button } from "~components/ui/button"
import { createTRPCProxyClient } from "@trpc/client"
import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { chromeLink } from "trpc-chrome/link"
import React, { useState } from 'react';
import type { AppRouter } from "~background"


export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const port = chrome.runtime.connect();
const trpc = createTRPCProxyClient<AppRouter>({
  links: [chromeLink({ port })],
});


const IncrementButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    const newCount = await trpc.updateCount.query({count})
    setCount(newCount);
  };

  return (
    <div className="fixed bottom-20 right-20 bg-white p-6">
      <Button onClick={handleClick}>Count: {count}</Button>
    </div>
  );
};

export default IncrementButton;