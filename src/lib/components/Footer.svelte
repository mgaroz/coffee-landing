<script>
	import { activeItem } from '$lib/stores.js';

	function setActiveItem(item) {
		activeItem.set(item);
	}
</script>

<div class="bg-color-green m-auto w-full pb-10">
	<div class="text-color-white font-merriweather m-auto w-[95%] pt-10">
		<div class="grid grid-cols-4 gap-8">
			<div class="w-full self-start">
				<a href="/" on:click={() => setActiveItem('home')}>
					<img
						src="/img/logo.png"
						alt="logo_footer"
						class="m-auto h-auto w-[15vmin] cursor-pointer"
					/></a
				>
			</div>
			<div class="border-r-2">
				<p class="p-6 leading-loose">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ab incidunt consequuntur
					culpa dolores earum laboriosam molestias tempore neque fugiat, qui dicta commodi ea
					quaerat magnam nobis! Assumenda, nihil. Sed.
				</p>
			</div>
			<div class="ml-10 mr-10 self-center text-center">
				<ul class="font-playfair columns-2 leading-loose">
					<li><a href="/" class="duration-150 hover:underline">Home</a></li>
					<li>
						<a
							href="#about"
							class="duration-150 hover:underline"
							on:click={() => setActiveItem('about')}>About</a
						>
					</li>
					<li>
						<a
							href="#themenu"
							class="duration-150 hover:underline"
							on:click={() => setActiveItem('themenu')}>Menu</a
						>
					</li>
					<li>
						<a
							href="#news"
							class="duration-150 hover:underline"
							on:click={() => setActiveItem('news')}>News</a
						>
					</li>
					<li>
						<a
							href="#contact"
							class="duration-150 hover:underline"
							on:click={() => setActiveItem('contact')}>Contact</a
						>
					</li>
				</ul>
			</div>
			<div class="font-playfair w-[30vmin] self-center">
				<div class="text-2xl font-light">
					<a href="/" class="mr-2"
						><i class="fa-brands fa-twitter duration-150 hover:scale-125" /></a
					>
					<a href="/" class="mr-2"
						><i class="fa-brands fa-youtube duration-150 hover:scale-125" /></a
					>
					<a href="/" class="mr-2"
						><i class="fa-brands fa-linkedin-in duration-150 hover:scale-125" /></a
					>
					<a href="/" class="mr-2"
						><i class="fa-brands fa-instagram duration-150 hover:scale-125" /></a
					>
				</div>
			</div>
		</div>
	</div>
</div>
