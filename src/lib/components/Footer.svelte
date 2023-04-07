<script>
	import { activeItem } from '$lib/stores.js';

	import instagram from '$lib/img/instagram.svg';
	import linkedin from '$lib/img/linkedin-in.svg';
	import twitter from '$lib/img/twitter.svg';
	import youtube from '$lib/img/youtube.svg';

	let socials = [
		{
			name: 'instagram',
			link: 'https://www.instagram.com/',
			icon: instagram
		},
		{
			name: 'linkedin',
			link: 'https://www.linkedin.com/',
			icon: linkedin
		},
		{
			name: 'twitter',
			link: 'https://twitter.com/',
			icon: twitter
		},
		{
			name: 'youtube',
			link: 'https://www.youtube.com/',
			icon: youtube
		}
	];

	let menuItems = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'About',
			link: '#about'
		},
		{
			name: 'Menu',
			link: '#themenu'
		},
		{
			name: 'News',
			link: '#news'
		},
		{
			name: 'Contact',
			link: '#contact'
		}
	];

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
						class="mx-auto h-auto cursor-pointer md:w-[144px]"
						width="144"
						height="90"
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
					{#each menuItems as { name, link }}
						<li>
							<a
								href={link}
								class="duration-150 hover:underline"
								on:click={() => setActiveItem(name.toLowerCase())}>{name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="font-playfair mx-auto self-center text-center md:w-[30vmin]">
				<div class="w-full text-2xl font-light">
					{#each socials as { name, link, icon }}
						<a href={link} target="_blank" class="mr-2" rel="noreferrer">
							<img
								src={icon}
								alt={name}
								class="inline-block h-6 w-6 text-white duration-150 hover:scale-125"
							/>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
