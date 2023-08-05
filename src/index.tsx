// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import { App } from './app/App';
import { StoreProvider } from './app/provider/StoreProvider/ui/StoreProvier';
import './app/styles/index.scss';

render(
	<StoreProvider>
		<App />
	</StoreProvider>,
	document.getElementById('root'),
);
