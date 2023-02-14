<div class="bg-color-background flex h-screen w-full items-center justify-center">
	<div class="h-full w-2/3 overflow-hidden">
		<img src="img/login-bg.webp" alt="login background" class="h-full w-full object-cover" />
	</div>
	<div
		class="bg-color-green text-color-white flex h-full w-1/3 flex-col items-center justify-center gap-8"
	>
		<div class="flex h-1/2 flex-col items-center justify-around gap-4">
			<img src="img/logo.png" alt="logo" class="w-2/3" />
			<div class="text-center">
				<h1 class="text-3xl">Welcome back</h1>
				<p>Please log in to continue</p>
			</div>
		</div>
		<form action="POST" class="flex h-1/2 w-5/6 flex-col items-center justify-start gap-4">
			<div class="relative z-0">
				<input
					type="email"
					class="text-color-white peer block w-full appearance-none border-b-[1px] bg-[transparent] p-2 focus:outline-none"
					placeholder=" "
					required
					id="username"
				/>
				<label
					for="username"
					class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
					>Email</label
				>
			</div>
			<div class="relative z-10">
				<input
					type="password"
					class="text-color-white peer block w-full appearance-none border-b-[1px] bg-[transparent] p-2 focus:outline-none"
					placeholder=" "
					required
					id="password"
				/>
				<label
					for="password"
					class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
					>Password</label
				>
			</div>
			<div class="relative z-0 w-[333px] text-right">
				<a href="/login" class="block appearance-none text-xs text-white hover:underline"
					>Forgot password?</a
				>
			</div>
			<button
				class="hover:bg-color-white hover:text-color-background w-[20vmin] rounded-3xl border-[1px] pt-2 pb-2 pr-6 pl-6 duration-150"
				>Sign in</button
			>
		</form>
	</div>
</div>
