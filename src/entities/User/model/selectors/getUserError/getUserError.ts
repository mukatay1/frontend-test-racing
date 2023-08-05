import { StateSchema } from '../../../../../app/provider/StoreProvider/config/StateSchema';

export const getUserError = (state: StateSchema) => state.user?.error;
