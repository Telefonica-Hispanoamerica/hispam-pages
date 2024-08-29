const div = `
	<style> 
		ul {
			list-style-type: disc;
			padding-inline-start: 40px;
		}
		ul li {
			font-size: 18px;
			line-height: 24px;
			color: #86888C;
			/*-webkit-user-modify: read-write;*/
		}
		@media (max-width: 767px) {
			ul li {
				font-size: 16px;
    			line-height: 24px;
			}
		}
	</style>
	<ul>
		<li>Text Paragraph</li>
		<li>Text Paragraph</li>
		<li>Text Paragraph</li>
		<li>Text Paragraph</li>
		<li>Text Paragraph</li>
	</ul>
	`

function OrderedListKenos(editor: any) {

	editor.Blocks.add('orderedList', {
		id: 'orderedList',
		label: 'Lista ordenada',
		activate: true,
		content: div,
		category: 'Átomos',
		attributes: { class: 'custom-block' },
	});
}
  
export default OrderedListKenos;