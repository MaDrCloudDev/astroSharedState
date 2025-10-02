import { useState, useCallback } from 'react';
import { useStore } from '@nanostores/react';
import {
	counterStore,
	incrementCounter,
	decrementCounter,
} from '../store/counterStore';

const ReactCounter: React.FC = () => {
	const [count, setCount] = useState<number>(0);
	const reactSharedCounter = useStore(counterStore);
	const handleIncrement = useCallback(() => {
		setCount((prev) => prev + 1);
		incrementCounter();
	}, []);

	const handleDecrement = useCallback(() => {
		setCount((prev) => prev - 1);
		decrementCounter();
	}, []);

	return (
		<div className='space-y-3 flex flex-col items-center'>
			<div className='flex gap-2 justify-center'>
				<button
					className='border border-blue-500 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1 transition-colors'
					title='Increment React Counter'
					onClick={handleIncrement}
					type='button'>
					+
				</button>
				<button
					className='border border-blue-500 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1 transition-colors'
					title='Decrement React Counter'
					onClick={handleDecrement}
					type='button'>
					-
				</button>
			</div>
			<div className='text-sm text-white text-center'>
				<div>
					React:{' '}
					<span className='font-mono text-blue-400'>{count}</span>
				</div>
				<div>
					Shared:{' '}
					<span className='font-mono text-purple-300'>
						{reactSharedCounter ?? 0}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ReactCounter;
