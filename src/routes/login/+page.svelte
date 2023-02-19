<script>
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Button } from '$lib';
	export let form;

	let loading;

	$: loading = false;

	const submitLogin = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<div class="bg-color-background flex h-screen w-full items-center justify-center">
	<div class="h-full w-2/3 overflow-hidden sm:hidden md:block">
		<img src="img/login-bg.webp" alt="login background" class="h-full w-full object-cover" />
	</div>
	<div
		class="bg-color-green text-color-white flex h-full w-1/3 flex-col items-center justify-center gap-8 sm:w-full md:w-1/3"
	>
		<div class="flex h-1/2 flex-col items-center justify-around gap-4">
			<img src="img/logo.png" alt="logo" class="w-1/2" />
			<div class="text-center">
				<h1 class="text-3xl">Welcome back</h1>
				<p>Please log in to continue</p>
			</div>
		</div>
		<form
			action="?/login"
			method="POST"
			class="flex h-1/2 w-full flex-col items-center justify-start gap-4"
			use:enhance={submitLogin}
		>
			<div class="relative z-10 w-[52%]">
				<input
					type="email"
					class="text-color-white border-color-white focus:border-color-white peer block w-full appearance-none border-0 border-b-[1px] bg-[transparent] p-2 focus:outline-none focus:ring-0"
					placeholder=" "
					required
					id="email"
					name="email"
				/>
				<label
					for="email"
					class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white"
					>Email</label
				>
			</div>
			<div class="relative z-10 w-[52%]">
				<input
					type="password"
					class="text-color-white border-color-white focus:border-color-white peer block w-full appearance-none border-0 border-b-[1px] bg-[transparent] p-2 focus:outline-none focus:ring-0"
					placeholder=" "
					required
					id="password"
					name="password"
				/>
				<label
					for="password"
					class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white"
					>Password</label
				>
			</div>
			<div class="relative z-0 w-[52%] text-right">
				<a href="/reset-password" class="block appearance-none text-xs text-white hover:underline"
					>Forgot password?</a
				>
			</div>
			<Button
				value="Sign in"
				{loading}
				background="bg-transparent"
				hover="hover:text-color-background hover:bg-color-white"
				border="border border-color-white"
			/>
			{#if form?.notVerified}
				<div
					class="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 shadow-lg dark:bg-red-50 dark:text-red-400"
					role="alert"
				>
					<i class="fa-regular fa-circle-xmark align-middle text-xl" />
					<span class="align-middle font-bold">Not verified!</span>
					<span class="align-middle">You must verify your email before you can login</span>
				</div>
			{/if}
		</form>
	</div>
</div>
