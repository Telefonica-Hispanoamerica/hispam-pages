const div = `
	<style>  
		.gjs-row-kenos {
			max-width: 1200px;
			margin: 0 auto;
			padding: 8px;
			display: table;
			width: 100%;
			border-spacing: 8px;
		}

		@media (max-width: 768px) {
			.gjs-row-kenos {
				width: 100%;
    			padding: 0;
			}
			.gjs-cell-kenos {
				width: 100%;
				display: block;
				height: 100%;
				margin: 0 0 16px;
			}
		}	
		
		.gjs-cell-kenos {
			width: 8%;
			display: table-cell;
			height: 75px;
		}
	</style>
	<div class='gjs-row-kenos'>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
	</div>
	`

function Columns2Kenos(editor: any) {		
	editor.Blocks.add('columns2', {
		id: 'columns2',
		label: 'Columns 2',
		activate: true,
		content: div,
		category: 'Columns',
		media: '<svg viewBox="0 0 23 24"><path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Columns2Kenos;