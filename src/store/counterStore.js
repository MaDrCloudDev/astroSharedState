import { atom } from 'nanostores';

export const counterStore = atom(0);

export const incrementCounter = () => {
    counterStore.set(counterStore.get() +1);
};