<script>
	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<nav
	class="fixed left-0 right-0 z-10 m-auto mr-auto ml-auto w-full bg-[#ffffff00]"
	class:frosty={y >= 100}
>
	<div class="mr-auto ml-auto flex w-[95%] items-center justify-between bg-[#ffffff00] pt-2 pb-2">
		<div class="font-merriweather text-color-white">
			<img src="img/logo.png" alt="logo" class="max-h-12" />
		</div>
		<div class="text-color-white flex gap-8">
			<a href="/">Home</a>
			<a href="#about">About</a>
			<a href="#themenu">Menu</a>
			<a href="#news">News</a>
			<a href="#contact">Contact</a>
		</div>
		<div class="flex gap-2">
			<button
				class="text-color-white hover:bg-color-white hover:text-color-background rounded-3xl border-[1px] pl-6 pr-6 pt-2 pb-2 duration-150"
				>Login</button
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
</style>
