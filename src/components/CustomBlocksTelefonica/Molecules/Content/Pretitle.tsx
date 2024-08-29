import { iconsSvg } from '../../IconsSvgBlocks';
export const stylePretitle = `
	.pretitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #313235;
		margin-bottom: 8px;
	}
`
export const divPretitle = `<div class="pretitle">Pre-title</div>`

function Pretitle(editor: any) {		
	editor.Blocks.add('pretitle', {
		id: 'pretitle',
		label: 'Pretitle',
		activate: true,
		content: stylePretitle+divPretitle,
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Pretitle;