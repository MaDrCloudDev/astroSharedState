import { atom, computed } from 'nanostores';

export type CounterStatus = 'neutral' | 'positive' | 'negative';

export const counterStore = atom<number>(0);
export const incrementCounter = (): void => {
	counterStore.set(counterStore.get() + 1);
};

export const decrementCounter = (): void => {
	counterStore.set(counterStore.get() - 1);
};

export const resetCounter = (): void => {
	counterStore.set(0);
};

export const setCounter = (value: number): void => {
	counterStore.set(value);
};

export const isCounterEven = computed(
	counterStore,
	(count: number): boolean => count % 2 === 0
);

export const counterStatus = computed(
	counterStore,
	(count: number): CounterStatus => {
		if (count === 0) return 'neutral';
		if (count > 0) return 'positive';
		return 'negative';
	}
);

export const counterAbsoluteValue = computed(
	counterStore,
	(count: number): number => Math.abs(count)
);
