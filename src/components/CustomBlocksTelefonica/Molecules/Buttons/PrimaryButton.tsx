import { iconsSvg } from '../../IconsSvgBlocks';

export const stylePrimaryButton = `
    .primary-button-glp {
		font-family: Roboto;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		background-color: #019BEF;
		color: #fff;
		margin: 24px 0;
		padding: 12px 16px 11px 16px;
		border-radius: 60px;
		-webkit-border-radius: 60px;
		-moz-border-radius: 60px;
		-ms-border-radius: 60px;
		-o-border-radius: 60px;
		text-align: center;
		text-decoration: none;
		display: block;
	}
	@media (max-width: 767px) {
		.primary-button-glp {
			padding: 12px 8px;
			margin: 16px 0 0;			
		}
	}
`

export const divPrimaryButton = `<a class="primary-button-glp w-100-glp">Primary button</a>`

function primaryButton(editor: any) {		
	editor.Blocks.add('primaryButton', {
		id: 'primaryButton',
		label: 'Botón primario',
		activate: true,
		content: `<style>${stylePrimaryButton}</style>${divPrimaryButton}`,
		category: 'Moleculas',
		media: iconsSvg.primaryButton,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default primaryButton;