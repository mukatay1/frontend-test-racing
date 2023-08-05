import { createAsyncThunk } from '@reduxjs/toolkit';

import { User } from '../../types/UserSchema';
import { ThunkConfig } from '../../../../../app/provider/StoreProvider/config/StateSchema';
import { USER_TOTAL_COUNT_PER_PAGE } from '../../../../../shared/common/common';

export interface FetchUsersProps {
	indexStart?: number | undefined;
}

export const fetchUsers = createAsyncThunk<User[], FetchUsersProps, ThunkConfig<string>>(
	'user/fetchUsers',
	async ({ indexStart }, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;
		try {
			const response = await extra.api.get<User[]>(
				`/users?limit=${USER_TOTAL_COUNT_PER_PAGE}&indexStart=${indexStart}`,
			);
			return response.data;
		} catch (e) {
			return rejectWithValue('Error');
		}
	},
);
