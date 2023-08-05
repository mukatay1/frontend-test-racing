import { AxiosInstance } from 'axios';

import { UserSchema } from '../../../../entities/User/model/types/UserSchema';

export interface StateSchema {
	user: UserSchema;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
}
