<script>
	import MenuItem from './MenuItem.svelte';

	const data = {
		Espresso: {
			price: 6,
			description: 'A concentrated form of coffee served in small, strong shots',
			img: 'img/coffee/espresso.webp'
		},
		Capuccino: {
			price: 5,
			description: 'A coffee drink made from a mixture of espresso and steamed milk',
			img: 'img/coffee/capuccino.webp'
		},
		Americano: {
			price: 3,
			description: 'An Americano is espresso topped with hot water',
			img: 'img/coffee/americano.webp'
		},
		'Latte Art': {
			price: 8,
			description:
				'Latte art is the design you see on top of (typically) drinks like lattes, cappuccinos, and similar milk-and-espresso beverages',
			img: 'img/coffee/latte-art.webp'
		},
		Doppio: {
			price: 5,
			description:
				'The name doppio means ”double” in Italian and refers to a double shot or two espresso shots',
			img: 'img/coffee/doppio.webp'
		},
		Cortado: {
			price: 7,
			description: 'A cortado is a hot espresso beverage, coupled with warm, steamed milk',
			img: 'img/coffee/cortado.webp'
		}
	};
</script>

<section id="themenu" class="bg-color-cream m-auto mt-20 w-full">
	<div class="text-color-background m-auto grid w-[95%] grid-cols-2 grid-rows-2 gap-8 pt-10">
		<div>
			<h2 class="font-playfair text-center text-7xl font-bold uppercase">
				<span class="text-color-gray-text">The</span> Menu
			</h2>
			<p class="font-merriweather text-color-gray-text pt-10">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aut fugiat voluptates
				magnam, enim quis perspiciatis. Unde nulla laborum deserunt repellat, est voluptates
				molestiae eligendi reiciendis sunt placeat, quia debitis?
			</p>
			<div class="justify-left flex">
				<button
					class="text-color-background hover:bg-color-green hover:text-color-white mt-10 rounded-3xl border-[1px] pl-6 pr-6 pt-2 pb-2 font-sans duration-150"
					>View Full Menu</button
				>
			</div>
			<div class="h-full w-full bg-[url('img/ill-1.svg')] bg-no-repeat" />
		</div>
		<div class=" col-span-1 row-span-2 mt-20 ">
			<div
				class="border-b-color-background font-merriweather flex justify-between border-b-2 border-solid"
			>
				<p>Coffee</p>
				<p>Price</p>
			</div>
			<br />
			{#each Object.entries(data) as entry}
				<MenuItem {entry} />
			{/each}
		</div>
	</div>
	<br />
	<div class="text-color-gray-text font-merriweather m-auto mt-4 flex w-[95%] justify-between">
		<h2>Menu</h2>
		<h2>03</h2>
	</div>
	<div
		class="border-b-color-gray-text m-auto mt-4 w-[95%] border-t-0 border-l-0 border-r-0 border-b-2"
	/>
	<br />
</section>
