<script>
	const navigation = [
		{
			title: 'Profile',
			href: '/admin/my/settings/profile',
			icon: '<i class="fa-solid fa-user"></i>'
		},
		{
			title: 'Account',
			href: '/admin/my/settings/account',
			icon: '<i class="fa-solid fa-layer-group"></i>'
		},
		{
			title: 'Security',
			href: '/admin/my/settings/security',
			icon: '<i class="fa-solid fa-lock"></i>'
		}
	];

	let active = 'Profile';
</script>

<div class="h-full w-full bg-[#F3F3F9] px-4">
	<div class="my-4">
		<h3 class="text-3xl font-medium">Settings</h3>
		<p class="text-sm">Change your profile and account settings</p>
	</div>
	<div class="bg-color-white flex w-full">
		<div class="flex w-1/5 space-x-4 border-r-2">
			<ul class="bg-base-100 m-4 flex w-56 flex-col gap-10 rounded-2xl text-slate-600">
				{#each navigation as navItem}
					<li
						class="rounded-2xl  {active === navItem.title
							? 'font-bold text-slate-800'
							: 'font-medium'} hover:font-bold"
						on:click={() => (active = navItem.title)}
						on:keypress={() => (active = navItem.title)}
					>
						{@html navItem.icon}
						<a href={navItem.href} class="h-full p-4">{navItem.title}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="mx-6 my-8 flex-1">
			<slot />
		</div>
	</div>
</div>
