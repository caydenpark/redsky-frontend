<script lang="ts">
	import { updateUser } from '../../lib/index';

	export let user: {
		id: number;
		first_name: string;
		last_name: string;
		email: string;
		avatar: string;
	};
	export let close: () => void;
	export let handleUpdateUser: (updatedUser: any) => void;

	let id = user.id;
	let updatedUser = { ...user };

	async function handleUpdate() {
		try {
			await updateUser(user.id, updatedUser);
			alert('User updated successfully!');
			handleUpdateUser(updatedUser);
			close();
		} catch (error) {
			console.error('Error updating user:', error);
			alert('Failed to update user!');
		}
	}

	function closeModal() {
		const event = new CustomEvent('close', { bubbles: true });
		dispatchEvent(event);
	}
</script>

<h2 class="bg-primary p-4 text-white">Edit User</h2>
<div class="p-6">
	<form on:submit|preventDefault={handleUpdate}>
		<div class="mb-4">
			<label for="first_name" class="mb-2 block text-sm font-bold text-gray-700"
				><h3>First Name</h3></label
			>
			<input
				type="text"
				id="first_name"
				bind:value={updatedUser.first_name}
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
				bind:value={updatedUser.last_name}
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="mb-2 block text-sm font-bold text-gray-700"><h3>Email</h3></label>
			<input
				type="email"
				id="email"
				bind:value={updatedUser.email}
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
			/>
		</div>
		<div class="mb-4">
			<label for="avatar" class="mb-2 block text-sm font-bold text-gray-700"><h3>Avatar</h3></label>
			<input
				type="url"
				id="avatar"
				bind:value={updatedUser.avatar}
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
			/>
		</div>

		<div class="mt-4 flex justify-end space-x-2">
			<button
				type="button"
				class="text-primary border-primary hover:border-secondary border-3 px-4 py-2 hover:border-3"
				on:click={close}>Cancel</button
			>
			<button
				type="submit"
				class="bg-primary hover:border-secondary border-primary border-3 px-4 py-2 text-white hover:border-3"
			>
				Save
			</button>
		</div>
	</form>
</div>
