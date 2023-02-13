<script>
	import { slide } from 'svelte/transition';
	export let entry;
	let [name, price] = entry;
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<div
	class="border-b-color-background font-merriweather flex cursor-pointer justify-between border-b-2 border-solid text-xl font-semibold leading-loose"
	on:click={toggle}
	on:keypress={toggle}
	aria-expanded={isOpen}
>
	<p>{name}</p>
	<p>€{price}</p>
</div>
{#if isOpen}
	<div transition:slide={{ duration: 200 }}>
		<p>i'm open!</p>
	</div>
{/if}
<br />
