<script>
	// let active;
	$: active = 'left';
</script>

<section id="news" class="text-color-background m-auto w-full bg-[#EEE0D3] pt-20">
	<h2 class="font-playfair pb-10 text-center text-7xl font-bold uppercase">
		The <span class="text-color-gray-text">News</span>
	</h2>
	<div class="mx-auto flex bg-gradient-to-t from-[#1B1B1B_50%] to-[#EEE0D3_50%]">
		<div class="newsgrid 2xs:flex-col 2xs:items-center w-[95%] md:flex-row">
			<div
				class="bg-color-green text-color-white flex h-[52vmin] flex-col rounded-3xl 
				{active === 'left'
					? 'clicked w-[80vmin] justify-around'
					: 'unclicked container items-center justify-center'}"
				on:click={() => (active = 'left')}
				on:keypress={() => (active = 'left')}
			>
				<div class={active === 'left' ? 'mx-10 mt-5 flex items-end justify-around' : ''}>
					<h2 class="turn0 font-playfair text-5xl font-bold">Brewing</h2>
					<div class={active === 'left' ? 'flex w-1/4 justify-center' : 'hidden'}>
						<img src="/img/news-coffee.svg" alt="coffee" class="h-full w-full" />
					</div>
				</div>
				<div
					class={active === 'left'
						? 'mx-10 mt-8 flex items-center justify-between pb-10'
						: 'hidden'}
				>
					<p class="max-w-[50vmin]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at dolor adipisci
						libero nihil! Eos eaque, repellendus ipsam commodi laborum unde, omnis impedit, amet
						perspiciatis a voluptates doloremque maiores quae.
					</p>
					<button
						class="text-color-white hover:bg-color-white hover:text-color-green max-h-[80px] rounded-3xl border-[1px] pl-6 pr-6 pt-2 pb-2 text-right font-sans duration-150"
						>Read More</button
					>
				</div>
			</div>
			<div
				class="text-color-white shine relative flex h-[52vmin] cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-[#252525]
				{active === 'middle'
					? 'clicked md:w-[80vmin]'
					: 'unclicked 2xs:w-[80vmin] transition-all duration-300 md:w-[8rem]'}"
				on:click={() => (active = 'middle')}
				on:keypress={() => (active = 'middle')}
			>
				<h2
					class="text-5xl font-bold uppercase {active === 'middle'
						? 'turn0'
						: 'whitespace-nowrap md:rotate-[-0.25turn]'}"
				>
					Coffee Shop
				</h2>
			</div>
			<div
				class="text-color-white shine relative flex h-[52vmin] cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-[#252525] transition-all duration-300
				{active === 'right' ? 'clicked md:w-[80vmin]' : 'unclicked 2xs:w-[80vmin] md:w-[8rem]'}"
				on:click={() => (active = 'right')}
				on:keypress={() => (active = 'right')}
			>
				<h2
					class="{active === 'right'
						? 'turn0'
						: 'whitespace-nowrap md:rotate-[-0.25turn]'} text-5xl font-bold uppercase"
				>
					Restaurant
				</h2>
			</div>
		</div>
	</div>
</section>

<style>
	.newsgrid {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.container {
		width: 8rem;
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.turn0 {
		transform: rotate(0turn);
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.container.unclicked h2 {
		transform: rotate(-0.25turn);
		white-space: nowrap;
		font-family: 'Poppins', sans-serif;
		text-transform: uppercase;
	}

	.container.unclicked p,
	.container.unclicked button,
	.container.unclicked img,
	.container.unclicked div :not(h2) {
		display: none;
	}

	.container > div {
		display: block;
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
		transition: 0.35s;
	}

	.shine:hover:before {
		left: 275px;
		background: rgba(255, 255, 255, 0.15);
	}
</style>
