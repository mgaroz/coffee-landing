<script>
	export let value;
	export let type = 'submit';
	export let loading = false;
	export let background = undefined;
	export let hover = undefined;
	export let border = undefined;
</script>

<button
	class="text-color-white inline-flex w-1/3 max-w-lg items-center justify-center rounded-full 
    {background !== undefined ? `${background}` : 'bg-[#405189]'}  
    py-2 shadow-lg duration-150 
    {hover !== undefined ? `${hover}` : 'hover:bg-[#405189CC]'}
    {border !== undefined ? `${border}` : ''}"
	{type}
	disabled={loading}
>
	{#if loading}
		<svg
			class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
		Processing...
	{:else}
		{value}
	{/if}
</button>
