import { useCallback, useContext, useEffect, useState } from 'react'
import grapesjs, { Editor, EditorConfig, PluginOptions } from 'grapesjs';
import GjsEditor, { Canvas, ModalProvider } from '@grapesjs/react';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import './App.scss';
import "./fonts/fonts.scss";

import TextWrappingKenos from './components/CustomBlocksTelefonica/Text/H1';


import JSZip from 'jszip';

// import cssFonts from '../public/hispam-pages/fonts/fonts-telefonica.css?inline';
import Columns3Kenos from './components/CustomBlocksTelefonica/Columns/Columns3';
import Columns1Kenos from './components/CustomBlocksTelefonica/Columns/Columns1';
import Columns2Kenos from './components/CustomBlocksTelefonica/Columns/Columns2';
import Columns4Kenos from './components/CustomBlocksTelefonica/Columns/Columns4';
import Columns5Kenos from './components/CustomBlocksTelefonica/Columns/Columns5';
import Columns6Kenos from './components/CustomBlocksTelefonica/Columns/Columns6';
import H1 from './components/CustomBlocksTelefonica/Text/H1';
import H2 from './components/CustomBlocksTelefonica/Text/H2';
import paragraphKenos from './components/CustomBlocksTelefonica/Text/P';
import OrderedListKenos from './components/CustomBlocksTelefonica/Text/OrderedList';
import NumberListKenos from './components/CustomBlocksTelefonica/Text/NumberList';
import PlanCardTelefonica2 from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica2';
import PlanCardTelefonica3 from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica3';
import CardHeroTLPG from './components/CustomBlocksTelefonica/Cards/CardHeroLeftLight';
import ValuePrepositionImageDark4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionImageDark4Col';
import ValuePrepositionImageDarkLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionImageDarkLeft3Col';
import ValuePrepositionIconDark4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionIconDark4Col';
import ValuePrepositionIconDarkLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionIconDarkLeft3Col';
import ValuePrepositionNoImageDark4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionNoImageDark4Col';
import ValuePrepositionNoImageDarkLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionNoImageDarkLeft3Col';
import ValuePrepositionIconLight4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionIconLight4Col';
import ValuePrepositionIconLightLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionIconLightLeft3Col';
import ValuePrepositionImageLight4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionImageLight4Col';
import ValuePrepositionImageLightLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionImageDarkLeft3Col';
import ValuePrepositionNoImageLight4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionNoImageLight4Col';
import ValuePrepositionNoImageLightLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionNoImageLightLeft3Col';
import ValuePrepositionIconLightLeftDivider from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionIconLightLeftDivider';
import ValuePrepositionIconLightLeftDivider2ColContent from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionIconLightLeftDivider2ColContent';
import ValuePrepositionIconDarkLeftDivider2ColContent from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionIconDarkLeftDivider2ColContent';
import ValuePrepositionIconDarkLeftDivider from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionIconDarkLeftDivider';
import iHeroImageCompleteSmall from './components/CustomBlocksTelefonica/InternalHero/ImageCompleteSmall';
import ImageCompleteBigCenter from './components/CustomBlocksTelefonica/InternalHero/ImageCompleteBigCenter';
import CardDark4Col from './components/CustomBlocksTelefonica/Cards/Card/CardDark4Col';

import CardHeroRightLight from './components/CustomBlocksTelefonica/Cards/CardHeroRightLight';
import CardHeroSectionDark from './components/CustomBlocksTelefonica/Cards/CardHeroSectionDark';

/* Hooks */
import { PageContext } from './hooks/pageSlice';
import HeroImageCompleteBig from './components/CustomBlocksTelefonica/InternalHero/ImageCompleteBig';
import CustomModal from './components/CustomModal';
import CardLight3Col from './components/CustomBlocksTelefonica/Cards/Card/CardLight3Col';
import CardLight from './components/CustomBlocksTelefonica/Cards/Card/CardLight';

// type EditorHandler = (editor?: Editor, param1?: string, param2?: []) => void;
//console.log("EditorHandler", EditorHandler)

// const handleEditor: EditorHandler = (editor, param1, param2) => {
// 	// Lógica para manejar el editor y los parámetros adicionales
// 	console.log('Editor:', editor);
// 	console.log('Parámetro 1:', param1);
// 	console.log('Parámetro 2:', param2);
// };

interface Item {
    id: number;
    name: string;
    styles: string;
    component: string;
}

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


function App() {

	const { items, addItem, metaDescription } = useContext(PageContext);
	const [ isOpen, setIsOpen ] = useState<boolean>(false);
	const [ isMetaDescription, setIsMetaDescription ] = useState<string>('')
	const [ isTags, setIsTags ] = useState<string[]>([]);

	const handleAddItem = (item: Item, id: number) => {
		if (item.component.trim() !== '') {
			const newItem: Item = {
				id: id,
				name: item.name,
				styles: item.styles,
				component: item.component
			};
		  	addItem(newItem);
			saveHTML(newItem)
		  	//setNewItemName('');
		}
	};

	const setMetaDescription = (meta?: string) => {
		return meta
	}

	useEffect(() => {
		console.log("META DESCRIPTION UPDATE USEEFFECT", metaDescription);
		//onEditor( metaDescription, []);
		//setIsMetaDescription(metaDescription)
		// const resultMeta = setMetaDescription(metaDescription)
		exportPage(metaDescription)
		
	}, [metaDescription]);

	const exportPage = async (meta?: string, editor?: any) => {		
		//event.preventDefault();
		console.log("metaDescription BTN CLICK 1", meta)
		if(editor) {
			console.log("metaDescription BTN CLICK 2", meta)
			const exportData = {
				html: `<!doctype html>
				<html lang="en">
					<head>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<meta name="description" content="${meta}" />
						<link rel="stylesheet" href="./styles.css">
					</head>
					${editor.getHtml()}
				</html>`,
				css: editor.getCss()
			};
			const zip = new JSZip();

		const fontPaths = [
			'/fonts/Telefonica-Light.eot',
			'/fonts/Telefonica-Light.woff',
			'/fonts/Telefonica-Light.woff2',
			'/fonts/Telefonica-Light.ttf',
			'/fonts/Telefonica-Regular.eot',
			'/fonts/Telefonica-Regular.woff',
			'/fonts/Telefonica-Regular.woff2',
			'/fonts/Telefonica-Regular.ttf',
			'/fonts/Telefonica-Bold.eot',
			'/fonts/Telefonica-Bold.woff',
			'/fonts/Telefonica-Bold.woff2',
			'/fonts/Telefonica-Bold.ttf'
		];

		const fontFiles = await Promise.all(
			fontPaths.map(fontPath =>
			fetch(fontPath)
				.then(res => res.arrayBuffer())
				.then(arrayBuffer => ({
					path: fontPath,
					data: arrayBuffer
				}))
			)
		);

		fontFiles.forEach(({ path, data }) => {
			const fonts: any = zip.folder('fonts');
			const fontName:any = path.split('/').pop(); // Obtiene el nombre del archivo desde la ruta
			fonts.file(fontName, data);
		});

		// New

		//console.log("headCode", updateExportHead())
		zip.file('styles.css', exportData.css);
		zip.file('index.html', exportData.html);

		zip.generateAsync({ type: 'blob' })
			.then((content) => {
				const downloadLink = document.createElement('a');
				downloadLink.href = URL.createObjectURL(content);
				downloadLink.download = 'project.zip';
				downloadLink.click();
			})
			.catch((error) => {
			console.error('Error:', error);
			});
		editor.Modal.close();
		}		
	}

	//const onEditor: EditorHandler = (editor, isMetaDescription, tags) => {

	const onEditor = (editor: Editor) => {
		//let editor: Editor
		

		// console.log("Update on Editor 1", [metaDescription, tags])

		
			// const editor = editor2
			console.log("EDITOR", editor)
			// console.log("Update on Editor INT", [metaDescription, tags])

			let currentPageId = 0;
			let currentPageName = '';

			const pfx = editor.getConfig('stylePrefix');
			const commandName = 'save-export';

			const config: PluginOptions = {
				addExportBtn: true,
				btnLabel: 'Save HTML',
				filenamePfx: 'grapesjs_template',
				filename: undefined,
				done: () => {},
				onError: console.error,
				// root: {
				// 	css: {
				// 		'style.css': (editor: Editor) => editor.getCss()
				// 	},
				// 	'index.html': (editor: Editor) =>
				// 	`<!doctype html>
				// 	<html lang="en">
				// 		<head>
				// 			<meta charset="utf-8">
				// 			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				// 		</head>
				// 		${editor.getHtml()}
				// 	</html>`,
				// },
				isBinary: undefined,
				//...opts,
			};

			editor.on('page:select', (page: any) => {
				console.log("PAGE", page)
				currentPageId = parseInt(page.id);
				currentPageName = page.attributes.name;
			});

			editor.on('load', function() {
				editor.runCommand('core:component-outline');
			});

			// Custom panel

			// const panelManager = editor.Panels;

			// panelManager.addPanel({
			// 	id: 'custom-panel',
			// 	el: '.custom-panel-container',
			// 	buttons: [{
			// 		id: 'custom-panel-toggle',
			// 		className: 'custom-panel-toggle-button',
			// 		label: 'Custom Panel',
			// 		command: 'open-custom-panel',
			// 	}],
			// });

			// editor.Commands.add('open-custom-panel', {
			// 	run(editor) {
			// 	  	const panel = editor.Panels.getPanel('views-container').getPanel('custom-panel');
			// 	  	panel.set('visible', !panel.get('visible'));
			// 	},
			// });

			editor.Commands.add(commandName, {

				run(editor: PluginOptions = {}) {

					console.log("META DESCRIPTION 1", [editor, metaDescription])					

					editor.Modal.open({
						title: 'My title',
						content: 'My content',
						attributes: {
							class: 'my-small-modal',
						},
					});

					if (config.addExportBtn) {

						const divButtonsModal = document.createElement('div');
						divButtonsModal.className = 'buttons-group';

						const btnExp = document.createElement('button');
						btnExp.innerHTML = `Save HTML ` + currentPageName;
						btnExp.className = `${pfx}btn-prim`;
						btnExp.type = 'button';

						const btnExpExport = document.createElement('button');
						btnExpExport.innerHTML = `Export HTML ` + currentPageName;
						btnExpExport.className = `${pfx}btn-prim`;
						btnExpExport.type = 'button';

						editor.on('run:save-export', () => {
							editor.runCommand('core:open-code');

							const existingGroupButtons = document.querySelectorAll('.buttons-group');
							existingGroupButtons.forEach(div => div.remove());

							const el = editor.Modal.getContentEl();

							divButtonsModal?.appendChild(btnExp);
							divButtonsModal?.appendChild(btnExpExport);

							el?.appendChild(divButtonsModal);							

							btnExp.onclick = () => {
								const editPage = items.filter(item => item.id == currentPageId);

								if(editPage[0]) {
									let editItem = {
										id: editPage[0].id,
										name: editPage[0].name,
										styles: editor.getCss(),
										component: editor.getHtml()
									}
									handleAddItem(editItem, editItem.id);
								} else {
									const nextIndex = items.length + 1;
									let newItem = {
										id: Date.now(),
										name:`Page ${nextIndex}`,
										styles: editor.getCss(),
										component: editor.getHtml()
									}
									handleAddItem(newItem, newItem.id);
								}
								editor.Modal.close();
							}

							btnExpExport.addEventListener('click', (event) => exportPage(metaDescription, editor));

							// btnExpExport.onclick = (e) => {
							// 	e.preventDefault();
							// 	//exportPage(metaDescription, editor);
							// 	// console.log("metaDescription BTN CLICK", resultMeta)
							// 	// const exportData = {
							// 	// 	html: `<!doctype html>
							// 	// 	<html lang="en">
							// 	// 		<head>
							// 	// 			<meta charset="utf-8">
							// 	// 			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
							// 	// 			<meta name="description" content="${resultMeta}" />
							// 	// 			<link rel="stylesheet" href="./styles.css">
							// 	// 		</head>
							// 	// 		${editor.getHtml()}
							// 	// 	</html>`,
							// 	// 	css: editor.getCss()
							// 	// };
							// 	// const zip = new JSZip();

							// 	// const fontPaths = [
							// 	// 	'/fonts/Telefonica-Light.eot',
							// 	// 	'/fonts/Telefonica-Light.woff',
							// 	// 	'/fonts/Telefonica-Light.woff2',
							// 	// 	'/fonts/Telefonica-Light.ttf',
							// 	// 	'/fonts/Telefonica-Regular.eot',
							// 	// 	'/fonts/Telefonica-Regular.woff',
							// 	// 	'/fonts/Telefonica-Regular.woff2',
							// 	// 	'/fonts/Telefonica-Regular.ttf',
							// 	// 	'/fonts/Telefonica-Bold.eot',
							// 	// 	'/fonts/Telefonica-Bold.woff',
							// 	// 	'/fonts/Telefonica-Bold.woff2',
							// 	// 	'/fonts/Telefonica-Bold.ttf'
							// 	// ];

							// 	// const fontFiles = await Promise.all(
							// 	// 	fontPaths.map(fontPath =>
							// 	// 	fetch(fontPath)
							// 	// 		.then(res => res.arrayBuffer())
							// 	// 		.then(arrayBuffer => ({
							// 	// 			path: fontPath,
							// 	// 			data: arrayBuffer
							// 	// 		}))
							// 	// 	)
							// 	// );

							// 	// fontFiles.forEach(({ path, data }) => {
							// 	// 	const fonts: any = zip.folder('fonts');
							// 	// 	const fontName:any = path.split('/').pop(); // Obtiene el nombre del archivo desde la ruta
							// 	// 	fonts.file(fontName, data);
							// 	// });

							// 	// // New

							// 	// //console.log("headCode", updateExportHead())
							// 	// zip.file('styles.css', exportData.css);
							// 	// zip.file('index.html', exportData.html);

							// 	// zip.generateAsync({ type: 'blob' })
							// 	// 	.then((content) => {
							// 	// 		const downloadLink = document.createElement('a');
							// 	// 		downloadLink.href = URL.createObjectURL(content);
							// 	// 		downloadLink.download = 'project.zip';
							// 	// 		downloadLink.click();
							// 	// 	})
							// 	// 	.catch((error) => {
							// 	// 	console.error('Error:', error);
							// 	// 	});
							// 	// editor.Modal.close();
							// }
						});
					}

				},
				stop(editor) {
					editor.Modal.close();
				},
			});
		
	};


	useEffect(() => {
		if (items.length > 0) {
		  setIsOpen(true);
		} else {
		  setIsOpen(false);
		}
	}, [items]);


	const saveHTML = async (html: any) => {
		try {
			const response = await fetch('http://localhost:3000/save-html', {
			//const response = await fetch('https://hispam-pages-backend.onrender.com/save-html', {
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

	const getMetaDescription = (metaDesc: string) => {
		console.log("Meta decsription", metaDesc);
		setIsMetaDescription(metaDesc)
	}

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
		storageManager: false,
		canvas: {
			styles: [
				'/hispam-pages/css-kenos/roboto.css',
				'/hispam-pages/fonts/fonts.css',
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
				...items
			],
			assetManager: {
				uploadFile: false,
				embedAsBase64: true,
			},
		},
		pluginsOpts: {
			// "grapesjs-plugin-toolbox": {
			// 	panels: true
			// },
		}
	};

	return (
		<div className='gjs-container-pages'>
			{/*<GoogleOuthAnalytics />*/}
			{ isOpen /*onEditor*/ ? (<GjsEditor
				grapesjs={grapesjs}
				grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
				onEditor={onEditor}
				// onEditor={(editor) => onEditor(editor, metaDescription, [])}
				//onEditor={() => onEditor(metaDescription, [])}
				options={gjsOptions}
				plugins={[
					HeroImageCompleteBig,
					iHeroImageCompleteSmall,
					ImageCompleteBigCenter,
					CardHeroRightLight,
					CardHeroSectionDark,
					CardLight,
					CardDark4Col,
					CardLight3Col,
					CardHeroTLPG,
					ValuePrepositionImageDark4Col,
					ValuePrepositionImageDarkLeft4Col,
					ValuePrepositionIconDark4Col,
					ValuePrepositionIconDarkLeft4Col,
					ValuePrepositionNoImageDark4Col,
					ValuePrepositionNoImageDarkLeft4Col,
					ValuePrepositionIconDarkLeftDivider,
					ValuePrepositionIconDarkLeftDivider2ColContent,
					ValuePrepositionIconLight4Col,
					ValuePrepositionIconLightLeft4Col,
					ValuePrepositionImageLight4Col,
					ValuePrepositionImageLightLeft4Col,
					ValuePrepositionNoImageLight4Col,
					ValuePrepositionNoImageLightLeft4Col,
					ValuePrepositionIconLightLeftDivider,
					ValuePrepositionIconLightLeftDivider2ColContent,
					PlanCardTelefonica2,
					PlanCardTelefonica3,
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
					{
						id: 'grapesjs-plugin-export',
						src: 'https://unpkg.com/grapesjs-plugin-export',
					},
					// {
					// 	id: 'grapesjs-style-border',
					// 	src: 'https://unpkg.com/grapesjs-style-border'
					// },
					// {
					// 	id: 'grapesjs-plugin-ckeditor',
					// 	src: 'https://unpkg.com/grapesjs-plugin-ckeditor'
					// }
				]}
			>
				<div className={'layout-editor-wrapper'}>
					<LeftSidebar></LeftSidebar>

					<div className={'gjs-editor-column'}>
						<Topbar></Topbar>
						<Canvas />
					</div>
					<RightSidebar ></RightSidebar>

				</div>
				{/* <ModalProvider>
					{({ open, title, content, close }) => (
						<CustomModal
						open={open}
						title={title}
						children={content}
						close={close}
						/>
					)}
				</ModalProvider> */}
			</GjsEditor>) : (
				<div className='isLoading'>
					<img src='./images/LoadingMovistar.gif' alt='loading' className='img-loading'/>
			</div>)}
		</div>
	)
}

export default App