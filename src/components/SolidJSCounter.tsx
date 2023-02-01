import { createSignal } from "solid-js";
import { useStore } from "@nanostores/solid";
import { counterStore, incrementCounter } from "../store/counterStore.js";

export default function SolidJSCounter() {
	const [count, setCount] = createSignal(0);
	const solidJSSharedCounter = useStore(counterStore);

	return (
		<div>
			<button
				title='A SolidJS Component'
				onClick={() => {
					setCount(count() + 1);
					incrementCounter();
				}}>
				SolidJS State: {count} Shared State: {solidJSSharedCounter}
			</button>
		</div>
	);
}
