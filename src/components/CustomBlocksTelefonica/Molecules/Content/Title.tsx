import { iconsSvg } from '../../IconsSvgBlocks';
export const styleTitle = `
	.title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 2.5rem;
		line-height: 48px;
		color: #313235;
		margin-bottom: 8px;
	}

	@media (max-width: 767px) {
		.title {
			font-size: 1.5rem;
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
		content: styleTitle+divTitle,
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Title;