import grapesjs, { Editor, EditorConfig } from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import './App.scss';
import "./fonts/fonts.scss";
import Card from "./components/CustomBlocksTelefonica/Card";
import CardProduct from "./components/CustomBlocksTelefonica/CardProduct";

function App() {
	const onEditor = (editor: Editor) => {
		console.log('Editor loaded', { editor });
	};

	const gjsOptions: EditorConfig = {
		height: '100vh',
		storageManager: { type: 'indexeddb' },
		undoManager: { trackSelection: false },
		selectorManager: { componentFirst: true },
		modal: { custom: true },
		fromElement: true,
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

	return (
		<GjsEditor
			grapesjs={grapesjs}
			grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
			onEditor={onEditor}
			options={gjsOptions}
			plugins={[
				Card,
				CardProduct,
				{
					id: 'grapesjs-ga',
					src: 'https://unpkg.com/grapesjs-ga',
				},
				{
				  id: 'gjs-blocks-basic',
				  src: 'https://unpkg.com/grapesjs-blocks-basic',
				},
				{
					id: 'grapesjs-indexeddb',
					src: 'https://unpkg.com/grapesjs-indexeddb'
				},
				{
					id: 'grapesjs-custom-code',
					src: 'https://unpkg.com/grapesjs-custom-code',
				},
				{
					id: 'grapesjs-navbar',
					src: 'https://unpkg.com/grapesjs-navbar',
				},
				{
					id: 'grapesjs-plugin-forms',
					src: 'https://unpkg.com/grapesjs-plugin-forms',
				},
				{
					id: 'grapesjs-plugin-ckeditor',
					src: 'https://unpkg.com/grapesjs-plugin-ckeditor',
				},
				{
					id: 'grapesjs-tui-image-editor',
					src: 'https://unpkg.com/grapesjs-tui-image-editor',
				},
				{
					id: 'grapesjs-plugin-export',
					src: 'https://unpkg.com/grapesjs-plugin-export',
				},
				{
					id: 'grapesjs-rulers',
					src: 'https://unpkg.com/grapesjs-rulers',
				},
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
	)
}

export default App