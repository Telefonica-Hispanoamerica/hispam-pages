import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { PageIdProvider } from './hooks/PageContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PageIdProvider>
			<App />
		</PageIdProvider>		
	</React.StrictMode>
)
