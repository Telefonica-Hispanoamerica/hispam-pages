const div = `
	<style> 
		ol {
			list-style-type: decimal;
			padding-inline-start: 40px;
		}
		ol li {
			font-size: 18px;
			line-height: 24px;
			color: #86888C;	
			-webkit-user-modify: read-write;		
		}
		@media (max-width: 767px) {
			ol li {
				font-size: 16px;
    			line-height: 24px;
				-webkit-user-modify: read-write;
			}
		}
	</style>
	<ol>
		<li>Text Paragraph</li>
		<li>Text Paragraph</li>
		<li>Text Paragraph</li>
		<li>Text Paragraph</li>
		<li>Text Paragraph</li>
	</ol>
	`

function NumberListKenos(editor: any) {

	editor.Blocks.add('numberList', {
		id: 'orderedlist',
		label: 'Lista numérica',
		activate: true,
		content: div,
		category: 'Átomos',
		attributes: { class: 'custom-block' },
	});
}
  
export default NumberListKenos;