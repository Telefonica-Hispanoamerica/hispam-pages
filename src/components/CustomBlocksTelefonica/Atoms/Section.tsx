export const SectionContent = `
	<section class="ptb-80"></section>
`

function SectionBlank(editor: any) {		
	editor.Blocks.add('SectionBlank', {
		id: 'sectionBlank',
		label: 'Seccion',
		activate: true,
		content: SectionContent,
		category: 'Átomos',
		attributes: { class: 'custom-block' },
	});
	
}

export default SectionBlank;