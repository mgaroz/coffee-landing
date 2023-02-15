<script>
	import { activeItem } from '$lib/stores.js';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<nav
	class="fixed left-0 right-0 z-10 m-auto w-[1440px] bg-[#ffffff00] duration-200"
	class:frosty={y >= 100}
>
	<div class="mr-auto ml-auto flex w-[95%] items-center justify-between bg-[#ffffff00] pt-2 pb-2">
		<div class="font-merriweather text-color-white">
			<a href="/" on:click={() => activeItem.set('home')}>
				<img src="img/logo.png" alt="logo" class="max-h-12" />
			</a>
		</div>
		<div class="text-color-white flex gap-8">
			<a
				href="/"
				on:click={() => activeItem.set('home')}
				class={$activeItem === 'home' ? 'active' : 'attiv'}>Home</a
			>
			<a
				href="#about"
				on:click={() => activeItem.set('about')}
				class={$activeItem === 'about' ? 'active' : 'attiv'}>About</a
			>
			<a
				href="#themenu"
				on:click={() => activeItem.set('themenu')}
				class={$activeItem === 'themenu' ? 'active' : 'attiv'}>Menu</a
			>
			<a
				href="#news"
				on:click={() => activeItem.set('news')}
				class={$activeItem === 'news' ? 'active' : 'attiv'}>News</a
			>
			<a
				href="#contact"
				on:click={() => activeItem.set('contact')}
				class={$activeItem === 'contact' ? 'active' : 'attiv'}>Contact</a
			>
		</div>
		<div class="flex gap-2">
			<a
				href="/login"
				class="text-color-white hover:bg-color-white hover:text-color-background hover:border-color-white rounded-3xl border-[1px] pl-6 pr-6 pt-2 pb-2 duration-150"
				>Login</a
			>
			<button
				class="text-color-white bg-color-green rounded-3xl border-[1px] pl-4 pr-4 pt-2 pb-2 duration-150"
				>Sign Up</button
			>
		</div>
	</div>
</nav>

<style>
	.frosty {
		background-color: rgba(27, 27, 27, 0.5);
		backdrop-filter: blur(10px);
	}

	.active {
		color: white;
		overflow: hidden;
		position: relative;
	}

	.active:before {
		position: absolute;
		content: '';
		width: 35%;
		height: 1px;
		border-bottom: 2px solid white;
		bottom: 0;
	}

	.attiv {
		color: white;
		overflow: hidden;
		position: relative;
	}

	.attiv:before {
		position: absolute;
		content: '';
		width: 0%;
		height: 1px;
		border-bottom: 2px solid white;
		bottom: 0;
		transition: width 0.3s;
	}

	.attiv:after {
		opacity: 1;
		transform: scale(0);
		transform-origin: left;
		background-color: white;
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 35%;
		height: 0.1em;
		transition: opacity 300ms, transform 300ms;
	}

	.attiv:hover:before {
		width: 35%;
	}
</style>
