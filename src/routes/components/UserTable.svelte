<script lang="ts">
	import UserRow from './UserRow.svelte';
	import type { User } from '../../lib/types';

	export let users: User[] = [];
	export let openCreateModal: (() => void) | undefined;
	export let openEditModal: ((user: User) => void) | undefined;
	export let handleDeleteUser: ((id: number) => void) | undefined;
</script>

<div class="flex w-full justify-center">
	<div class="w-[75%]">
		<div class="mb-2 flex justify-end">
			<button
				on:click={openCreateModal}
				class="bg-primary hover:text-primary hover:border-primary hover: border-2 px-4 py-2 text-white hover:border-2 hover:bg-white"
				>Create New User</button
			>
		</div>

		<h2 class="bg-primary p-2 text-white">User List</h2>

		<table class="border-primary w-full border-collapse border-2">
			<thead>
				<tr>
					<th class="p-2"><h3>Avatar</h3></th>
					<th class="p-2"><h3>First Name</h3></th>
					<th class="p-2"><h3>Last Name</h3></th>
					<th class="p-2"><h3>Email Address</h3></th>
				</tr>
			</thead>
			<tbody>
				{#each users as user}
					<UserRow {user} {openEditModal} {handleDeleteUser} />
				{/each}
			</tbody>
		</table>
	</div>
</div>
