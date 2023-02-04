<script>
	import { counterStore, incrementCounter } from "../store/counterStore.js";

	let count = 0;
	function increment() {
		count += 1;
	}
</script>

<div>
	<button
		class="border bg-orange-600 rounded-md px-2 my-1"
		title="A Svelte Component"
		on:click={() => {
			increment();
			incrementCounter();
		}}
	>
		Svelte State: <data class="text-black">{count}</data> Shared State:
		<data class="text-black">{$counterStore}</data>
	</button>
</div>
