import React from 'react';
import { iconsSvg } from '../../IconsSvgBlocks';

// HTML template
export const divLinkButton = `
	<a href="#" class="link-button-glp">
		Link button
	</a>
`;

// CSS styles
export const styleLinkButton = `	
	.link-button-glp {
		font-family: Roboto;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #019BEF;
		text-decoration: underline;
		text-underline-offset: 4px;
		text-align: center;
		order: 1;
	}

	@media (max-width: 767px) {
		.link-button-glp {
			margin: 0;
			font-size: 14px;
			order: 2;
		}
	}
`;
function LinkButton(editor: any) {		
	editor.Blocks.add('linkButton', {
		id: 'linkButton',
		label: 'Botón enlace',
		activate: true,
		content: `<style>${styleLinkButton}</style>${divLinkButton}`,
		category: 'Moleculas',
		media: iconsSvg.primaryButton,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default LinkButton;