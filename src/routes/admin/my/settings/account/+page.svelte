<script>
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Input, Modal } from '$lib';

	export let form;
	export let data;
	let emailModalOpen;
	let usernameModalOpen;
	let loading;

	$: emailModalOpen = false;
	$: usernameModalOpen = false;
	$: loading = false;

	const submitUpdateEmail = () => {
		loading = true;
		emailModalOpen = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					emailModalOpen = false;
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};

	const submitUpdateUsername = () => {
		loading = true;
		usernameModalOpen = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					usernameModalOpen = false;
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

<div class="flex h-full w-full flex-col space-y-12">
	<div class="w-full">
		<h3 class="text-2xl font-medium">Change Email</h3>
		<span class="mb-6 block w-full bg-[#E5E7EB] p-[1px]" />
		<Modal label="change-email" checked={emailModalOpen}>
			<span
				slot="trigger"
				class="rounded-full bg-[#405189] px-4 py-2 text-white shadow-lg duration-150 hover:cursor-pointer hover:bg-[#405189CC]"
				on:click={() => (emailModalOpen = true)}
				on:keypress={() => (emailModalOpen = true)}>Change Email</span
			>
			<h3 slot="heading" class="text-2xl">Change your email</h3>
			<form action="?/updateEmail" method="POST" class="space-y-2" use:enhance={submitUpdateEmail}>
				<Input
					id="email"
					type="email"
					required={true}
					value={form?.data?.email}
					label="Enter your new email address"
					disabled={loading}
				/>
				<div class="text-right">
					<button
						type="button"
						class="full text-color-background border-color-background disabled:text-color-background/25 disabled:border-color-background/25 mr-4 rounded-full border bg-transparent px-4 py-2 duration-150 hover:cursor-pointer hover:bg-[#F3F3F9]"
						on:click={() => (emailModalOpen = false)}
						disabled={loading}>Cancel</button
					>
					<button
						type="submit"
						class="rounded-full bg-[#405189] px-4 py-2 text-white shadow-lg duration-150 hover:cursor-pointer hover:bg-[#405189CC] disabled:bg-[#40518940]"
						disabled={loading}>Change my email</button
					>
				</div>
			</form>
		</Modal>
	</div>
	<div class="w-full">
		<h3 class="text-2xl font-medium">Change Username</h3>
		<span class="block w-full bg-[#E5E7EB] p-[1px]" />
		<Input id="username" label="Username" value={data?.user?.username} disabled />
		<br />
		<Modal label="change-username" checked={usernameModalOpen}>
			<span
				slot="trigger"
				class="rounded-full bg-[#405189] px-4 py-2 text-white shadow-lg duration-150 hover:cursor-pointer hover:bg-[#405189CC]"
				on:click={() => (usernameModalOpen = true)}
				on:keypress={() => (usernameModalOpen = true)}>Change Username</span
			>
			<h3 slot="heading" class="text-2xl">Change your username</h3>
			<form
				action="?/updateUsername"
				method="POST"
				class="space-y-2"
				use:enhance={submitUpdateUsername}
			>
				<Input
					id="username"
					type="text"
					required={true}
					value={form?.data?.username}
					label="Enter your new username"
					disabled={loading}
				/>
				<div class="text-right">
					<button
						type="button"
						class="full text-color-background border-color-background disabled:text-color-background/25 disabled:border-color-background/25 mr-4 rounded-full border bg-transparent px-4 py-2 duration-150 hover:cursor-pointer hover:bg-[#F3F3F9]"
						on:click={() => (usernameModalOpen = false)}
						disabled={loading}>Cancel</button
					>
					<button
						type="submit"
						class="rounded-full bg-[#405189] px-4 py-2 text-white shadow-lg duration-150 hover:cursor-pointer hover:bg-[#405189CC] disabled:bg-[#40518940]"
						disabled={loading}>Change my username</button
					>
				</div>
			</form>
		</Modal>
	</div>
</div>
