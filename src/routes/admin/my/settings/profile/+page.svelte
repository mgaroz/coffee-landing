<div class="flex h-full w-full flex-col">
	<form action="?/updateProfile" method="POST" class="flex w-full flex-col space-y-2">
		<h3 class="text-2xl font-medium">Update Profile</h3>
		<div class="w-full max-w-lg">
			<label for="avatar" class="label pb-1 font-medium">
				<span class="label-texxt">Profile Picture</span>
			</label>
			<label for="avatar" class="w-32 rounded-full">
				<div class="w-32 rounded-full hover:cursor-pointer">
					<img src="https://placeimg.com/80/80/people" alt="user avatar" class="rounded-full" />
				</div>
			</label>
			<input type="file" name="avatar" id="avatar" value="" accept="image/*" hidden />
		</div>
	</form>
</div>
