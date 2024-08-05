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
		label: 'Number List',
		activate: true,
		content: div,
		category: 'Átomos',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default NumberListKenos;