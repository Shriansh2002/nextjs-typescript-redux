'use client';

import LogIn from './Login';

import { useAppSelector } from '@/redux/store';

export default function page() {
	const username = useAppSelector(
		(state) => state.authReducer.value.username
	);
	const isModerator = useAppSelector(
		(state) => state.authReducer.value.isModerator
	);

	return (
		<main className="flex min-h-screen flex-col items-center">
			<LogIn />

			<h1>Username: {username}</h1>

			{isModerator && <p>This user is moderator</p>}
		</main>
	);
}
