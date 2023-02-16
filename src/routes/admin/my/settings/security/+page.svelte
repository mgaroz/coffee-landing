<script>
	import { Input } from '$lib';
</script>

<div class="flex h-full w-full flex-col">
	<div class="w-full">
		<form action="?/updatePassword" method="POST" class="flex w-full flex-col space-y-2">
			<h3 class="text-3xl font-medium">Change Password</h3>
			<span class="block w-full bg-[#E5E7EB] p-[1px]" />
			<Input id="oldPassword" label="Old Password" type="password" required />
			<Input id="password" label="New Password" type="password" required />
			<Input id="passwordConfirm" label="Confirm New Password" type="password" required />
			<a href="/reset-password" class="text-sm text-[#405189] hover:cursor-pointer hover:underline"
				>I forgot my password</a
			>
			<div class="w-full max-w-lg pt-3">
				<button
					type="submit"
					class="rounded-full bg-[#405189] px-4 py-2 text-white shadow-lg duration-150 hover:cursor-pointer hover:bg-[#405189CC]"
					>Update password</button
				>
			</div>
		</form>
	</div>
</div>
