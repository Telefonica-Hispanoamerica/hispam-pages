import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';

//Kenos
import { createRoot } from 'react-dom/client';
import '@uxhispam/kenos/css/kenos.css';
import {
	ThemeContextProvider,
	Form,
	Box,
	Stack,
	TextField,
	EmailField,
	ButtonLayout,
	ButtonPrimary,
	alert,
	getMovistarSkin,
} from '@uxhispam/kenos';

	const kenosTheme = {
		skin: getMovistarSkin(),
		i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
	};

	// const container = document.getElementById('app');
	// const root = createRoot(container)!;
	// root.render(
	// 	<ThemeContextProvider theme={kenosTheme}>
	// 		<App />
	// 	</ThemeContextProvider>
	// );


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeContextProvider theme={kenosTheme}>
			<App />
		</ThemeContextProvider>
	</React.StrictMode>
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>,
)
