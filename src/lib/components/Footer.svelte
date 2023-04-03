<script>
	import { activeItem } from '$lib/stores.js';

	import instagram from '$lib/img/instagram.svg';
	import linkedin from '$lib/img/linkedin-in.svg';
	import twitter from '$lib/img/twitter.svg';
	import youtube from '$lib/img/youtube.svg';

	function setActiveItem(item) {
		activeItem.set(item);
	}
</script>

<div class="bg-color-green m-auto w-full pb-10">
	<div class="text-color-white font-merriweather m-auto w-[95%] pt-10">
		<div class="grid gap-8 md:grid-cols-4">
			<div class="w-full self-start">
				<a href="/" on:click={() => setActiveItem('home')}>
					<img
						src="/img/logo.webp"
						alt="logo_footer"
						class="m-auto h-auto w-[15vmin] cursor-pointer"
					/></a
				>
			</div>
			<div class="md:border-r-2">
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
			<div class="font-playfair mx-auto self-center text-center md:w-[30vmin]">
				<div class="w-full text-2xl font-light">
					<a href="/" class="mr-2"
						><img
							src={twitter}
							alt="twitter"
							class="inline-block h-6 w-6 text-white duration-150 hover:scale-125"
						/>
					</a>
					<a href="/" class="mr-2"
						><img
							src={youtube}
							alt="youtube"
							class="inline-block h-6 w-6 text-white duration-150 hover:scale-125"
						/>
					</a>
					<a href="/" class="mr-2"
						><img
							src={linkedin}
							alt="linkedin"
							class="inline-block h-6 w-6 text-white duration-150 hover:scale-125"
						/>
					</a>
					<a href="/" class="mr-2"
						><img
							src={instagram}
							alt="instagram"
							class="inline-block h-6 w-6 text-white duration-150 hover:scale-125"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
