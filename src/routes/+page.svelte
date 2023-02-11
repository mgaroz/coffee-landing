<script>
	import { NavBar, Hero, About, Gallery } from '$lib';
	import TheMenu from '../lib/components/TheMenu.svelte';
</script>

<div class="bg-color-background min-w-screen min-h-100 ">
	<header>
		<NavBar />
	</header>
	<Hero />
	<About />
	<Gallery />
	<TheMenu />
</div>
