import { writable } from 'svelte/store';

export const submitStatus = writable(false);

export const submit = () => {
	submitStatus.update((cur) => {
		return !cur;
	});
};
