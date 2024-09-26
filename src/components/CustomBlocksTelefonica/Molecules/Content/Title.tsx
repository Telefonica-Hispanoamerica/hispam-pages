import { iconsSvg } from '../../IconsSvgBlocks';
export const styleTitle = `
	.title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 40px;
		line-height: 48px;
		color: #313235;
		margin-bottom: 8px;
	}

	@media (max-width: 767px) {
		.title {
			font-size: 24px;
			line-height: 32px;
		}
	}
`
export const divTitle = `<div class="title">Fullbody Card title</div>`

function Title(editor: any) {		
	editor.Blocks.add('pretitle', {
		id: 'pretitle',
		label: 'Title',
		activate: true,
		content: `<style>${styleTitle}</style>${divTitle}`,
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Title;