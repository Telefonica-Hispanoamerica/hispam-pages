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
import HeaderKenos from './components/CustomBlocksTelefonica/Headers/Header';
import HeroComponentKenos from './components/CustomBlocksTelefonica/Hero/HeroComponent';
import HeroSlideshowKenos from './components/CustomBlocksTelefonica/Hero/HeroSlideshow';
import TextComponentKenos from './components/CustomBlocksTelefonica/Text/TextComponent';
import TextWrappingKenos from './components/CustomBlocksTelefonica/Text/H1';

//===============
import JSZip from 'jszip';
import cssKenos from '@uxhispam/kenos/css/kenos.css'
import cssRoboto from '@uxhispam/kenos/css/roboto.css'
import GoogleOuthAnalytics from './components/GoogleOuthAnalytics';
import MediaCardKenos from './components/CustomBlocksTelefonica/Cards/MediaCard';
import Columns3Kenos from './components/CustomBlocksTelefonica/Columns/Columns3';
import Columns1Kenos from './components/CustomBlocksTelefonica/Columns/Columns1';
import Columns2Kenos from './components/CustomBlocksTelefonica/Columns/Columns2';
import Columns4Kenos from './components/CustomBlocksTelefonica/Columns/Columns4';
import Columns5Kenos from './components/CustomBlocksTelefonica/Columns/Columns5';
import Columns6Kenos from './components/CustomBlocksTelefonica/Columns/Columns6';
import H1 from './components/CustomBlocksTelefonica/Text/H1';
import H2 from './components/CustomBlocksTelefonica/Text/H2';
import paragraphKenos from './components/CustomBlocksTelefonica/Text/P';
import MediaCardTelefonica from './components/CustomBlocksTelefonica/Cards/MediaCardTelefonica';
import PlanCardTelefonica from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica';
import OrderedListKenos from './components/CustomBlocksTelefonica/Text/OrderedList';
import NumberListKenos from './components/CustomBlocksTelefonica/Text/NumberList';

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
		component: ``,
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
				landingPage.length >= 0 ? setIsOpen(true) : setIsOpen(false)
			} catch (error) {
				console.error('Error al obtener el HTML desde el backend', error);
				setIsOpen(true)
			}
		}

		fetchMyAPI()

	}, []);	

	const onEditor = (editor: Editor, opts = {}) => {

		console.log("editor", editor.BlockManager.blocks.models)

		const pfx = editor.getConfig('stylePrefix');
		const commandName = 'export-template';

		const config: PluginOptions = {
			addExportBtn: true,
			btnLabel: 'Save HTML',
			filenamePfx: 'grapesjs_template',
			filename: undefined,
			done: () => {},
			onError: console.error,
			root: {
				css: {
					'style.css': (editor: Editor) => editor.getCss()
				},
				'index.html': (editor: Editor) =>
				`<!doctype html>
				<html lang="en">
					<head>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<link rel="stylesheet" href="css/kenos.css">
					</head>
					${editor.getHtml()}
				</html>`,
			},
			  isBinary: undefined,
			  ...opts,
		};

		console.log('CONFIG', config)

		editor.Commands.add(commandName, {
			run(editor, s, opts: PluginOptions = {}) {
				editor.Modal.open({
					title: 'Modal example',
					content: ``,
				});

				const exportData = {
					//html: editor.getHtml(),
					html: `<!doctype html>
					<html lang="en">
						<head>
							<meta charset="utf-8">
							<meta name="viewport" content="width=device-width, initial-scale=1.0" />
							<link rel="stylesheet" href="css/style.css">
							<link rel="stylesheet" href="css/kenos.css">
							<style>							
								@font-face {
									font-family: "Telefonica-Regular";
									src: url("https://www.movistar.com.co/assets/fonts_movistar/Telefonica-Regular.woff2") format("woff2"), url("../fonts/Telefonica-Fonts/Regular/TelefonicaWeb-Regular.woff") format("woff");
									font-weight: 400;
									font-style: normal;
									font-display: swap;
								}
								body {
									font-family: "Telefonica-Regular", sans-serif;
									font-size: 16px;
									line-height: 24px;
									margin: 0;
								}
								.gjs-row-kenos {
									max-width: 1200px;
									margin: 0 auto;
									padding: 8px;
									display: table;
									width: 100%;
									border-spacing: 8px;
								}
						
								@media (max-width: 768px) {
									.gjs-row-kenos {
										width: 100%;
										padding: 0;
									}
									.gjs-cell-kenos {
										width: 100%;
										display: block;
										height: 100%;
										margin: 0 0 16px;
									}
								}	
								
								.gjs-cell-kenos {
									width: 8%;
									display: table-cell;
									height: 75px;
								}
							</style>						
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
			
					editor.on('run:export-template', () => {
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
							
							//====== Download zip file ======

							const zip = new JSZip();
							const carpetaRaiz:any = zip.folder('mi_proyecto');

							carpetaRaiz.file('index.html', exportData.html);
							carpetaRaiz.folder('css').file('style.css', exportData.css);
							carpetaRaiz.folder('css').file('kenos.css', cssKenos);
							carpetaRaiz.folder('images').file('logo.png', /* contenido de la imagen */);

							zip.generateAsync({ type: 'blob' }).then((blob) => {
								const url = URL.createObjectURL(blob);
								const link = document.createElement('a');
								link.href = url;
								link.download = 'mi_proyecto.zip';
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
							});
						}						
					});
				}
				
				//===============================

				// const zip = new JSZip();
				// const onError = opts.onError || config.onError;
				// const root = opts.root || config.root;

				// this.createDirectory(zip, root)
				// 	.then(async () => {
				// 	const content = await zip.generateAsync({ type: 'blob' });
				// 	const filenameFn = opts.filename || config.filename;
				// 	const done = opts.done || config.done;
				// 	const filenamePfx = opts.filenamePfx || config.filenamePfx;
				// 	const filename = filenameFn ? filenameFn(editor) : `${filenamePfx}_${Date.now()}.zip`;
				// 	FileSaver.saveAs(content, filename);
				// 	done?.();
				// 	})
				// 	.catch(onError);
				// },

				// createFile(zip: JSZip, name: string, content: string) {
				// 	const opts: JSZip.JSZipFileOptions = {};
				// 	const ext = name.split('.')[1];
				// 	const isBinary = config.isBinary ?
				// 	  config.isBinary(content, name) :
				// 	  !(ext && ['html', 'css'].indexOf(ext) >= 0) &&
				// 	  !/^[\x00-\x7F]*$/.test(content);
			  
				// 	if (isBinary) {
				// 	  opts.binary = true;
				// 	}
			  
				// 	editor.log('Create file', { ns: 'plugin-export',
				// 	  // @ts-ignore
				// 	  name, content, opts
				// 	});
				// 	zip.file(name, content, opts);
				//   },

				//   async createDirectory(zip: JSZip, root: PluginOptions["root"]) {
				// 	root = typeof root === 'function' ? await root(editor) : root;
			  
				// 	for (const name in root) {
				// 	  if (root.hasOwnProperty(name)) {
				// 		let content = root[name];
				// 		content = typeof content === 'function' ? await content(editor) : content;
				// 		const typeOf = typeof content;
			  
				// 		if (typeOf === 'string') {
				// 		  this.createFile(zip, name, content as string);
				// 		} else if (typeOf === 'object') {
				// 		  const dirRoot = zip.folder(name)!;
				// 		  await this.createDirectory(dirRoot, content as RootType);
				// 		}
				// 	  }
				// 	}
				//   },
				// });
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

		height: '100%',
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
				// '/node_modules/@uxhispam/kenos/css/roboto.css',	
				// 'https://unpkg.com/grapesjs-project-manager/dist/grapesjs-project-manager.min.css'
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
				{/*<GoogleOuthAnalytics />*/}
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
						MediaCardKenos,
						MediaCardTelefonica,
						PlanCardTelefonica,
						SnapCardKenos,
						AvatarKenos,
						BadgeKenos,
						BreadcrumbsKenos,
						CalloutKenos,
						CheckboxKenos,
						ChipKenos,
						DividerKenos,
						HeaderKenos,
						HeroComponentKenos,
						HeroSlideshowKenos,
						TextComponentKenos,
						TextWrappingKenos,
						Columns1Kenos,
						Columns2Kenos,
						Columns3Kenos,
						Columns4Kenos,
						Columns5Kenos,
						Columns6Kenos,
						H1,
						H2,
						paragraphKenos,
						OrderedListKenos,
						NumberListKenos,
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
						},
						{
							id: 'grapesjs-plugin-ckeditor',
							src: 'https://unpkg.com/grapesjs-plugin-ckeditor'
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