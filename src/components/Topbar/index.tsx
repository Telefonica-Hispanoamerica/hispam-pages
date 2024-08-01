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
				const fontName:any = path.split('/').pop();
				fonts.file(fontName, data);
			});

			function getImageURLs() {
				var htmlContent = mainEditor.getHtml();
				var tempDiv = document.createElement('div');
				tempDiv.innerHTML = htmlContent;
			
				var images = tempDiv.querySelectorAll('img');
			
				var imageUrls: any[] = [];
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

			const htmlExport = mainEditor.getHtml();

			let urlIndex = 0;

			const htmlString = htmlExport.replace(/<img([^>]+)src="([^">]+)"/g, (match, p1) => {
				if (urlIndex < imageUrls.length) {
					const nuevaURLSinTemplate = imageUrls[urlIndex++].replace('/template-telefonica/', '/');
					return `<img${p1}src="${nuevaURLSinTemplate}"`;
				}
				return match;
			});

			console.log(htmlString);
			

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
					${htmlString}
				</html>`,
				css: `${mainEditor.getCss()}`
			};

			let cleanedCssContent = removeDuplicateLines(exportData.css);
			console.log("DUPLICATE CSS----- ORIGINAL", mainEditor.getCss());
			console.log("DUPLICATE CSS----- CLEAN", cleanedCssContent);

			// zip.file('styles.css', exportData.css);
			zip.file('styles.css', cleanedCssContent);
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

	function removeDuplicateLines(cssContent: any) {
		console.log("---- DDDD", cssContent)

		// Split the content into lines
		let lines = cssContent.split('\n');
        console.log("SPLIT", lines)
		// Use lodash to remove duplicate lines
		let uniqueLines = _.uniq(lines);
		console.log("UNIQUELINES", uniqueLines)
		// Join the lines back together
		let result = uniqueLines.join('\n');
		console.log("RESULR", result)
		return result;
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