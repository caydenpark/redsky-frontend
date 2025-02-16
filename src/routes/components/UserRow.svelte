<script lang="ts">
	import type { User } from '../../lib/types';
	export let user: User;
	export let openEditModal: ((user: User) => void) | undefined;
	export let handleDeleteUser: ((id: number) => void) | undefined;

	function handleDelete() {
		if (handleDeleteUser) {
			handleDeleteUser(user.id);
		}
	}

	function handleEdit() {
		openEditModal(user);
	}
</script>

<tr class="border-gray border-t text-center">
	<td class="p-2">
		<img src={user.avatar} alt="Avatar" class="mx-auto h-10 w-10" />
	</td>
	<td class="p-2">{user.first_name}</td>
	<td class="p-2">{user.last_name}</td>
	<td class="p-2">{user.email}</td>
	<td class="p-2">
		<button
			class="bg-primary hover:border-primary hover: hover:text-primary border-primary mr-4 border-2 px-4 py-2 text-white hover:bg-white"
			on:click={handleEdit}
			>Edit
		</button>
		<button
			class="bg-primary hover:border-primary hover: hover:text-primary border-primary border-2 px-4 py-2 text-white hover:bg-white"
			on:click={handleDelete}>Delete</button
		>
	</td>
</tr>
