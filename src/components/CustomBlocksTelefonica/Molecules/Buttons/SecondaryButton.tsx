import { iconsSvg } from '../../IconsSvgBlocks';

export const styleSecondaryButton = `
    .secondary-button-glp {
		font-family: Roboto;
		font-weight: 500;
		font-size: 1rem;
		line-height: 26px;
		background-color: transparent;
		border: 1px #019BEF solid;
		color: #019BEF;
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
		.secondary-button-glp {
			padding: 12px 8px;
			margin: 16px 0 0;			
		}
	}
`

export const divSecondaryButton = `<a class="secondary-button-glp w-100-glp">Secondary button</a>`

function SecondaryButton(editor: any) {		
	editor.Blocks.add('seondaryButton', {
		id: 'seondaryButton',
		label: 'Botón Secundario',
		activate: true,
		content: styleSecondaryButton+divSecondaryButton,
		category: 'Moleculas',
		media: iconsSvg.primaryButton,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default SecondaryButton;