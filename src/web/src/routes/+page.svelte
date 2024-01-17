<script lang="ts">
	import { onMount } from 'svelte';
	import Api from '../Api';
	import Ruban from '../components/Ruban.svelte';
	import Programme from '../components/Programme.svelte';
	import { slide, fade } from 'svelte/transition';
	import { cursorPos } from '../stores/store';
	import toast from 'svelte-french-toast';

	let ruban: Ruban;
	let speed = 0.5;
	let isExecuting = false;
	let programme: string = '+>>++++++++++[<<[>++<-]>[<+>-]>-]<<!';
	let openMenu = false;
	let showInfo = false;

	let programmeHtml: string = programme;
	let instructionIndex = 0;

	$: {
		//toast.success(instructionIndex.toString());
		let instructions = programme.split('');

		if (instructions[instructionIndex] !== '[' && instructions[instructionIndex] !== ']') {
			instructions[instructionIndex] =
				`{span class="text-red-500 font-bold"}${instructions[instructionIndex]}{/span}`;
			programmeHtml = instructions.join('');

			programmeHtml = programmeHtml
				.replaceAll('<', '&lt;')
				.replaceAll('>', '&gt;')
				.replaceAll('{', '<')
				.replaceAll('}', '>');
		}
	}

	let values: number[] = [];

	/*
	 * 	Execute le programme brainfuck
	 */
	async function executeCode() {
		// Si déjà en execution, on stop le programme du coté de python
		if (isExecuting) {
			isExecuting = false;
			await Api.api.stopExecution();
			return;
		} else {
			// Remet les paramètres par défaut
			cursorPos.set(0);
			values = [];
			instructionIndex = 0;
			isExecuting = true;

			// Appel l'API python pour executer le programme
			await Api.api.interpretCode(programme, speed);

			// Fin de l'execution du code
			isExecuting = false;
		}
	}

	onMount(() => {
		/*
		 * 	Bouge le curseur à gauche ou à droite
		 */
		window.move = (direction: 'left' | 'right') => {
			ruban.moveCursor(direction);
		};

		/*
		 * 	Change la valeur de la cellule
		 */
		window.change = (value: 'increment' | 'decrement') => {
			ruban.changeCell(value);
		};

		/*
		 * 	Affiche la valeur de la cellule en byte
		 */
		window.printBytes = (byte: number) => {
			toast.success(`[!] - Valeur de la cellule : ${byte}`);
		};

		/*
		 * 	Affiche la valeur de la cellule en ASCII
		 */
		window.printChar = (text: string) => {
			toast.success('[.] - Valeur de la cellule (convertie en ASCII) : ' + text);
		};

		/*
		 * Demande de l'input à l'utilisateur
		 */
		window.userInput = () => {
			const value = prompt(
				'[,] - Valeur à écrire (elle sera convertie en son équivalent décimal) : '
			);

			if (value === null) return;

			const byte = value.charCodeAt(0);

			ruban.writeCell(byte);

			return byte;
		};

		/*
		 *  Change l'index de l'instruction en cours d'execution
		 */
		window.changeInstructionIndex = (index: number) => {
			instructionIndex = index;
		};
	});

	/*
	 * 	Colle un programmes pré-enregistrés
	 */
	function recopierCode(code: string) {
		openMenu = false;
		programme = code;
	}
</script>

{#if openMenu}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-30"
		on:click={() => (openMenu = false)}
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

<div class="flex relative flex-col w-screen h-screen bg-violet-300 pt-20 pb-8">
	<Ruban bind:this={ruban} bind:values />

	{#if isExecuting}
		<p
			class="code mt-10 h-64 px-2 py-1 border-4 bg-white border-violet-400 shadow-2xl outline-none text-2xl shadow-violet-600 rounded-xl mx-10"
		>
			{@html programmeHtml}
		</p>
	{:else}
		<textarea
			class="code mt-10 h-64 px-2 py-1 border-4 border-violet-400 shadow-2xl outline-none text-2xl shadow-violet-600 rounded-xl mx-10"
			bind:value={programme}
		/>
	{/if}

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
				max="1.5"
				step="0.01"
				bind:value={speed}
				on:input={() => {
					Api.api.changeSpeed(speed);
				}}
			/>
			<p class="ml-2 text-sm">{speed} sec</p>
		</div>
	</div>

	<button class="w-12 h-12 absolute bottom-2 right-2" on:click={() => (showInfo = true)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="purple"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
			/>
		</svg>
	</button>

	{#if showInfo}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-30"
			transition:fade
			on:click={() => (showInfo = false)}
		>
			<div
				class="fixed flex flex-col items-center justify-center w-4/6 h-4/6 bg-white shadow-2xl text-center px-8 z-40 pt-12 rounded-2xl border-4 border-purple-500"
				transition:slide={{ axis: 'x' }}
			>
				<h1 class="text-xl font-bold mb-auto">
					Mais dit moi Jammy, comment cela fonctionne-t-il ?
				</h1>

				<p class="mt-4 text-base mb-auto">
					Le package permettant d'interagir avec l'interpréteur codé en Python et cette fenêtre web
					(Svelte X TypeScript) est <span class="font-bold">pywebview</span>. Ainsi, j'ai pu
					exprimer mes talents de développeur web pour créer une interface graphique pour mon
					interpréteur.
					<br />
					<br />
					Vous pouvez notamment consulter les classes <span class="font-bold">Api</span> et
					<span class="font-bold">Interpreteur</span>
					dans le code Python pour mieux comprendre le fonctionnement. Vous pouvez également
					consulter le code de cette page sous
					<span class="font-bold">web/src/routes/+page.svelte</span>.
				</p>
			</div>
		</div>
	{/if}
</div>
