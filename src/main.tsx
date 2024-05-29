import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { PageProvider } from './hooks/pageSlice.tsx'
// import { PageIdProvider } from './hooks/PageContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PageProvider>
			{/* <App /> */}
			<App/>
		</PageProvider>		
	</React.StrictMode>
)
