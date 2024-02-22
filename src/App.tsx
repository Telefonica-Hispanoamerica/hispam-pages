import { useEffect } from "react"
import grapesjs, { Editor, EditorConfig } from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import './App.scss';
import "./fonts/fonts.scss";
// import Card from "./components/CustomBlocksTelefonica/Card";
// import CardProduct from "./components/CustomBlocksTelefonica/CardProduct";
import ButtonPrimaryKenos from "./components/CustomBlocksTelefonica/ButtonPrimary";

///Google Analytics
import { gapi } from "gapi-script"
import ButtonLogin from "./LoginButton";
import ButtonLogOut from "./LogOutButton";

import '@uxhispam/kenos/css/kenos.css';
import DataCardKenos from "./components/CustomBlocksTelefonica/Card";


function App() {

	const clientId2 = "800509512985-bauracst77a2vi7o03rm4m52s1emm0t3.apps.googleusercontent.com";
	const apiKey = "0f2079f038394b6f8087a505b224f76544b78eba";
	const scope = "800509512985-bauracst77a2vi7o03rm4m52s1emm0t3.apps.googleusercontent.com";
	const propertyId = "427375830";
	const startDate = '2024-02-14';
  	const endDate = '2024-02-14';

	useEffect(() => {
		const start = () => {
			gapi.client.init({
				clientId: clientId2,
				scope: 'https://www.googleapis.com/auth/analytics.reporting.readonly',
			})
		}
		gapi.load("client: auth2", start);
		
	}, []);
	

	function createReporting (){
		const accessToken = gapi.auth.getToken().access_token;
		const body = {            
			dateRanges: [
				{ 
					startDate: "5daysAgo", 
					endDate: "yesterday" 
				}
			],
			dimensions: [
				{ 
					name: "country" 
				}
			],
			metrics: [
				{ 
					name: "activeUsers" 
				}
			]            
		}

		fetch(`https://analyticsreporting.googleapis.com/v4/reports:batchGet`, {
			method: "POST",
			headers: new Headers({ 'Authorization': 'Bearer '+ accessToken}),
			body: JSON.stringify(body)
		}).then ((res: any)=>{
			return res.json();
		}).then(function(val) {
			console.log(val)
		})
	}

	const onEditor = (editor: Editor) => {
		console.log('Editor loaded 2', { editor });
	};

	const gjsOptions: EditorConfig = {
		height: '100vh',
		storageManager: { type: 'indexeddb' },
		undoManager: { trackSelection: false },
		selectorManager: { componentFirst: true },
		modal: { custom: true },
		fromElement: true,
		canvas: {
			styles: [
				'/node_modules/@uxhispam/kenos/css/kenos.css',
				'/node_modules/@uxhispam/kenos/css/reset.css',
				'/node_modules/@uxhispam/kenos/css/roboto.css',
				'./assets/scss/Grid.scss'
			],
			scripts: []
		},	
		projectData: {			
			assets: [
				'https://via.placeholder.com/350x250/78c5d6/fff',
				'https://via.placeholder.com/350x250/459ba8/fff',
				'https://via.placeholder.com/350x250/79c267/fff',
				'https://via.placeholder.com/350x250/c5d647/fff',
				'https://via.placeholder.com/350x250/f28c33/fff',
			],
			pages: [
				{
				name: 'Home page',
				component: `<h1>GrapesJS React Custom UI</h1>`,
				},
			],
		},
		pluginsOpts: {
			"grapesjs-plugin-toolbox": {
				panels: true
			},
			"grapesjs-ga": {
				/* Test here your options  */
			},
			'grapesjs-indexeddb': {
				options: {
					// In case of multiple projects on the same page indicate an id to
					// prevent collisions
					key: 'user-project-id',
					// Update IndexedDB name for the DB and the table containing project data
					dbName: 'editorLocalData',
					objectStoreName: 'projects',
				}
			}
		}
	};	

	console.log("gjsOptions", gjsOptions)

	return (	
		<div>
			<ButtonLogin />
			<ButtonLogOut />
			{/* <div id="gjs">
				{/* Your GrapesJS editor will be rendered here */}
			{/*</div>*/}
			{/* <div id="blocks"></div> */}
			<GjsEditor
				grapesjs={grapesjs}
				grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
				onEditor={onEditor}
				options={gjsOptions}
				plugins={[
					ButtonPrimaryKenos,
					DataCardKenos,
					// Card,
					// CardProduct,
					// ButtonPrimary1,
					// {
					// 	id: 'grapesjs-plugin-header',
					// 	src: 'https://unpkg.com/grapesjs-plugin-header'
					// },
					// {
					// 	id: 'grapesjs-ga',
					// 	src: 'https://unpkg.com/grapesjs-ga',
					// },
					{
						id: 'gjs-blocks-basic',
						src: 'https://unpkg.com/grapesjs-blocks-basic',
					},
					// {
					// 	id: 'grapesjs-indexeddb',
					// 	src: 'https://unpkg.com/grapesjs-indexeddb'
					// },
					// {
					// 	id: 'grapesjs-custom-code',
					// 	src: 'https://unpkg.com/grapesjs-custom-code',
					// },
					// {
					// 	id: 'grapesjs-navbar',
					// 	src: 'https://unpkg.com/grapesjs-navbar',
					// },
					// {
					// 	id: 'grapesjs-plugin-forms',
					// 	src: 'https://unpkg.com/grapesjs-plugin-forms',
					// },
					// {
					// 	id: 'grapesjs-plugin-ckeditor',
					// 	src: 'https://unpkg.com/grapesjs-plugin-ckeditor',
					// },
					{
						id: 'grapesjs-tui-image-editor',
						src: 'https://unpkg.com/grapesjs-tui-image-editor',
					},
					{
						id: 'grapesjs-plugin-export',
						src: 'https://unpkg.com/grapesjs-plugin-export',
					},
					// {
					// 	id: 'grapesjs-rulers',
					// 	src: 'https://unpkg.com/grapesjs-rulers',
					// },
					// {
					// 	id: 'grapesjs-tailwind',
					// 	src: 'https://unpkg.com/grapesjs-tailwind',
					// },
					{
						id: 'grapesjs-style-border',
						src: 'https://unpkg.com/grapesjs-style-border'
					}		
				]}
			>
				<div className={'layout-editor-wrapper'}>					
					<LeftSidebar></LeftSidebar>

					<div className={'gjs-editor-column'}>
						<Topbar></Topbar>
						<Canvas />
					</div>
					<RightSidebar></RightSidebar>
							
				</div>
			</GjsEditor>
		</div>		
	)
}

export default App