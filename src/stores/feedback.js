import { writable } from 'svelte/store';

export const selection = writable(0);

export const changeSelection = (num) => {
	selection.update((cur) => {
		const newSelection = num;
		return newSelection;
	});
};
