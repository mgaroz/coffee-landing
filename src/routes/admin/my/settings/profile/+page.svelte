<script>
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Input, Button } from '$lib';
	import { getImageURL } from '$lib/utils';

	export let data;
	let loading;
	$: loading = false;

	const showPreview = (event) => {
		const target = event.target;
		const files = target.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');
			preview.src = src;
		}
	};

	const submitUpdateProfile = () => {
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

<div class="flex h-full w-full flex-col">
	<form
		action="?/updateProfile"
		method="POST"
		class="flex w-full flex-col space-y-2"
		enctype="multipart/form-data"
		use:enhance={submitUpdateProfile}
	>
		<h3 class="text-2xl font-medium">Update Profile</h3>
		<span class="block w-full bg-[#E5E7EB] p-[1px]" />
		<div class="w-full max-w-lg">
			<label for="avatar" class="label pb-1 font-medium">
				<span class="label-texxt">Profile Picture</span>
			</label>
			<label for="avatar" class="w-32 rounded-full hover:cursor-pointer">
				<div class="w-32 rounded-full">
					<div class="relative">
						<img
							src={data.user?.avatar
								? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
								: `https://ui-avatars.com/api/?name=${data.user?.name}`}
							alt="user avatar"
							class="w-32 rounded-full"
							id="avatar-preview"
						/>
						<span
							class="bg-color-white absolute bottom-1 right-2 h-8 w-8 rounded-full border-2 border-[#405189] text-center align-middle"
							><i class="fa-solid fa-pencil text-lg text-[#405189] " /></span
						>
					</div>
				</div>
			</label>
			<input
				type="file"
				name="avatar"
				id="avatar"
				value=""
				accept="image/*"
				hidden
				on:change={showPreview}
				disabled={loading}
			/>
		</div>
		<Input id="name" label="Name" value={data?.user?.name} disabled={loading} />
		<div class="w-full max-w-lg pt-3 text-right">
			<Button {loading} value="Update Profile" />
		</div>
	</form>
</div>
