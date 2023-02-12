<section
	id="news"
	class="text-color-background m-auto w-full bg-gradient-to-t from-[#1B1B1B_50%] to-[#EEE0D3_50%] pt-20"
>
	<div class="m-auto flex w-[95%] justify-center gap-6 pb-10">
		<div class="bg-color-green text-color-cream h-[52vmin] w-3/5 rounded-3xl">
			<div class="ml-10 mr-10 mt-5 flex items-center justify-around">
				<h2 class="font-playfair text-5xl font-bold">Big News</h2>
				<img src="img/news-coffee.svg" alt="coffee" />
			</div>
			<div class="ml-10 mr-10 mt-8 flex items-center justify-between">
				<p class="max-w-[60vmin]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at dolor adipisci libero
					nihil! Eos eaque, repellendus ipsam commodi laborum unde, omnis impedit, amet perspiciatis
					a voluptates doloremque maiores quae.
				</p>
				<button
					class="text-color-cream max-h-[80px] rounded-3xl border-[1px] pl-6 pr-6 pt-2 pb-2 text-right font-sans"
					>Read More</button
				>
			</div>
		</div>
		<div
			class="text-color-cream shine relative flex h-[52vmin] w-32 items-center justify-center overflow-hidden rounded-3xl bg-[#252525]"
		>
			<p class="v-text rotate-180 transform text-5xl font-bold uppercase">Coffee Shop</p>
		</div>
		<div
			class="text-color-cream shine relative flex h-[52vmin] w-32 items-center justify-center overflow-hidden rounded-3xl bg-[#252525]"
		>
			<p class="v-text rotate-180 transform text-5xl font-bold uppercase">Restaurant</p>
		</div>
	</div>
</section>

<style>
	.v-text {
		writing-mode: vertical-lr;
	}

	.shine:before {
		content: '';
		position: absolute;
		top: 0;
		left: -300px;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.3);
		transform: skewX(-30deg);
		transition: 0.75s;
	}

	.shine:hover:before {
		left: 275px;
		background: rgba(255, 255, 255, 0.15);
	}
</style>
