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
		printChar: (text: string) => void;
		printBytes: (bytes: number) => void;

		move: (direction: 'left' | 'right') => void;
		change: (direction: 'increment' | 'decrement') => void;
		userInput: () => void;
		changeInstructionIndex: (index: number) => void;
	}
}

export {};
