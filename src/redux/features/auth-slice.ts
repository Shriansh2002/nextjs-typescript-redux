import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
	value: AuthState;
};
type AuthState = {
	isAuth: boolean;
	username: string;
	uid: string;
	isModerator: boolean;
};

const initialState = {
	value: {
		isAuth: false,
		username: '',
		uid: '',
		isModerator: false,
	} as AuthState,
} as InitialState;

export const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut: () => {
			return initialState;
		},
		logIn: (state, acation: PayloadAction<string>) => {
			return {
				value: {
					isAuth: true,
					username: acation.payload,
					uid: 'yutghva89de92149c',
					isModerator: false,
				},
			};
		},
		toogleModerator: (state) => {
			state.value.isModerator = !state.value.isModerator;
		},
	},
});

export const { logIn, logOut, toogleModerator } = auth.actions;
export default auth.reducer;
