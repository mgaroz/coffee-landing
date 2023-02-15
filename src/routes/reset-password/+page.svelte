<script>
	export let form;
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
				<h1 class="text-3xl">Reset password</h1>
				<p>Please enter your email</p>
			</div>
		</div>
		<form
			action="?/resetPassword"
			method="POST"
			class="flex h-1/2 w-full flex-col items-center justify-start gap-4"
		>
			<div class="relative z-10 w-[52%]">
				<input
					type="email"
					class="text-color-white peer block w-full appearance-none border-b-[1px] bg-[transparent] p-2 focus:outline-none"
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
			<button
				type="submit"
				class="hover:bg-color-white hover:text-color-background w-[20vmin] rounded-3xl border-[1px] pt-2 pb-2 pr-6 pl-6 duration-150"
				>Reset password</button
			>
			{#if form?.success}
				<div
					class="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-800 shadow-lg dark:bg-gray-800 dark:text-green-400"
					role="alert"
				>
					<i class="fa-regular fa-circle-check align-middle text-xl" />
					<span class="align-middle font-bold">Success!</span>
					<span class="align-middle">An email has been sent to reset your password.</span>
				</div>
			{/if}
		</form>
	</div>
</div>
