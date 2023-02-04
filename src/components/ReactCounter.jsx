import { useState } from "react";
import { useStore } from "@nanostores/react";
import { counterStore, incrementCounter } from "../store/counterStore.js";

const ReactCounter = () => {
	const [count, setCount] = useState(0);
	const reactSharedCounter = useStore(counterStore);

	return (
		<div>
			<button
				className='border bg-blue-600 rounded-md px-2 my-1'
				title='A React Component'
				onClick={() => {
					setCount(count + 1);
					incrementCounter();
				}}>
				React State: <data class='text-black'>{count}</data> Shared State:{" "}
				<data class='text-black'>{reactSharedCounter}</data>
			</button>
		</div>
	);
};

export default ReactCounter;
