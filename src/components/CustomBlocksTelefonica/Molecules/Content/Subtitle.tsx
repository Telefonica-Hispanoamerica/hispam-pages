import { iconsSvg } from '../../IconsSvgBlocks';
export const styleSubTitle = `
	.hero-card-right-l .content .subtitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
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
		content: styleSubTitle+divSubTitle,
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default SubTitle;