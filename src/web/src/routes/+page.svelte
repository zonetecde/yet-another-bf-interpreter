<script lang="ts">
	import { onMount } from 'svelte';
	import Api from '../Api';
	import Ruban from '../components/Ruban.svelte';

	let ruban: Ruban;
	let speed = 1;
	let isExecuting = false;
	let programme: string = '+>>++++++++++[<<[>++<-]>[<+>-]>-]<<!';

	let values: number[] = [];

	async function executeCode(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {
		if (isExecuting) {
			isExecuting = false;
			await Api.api.stopExecution();
			return;
		} else {
			isExecuting = true;

			await Api.api.interpretCode(programme, speed);

			isExecuting = false;
		}
	}

	onMount(() => {
		window.move = (direction: 'left' | 'right') => {
			ruban.moveCursor(direction);
		};

		window.change = (value: 'increment' | 'decrement') => {
			ruban.changeCell(value);
		};

		window.printBytes = () => {
			alert('[!] - Valeur de la cellule : ' + ruban.readCell());
		};

		window.input = () => {
			alert('[?] - Valeur de la cellule : ');
			const value = prompt('[?] - Valeur à écrire : ');

			if (value === null) return;

			const byte = value.charCodeAt(0);

			ruban.writeCell(byte);

			Api.api.setUserInput(byte);
		};
	});
</script>

<div class="flex justify-center overflow-visible relative flex-col">
	<Ruban bind:this={ruban} bind:values />

	<textarea
		class="mt-10 h-64 px-2 py-1 border-4 border-violet-400 shadow-2xl outline-none text-xl shadow-violet-600 rounded-xl mx-10"
		bind:value={programme}
	/>

	<button
		class={'mt-10 w-32 self-center  duration-150 border-2 hover:scale-105  text-white px-4 py-2 rounded-md' +
			(isExecuting
				? ' bg-red-500 hover:bg-red-700 border-red-700 shadow-red-700 '
				: ' bg-violet-700 hover:bg-violet-600 border-violet-700 shadow-violet-700')}
		on:click={executeCode}
	>
		{isExecuting ? 'Arrêter' : 'Exécuter'}
	</button>

	<!-- speed slider -->
	<div class="flex justify-center flex-col items-center mt-10">
		<p class="text-xl font-bold">Vitesse</p>
		<div class="flex flex-row">
			<input
				class="ml-2"
				type="range"
				min="0.01"
				max="3"
				step="0.01"
				bind:value={speed}
				on:input={() => {
					Api.api.changeSpeed(speed);
				}}
			/>
			<p class="ml-2 text-sm">{speed} sec</p>
		</div>
	</div>
</div>
