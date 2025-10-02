<template>
	<div class="space-y-3 flex flex-col items-center">
		<div class="flex gap-2 justify-center">
			<button
				class="border border-green-500 bg-green-600 hover:bg-green-700 text-white rounded-md px-3 py-1 transition-colors"
				title="Increment Vue Counter"
				@click="increment"
				type="button">
				+
			</button>
			<button
				class="border border-green-500 bg-green-600 hover:bg-green-700 text-white rounded-md px-3 py-1 transition-colors"
				title="Decrement Vue Counter"
				@click="decrement"
				type="button">
				-
			</button>
		</div>
		<div class="text-sm text-white text-center">
			<div>Vue: <span class="font-mono text-green-400">{{ count }}</span></div>
			<div>Shared: <span class="font-mono text-purple-300">{{ vueSharedCounter ?? 0 }}</span></div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useStore } from '@nanostores/vue';
	import {
		counterStore,
		incrementCounter,
		decrementCounter,
	} from '../store/counterStore';

	const count = ref(0);
	const vueSharedCounter = useStore(counterStore);

	const increment = () => {
		count.value++;
		incrementCounter();
	};

	const decrement = () => {
		count.value--;
		decrementCounter();
	};
</script>
