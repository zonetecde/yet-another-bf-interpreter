<script lang="ts">
	import { onMount } from 'svelte';
	import Api from '../Api';
	import Ruban from '../components/Ruban.svelte';
	import Programme from '../components/Programme.svelte';
	import { slide, fade } from 'svelte/transition';
	import { cursorPos } from '../stores/store';
	import toast from 'svelte-french-toast';

	let ruban: Ruban;
	let speed = 1;
	let isExecuting = false;
	let programme: string = '+>>++++++++++[<<[>++<-]>[<+>-]>-]<<!';
	let openMenu = false;

	let values: number[] = [];

	async function executeCode(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {
		if (isExecuting) {
			isExecuting = false;
			await Api.api.stopExecution();
			return;
		} else {
			// parametre par defaut
			cursorPos.set(0);
			values = [];

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

		window.printBytes = (byte: number) => {
			toast.success(`[!] - Valeur de la cellule : ${byte}`);
		};

		window.printChar = (text: string) => {
			toast.success('[.] - Valeur de la cellule (convertie en ASCII) : ' + text);
		};

		window.userInput = () => {
			const value = prompt(
				'[,] - Valeur à écrire (elle sera convertie en son équivalent décimal) : '
			);

			if (value === null) return;

			const byte = value.charCodeAt(0);

			ruban.writeCell(byte);

			return byte;
		};
	});

	function recopierCode(code: string) {
		openMenu = false;
		programme = code;
	}
</script>

<!-- menu icon top left-->
{#if openMenu}
	<div
		class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-30"
		transition:fade
	></div>
	<div
		class="fixed top-0 left-0 w-64 h-screen bg-white shadow-2xl z-40 pt-12"
		transition:slide={{ axis: 'x' }}
	>
		<div class="flex flex-col overflow-y-scroll h-full">
			<Programme title="Mettre 6 à la 2ème position" code="+++[->++<]>!" {recopierCode} />
			<Programme title="Affichage de '0'" code="+++++[->++++++++++<]>--." {recopierCode} />
			<Programme
				title="Affichage de '02'"
				code="+++++[->++++++++++<]>--.>+++++[->++++++++++<]>."
				{recopierCode}
			/>
			<Programme
				{recopierCode}
				title="Affichage de 'Hello, World!'"
				code="++++++[>++++++++++++<-]>.>++++++++++[>++++++++++<-]>+.+++++++..+++.>++++[>+++++++++++<-]>.<+++[>----<-]>.<<<<<+++[>+++++<-]>.>>.+++.------.--------.>>+."
			/>
			<Programme {recopierCode} title="Calcul de 4*7" code=">++++[-<+++++++>]<!" />
			<Programme
				{recopierCode}
				title="Affichage de 'LV'"
				code="++++[>+++++++++++++++++++<-]>.<++++++[>+++++++<-]>."
			/>
			<Programme {recopierCode} title="Calcul de 5x4" code="+++++[>++++<-]>!" />
			<Programme {recopierCode} title="Calcul d'une addition de deux nombres donnés" code="" />
			<Programme {recopierCode} title="Table d'un nombre" code="" />
			<Programme
				{recopierCode}
				title="Boucle imbriquée : affichage de 1024"
				code="+>>++++++++++[<<[>++<-]>[<+>-]>-]<<!"
			/>
		</div>
	</div>
{/if}
<button class="absolute top-0 left-0 mt-2 ml-2 z-50" on:click={() => (openMenu = !openMenu)}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-10 h-10"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
</button>

<div class="flex justify-center relative flex-col w-screen h-screen bg-violet-300 pt-20 pb-8">
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
				min="0"
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
