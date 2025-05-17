import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import "@/entrypoints/global.css";
import { Button } from "@/components/ui/button";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>WXT + React</h1>
			<div className="card">
				<Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
				<p>
					Edit <code>src/entrypoints/popup/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the WXT and React logos to learn more</p>
		</>
	);
}

export default App;
