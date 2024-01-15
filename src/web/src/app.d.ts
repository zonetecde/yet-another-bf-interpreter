// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		move: (direction: 'left' | 'right') => void;
		change: (direction: 'increment' | 'decrement') => void;
		printBytes: (bytes: number) => void;
		input: () => void;
	}
}

export {};
