import { createSignal } from "solid-js";
import { useStore } from "@nanostores/solid";
import { counterStore, incrementCounter } from "../store/counterStore.js";

export default function SolidJSCounter() {
	const [count, setCount] = createSignal(0);
	const solidJSSharedCounter = useStore(counterStore);

	return (
		<div>
			<button
				class='border bg-teal-600 rounded-md px-2 my-1'
				title='A SolidJS Component'
				onClick={() => {
					setCount(count() + 1);
					incrementCounter();
				}}>
				SolidJS State: <data class='text-black'>{count}</data> Shared State:{" "}
				<data class='text-black'>{solidJSSharedCounter}</data>
			</button>
		</div>
	);
}
