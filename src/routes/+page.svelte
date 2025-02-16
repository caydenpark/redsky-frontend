<script lang="ts">
	import { onMount } from 'svelte';
	import UserTable from './components/UserTable.svelte';
	import CreateUser from './components/CreateUser.svelte';
	import EditUser from './components/EditUser.svelte';
	import Modal from './components/Modal.svelte';
	import { fetchUsers } from '../lib/index';
	import type { User } from '$lib/types';

	let users: User[] = [];
	let showCreateModal = false;
	let showEditModal = false;
	let selectedUser: User | null = null;

	onMount(async () => {
		users = await fetchUsers();
	});

	function openCreateModal() {
		showCreateModal = true;
	}

	function openEditModal(user: User) {
		selectedUser = user;
		showEditModal = true;
	}

	const handleCreateUser = (newUser: User) => {
		users = [...users, newUser];
		closeModals();
	};

	async function handleUpdateUser(updatedUser: User) {
		const index = users.findIndex((user) => user.id === updatedUser.id);
		if (index !== -1) {
			users[index] = updatedUser;
		}
		closeModals();
	}

	async function handleDeleteUser(id: number) {
		users = users.filter((user) => user.id !== id);
		closeModals();
	}

	export function closeModals() {
		showCreateModal = false;
		showEditModal = false;
		selectedUser = null;
	}
</script>

<h1 class="mx-auto w-[85%] pt-12">Redsky Coding Challenge</h1>
<hr class="mx-auto my-4 w-[85%] border-gray-300" />

<UserTable
	{users}
	{openCreateModal}
	{openEditModal}
	{handleDeleteUser}
	on:edit={(e) => openEditModal(e.detail)}
	on:create={openCreateModal}
/>

<!-- Create User Modal -->
<Modal bind:show={showCreateModal}>
	<CreateUser close={closeModals} {handleCreateUser} />
</Modal>

<!-- Edit User Modal -->
<Modal bind:show={showEditModal}>
	<EditUser close={closeModals} {handleUpdateUser} user={selectedUser} />
</Modal>
