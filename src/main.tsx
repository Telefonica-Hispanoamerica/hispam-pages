import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import App2 from './App2.tsx'
import './index.css';
import { PageProvider } from './hooks/pageSlice.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PageProvider>
			{/* <App /> */}
			<App/>
			{/* <App2 /> */}
		</PageProvider>		
	</React.StrictMode>
)
