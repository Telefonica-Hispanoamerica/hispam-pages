import { useState, useEffect } from 'react'
import grapesjs, { Editor, EditorConfig, Plugin, PluginOptions } from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import './App.scss';
import "./fonts/fonts.scss";

//Kenos Buttons
import ButtonPrimaryKenos from "./components/CustomBlocksTelefonica/Buttons/ButtonPrimary";
import SubmitButtonsKenos from "./components/CustomBlocksTelefonica/Buttons/SubmitButton";
import DangerButtonsKenos from "./components/CustomBlocksTelefonica/Buttons/DangerButton";
import LinkButtonKenos from "./components/CustomBlocksTelefonica/Buttons/LinkButton";
import SecondaryButtonKenos from "./components/CustomBlocksTelefonica/Buttons/SecondaryButton";
import IconButtonKenos from "./components/CustomBlocksTelefonica/Buttons/IconButton";

//Kenos Cards
import DataCardKenos from "./components/CustomBlocksTelefonica/Cards/DataCard";
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
		oauth2: any; 
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

type PropsLandingPage = {
	id?: number,
	name?: string,
	styles?: string,
	component?: string,
}


function App() {

	const newPage = {
		id: 0,
		name: 'New page',
		component: `<h1>GrapesJS React Custom UI</h1>`,
	}

	const [ landingPage, setLandingPage ] = useState<any>([newPage]);
	const [ isOpen, setIsOpen ] = useState<boolean>(false);
	

	useEffect(() => {
					
		async function fetchMyAPI() {
			try {
				const response = await fetch('http://localhost:3000/get-html');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const jsonData = await response.json();
				landingPage.push(...jsonData)
				landingPage.length > 0 ? setIsOpen(true) : setIsOpen(false)
			} catch (error) {
				console.error('Error al obtener el HTML desde el backend', error);
			}
		}

		fetchMyAPI()

	}, []);	

	const onEditor = (editor: Editor, opts = {}) => {

		console.log("editor", editor)

		const pfx = editor.getConfig('stylePrefix');
		const commandName = 'export';

		const config: PluginOptions = {
			addExportBtn: true,
			btnLabel: 'Save HTML',
			filenamePfx: 'grapesjs_template',
			filename: undefined,
			done: () => {},
			onError: console.error,
			root: {
				css: {
					'style.css': (editor: Editor) => editor.getCss(),
				},
				'index.html': (editor: Editor) =>
				`<!doctype html>
				<html lang="en">
					<head>
					<meta charset="utf-8">
					<link rel="stylesheet" href="./css/style.css">
					</head>
					<body>${editor.getHtml()}</body>
				</html>`,
			},
			  isBinary: undefined,
			  ...opts,
		};

		console.log('CONFIG', config)

		editor.Commands.add(commandName, {
			run(editor) {
				editor.Modal.open({
					title: 'Modal example',
					content: `
						<body>
							${editor.getHtml()}
						</body>
						<style></style>
					`,
				});

				const exportData = {
					//html: editor.getHtml(),
					html: `<!doctype html>
					<html lang="en">
						<head>
						<meta charset="utf-8">
						<link rel="stylesheet" href="./css/style.css">
						</head>
						${editor.getHtml()}
					</html>`,
					css: editor.getCss()
				}
				if (config.addExportBtn) {
					const btnExp = document.createElement('button');
					btnExp.innerHTML = config.btnLabel!;
					btnExp.className = `${pfx}btn-prim`;
					btnExp.type = 'button';
			
					editor.on('run:export', () => {
						const el = editor.Modal.getContentEl();
						el?.appendChild(btnExp);
						btnExp.onclick = () => {
							const nextIndex = landingPage.length + 1;
							saveHTML(
								nextIndex,
								{
									id: nextIndex,
									name: `Page ${nextIndex}`,
									styles: exportData.css,
									component: exportData.html
								}								
							);
							editor.Modal.close();
						}						
					});
				}
				
			},
			stop(editor) {
				editor.Modal.close();
			},
		});


	};

	const saveHTML = async (id: number, html: any) => {
		const index = landingPage.findIndex((objeto: PropsLandingPage) => objeto.id === id);
		console.log('IDDDDD', index)
		// Verificar si se encontró el objeto
		if (index !== -1) {
			// Reemplazar el objeto en la posición encontrada
			landingPage[index] = html;
			console.log(`Objeto con ID ${id} reemplazado exitosamente.`);
		} else {
			console.log(`No se encontró ningún objeto con ID ${id}.`);
		}
		try {
			const response = await fetch('http://localhost:3000/save-html', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(html),
			});
			if (response.ok) {
				console.log('HTML guardado exitosamente', html);
			} else {
				console.error('Error al guardar el HTML en el backend:', response.statusText);
			}
		} catch (error) {
		  	console.error('Error al guardar el HTML en el backend', error);
		}		
	};

	const gjsOptions: EditorConfig = {

		height: '100vh',
		undoManager: { 
			trackSelection: false 
		},
		selectorManager: { 
			componentFirst: true,
		},
		modal: { custom: true },
		fromElement: true,
		canvas: {
			styles: [
				'/node_modules/@uxhispam/kenos/css/kenos.css',
				'/node_modules/@uxhispam/kenos/css/reset.css',
				'/node_modules/@uxhispam/kenos/css/roboto.css',	
				'https://unpkg.com/grapesjs-project-manager/dist/grapesjs-project-manager.min.css'
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
				...landingPage	
			],
		},
		pluginsOpts: {
			// "grapesjs-plugin-toolbox": {
			// 	panels: true
			// },
			// "grapesjs-ga": {
			// 	/* Test here your options  */
			// },
			// 'grapesjs-indexeddb': {
			// 	options: {
			// 		key: 'user-project-id',
			// 		dbName: 'editorLocalData',
			// 		objectStoreName: 'projects',
			// 	}
			// }
		}
	};
	console.log('gjsOptions', gjsOptions)

	return (
		
			<div>
				{/* <GoogleOuthAnalytics /> */}
				{ isOpen && <GjsEditor
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
						{
							id: 'gjs-blocks-basic',
							src: 'https://unpkg.com/grapesjs-blocks-basic',
						},
						// {
						// 	id: 'grapesjs-indexeddb',
						// 	src: 'https://unpkg.com/grapesjs-indexeddb'
						// },
						// {
						// 	id: 'grapesjs-project-manager',
						// 	src: 'https://unpkg.com/grapesjs-project-manager'
						// },
						{
							id: 'grapesjs-plugin-export',
							src: 'https://unpkg.com/grapesjs-plugin-export',
						},
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
				</GjsEditor>}
		</div>		
	)
}

export default App