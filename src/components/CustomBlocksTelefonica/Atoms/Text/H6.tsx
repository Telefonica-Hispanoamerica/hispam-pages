const div = `
	<style>  
		h6 {
		    font-family: Telefonica-Regular, sans-serif;
			font-size: 16px;
			line-height: 24px;
			text-align: center;
			font-weight: 400;
			margin: 16px 0;
		}
	</style>
	<h6>Text H6</h6>
	`

function H6Kenos(editor: any) {

	editor.Blocks.add('h6', {
		id: 'h6',
		label: 'H6',
		activate: true,
		content: div,
		category: 'Átomos',		
		attributes: { class: 'custom-block' },
	});
}
  
export default H6Kenos;