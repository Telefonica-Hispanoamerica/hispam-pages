import { iconsSvg } from '../IconsSvgBlocks';

export const SectionContent = `
	<section class="ptb-80"></section>
`

function SectionBlank(editor: any) {		
	editor.Blocks.add('SectionBlank', {
		id: 'sectionBlank',
		label: 'Section en blanco',
		activate: true,
		content: SectionContent,
		category: 'Átomos',
		media: iconsSvg.sectionBlank,
		attributes: { class: 'custom-block' },
	});
	
}

export default SectionBlank;