import React from 'react';
import App from './App';
import './main.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container as Element);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
