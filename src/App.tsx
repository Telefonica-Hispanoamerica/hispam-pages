import { useEffect, useState } from "react"
import grapesjs, { Editor, EditorConfig } from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import './App.scss';
import "./fonts/fonts.scss";

///Google Analytics
import { gapi } from "gapi-script"
//Kenos Buttons
import ButtonPrimaryKenos from "./components/CustomBlocksTelefonica/Buttons/ButtonPrimary";
import SubmitButtonsKenos from "./components/CustomBlocksTelefonica/Buttons/SubmitButton";
import DangerButtonsKenos from "./components/CustomBlocksTelefonica/Buttons/DangerButton";
import LinkButtonKenos from "./components/CustomBlocksTelefonica/Buttons/LinkButton";
import SecondaryButtonKenos from "./components/CustomBlocksTelefonica/Buttons/SecondaryButton";
import IconButtonKenos from "./components/CustomBlocksTelefonica/Buttons/IconButton";

//Kenos Cards
import DataCardKenos from "./components/CustomBlocksTelefonica/Cards/DataCard";
import GroupButtonKenos from "./components/CustomBlocksTelefonica/Buttons/GroupButton";
import DisplayDataCardKenos from "./components/CustomBlocksTelefonica/Cards/DisplayDataCard";
import DisplayMediaCardKenos from "./components/CustomBlocksTelefonica/Cards/DisplayMediaCard";
import DisplayMediaCardGroupKenos from "./components/CustomBlocksTelefonica/Cards/DisplayMediaCardGroup";
import HighlightedCardKenos from "./components/CustomBlocksTelefonica/Cards/HighlightedCard";
import AvatarKenos from "./components/CustomBlocksTelefonica/Avatar";
import BadgeKenos from "./components/CustomBlocksTelefonica/Badge";
import BreadcrumbsKenos from "./components/CustomBlocksTelefonica/Breadcrumbs";
import CalloutKenos from "./components/CustomBlocksTelefonica/Callout";
import SnapCardKenos from "./components/CustomBlocksTelefonica/Cards/SnapCard";
import CheckboxKenos from "./components/CustomBlocksTelefonica/Checkbox";
import ChipKenos from "./components/CustomBlocksTelefonica/Chip";
import DividerKenos from "./components/CustomBlocksTelefonica/Divider";

declare var google: { 
	accounts: { 
		id: {
			prompt(): unknown; 
			initialize: (
				arg0: { 
					client_id: string; 
					callback: (response: any) => void; 
				}
			) => void; 
			renderButton: (
				arg0: HTMLElement, 
				arg1: { 
					theme: string; 
					size: string;
				}
			) => void; 
		}; 
	}; 
};

interface UserGoogle {	
	aud?: string,
	azp?: string,
	email?: string,
	email_verified?: boolean,
	exp?:number,
	family_name?:string,
	given_name?:string,
	iat?:number,
	iss?:string,
	jti?: string,
	locale?:string,
	name:string,
	nbf?:number,
	picture:string,
	sub?:string
}

function App() {

	const [ user, setUser ] = useState({
		name: "",
		picture: ""
	});


	// const [ user, setUser ] = useState<UserGoogle | null>(null);

	const clientId2 = "800509512985-bauracst77a2vi7o03rm4m52s1emm0t3.apps.googleusercontent.com";
	const apiKey = "0f2079f038394b6f8087a505b224f76544b78eba";
	const scope = "800509512985-bauracst77a2vi7o03rm4m52s1emm0t3.apps.googleusercontent.com";
	const propertyId = "427375830";
	const startDate = '2024-02-14';
  	const endDate = '2024-02-14';

	function handleCallbackResponse(response: any) {
		console.log("Encoded JWT ID token: " + response.credential)
		var base64Url = response.credential.split('.')[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
		setUser(JSON.parse(jsonPayload));

		(document.getElementById("signDiv") as HTMLElement).hidden = true;
	}

	function handleSignOut(event:any) {
		setUser({name: "", picture: ""});
		(document.getElementById("signDiv") as HTMLElement).hidden = false;
	}

	useEffect(() => {
		// const start = () => {
		// 	debugger;
		// 	gapi.client.init({
		// 		clientId: clientId2,
		// 		scope: 'https://www.googleapis.com/auth/analytics.reporting.readonly',
		// 	})
		// }
		// gapi.load("client: auth2", start);

		//https://www.youtube.com/watch?v=roxC8SMs7HU

		google.accounts.id.initialize({
			client_id: clientId2,
			callback: handleCallbackResponse
		});

		google.accounts.id.renderButton(
			(document.getElementById("signDiv") as HTMLElement),
			{ theme: "outline", size: "large"}
		);

		google.accounts.id.prompt()
		
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
		//console.log('Editor loaded 2', { editor });
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
					key: 'user-project-id',
					dbName: 'editorLocalData',
					objectStoreName: 'projects',
				}
			}
		}
	};

	return (
			<div>				
				<div id="signDiv"></div>
				
				{/* {					
					user != null &&
					<button onClick={(e) => handleSignOut(e)}>Sign Out</button>
				} */}
				{
					user.name.length != 0 && <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
				}
				{ user &&
					<div>
						<img src={user?.picture} />
						<h3>{user?.name}</h3>
					</div>
				}
				
				<GjsEditor
					grapesjs={grapesjs}
					grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
					onEditor={onEditor}
					options={gjsOptions}
					plugins={[
						ButtonPrimaryKenos,
						SubmitButtonsKenos,
						DataCardKenos,
						DangerButtonsKenos,
						LinkButtonKenos,
						SecondaryButtonKenos,
						IconButtonKenos,
						DisplayDataCardKenos,
						DisplayMediaCardKenos,
						DisplayMediaCardGroupKenos,
						HighlightedCardKenos,
						SnapCardKenos,
						AvatarKenos,
						BadgeKenos,
						BreadcrumbsKenos,
						CalloutKenos,
						CheckboxKenos,
						ChipKenos,
						DividerKenos,
						// GroupButtonKenos,
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
						// {
						// 	id: 'grapesjs-tui-image-editor',
						// 	src: 'https://unpkg.com/grapesjs-tui-image-editor',
						// },
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