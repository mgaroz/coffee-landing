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
>
	<p class="duration-150 hover:indent-2">{coffee}</p>
	<p>€{details.price}</p>
</div>
{#if isOpen}
	<div
		transition:slide={{ duration: 200 }}
		class="mt-2 flex w-full items-center justify-between gap-4 p-4"
	>
		<p class="font-playfair text-color-gray-text w-1/2 text-xl font-bold">{details.description}</p>
		<div class="h-[25vmin] w-2/3 overflow-hidden rounded-xl shadow-md">
			<img
				loading="lazy"
				src={`${details.img}.webp`}
				alt={coffee}
				class="block h-full w-full object-cover object-center"
				srcset={`${details.img}-480.webp 480w, ${details.img}-720.webp 720w, ${details.img}-1440.webp 1440w`}
			/>
		</div>
	</div>
{/if}
<br />
