const div = `
	<style>  
		h5 {
		    font-family: Telefonica-Regular, sans-serif;
			font-size: 18px;
			line-height: 24px;
			text-align: center;
			font-weight: 400;
			margin: 16px 0;
		}
	</style>
	<h5>Text H5</h5>
	`

function H5Kenos(editor: any) {

	editor.Blocks.add('h5', {
		id: 'h5',
		label: 'H5',
		activate: true,
		content: div,
		category: 'Átomos',		
		attributes: { class: 'custom-block' },
	});
}
  
export default H5Kenos;