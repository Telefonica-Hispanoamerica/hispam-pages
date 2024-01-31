import grapesjs, { Editor } from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import './App.scss';
import "./fonts/fonts.scss";
import Card from "./components/CustomBlocksTelefonica/Card"
import CardProduct from "./components/CustomBlocksTelefonica/CardProduct"

function App() {
	const onEditor = (editor: Editor) => {
		console.log('Editor loaded', { editor });
	};

	return (
		<GjsEditor
			grapesjs={grapesjs}
			grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
			onEditor={onEditor}
			options={
				{
					height: '100vh',					
					storageManager: false,					
				}
			}
			plugins={[
				Card,
				CardProduct,
				{
				  id: 'gjs-blocks-basic',
				  src: 'https://unpkg.com/grapesjs-blocks-basic',
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
