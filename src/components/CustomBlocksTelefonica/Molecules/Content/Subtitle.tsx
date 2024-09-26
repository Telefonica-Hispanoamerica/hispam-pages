import { iconsSvg } from '../../IconsSvgBlocks';
export const styleSubTitle = `
	.subtitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: #313235;
		margin-bottom: 8px;
	}
`
export const divSubTitle = `<div class="subtitle">Subtitle</div>`

function SubTitle(editor: any) {		
	editor.Blocks.add('subTitle', {
		id: 'subTitle',
		label: 'SubTitle',
		activate: true,
		content: `<style>${styleSubTitle}</style>${divSubTitle}`,
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default SubTitle;