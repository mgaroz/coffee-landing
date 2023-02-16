<script>
	import { getImageURL } from '$lib/utils';
	import { scale } from 'svelte/transition';
	let menuOpen = false;
	export let data;

	function handleMenuOpen() {
		menuOpen = true;
		document.body.addEventListener('click', handleMenuClose);
	}

	function handleMenuClose() {
		menuOpen = false;
		document.body.removeEventListener('click', handleMenuClose);
	}
</script>

<div class="wrapper h-full w-full">
	<header class="col-[2_/_span_1] row-[1_/_span_1]">
		<nav class="flex h-16 w-full items-center  justify-between bg-[#FFFFFE]">
			<div class="flex w-full items-center justify-between">
				<div class="text-color-background flex w-full items-center justify-end gap-4 pr-4">
					<i class="fa-solid fa-gear text-color-background text-xl" />
					<div class="relative inline-block text-left">
						<div>
							<button
								type="button"
								class="text-color-background inline-flex w-full items-center justify-center gap-2 rounded-md bg-transparent px-4 py-2 text-sm font-medium  hover:bg-gray-50 focus:outline-none"
								id="menu-button"
								aria-expanded="true"
								aria-haspopup="true"
								on:click|stopPropagation={handleMenuOpen}
							>
								<img
									src={data.user?.avatar
										? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
										: `https://ui-avatars.com/api/?name=${data.user?.name}`}
									alt="me"
									class="h-8 w-8 rounded-full"
								/>
								<p class="text-color-background text-sm">{data.user?.name}</p>
								<i class="fa-solid fa-chevron-down text-[8px]" />
							</button>
						</div>
						{#if menuOpen}
							<div
								class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
								tabindex="-1"
								transition:scale
							>
								<div class="py-1" role="none">
									<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
									<a
										href="/admin/my/settings"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100"
										role="menuitem"
										tabindex="-1"
										id="menu-item-0">Account settings</a
									>
									<a
										href="/lic"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100"
										role="menuitem"
										tabindex="-1"
										id="menu-item-2">License</a
									>
									<form method="POST" action="/logout" role="none">
										<button
											type="submit"
											class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-slate-100"
											role="menuitem"
											tabindex="-1"
											id="menu-item-3">Sign out</button
										>
									</form>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</nav>
	</header>
	<aside
		class="text-color-white col-[1_/_span_1] row-[1_/_span_2] flex h-full w-[26vmin] flex-col gap-4 bg-[#405189] text-sm font-medium"
	>
		<div class="mt-4 mb-4 bg-[#405189] object-cover">
			<img src="/img/andys_logo_300.webp" alt="logo" class="mx-auto h-auto w-1/2 align-middle" />
		</div>
		<div class="flex flex-col items-center justify-center gap-2">
			<img
				src={data.user?.avatar
					? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
					: `https://ui-avatars.com/api/?name=${data.user?.name}`}
				alt="me2"
				class="mx-auto h-auto w-14 rounded-full"
			/>
			<p class="text-[#fffffe]">{data.user?.name}</p>
			<p class="text-xs font-medium text-[#ABB9E8]">Administrator</p>
			<div class="flex gap-3 pt-2 text-xs">
				<a href="/admin/my/settings">
					<i class="fa-solid fa-gear" />
				</a>
				<a href="/" action="/logout" method="POST">
					<i class="fa-solid fa-power-off" />
				</a>
			</div>
		</div>
		<div class="group flex h-12 items-center gap-4">
			<div class="h-12" />
			<i class="fa-solid fa-house text-xs text-[#ABB9E8] group-hover:text-[#fffffe]" />
			<a href="/" class="group-hover:text-color-white text-[#ABB9E8]">Home</a>
		</div>
		<div class="group flex h-12 items-center gap-4">
			<div class="h-12" />
			<i class="fa-solid fa-pen-to-square text-xs text-[#ABB9E8] group-hover:text-[#fffffe]" />
			<a href="/" class="group-hover:text-color-white text-[#ABB9E8]">Posts</a>
		</div>
		<div class="group flex h-12 items-center gap-4">
			<div class="h-12" />
			<i class="fa-solid fa-gear text-xs text-[#ABB9E8] group-hover:text-[#fffffe]" />
			<a href="/admin/my/settings" class="group-hover:text-color-white text-[#ABB9E8]">Settings</a>
		</div>
		<div class="group flex h-12 items-center gap-4">
			<div class="h-12" />
			<i class="fa-solid fa-right-from-bracket text-xs text-[#ABB9E8] group-hover:text-[#fffffe]" />
			<a href="/" class="text-[#ABB9E8] group-hover:text-[#fffffe]">Logout</a>
		</div>
	</aside>
	<slot class="col-[2_/_span_1] row-[2_/_span_1]" />
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: auto 2fr;
		grid-template-rows: auto 1fr;
	}
</style>
