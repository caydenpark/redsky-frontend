import type { User } from './types';

const API_URL = 'http://localhost:3000';

// Pull initial list of users
export async function fetchUsers(): Promise<User[]> {
	const res = await fetch(`${API_URL}/users`);
	return res.json();
}

export async function createUser(userData: Partial<User>): Promise<User> {
	const res = await fetch(`${API_URL}/users`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userData)
	});
	return res.json();
}

export async function updateUser(id: number, userData: Partial<User>): Promise<User> {
	const res = await fetch(`${API_URL}/users/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userData)
	});
	return res.json();
}

export async function deleteUser(id: number): Promise<void> {
	await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
}
