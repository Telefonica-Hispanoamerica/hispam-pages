import { useState, useEffect } from 'react'
import grapesjs, { Editor, EditorConfig, PluginOptions } from 'grapesjs';
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
import cssKenos from '@uxhispam/kenos/css/kenos.css?inline';
// import cssFonts from './hispam-pages/fonts/fonts.css?inline';
// import cssRoboto from '@uxhispam/kenos/css/roboto.css'
// import GoogleOuthAnalytics from './components/GoogleOuthAnalytics';
import MediaCardKenos from './components/CustomBlocksTelefonica/Cards/Card/CardLight';
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
import PlanCardFeatTelefonica from './components/CustomBlocksTelefonica/Cards/PlanCardFeatTelefonica';
import OrderedListKenos from './components/CustomBlocksTelefonica/Text/OrderedList';
import NumberListKenos from './components/CustomBlocksTelefonica/Text/NumberList';
import PlanCardTelefonica2 from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica2';
import PlanCardTelefonica3 from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica3';
import MediaCardTLPG from './components/CustomBlocksTelefonica/Cards/MediaCardTLPG';
import CardHeroTLPG from './components/CustomBlocksTelefonica/Cards/CardHeroLeftLight';
import ValuePrepositionImageDark from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionImageDark';
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

// type PropsLandingPage = {
// 	id?: number,
// 	name?: string,
// 	styles?: string,
// 	component?: string,
// }


function App() {

	const newPage = {
		id: 0,
		name: 'New page',
		component: ``,
	}

	const [ landingPage, setLandingPage ] = useState<any>([newPage]);
	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	// const { pageId } = useContext<any>(PageIdContext);

	// const [ onEditorUpdate, setOnEditorUpdate] = useState<any>(null);

	// const [currentPageId, setCurrentPageId] = useState<number | null>(null);

	// useEffect(() => {
	// 	setCurrentPageId(pageId);

	// }, [pageId]);


	useEffect(() => {
		async function fetchMyAPI() {
			try {
				const response = await fetch('http://localhost:3000/get-html');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const jsonData = await response.json();
				setLandingPage((prevState:any) => [...prevState, ...jsonData]);
				const updatedData = [...landingPage, ...jsonData];
            	setLandingPage(updatedData);
				// landingPage.push(...jsonData)
				landingPage.length >= 0 ? setIsOpen(true) : setIsOpen(false)
			} catch (error) {
				console.error('Error al obtener el HTML desde el backend', error);
				setIsOpen(true)
			}
		}

		fetchMyAPI()

	}, []);

	const onEditor = (editor: Editor, opts = {} ) => {

		let currentPageId = 0;
		let currentPageName = '';

		console.log("LANDING PAGE ARRAY", landingPage)

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
			console.log('PAGE', page)
			currentPageId = page._previousAttributes.id;
			console.log('currentPageId', currentPageId)
			currentPageName = page.attributes.name;
		});

		editor.Commands.add(commandName, {

			run(editor: PluginOptions = {}) {
				editor.Modal.open({
					title: 'Modal example',
				// 	content: `<pre id="css-to-parse">
				// 	.simple-class {
				// 	  background-image:url("https://image1.png"), url("https://image2.jpg");
				// 	  background-attachment: fixed, scroll;
				// 	  background-position:left top, center center;
				// 	  background-repeat:repeat-y, no-repeat;
				// 	  background-size: contain, cover;
				// 	  box-shadow: 0 0 5px #9d7aa5, 0 0 10px #e6c3ee;
				// 	  border: 2px solid #FF0000;
				// 	}
				//   </pre>`,
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
						</head>
						${editor.getHtml()}
					</html>`,
					css: editor.getCss()
				}
				if (config.addExportBtn) {

					const existingButtons = document.querySelectorAll(`${pfx}btn-prim`);
					console.log("existingButtons", existingButtons)
					existingButtons.forEach(button => button.remove());

					const btnExp = document.createElement('button');
					btnExp.innerHTML = `Save HTML ` + currentPageName;
					btnExp.className = `${pfx}btn-prim`;
					btnExp.type = 'button';

					const btnExpExport = document.createElement('button');
					btnExpExport.innerHTML = `Export HTML ` + currentPageName;
					btnExpExport.className = `${pfx}btn-prim`;
					btnExpExport.type = 'button';					

					editor.on('run:save-export', () => {
						const el = editor.Modal.getContentEl();
						el?.appendChild(btnExp);

						btnExp.onclick = () => {
							console.log('currentPageId 2', currentPageId)
							const getExistingPage = landingPage.filter((page: any) => page.id == currentPageId);
							if(getExistingPage[0].id > 0){
								console.log('getExistingPage', getExistingPage)
								console.log('currentPageName', currentPageName)
								saveHTML(									
									getExistingPage[0].id,
									{
										...getExistingPage[0],										
										name: currentPageName,
										// styles: exportData.css,
										// component: exportData.html
										styles: editor.getCss(),
										component: editor.getHtml()
									}
								);
								editor.Modal.close();
							} else {
								const nextIndex = landingPage.length + 1;
								saveHTML(
									nextIndex,
									{
										id: nextIndex,
										name: `Page ${nextIndex}`,
										// styles: exportData.css,
										// component: exportData.html
										styles: editor.getCss(),
										component: editor.getHtml()
									}
								);
								editor.Modal.close();
							}
						}

						el?.appendChild(btnExpExport);
						btnExpExport.onclick = () => {
							const zip = new JSZip();
							const carpetaRaiz:any = zip.folder('mi_proyecto');

							carpetaRaiz.file('index.html', exportData.html);
							carpetaRaiz.folder('css').file('style.css', exportData.css);
							carpetaRaiz.folder('css').file('kenos.css', cssKenos);
							// carpetaRaiz.folder('css').file('fonts.css', cssFonts);
							carpetaRaiz.folder('images').file('logo.png', /* contenido de la imagen */);

							zip.generateAsync({ type: 'blob' }).then((blob) => {
								const url = URL.createObjectURL(blob);
								const link = document.createElement('a');
								link.href = url;
								link.download = `page_${currentPageId}.zip`;
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
							});
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
		console.log("HTML", [id, html])

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
				'/hispam-pages/css-kenos/kenos.css',
				// '/hispam-pages/css-kenos/reset.css',	
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
				...landingPage
			],
		},
		pluginsOpts: {
			"grapesjs-plugin-toolbox": {
				panels: true
			},
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

	return (
			<div>
				{/*<GoogleOuthAnalytics />*/}
				{ isOpen && <GjsEditor
					grapesjs={grapesjs}
					grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
					onEditor={onEditor}
					options={gjsOptions}
					plugins={[
						iHeroImageComplete,
						iHeroImageCompleteSmall,
						ImageCompleteBigCenter,
						CardLight,
						CardHeroRightLight,
						CardHeroSectionDark,
						CardDark4Col,
						// ButtonPrimaryKenos,
						// SubmitButtonsKenos,
						// DataCardKenos,
						// DangerButtonsKenos,
						// LinkButtonKenos,
						// SecondaryButtonKenos,
						// IconButtonKenos,
						// DisplayDataCardKenos,
						// DisplayMediaCardKenos,
						// DisplayMediaCardGroupKenos,
						// HighlightedCardKenos,
						// MediaCardKenos,
						MediaCardTLPG,
						CardHeroTLPG,
						// ValuePrepositionImageDark,
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
						PlanCardTelefonica,
						PlanCardTelefonica2,
						PlanCardTelefonica3,
						PlanCardFeatTelefonica,
						// SnapCardKenos,
						// AvatarKenos,
						// BadgeKenos,
						// BreadcrumbsKenos,
						// CalloutKenos,
						// CheckboxKenos,
						// ChipKenos,
						// DividerKenos,
						// HeaderKenos,
						// HeroComponentKenos,
						// HeroSlideshowKenos,
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