<template>
    <div>
        <button @click="increment(); incrementCounter();">
            Vue State: {{count}} Shared State: {{vueSharedCounter}}
        </button>
    </div>
</template>
<script>
import { useStore } from '@nanostores/vue';
import { counterStore, incrementCounter } from '../store/counterStore.js';

export default {
    data() {
        return {
            count: 0
        }
    },
    setup() {
        const vueSharedCounter = useStore(counterStore);
        return { vueSharedCounter };
    },
    methods: {
        increment() {
            this.count++
            incrementCounter()
        }
    },
}
</script>