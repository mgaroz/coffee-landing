<script>
	import { slide } from 'svelte/transition';
	export let entry;
	let [coffee, details] = [entry[0], entry[1]];
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<div
	class="border-b-color-background font-merriweather flex cursor-pointer justify-between border-b-2 border-solid text-xl font-semibold leading-loose"
	on:click={toggle}
	on:keypress={toggle}
	aria-expanded={isOpen}
>
	<p>{coffee}</p>
	<p>€{details.price}</p>
</div>
{#if isOpen}
	<div transition:slide={{ duration: 200 }}>
		<p>{details.description}</p>
		<img src={details.img} alt={coffee} />
	</div>
{/if}
<br />
