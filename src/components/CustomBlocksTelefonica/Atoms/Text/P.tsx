const div = `
	<style>  
		p {
			font-size: 18px;
			line-height: 24px;
			color: #86888C;
		}
		@media (max-width: 767px) {
			p {
				font-size: 16px;
    			line-height: 24px;
			}
		}
	</style>
	<p>Text Paragraph</p>
	`

function paragraphKenos(editor: any) {

	editor.Blocks.add('paragraph', {
		id: 'p',
		label: 'Paragraph',
		activate: true,
		content: div,
		category: 'Átomos',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default paragraphKenos;