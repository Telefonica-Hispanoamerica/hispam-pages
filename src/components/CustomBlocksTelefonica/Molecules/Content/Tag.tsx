import { iconsSvg } from '../../IconsSvgBlocks';
export const styleTag = `
	.tag-label {
		font-family: Roboto;
		font-weight: 500;
		border-radius: 4px;
		padding: 4px 4px 3px 4px;
		margin-bottom: 8px;
		color: #019BEF;
		font-size: 14px;
		width: fit-content;
	}
	.brand-low {
		background-color: #E6F5FD;
	}
`
export const divTag = `<div class="tag-label brand-low">Tag label</div>`

function Tag(editor: any) {		
	editor.Blocks.add('tag-component-comp', {
		id: 'tag-component-comp',
		label: 'Tag',
		activate: true,
		content: {
			type: 'tag-component-comp',
			style: { 'background-color': 'white' },
			content: `<style>${styleTag}</style>${divTag}`,
		},
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Tag;