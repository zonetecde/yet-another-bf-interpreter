import { writable } from 'svelte/store';

const cursorPosS: number = 0;
export const cursorPos = writable(cursorPosS);
