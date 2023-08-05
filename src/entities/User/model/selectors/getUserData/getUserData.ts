import { StateSchema } from '../../../../../app/provider/StoreProvider/config/StateSchema';

export const getUserData = (state: StateSchema) => state.user?.data;
