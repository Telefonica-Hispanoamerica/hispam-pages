import React, { useContext } from 'react';
import { Editor } from 'grapesjs';
import { DevicesProvider, WithEditor } from '@grapesjs/react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TopbarButtons from '../TopbarButtons'
import LogoUxHispam from '../../assets/logo-uxhispam.svg'
import './topbar.scss';
import JSZip from 'jszip';
import { PageContext, Tag } from '../../hooks/pageSlice';
import GlobalCSS from '../../../public/styles/global-styles.css?inline';
//Icons
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

interface TopbarProps {
	editorParamaters: Editor;
}

const Topbar: React.FC<TopbarProps> = ({editorParamaters}) => {

	const { metaDescription, tagsKeywords } = useContext(PageContext);

	const exportPage = async (meta: string, keywords: Tag[]) => {
		if(editorParamaters) {
			const tagsAdded: string[] = [];
			keywords.forEach((tagg: { tag: string }) => {
				tagsAdded.push(tagg.tag);
				tagsAdded.join(", ")
			})
			const zip = new JSZip();

			const fontPaths = [
				'/hispam-pages/fonts/Telefonica-Fonts/telefonica-light-webfont.woff',
				'/hispam-pages/fonts/Telefonica-Fonts/telefonica-light-webfont.woff2',
				'/hispam-pages/fonts/Telefonica-Fonts/telefonica-regular-webfont.woff',
				'/hispam-pages/fonts/Telefonica-Fonts/telefonica-regular-webfont.woff2',
				'/hispam-pages/fonts/Telefonica-Fonts/telefonica-bold-webfont.woff',
				'/hispam-pages/fonts/Telefonica-Fonts/telefonica-bold-webfont.woff2'
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
				const fontName:any = path.split('/').pop();
				fonts.file(fontName, data);
			});

			function getImageURLs() {
				const htmlContent = editorParamaters.getHtml();
				const tempDiv = document.createElement('div');
				tempDiv.innerHTML = htmlContent;
			
				const images = tempDiv.querySelectorAll('img');
			
				const imageUrls: any[] = [];
				images.forEach(function(img) {
					var src = img.getAttribute('src');
					if (src) {
						imageUrls.push(src);
					}
				});
			
				return imageUrls;
			}

			var imageUrls = getImageURLs();

			const imgFiles = await Promise.all(
				imageUrls.map(imgPath =>
				fetch(imgPath)
					.then(res => res.arrayBuffer())
					.then(arrayBuffer => ({
						path: imgPath,
						data: arrayBuffer
					}))
				)
			);
		
			imgFiles.forEach(({ path, data }) => {
				const imgs: any = zip.folder('images');
				const imgName:any = path.split('/').pop(); // Obtiene el nombre del archivo desde la ruta
				imgs.file(imgName, data);
			});

			const htmlExport = editorParamaters.getHtml();

			let urlIndex = 0;

			const htmlString = htmlExport.replace(/<img([^>]+)src="([^">]+)"/g, (match, p1) => {
				if (urlIndex < imageUrls.length) {
					const nuevaURLSinTemplate = imageUrls[urlIndex++].replace('/template-telefonica/', '/');
					return `<img${p1}src="${nuevaURLSinTemplate}"`;
				}
				return match;
			});

			const exportData = {
				html: `<!doctype html>
				<html lang="en">
					<head>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<meta name="keywords" content="${tagsAdded}">
						<meta name="description" content="${meta}" />
						<link rel="stylesheet" href="./global-styles.css">
						<link rel="stylesheet" href="./styles.css">
						<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
					</head>
					${htmlString}
				</html>`,
				css: `${editorParamaters.getCss()}`
			};

			zip.file('global-styles.css', GlobalCSS);
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
			}		
	};

	return (
		<div className="top-sidebar">
			<div>
				<img src={LogoUxHispam} alt="Logo UX Hispam" className="logo-image" />
			</div>
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
				{/* <DevicesProvider>
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
				</DevicesProvider> */}
				<WithEditor>
					<div className='top-bar'>
						<TopbarButtons></TopbarButtons>						
						<a className='export-btn' onClick={() => exportPage(metaDescription, tagsKeywords)}>
							<FileDownloadOutlinedIcon />
							Exportar HTML
						</a>
						<a className='export-btn' href="https://squoosh.app/" target="_blank">
							<AddPhotoAlternateIcon />
							Optimizar imagen
						</a>	
					</div>					
				</WithEditor>
			</div>
		</div>
	)
}

export default Topbar