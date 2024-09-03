const div = `
	<style>  
		h2 {
		    font-family: Telefonica-Regular, sans-serif;
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
		category: 'Átomos',		
		attributes: { class: 'custom-block' },
	});
}
  
export default H2Kenos;