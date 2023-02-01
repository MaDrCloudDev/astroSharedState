<template>
	<div>
		<button
			title="A Vue Component"
			@click="
				increment();
				incrementCounter();
			">
			Vue State: {{ count }} Shared State: {{ vueSharedCounter }}
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
