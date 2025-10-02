<script lang="ts">
	import { counterStore, incrementCounter, decrementCounter } from "../store/counterStore";
	import { onMount } from "svelte";

	let count = $state(0);
	let sharedCount = $state(counterStore.get());

	onMount(() => {
		const unsubscribe = counterStore.subscribe((value) => {
			sharedCount = value;
		});
		
		return unsubscribe;
	});

	function increment() {
		count += 1;
		incrementCounter();
	}

	function decrement() {
		count -= 1;
		decrementCounter();
	}
</script>

<div class="space-y-3 flex flex-col items-center">
	<div class="flex gap-2 justify-center">
		<button
			class="border border-orange-500 bg-orange-600 hover:bg-orange-700 text-white rounded-md px-3 py-1 transition-colors"
			title="Increment Svelte Counter"
			onclick={increment}
			type="button"
		>
			+
		</button>
		<button
			class="border border-orange-500 bg-orange-600 hover:bg-orange-700 text-white rounded-md px-3 py-1 transition-colors"
			title="Decrement Svelte Counter"
			onclick={decrement}
			type="button"
		>
			-
		</button>
	</div>
	<div class="text-sm text-white text-center">
		<div>Svelte: <span class="font-mono text-orange-400">{count}</span></div>
		<div>Shared: <span class="font-mono text-purple-300">{sharedCount ?? 0}</span></div>
	</div>
</div>
