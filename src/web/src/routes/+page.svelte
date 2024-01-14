<script lang="ts">
	import { onMount } from 'svelte';
	import Api from '../Api';
	import Ruban from '../components/Ruban.svelte';

	let ruban: Ruban;
	const speed = 1000;
	let isExecuting = false;
	let programme: string = '+>>++++++++++[<<[>++<-]>[<+>-]>-]<<!';

	let values: string[] = [];

	async function executeCode(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {
		if (isExecuting) {
			isExecuting = false;
			return;
		} else {
			isExecuting = true;

			const re: any = await Api.api.getThingFromPython();
			window.alert(JSON.stringify(re));
		}
	}

	onMount(() => {
		//@ts-expect-error
		window.TestFunction = () => {
			alert('Test function');
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
		class="mt-10 w-32 self-center bg-violet-500 hover:bg-violet-600 duration-150 border-2 border-violet-700 hover:scale-105 shadow-violet-700 text-white px-4 py-2 rounded-md"
		on:click={executeCode}
	>
		{isExecuting ? 'Arrêter' : 'Exécuter'}
	</button>
</div>
