<script>
    import { counterStore, incrementCounter } from "../store/counterStore.js";

    let count = 0;
    function increment() {
        count += 1;
    }
</script>
<div>
    <button on:click={() =>{
        increment();
        incrementCounter();
    }}>
    Svelte State: {count} Shared State: {$counterStore} </button>
</div>