<script lang="ts">
	export let title: string;
	export let code: string;

	export let recopierCode: (code: string) => void;

	let tableNbr = 5;

	function repete_character(char: string, nbre: number) {
		let str = '';
		for (let i = 0; i < nbre; i++) {
			str += char;
		}
		return str;
	}

	$: {
		if (title.includes('Table')) {
			code = '';
			for (let i = 0; i < 11; i++) {
				code += repete_character('+', tableNbr) + '[>' + repete_character('+', i) + '<-]>!>';
			}
		}
	}

	let addition1 = 33;
	let addition2 = 66;

	$: {
		if (title.includes('une addition de'))
			code = repete_character('+', addition1) + repete_character('+', addition2) + '!';
	}
</script>

<div
	class={'flex flex-col w-full border-b-2 border-slate-500 py-3 px-2 hover:bg-blue-200 duration-150 ' +
		(title.includes('une addition de') ? ' max-h-44' : 'max-h-36')}
>
	<h1 class="text-base font-bold">{title}</h1>

	{#if title.includes('Table')}
		<label for="number" class="mt-2"
			>Nombre : <input
				type="number"
				bind:value={tableNbr}
				class="px-1 w-1/2 border border-gray-600"
			/>
		</label>
	{/if}
	{#if title.includes('une addition de')}
		<div class="flex gap-x-2">
			<input type="number" bind:value={addition1} class="px-1 w-12 border border-gray-600" />
			<p>+</p>
			<input type="number" bind:value={addition2} class="px-1 w-12 border border-gray-600" />
		</div>
	{/if}

	<pre
		class="flex text-wrap overflow-x-hidden mt-3 border border-gray-400 overflow-y-auto">{code}</pre>

	<button
		class="text-sm self-end mt-2 px-2 py0.51 border border-green-500 rounded-md text-green-800 hover:bg-green-500 hover:text-white duration-150"
		on:click={() => recopierCode(code)}>Recopier</button
	>
</div>
