'use client';

import { useState } from 'react';

import {
	logIn,
	logOut,
	toogleModerator,
} from '@/redux/features/auth-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';

export default function Login() {
	const [username, setUsername] = useState('');

	const dispatch = useDispatch<AppDispatch>();

	const isAuth = useAppSelector(
		(state) => state.authReducer.value.isAuth
	);

	const onClickLogIn = () => {
		dispatch(logIn(username));
	};

	const onClickToggle = () => {
		dispatch(toogleModerator());
	};

	const onClickLogOut = () => {
		dispatch(logOut());
	};

	return (
		<div className="w-screen p-12 flex flex-col px-44">
			<input
				type="text"
				onChange={(e) => setUsername(e.target.value)}
				className="border-2 border-gray-300 p-2 rounded w-full"
				placeholder="Enter Username:"
			/>
			<div className="flex gap-10 p-2">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
					onClick={onClickLogIn}
				>
					Login
				</button>
				<button
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2"
					onClick={onClickLogOut}
				>
					Logout
				</button>
			</div>

			{isAuth && (
				<button
					onClick={onClickToggle}
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				>
					Toggle Moderator status
				</button>
			)}
		</div>
	);
}
