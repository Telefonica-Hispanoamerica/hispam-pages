const div = `
	<style>  
		h3 {
		    font-family: Telefonica-Regular, sans-serif;
			font-size: 24px;
			line-height: 32px;
			text-align: center;
			font-weight: 400;
			margin: 16px 0;
		}
	</style>
	<h3>Text H3</h3>
	`

function H3Kenos(editor: any) {

	editor.Blocks.add('h3', {
		id: 'h3',
		label: 'H3',
		activate: true,
		content: div,
		category: 'Átomos',		
		attributes: { class: 'custom-block' },
	});
}
  
export default H3Kenos;