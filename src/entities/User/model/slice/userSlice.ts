import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User, UserSchema } from '../types/UserSchema';
import { fetchUsers } from '../services/fetchUsers/fetchUsers';

const initialState: UserSchema = {
	data: undefined,
	error: undefined,
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action: PayloadAction<string | undefined>) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
