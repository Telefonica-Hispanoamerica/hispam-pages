import { useContext } from 'react'
import grapesjs, { Editor, EditorConfig, PluginOptions } from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import './App.scss';
import "./fonts/fonts.scss";

//Kenos Buttons

import TextComponentKenos from './components/CustomBlocksTelefonica/Text/TextComponent';
import TextWrappingKenos from './components/CustomBlocksTelefonica/Text/H1';

//===============
import JSZip from 'jszip';
import cssKenos from '@uxhispam/kenos/css/kenos.css?inline';
// import cssFonts from './hispam-pages/fonts/fonts.css?inline';
// import cssRoboto from '@uxhispam/kenos/css/roboto.css'
// import GoogleOuthAnalytics from './components/GoogleOuthAnalytics';
import Columns3Kenos from './components/CustomBlocksTelefonica/Columns/Columns3';
import Columns1Kenos from './components/CustomBlocksTelefonica/Columns/Columns1';
import Columns2Kenos from './components/CustomBlocksTelefonica/Columns/Columns2';
import Columns4Kenos from './components/CustomBlocksTelefonica/Columns/Columns4';
import Columns5Kenos from './components/CustomBlocksTelefonica/Columns/Columns5';
import Columns6Kenos from './components/CustomBlocksTelefonica/Columns/Columns6';
import H1 from './components/CustomBlocksTelefonica/Text/H1';
import H2 from './components/CustomBlocksTelefonica/Text/H2';
import paragraphKenos from './components/CustomBlocksTelefonica/Text/P';
import PlanCardTelefonica from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica';
import PlanCardFeatTelefonica from './components/CustomBlocksTelefonica/Cards/PlanCardFeatTelefonica';
import OrderedListKenos from './components/CustomBlocksTelefonica/Text/OrderedList';
import NumberListKenos from './components/CustomBlocksTelefonica/Text/NumberList';
import PlanCardTelefonica2 from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica2';
import PlanCardTelefonica3 from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica3';
import MediaCardTLPG from './components/CustomBlocksTelefonica/Cards/MediaCardTLPG';
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
import iHeroImageComplete from './components/CustomBlocksTelefonica/InternalHero/ImageCompleteBig';
import iHeroImageCompleteSmall from './components/CustomBlocksTelefonica/InternalHero/ImageCompleteSmall';
import CardLight from './components/CustomBlocksTelefonica/Cards/Card/CardLight';
import CardDark4Col from './components/CustomBlocksTelefonica/Cards/Card/CardDark4Col';
import ImageCompleteBigCenter from './components/CustomBlocksTelefonica/InternalHero/ImageCompleteBigCenter';
import CardHeroRightLight from './components/CustomBlocksTelefonica/Cards/CardHeroRightLight';
import CardHeroSectionDark from './components/CustomBlocksTelefonica/Cards/CardHeroSectionDark';
// import PageIdContext from './hooks/PageContext';

/* Hooks */
import { PageContext } from './hooks/pageSlice'

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

	const { items, addItem } = useContext(PageContext);
	// const [newItemName, setNewItemName] = useState('');

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
	console.log("ITEMSSSSSSSSSS", items)

	const onEditor = (editor: Editor, opts = {} ) => {

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
						<link rel="stylesheet" href="fonts/fonts.css">
					</head>
					${editor.getHtml()}
				</html>`,
			},
			  isBinary: undefined,
			  ...opts,
		};

		editor.on('page:select', (page: any) => {
			currentPageId = parseInt(page.id);
			currentPageName = page.attributes.name;
		});

		editor.on('load', function() {
			editor.runCommand('core:component-outline');
		});		

		editor.Commands.add(commandName, {

			run(editor: PluginOptions = {}) {
				// editor.Modal.open({
				// 	title: 'Modal example',
				// 	content: ``,
				// });

				const exportData = {
					html: `<!doctype html>
					<html lang="en">
						<head>
							<meta charset="utf-8">
							<meta name="viewport" content="width=device-width, initial-scale=1.0" />
							<link rel="stylesheet" href="css/style.css">
							<link rel="stylesheet" href="css/kenos.css">							
						</head>
						${editor.getHtml()}
					</html>`,
					css: editor.getCss()
				}

				editor.Modal.open({
					title: 'My title',
					content: 'My content',
					attributes: {
						class: 'my-small-modal',
					},
				});			

				if (config.addExportBtn) {

					// const existingButtons = document.querySelectorAll(`${pfx}btn-prim`);
					// existingButtons.forEach(button => button.remove());

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
						
						// const existingButtons = document.querySelectorAll(`.${pfx}btn-prim`);
						// existingButtons.forEach(button => button.remove());
						
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
						
						btnExpExport.onclick = () => {
							debugger
							editor.runCommand('gjs-export-zip');
							// const zip = new JSZip();
							// const carpetaRaiz:any = zip.folder('mi_proyecto');

							// carpetaRaiz.file('index.html', exportData.html);
							// carpetaRaiz.folder('css').file('style.css', exportData.css);
							// carpetaRaiz.folder('css').file('kenos.css', cssKenos);
							// // carpetaRaiz.folder('css').file('fonts.css', cssFonts);
							// carpetaRaiz.folder('images').file('logo.png', /* contenido de la imagen */);

							// zip.generateAsync({ type: 'blob' }).then((blob) => {
							// 	const url = URL.createObjectURL(blob);
							// 	const link = document.createElement('a');
							// 	link.href = url;
							// 	link.download = `page_${currentPageId}.zip`;
							// 	document.body.appendChild(link);
							// 	link.click();
							// 	document.body.removeChild(link);
							// });
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

	const saveHTML = async (html: any) => {
		try {
			// const response = await fetch('http://localhost:3000/save-html', {
			const response = await fetch('https://hispam-pages-backend.onrender.com/save-html', {
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
				'/hispam-pages/css-kenos/kenos.css',
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
		},
		pluginsOpts: {
			"grapesjs-plugin-toolbox": {
				panels: true
			},
		}
	};

	return (
			<div>
				{/*<GoogleOuthAnalytics />*/}
				{ items.length > 0 && <GjsEditor
					grapesjs={grapesjs}
					grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
					onEditor={onEditor}
					options={gjsOptions}
					plugins={[
						iHeroImageComplete,
						iHeroImageCompleteSmall,
						ImageCompleteBigCenter,
						// CardLight,
						CardHeroRightLight,
						CardHeroSectionDark,
						CardDark4Col,
						// MediaCardTLPG,
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
						// PlanCardTelefonica,
						PlanCardTelefonica2,
						PlanCardTelefonica3,
						// PlanCardFeatTelefonica,
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