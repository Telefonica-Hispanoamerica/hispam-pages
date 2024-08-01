const div = `
	<style>  
		h2 {
			font-size: 26px;
			line-height: 34px;
			text-align: center;
			font-weight: 400;
			margin: 16px 0;
		}
		@media (max-width: 767px) {
			h2 {
				font-size: 24px;
				line-height: 32px;
			}
		}
	</style>
	<h2>Text H2</h2>
	`

function H2Kenos(editor: any) {

	editor.Blocks.add('h2', {
		id: 'h2',
		label: 'H2',
		activate: true,
		content: div,
		category: 'Text',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default H2Kenos;