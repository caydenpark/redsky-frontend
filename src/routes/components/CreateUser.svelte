<script lang="ts">
	import type { User } from '$lib/types';
	import toast, { Toaster } from 'svelte-french-toast';

	export let close: () => void;
	export let on: { create: (newUser: any) => void };
	export let handleCreateUser: (newUser: User) => void;

	let newUser = {
		id: 0,
		avatar: '',
		first_name: '',
		last_name: '',
		email: ''
	};

	function handleSubmit() {
		handleCreateUser(newUser);
		toast.success(`${newUser.first_name} ${newUser.last_name} created successfully!`);
	}

	function closeModal(event: Event) {
		close();
	}
</script>

<Toaster />

<h2 class="bg-primary p-4 text-white">Create New User</h2>
<div class="p-6">
	<form on:submit|preventDefault={handleSubmit}>
		<div class="mb-4">
			<label for="first_name" class="mb-2 block text-sm font-bold text-gray-700"
				><h3>First Name</h3></label
			>
			<input
				type="text"
				id="first_name"
				bind:value={newUser.first_name}
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
			/>
		</div>
		<div class="mb-4">
			<label for="last_name" class="mb-2 block text-sm font-bold text-gray-700"
				><h3>Last Name</h3></label
			>
			<input
				type="text"
				id="last_name"
				bind:value={newUser.last_name}
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="mb-2 block text-sm font-bold text-gray-700"><h3>Email</h3></label>
			<input
				type="email"
				id="email"
				bind:value={newUser.email}
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
			/>
		</div>
		<div class="mb-4">
			<label for="avatar" class="mb-2 block text-sm font-bold text-gray-700"><h3>Avatar</h3></label>
			<input
				type="url"
				id="avatar"
				bind:value={newUser.avatar}
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
			/>
		</div>

		<div class="mt-4 flex justify-end space-x-2">
			<button
				type="button"
				class="text-primary border-primary hover:border-secondary border-3 px-4 py-2 hover:border-3"
				on:click={closeModal}>Cancel</button
			>
			<button
				type="button"
				class="bg-primary hover:border-secondary border-primary border-3 px-4 py-2 text-white hover:border-3"
				on:click={handleSubmit}>Create</button
			>
		</div>
	</form>
</div>
