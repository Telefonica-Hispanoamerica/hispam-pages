import { iconsSvg } from '../../IconsSvgBlocks';
export const stylePretitle = `
	.pretitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
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
		content: `<style>${stylePretitle}</style>${divPretitle}`,
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Pretitle;