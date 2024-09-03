const div = `
	<style>  
		h1 {
		    font-family: Telefonica-Regular, sans-serif;
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
		content: {
			type: 'text',
			prop1: 'value1-EXT', 
			prop2: 'value2-EXT',
			content: div,
		},
		category: 'Átomos',
		attributes: { class: 'custom-block' },
	});
}
  
export default H1Kenos;