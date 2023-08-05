import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../app/provider/StoreProvider/config/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
