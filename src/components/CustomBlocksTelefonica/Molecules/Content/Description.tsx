import { iconsSvg } from '../../IconsSvgBlocks';
export const styleDescription = `
	.hero-card-right-l .content .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #737578;
		margin: 16px 0;
	}

	@media (max-width: 767px) {
		.hero-card-right-l .content .description {
			font-size: 16px;
			line-height: 24px;
		}
	}
`
export const divDescription = `<div class="description">This sample description is being used as a placeholder for real text.</div>`

function Description(editor: any) {		
	editor.Blocks.add('description', {
		id: 'description',
		label: 'Description',
		activate: true,
		content: `<style>${styleDescription}</style>${divDescription}`,
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Description;