import { useState } from "react";
import { counterStore, incrementCounter } from "../store/counterStore.js";
import { useStore } from "@nanostores/react";

const CounterReact = () => {
    const [count, setCount] = useState(0);
    const reactSharedCounter = useStore(counterStore);
    return (
        <div>
        <button onClick={() => {
            setCount(count + 1)
            incrementCounter() 
        }}>
        React State: {count} Shared State: {reactSharedCounter}
        </button>
        </div>
    );
}
 
export default CounterReact;
