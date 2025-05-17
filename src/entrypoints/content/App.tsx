import { Button } from "@/components/ui/button";
import { AppRouter } from "../background";
import { createTRPCProxyClient } from "@trpc/client";
import { chromeLink } from "trpc-chrome/link";
import { useState } from "react";

const port = browser.runtime.connect();
const trpc = createTRPCProxyClient<AppRouter>({
	links: [chromeLink({ port })],
});

export default () => {
	const [count, setCount] = useState(0);

	const handleClick = async () => {
		const newCount = await trpc.updateCount.query({ count });
		setCount(newCount);
	};

	return (
		<div className="flex flex-col gap-8 items-center justify-center font-sans">
			<Button onClick={handleClick}>Count: {count}</Button>
		</div>
	);
};
