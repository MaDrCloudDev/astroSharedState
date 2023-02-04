<script>
	import { counterStore, incrementCounter } from "../store/counterStore.js";

	let count = 0;
	function increment() {
		count += 1;
	}
</script>

<div>
	<button
		title="A Svelte Component"
		on:click={() => {
			increment();
			incrementCounter();
		}}
	>
		Svelte State: {count} Shared State: {$counterStore}
	</button>
</div>

<style>
	button {
		@apply border border-orange-600 rounded-md px-2 my-1;
	}
</style>
