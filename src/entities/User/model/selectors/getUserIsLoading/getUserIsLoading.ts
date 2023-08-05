import { StateSchema } from '../../../../../app/provider/StoreProvider/config/StateSchema';

export const getUserIsLoading = (state: StateSchema) => state.user?.isLoading;
