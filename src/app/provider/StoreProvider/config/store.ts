import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { StateSchema } from './StateSchema';
import { $api } from '../../../../shared/api/api';
import { userReducer } from '../../../../entities/User/model/slice/userSlice';

export function createReduxStore() {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducer,
	};

	const store = configureStore({
		reducer: rootReducer,
		devTools: true,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
					},
				},
			}),
	});

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
