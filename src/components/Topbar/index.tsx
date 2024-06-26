import { useContext } from 'react';
import { DevicesProvider, WithEditor } from '@grapesjs/react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TopbarButtons from '../TopbarButtons'
import LogoUxHispam from '../../assets/logo-uxhispam.svg'
import './topbar.scss';
import JSZip from 'jszip';
import { Editor } from 'grapesjs';
import { PageContext } from '../../hooks/pageSlice';
//Icons
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


function Topbar({mainEditor} : { mainEditor: Editor }) {

	const { metaDescription } = useContext(PageContext);

	const exportPage = async (meta: string) => {

		if(mainEditor) {
			const exportData = {
				html: `<!doctype html>
				<html lang="en">
					<head>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<meta name="description" content="${meta}" />
						<link rel="stylesheet" href="./styles.css">
						<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
					</head>
					${mainEditor.getHtml()}
				</html>`,
				css: mainEditor.getCss()
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
		//editor.Modal.close();
		}		
	};

	// console.log("IMAGENES", )
	// mainEditor.AssetManager.all.models.forEach((item: any) => console.log("ITEM", item))
	if(mainEditor) {
		console.log("mainEditor.AssetManager.all.models", mainEditor.AssetManager.getConfig().em.attributes.AssetManager.all.models)
		mainEditor.AssetManager.all.models.forEach((item: any) => {
			console.log("ITEM", item.attributes.src)
		})
	}

	return (
		<div className="top-sidebar">
			<div>
				<DevicesProvider>
					{({ selected, select, devices }) => (
						<Select 
							value={selected} 
							onChange={(ev) => select(ev.target.value)}
							labelId="demo-select-small-label"
							id="demo-select-small"
							sx={{ m: 1, minWidth: 150 }}
						>
							{devices.map((device) => (
								<MenuItem value={device.id} key={device.id}>
								{device.getName()}
								</MenuItem>
							))}
						</Select>
					)}
				</DevicesProvider>
			</div>
			<div>
				<img src={LogoUxHispam} alt="Logo UX Hispam" className="logo-image" />
			</div>
			<div>
				<WithEditor>
					<div className='top-bar'>
						<TopbarButtons></TopbarButtons>
						<a className='export-btn' onClick={() => exportPage(metaDescription)}>
							<FileDownloadOutlinedIcon />
							Exportar HTML
						</a>
					</div>					
				</WithEditor>
			</div>
		</div>
	)
}

export default Topbar