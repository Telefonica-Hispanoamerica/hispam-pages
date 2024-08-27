import { useContext, useEffect, useState, useRef } from 'react'
import grapesjs, { Editor, EditorConfig, PluginOptions, Component } from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
// import LeftSidebar from './components/LeftSidebar';
import './App.scss';
import "./fonts/fonts.scss";
import axios from "axios";

import TextWrappingKenos from './components/CustomBlocksTelefonica/Atoms/Text/H1';


// import JSZip from 'jszip';

// import cssFonts from '../public/hispam-pages/fonts/fonts-telefonica.css?inline';
import Columns3Kenos from './components/CustomBlocksTelefonica/Molecules/Columns/Columns3';
import Columns1Kenos from './components/CustomBlocksTelefonica/Molecules/Columns/Columns1';
import Columns2Kenos from './components/CustomBlocksTelefonica/Molecules/Columns/Columns2';
import Columns4Kenos from './components/CustomBlocksTelefonica/Molecules/Columns/Columns4';
import Columns5Kenos from './components/CustomBlocksTelefonica/Molecules/Columns/Columns5';
import Columns6Kenos from './components/CustomBlocksTelefonica/Molecules/Columns/Columns6';
import H1 from './components/CustomBlocksTelefonica/Atoms/Text/H1';
import H2 from './components/CustomBlocksTelefonica/Atoms/Text/H2';
import paragraphKenos from './components/CustomBlocksTelefonica/Atoms/Text/P';
import OrderedListKenos from './components/CustomBlocksTelefonica/Atoms/Text/OrderedList';
import NumberListKenos from './components/CustomBlocksTelefonica/Atoms/Text/NumberList';
// import PlanCardTelefonica2 from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica2';
// import PlanCardTelefonica3 from './components/CustomBlocksTelefonica/Cards/PlanCardTelefonica3';
// import CardHeroTLPG from './components/CustomBlocksTelefonica/Cards/CardHeroLeftLight';
// import ValuePrepositionImageDark4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionImageDark4Col';
// import ValuePrepositionImageDarkLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionImageDarkLeft3Col';
// import ValuePrepositionIconDark4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionIconDark4Col';
// import ValuePrepositionIconDarkLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionIconDarkLeft3Col';
// import ValuePrepositionNoImageDark4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionNoImageDark4Col';
// import ValuePrepositionNoImageDarkLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionNoImageDarkLeft3Col';
// import ValuePrepositionIconLight4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionIconLight4Col';
// import ValuePrepositionIconLightLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionIconLightLeft3Col';
// import ValuePrepositionImageLight4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionImageLight4Col';
// import ValuePrepositionImageLightLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionImageDarkLeft3Col';
// import ValuePrepositionNoImageLight4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionNoImageLight4Col';
// import ValuePrepositionNoImageLightLeft4Col from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsLight/ValuePrepositionNoImageLightLeft3Col';
import ValuePrep4xCenter from './components/CustomBlocksTelefonica/Organisms/ValuePreposition/ValuePrep4xCenter';
// import ValuePrepositionIconLightLeftDivider2ColContent from './components/CustomBlocksTelefonica/Templates/ValuePreposition/ValuePrep4xCenter';
// import ValuePrepositionIconDarkLeftDivider2ColContent from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionIconDarkLeftDivider2ColContent';
// import ValuePrepositionIconDarkLeftDivider from './components/CustomBlocksTelefonica/Cards/ValuePrepositionsDark/ValuePrepositionIconDarkLeftDivider';
import iHeroImageCompleteSmall from './components/CustomBlocksTelefonica/Molecules/InternalHero/ImageCompleteSmall';
import ImageCompleteBigCenter from './components/CustomBlocksTelefonica/Molecules/InternalHero/ImageCompleteBigCenter';
// import CardDark4Col from './components/CustomBlocksTelefonica/Cards/Card/CardDark4Col';

import CardHeroRightLight from './components/CustomBlocksTelefonica/Others/CardHeroRightLight';
// import CardHeroSectionDark from './components/CustomBlocksTelefonica/Cards/CardHeroSectionDark';

/* Hooks */
import { PageContext } from './hooks/pageSlice';
import HeroImageCompleteBig from './components/CustomBlocksTelefonica/Molecules/InternalHero/ImageCompleteBig';
// import CardLight3Col from './components/CustomBlocksTelefonica/Cards/Card/CardLight3Col';
import CardLight from './components/CustomBlocksTelefonica/Others/Card/CardLight';
import TabsCardPlan from './components/CustomBlocksTelefonica/Organisms/Tabs/TabsCardPlan';
import ValuePrepLeft from './components/CustomBlocksTelefonica/Molecules/ValuePreposition/valuePrepLeft';
import ValuePrepCenter from './components/CustomBlocksTelefonica/Molecules/ValuePreposition/valuePrepCenter';
import SectionBlank from './components/CustomBlocksTelefonica/Atoms/Section';
import PlanCardFeature from './components/CustomBlocksTelefonica/Molecules/PlanCard/PlanCardFeature';
import PlanCard from './components/CustomBlocksTelefonica/Molecules/PlanCard/PlanCard';
import ValuePrep4xLeft from './components/CustomBlocksTelefonica/Organisms/ValuePreposition/ValuePrep4xLeft';
import { Height } from '@mui/icons-material';
// import TabsCardPlan2 from './components/CustomBlocksTelefonica/Tabs/TabsCardPlan2';


// interface Item {
//     id: number;
//     name: string;
//     styles: string;
//     component: string;
// }

interface CustomComponent extends Component {
	updateImage: () => void;
  }
  
  interface Device {
	name?: string;
	type?: string;
	widthMedia?: number;
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

// Extend the Window interface
declare global {
	interface Window {
	  editor: any; // Replace 'any' with the actual type of editor if you know it
	}
 }


function App() {

	const { 
		items,
		editorContext,
		// addItem, 
		pageIdSelected, 
		getEditorContext 
	} = useContext(PageContext);
	const [ isOpen, setIsOpen ] = useState<boolean>(false);
	const currentPageIdRef = useRef('');
	const [ device, setDevice ] = useState<string>('')

	currentPageIdRef.current = pageIdSelected;

	// const handleAddItem = (item: Item, id: number) => {
	// 	if (item.component.trim() !== '') {
	// 		const newItem: Item = {
	// 			id: id,
	// 			name: item.name,
	// 			styles: item.styles,
	// 			component: item.component
	// 		};
	// 	  	addItem(newItem);
	// 		saveHTML(newItem)
	// 	}
	// };

	useEffect(() => {
		if (items.length > 0) {
		  setIsOpen(true);
		} else {
		  setIsOpen(false);
		}
	}, [items]);	


	// const saveHTML = async (html: any) => {
	// 	try {
	// 		const response = await fetch('http://localhost:3000/save-html', {
	// 		//const response = await fetch('https://hispam-pages-backend.onrender.com/save-html', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify(html),
	// 		});
	// 		if (response.ok) {
	// 			console.log('HTML guardado exitosamente', html);
	// 		} else {
	// 			console.error('Error al guardar el HTML en el backend:', response.statusText);
	// 		}
	// 	} catch (error) {
	// 	  	console.error('Error al guardar el HTML en el backend', error);
	// 	}
	// };


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
		// storageManager: {
		// 	type: 'local',
		// },
        storageManager: { autoload: false },
		canvas: {
			styles: [
				'styles/global-styles.css',
				'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
				'hispam-pages/fonts/fonts.css'
			],
			scripts: []
		},
		projectData: {
			assets: [
				'images/template-telefonica/serie1.jpg',
				'images/template-telefonica/serie2.jpg',
				'images/template-telefonica/serie3.jpg',
				'images/template-telefonica/serie4.jpg',
				'images/template-telefonica/serie5.jpg',
				'images/template-telefonica/hero.webp',
			],
			pages: [
				...items
			],
		},
		pluginsOpts: {},
		assetManager: {
			upload: false,
    		autoAdd: false,
    		embedAsBase64: false,
			
			uploadFile: async (e: any) => {
				e.preventDefault();
				const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
				const pageId = currentPageIdRef.current;

				if (!files || !files.length) {
				  console.error('No files found in the event');
				  return;
				}
	  
				const formData = new FormData();
				formData.append('pageId', pageId);
				for (let i = 0; i < files.length; i++) {
				  	formData.append('files[]', files[i], files[i].name);
				}

				try {
					//https://hispam-pages-backend.onrender.com/
					//const response = await axios.post('http://localhost:3000/upload', formData, {
					const response = await axios.post('https://hispam-pages-backend.onrender.com/upload', formData, {
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					});
		
					const data = response.data;
		
					if (data && Array.isArray(data)) {
						data.forEach((file: { url: string }) => {
							const assetManager =  grapesjs.editors[0].editor.attributes.AssetManager
							assetManager.add({ src: file.url });
						});
					} else {
					  console.error('Invalid response from server:', data);
					}
				  } catch (error) {
					console.error('Error uploading file:', error);
				}
			},
		},
		cssComposer: {
			// options
		}
	};	

	const onEditor = (editor: Editor) => {		
		(window as any).editor = editor;
		getEditorContext(editor);
		// let currentPageId = 0;
		// let currentPageName = '';

		// const pfx = editor.getConfig('stylePrefix');
		const commandName = 'save-export';

		const config: PluginOptions = {
			addExportBtn: true,
			btnLabel: 'Save HTML',
			filenamePfx: 'grapesjs_template',
			filename: undefined,			
			done: () => {},
			onError: console.error,
			isBinary: undefined,
		};

		// editor.on('page:select', (page: any) => {
		// 	currentPageId = parseInt(page.id);
		// 	currentPageName = page.attributes.name;
		// });

		editor.on('load', function() {
			editor.runCommand('core:component-outline');			
		});
		

		editor.on('component:remove', function(component) {
			// Remover CSS
			let css: any = editor.getCss();
			let selector = component.getSelectorsString();
			let regex = new RegExp(`${selector}\\s*{[^}]*}`, 'g');
			css = css.replace(regex, '');
			editor.setStyle(css);

			// Remover HTML
			let html: any = editor.getHtml();
			let componentHtml = component.toHTML();

			// Remover JS
			let js: any = editor.getJs();
			let componentId = component.getId();
			let jsRegex = new RegExp(`[\\s\\S]*?// Component: ${componentId}[\\s\\S]*?// End Component: ${componentId}`, 'g');
			js = js.replace(jsRegex, '');
		});

		editor.on('component:update', function(component) {
            console.log("Component UPDATE", component)
		});
		

		// Definir un nuevo tipo de componente 'image'		
		editor.Components.addType('image', {
			isComponent: el => el.tagName === 'IMG',
			model: {
			defaults: {
				traits: [
					// {
					// 	type: 'text', // Tipo de trait para almacenar la URL de la imagen
					// 	name: 'src',
					// 	label: 'Imagen URL',
					// 	changeProp: true,
					// 	command: 'upload-image',
					// 	// Personalizar el trait para incluir un botón para cargar archivos
					// 	// onChange() {
					// 	//   // No hace falta lógica aquí, se manejará en el evento de carga de archivo
					// 	// }
					//   },
					//   {
					// 	type: 'button', // Botón para abrir el explorador de archivos
					// 	label: 'Cargar Imagen',
					// 	command: 'upload-image', // Comando que se ejecuta al hacer clic
					//   },
					'src',
					'srcset-desktop',
					'srcset-mobile',
					'alt',
					'width',
					'height',
					'loading'
				],
				attributes: {
					src: '',
					//src: 'file',
					'srcset-desktop': '',
					'srcset-mobile': '',
					alt: '',
					width: 'auto',
					height: 'auto',
					loading: 'lazy'
				},
			},
			// Definir el método dentro del modelo del componente
			init() {
				// Definir el método updateSrcset dentro del modelo
				this.updateSrcset = function() {
					console.log("UPDATE SRCSET ------>")
					const attributes = this.get('attributes');
					if (!attributes) return;
			
					const src = attributes.src || '';
					const srcsetDesktop = attributes['srcset-desktop'] || '';
					const srcsetMobile = attributes['srcset-mobile'] || '';
					const width = attributes.width || '';
					const height = attributes.height || '';
					const loading = attributes.loading || '';
					
					const currentDevice = editor.getDevice() as string | Device;

					let srcset = '';
					// if (srcsetMobile) {
					// 	srcset += `${srcsetMobile} 767w, `;
					// }
					// if (srcsetDesktop) {
					// 	srcset += `${srcsetDesktop} 768w`;
					// }

					if(currentDevice == 'mobilePortrait') {
						srcset += `${srcsetMobile} 767w, `;
					} else {
						srcset += `${srcsetDesktop} 768w`;
					}

					console.log("srcset---- IMG", srcset)
			
					const sizes = "(max-width: 767px) 300px, (max-width: 768px) 1200px, 1400px";
			
					// Actualizar atributos del modelo del componente
					this.set({
						'srcset': srcset,
						'sizes': sizes,
						'src': src,
						'width': width,
						'height': height,
						'loading': loading
					});
			
					// Actualizar el DOM directamente
					if (this.view) {
						const el = this.view.el;
						el.setAttribute('srcset', srcset);
						el.setAttribute('sizes', sizes);
						el.setAttribute('src', src);
						if (width) el.setAttribute('width', width);
						if (height) el.setAttribute('height', height);
						if (height) el.setAttribute('loading', loading);
					}					
				};
			},
			},
		});

		editor.Commands.add('upload-image', {						
			run(editor) {
				console.log("RUN UPLOAD")
				const fileInput: any = document.createElement('input');
				fileInput.type = 'file';
				fileInput.accept = 'image/*';
				fileInput.style.display = 'none';
		
				fileInput.addEventListener('change', async  function() {
					const file = fileInput.files[0];
					if (file) {
					const reader = new FileReader();
					reader.onload = async function(e: any) {
						// const imgComponent: any = editor.getSelected();
						// console.log("imgComponent 1", imgComponent)
						console.log("imgComponent 2", e)
						// if (imgComponent) {
						// 	imgComponent.set('attributes', { src: e.target.result, srcset: e.target.result });
						// 	imgComponent.view.el.src = e.target.result; // Actualiza el src en el canvas
						// }
						e.preventDefault();
						const files = e.dataTransfer ? e.dataTransfer.files : e.target.result;
						console.log("files", files)
						const pageId = currentPageIdRef.current;

						if (!files || !files.length) {
							console.error('No files found in the event');
							return;
						}
			
						const formData = new FormData();
						formData.append('pageId', pageId);
						for (let i = 0; i < files.length; i++) {
							formData.append('files[]', files[i], files[i].name);
						}

						try {
							//https://hispam-pages-backend.onrender.com/
							//const response = await axios.post('http://localhost:3000/upload', formData, {
							const response = await axios.post('https://hispam-pages-backend.onrender.com/upload', formData, {
								headers: {
									'Content-Type': 'multipart/form-data',
								},
							});
				
							const data = response.data;
				
							if (data && Array.isArray(data)) {
								data.forEach((file: { url: string }) => {
									// const assetManager =  grapesjs.editors[0].editor.attributes.AssetManager
									// assetManager.add({ src: file.url });
									const imgComponent: any = editor.getSelected();
									console.log("imgComponent 1", imgComponent)
									console.log("imgComponent 2", e)
									if (imgComponent) {
										imgComponent.set('attributes', { src: file.url, srcset: file.url });
										imgComponent.view.el.src = file.url; // Actualiza el src en el canvas
									}
								});
							} else {
								console.error('Invalid response from server:', data);
							}
						} catch (error) {
							console.error('Error uploading file:', error);
						}
					};					
					reader.readAsDataURL(file);
					}
				});

				console.log("READR----", fileInput)
		
				document.body.appendChild(fileInput);
				fileInput.click();
				document.body.removeChild(fileInput);
			}
		});
		
		// Función para actualizar los componentes existentes
		function updateAllComponentsSrcset(editor: any) {
			// Obtener todos los componentes
			const components = editor.getWrapper().findType('image');  // Actualizado para encontrar solo componentes de tipo 'image'
  
			components.forEach((component: any) => {
				// Verificar si el componente tiene el método 'updateSrcset' y es del tipo correcto
				if (typeof component.updateSrcset === 'function') {
					component.updateSrcset();
				}
			});
		}		  
		
		editor.on('change:device', () => {
			console.log('CHANGE DEVICE');
			updateAllComponentsSrcset(editor);
			editor.runCommand('canvas:spot:update');
		});

		editor.Components.addType('button', {
			isComponent: el => el.tagName === 'A',			
			model: {
			defaults: {
				traits: [
					'title',
					'href',
					{
						type: 'select', // Type of the trait
						name: 'target', // (required) The name of the attribute/property to use on component
						label: 'Target', // The label you will see in Settings
						options: [
							{ id: '_blank', label: 'blank'},
							{ id: '_parent', label: '_parent'},
							{ id: '_self', label: '_self'},
							{ id: '_top', label: '_top'},
						]
					},
					{
						type: 'select',
						label: 'rel',
          				name: 'rel',
						options: [
							{ id: 'noopener_noreferrer', name: 'noopener noreferrer' },
							{ id: 'nofollow', name: 'nofollow' },
						  ],
						changeProp: true
					}
					//'rel',
				],
				attributes: {
					title: '',
					href: '',
					target: '',
					rel: ''
				},
			},
			// Definir el método dentro del modelo del componente
				
			},
		});
	

		  


		// editor.Components.addType('image', {
		// 	isComponent: el => el.tagName === 'image',
		// 	model: {
		// 	  defaults: {
		// 		traits: [
		// 		  // Strings are automatically converted to text types
		// 		  'name', // Same as: { type: 'text', name: 'name' }
		// 		  'placeholder',
		// 		  'width',
		// 		  'height',
		// 		  {
		// 			type: 'select', // Type of the trait
		// 			name: 'type', // (required) The name of the attribute/property to use on component
		// 			label: 'Type', // The label you will see in Settings
		// 			options: [
		// 			  { id: 'text', label: 'Text'},
		// 			  { id: 'email', label: 'Email'},
		// 			  { id: 'password', label: 'Password'},
		// 			  { id: 'number', label: 'Number'},
		// 			]
		// 		  }, {
		// 			type: 'checkbox',
		// 			name: 'required',
		// 		}],
		// 		// As by default, traits are bound to attributes, so to define
		// 		// their initial value we can use attributes
		// 		//attributes: { type: 'text', required: true },
		// 		attributes: { // Default attributes
		// 			type: 'text',
		// 			name: 'default-name',
		// 			placeholder: 'Insert text here',
		// 			width: 500,
		// 			height: 500,
		// 		},
		// 	  },
		// 	},
		// });

		// editor.Components.addType('img', {
		// 	isComponent: el => el.tagName === 'img',
		// 	model: {
		// 	  	defaults: {
		// 			traits: {
		// 				// The trait `name` property is used as a key
		// 				labels: {
		// 				  	href: 'Href label',
		// 				},
		// 				// For built-in traits, like `text` type, these are used on input DOM attributes
		// 				attributes: {
		// 				  	href: { placeholder: 'eg. https://google.com' },
		// 				},
		// 				// For `select` types, these are used to translate option labels
		// 				options: {
		// 					target: {
		// 						// Here the key is the `id` of the option
		// 						_blank: 'New window',
		// 					},
		// 				},
		// 			},
		// 			// As by default, traits are bound to attributes, so to define
		// 			// their initial value we can use attributes
		// 		attributes: { type: 'text', required: true },
		// 	  },
		// 	},
		// });

		editor.Commands.add(commandName, {
			
			run(editor: PluginOptions = {}) {		

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

					// const btnExp = document.createElement('a');
					// btnExp.innerHTML = `Save HTML ` + currentPageName;
					// btnExp.className = `${pfx}btn-prim`;
					// btnExp.type = 'button';

					// const btnExpExport = document.createElement('a');
					// btnExpExport.innerHTML = `Export HTML ` + currentPageName;
					// btnExpExport.className = `${pfx}btn-prim`;
					// btnExpExport.type = 'button';

					editor.on('run:save-export', () => {
						editor.runCommand('core:open-code');

						// const existingGroupButtons = document.querySelectorAll('.buttons-group');
						// existingGroupButtons.forEach(div => div.remove());

						// const el = editor.Modal.getContentEl();

						// divButtonsModal?.appendChild(btnExp);
						// divButtonsModal?.appendChild(btnExpExport);

						// el?.appendChild(divButtonsModal);							

						// btnExp.onclick = () => {
						// 	const editPage = items.filter(item => item.id == currentPageId);
						// 	if(editPage[0]) {
						// 		let editItem = {
						// 			id: editPage[0].id,
						// 			name: editPage[0].name,
						// 			styles: editor.getCss(),
						// 			component: editor.getHtml()
						// 		}
						// 		handleAddItem(editItem, editItem.id);
						// 	} else {
						// 		const nextIndex = items.length + 1;
						// 		let newItem = {
						// 			id: Date.now(),
						// 			name:`Page ${nextIndex}`,
						// 			styles: editor.getCss(),
						// 			component: editor.getHtml()
						// 		}
						// 		handleAddItem(newItem, newItem.id);
						// 	}
						// 	editor.Modal.close();
						// }
						// let metaDesc = metaDescription
						// btnExpExport.addEventListener('click', (event) => exportPage(editor, event));
						// btnExpExport.onclick = (event) => exportPage(editor, metaDesc, event)
					});
				}

			},
			stop(editor) {
				editor.Modal.close();
			},
		});		
	};

	return (
		<>			
			<div className='gjs-container-pages'>
				{ isOpen ? (<GjsEditor
					grapesjs={grapesjs}
					grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
					onEditor={onEditor}
					options={gjsOptions}
					plugins={[						
						// Columnas,
						Columns1Kenos,
						Columns2Kenos,
						Columns3Kenos,
						Columns4Kenos,
						Columns5Kenos,
						Columns6Kenos,
						// Atoms,
						SectionBlank,
						H1,
						H2,
						paragraphKenos,
						OrderedListKenos,
						NumberListKenos,
						TextWrappingKenos,
						// Molecules,
						HeroImageCompleteBig,
						iHeroImageCompleteSmall,
						ImageCompleteBigCenter,
						ValuePrepLeft,
						ValuePrepCenter,
						CardLight,
						PlanCardFeature,
						PlanCard,
						TabsCardPlan,						
						CardHeroRightLight,						
						//Template
						ValuePrep4xLeft,
						ValuePrep4xCenter,
						TabsCardPlan,
						{
							id: 'gjs-blocks-basic',
							src: 'https://unpkg.com/grapesjs-blocks-basic',
						},
						{
							id: 'grapesjs-plugin-export',
							src: 'https://unpkg.com/grapesjs-plugin-export',
						},
						{
							id: 'grapesjs-tabs',
							src: 'https://unpkg.com/grapesjs-tabs',
						},
						// {
						// 	id: 'grapesjs-preset-webpage',
						// 	src: 'https://unpkg.com/grapesjs-preset-webpage'
						// }						
					]}
				>
					<div className={'layout-editor-wrapper'}>
						{/* <LeftSidebar></LeftSidebar> */}

						<div className={'gjs-editor-column'}>
						 	{editorContext && <Topbar editorParamaters={editorContext} />}			
							<Canvas />
						</div>
						<RightSidebar ></RightSidebar>
					</div>
				</GjsEditor>) : (
					<div className='isLoading'>
						<img src='./images/LoadingMovistar.gif' alt='loading' className='img-loading'/>
				</div>)}			
			</div>
		</>		
	)
}

export default App