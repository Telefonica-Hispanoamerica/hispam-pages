import { iconsSvg } from '../../IconsSvgBlocks';

export const styleLinkButton = `
    .link-button-glp {
		font-family: Roboto;
		font-weight: 500;
		font-size: 1rem;
		line-height: 26px;
		color: #737578;
		margin: 0;
		color: #019BEF;
		text-decoration: underline;
		text-underline-offset: 4px;
		text-align: center;
		order: 1;
	}

	@media (max-width: 767px) {
		.link-button-glp {
			margin: 0;
			font-size: 0.875rem;
			order: 2;
		}
	}
`
export const divLinkButton = `<a class="link-button-glp w-100-glp">Link button</a>`

function linkButton(editor: any) {		
	editor.Blocks.add('linkButton', {
		id: 'linkButton',
		label: 'Botón primario',
		activate: true,
		content: styleLinkButton+divLinkButton,
		category: 'Moleculas',
		media: iconsSvg.primaryButton,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default linkButton;