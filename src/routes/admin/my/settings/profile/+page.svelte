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
							class="bg-color-white absolute bottom-1 right-2 h-8 w-8 rounded-full border border-white text-center align-middle dark:border-gray-800"
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
			<!-- <button
				class="text-color-white inline-flex w-1/3 max-w-lg items-center justify-center rounded-full bg-[#405189] py-2 shadow-lg duration-150 hover:bg-[#405189CC]"
				type="submit"
				disabled={loading}
			>
				{#if loading}
					<svg
						class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						/>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
					Processing...
				{:else}
					Update Profile
				{/if}
			</button> -->
			<Button {loading} value="Update Profile" />
		</div>
	</form>
</div>
