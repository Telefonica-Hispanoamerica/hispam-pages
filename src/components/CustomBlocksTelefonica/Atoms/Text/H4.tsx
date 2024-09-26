const div = `
	<style>  
		h4 {
		    font-family: Telefonica-Regular, sans-serif;
			font-size: 18px;
			line-height: 24px;
			text-align: center;
			font-weight: 400;
			margin: 16px 0;
		}
	</style>
	<h4>Text H4</h4>
	`

function H4Kenos(editor: any) {

	editor.Blocks.add('h4', {
		id: 'h4',
		label: 'H4',
		activate: true,
		content: div,
		category: 'Átomos',		
		attributes: { class: 'custom-block' },
	});
}
  
export default H4Kenos;