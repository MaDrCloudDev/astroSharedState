<template>
	<div>
		<button
			class="border bg-green-600 rounded-md px-2 my-1"
			title="A Vue Component"
			@click="
				increment();
				incrementCounter();
			">
			Vue State: <data class="text-black">{{ count }}</data> Shared State:
			<data class="text-black">{{ vueSharedCounter }}</data>
		</button>
	</div>
</template>
<script>
import { useStore } from "@nanostores/vue";
import { counterStore, incrementCounter } from "../store/counterStore.js";

export default {
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		increment() {
			this.count++;
			incrementCounter();
		},
	},
	setup() {
		const vueSharedCounter = useStore(counterStore);
		return { vueSharedCounter };
	},
};
</script>
