const div = `
	<style>  
		h1 {
			font-size: 26px;
			line-height: 34px;
			text-align: center;
			font-weight: 400;
			margin: 16px 0;
		}
		@media (max-width: 767px) {
			h1 {
				font-size: 28px;
				line-height: 36px;
			}
		}
	</style>
	<h1>Text H1</h1>
	`

function H1Kenos(editor: any) {

	editor.Blocks.add('h1', {
		id: 'h1',
		label: 'H1',
		activate: true,
		content: div,
		category: 'Átomos',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default H1Kenos;