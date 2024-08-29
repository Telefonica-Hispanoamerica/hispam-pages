import { iconsSvg } from '../../IconsSvgBlocks';
export const styleTag = `
	.tag-label {
		font-family: Roboto;
		font-weight: 500;
		border-radius: 4px;
		padding: 4px 4px 3px 4px;
		margin-bottom: 8px;
		color: #019BEF;
		font-size: 0.875rem;
		width: fit-content;
	}
	.brand-low {
		background-color: #E6F5FD;
	}
`
export const divTag = `<div class="tag-label brand-low">Tag label</div>`

function Tag(editor: any) {		
	editor.Blocks.add('tag-comp', {
		id: 'tag-comp',
		label: 'Tag',
		activate: true,
		// content: styleTag+divTag,
		content: {
			type: 'tag-component-comp', // Usa el tipo de componente personalizado definido arriba
			style: { 'background-color': 'white' }, // Estilo inicial
			content: styleTag + divTag, // Contenido HTML o texto del bloque
		},
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Tag;