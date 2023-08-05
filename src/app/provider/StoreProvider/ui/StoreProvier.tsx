import { Provider } from 'react-redux';
import { ReactNode } from 'react';

import { createReduxStore } from '../config/store';

export interface StoreProviderProps {
	children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children } = props;
	const store = createReduxStore();
	return <Provider store={store}>{children}</Provider>;
};
