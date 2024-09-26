const div = `
	<style>  
		p {
			font-size: 16px;
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
		label: 'Parrafo',
		activate: true,
		content: div,
		category: 'Átomos',
		attributes: { class: 'custom-block' },
	});
}
  
export default paragraphKenos;