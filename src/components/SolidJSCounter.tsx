import { createSignal } from 'solid-js';
import { useStore } from '@nanostores/solid';
import {
	counterStore,
	incrementCounter,
	decrementCounter,
} from '../store/counterStore';

export default function SolidJSCounter() {
	const [count, setCount] = createSignal(0);
	const solidJSSharedCounter = useStore(counterStore);

	const handleIncrement = () => {
		setCount(count() + 1);
		incrementCounter();
	};

	const handleDecrement = () => {
		setCount(count() - 1);
		decrementCounter();
	};

	return (
		<div className='space-y-3 flex flex-col items-center'>
			<div className='flex gap-2 justify-center'>
				<button
					className='border border-teal-500 bg-teal-600 hover:bg-teal-700 text-white rounded-md px-3 py-1 transition-colors'
					title='Increment SolidJS Counter'
					onClick={handleIncrement}
					type='button'>
					+
				</button>
				<button
					className='border border-teal-500 bg-teal-600 hover:bg-teal-700 text-white rounded-md px-3 py-1 transition-colors'
					title='Decrement SolidJS Counter'
					onClick={handleDecrement}
					type='button'>
					-
				</button>
			</div>
			<div className='text-sm text-white text-center'>
				<div>SolidJS: <span className='font-mono text-teal-400'>{count()}</span></div>
				<div>Shared: <span className='font-mono text-purple-300'>{solidJSSharedCounter() ?? 0}</span></div>
			</div>
		</div>
	);
}
