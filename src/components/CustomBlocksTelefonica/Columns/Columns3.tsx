import { iconsSvg } from '../IconsSvgBlocks';
const div = `
	<style>  
		.gjs-row-kenos {
			max-width: 1200px;
			margin: 0 auto;
			padding: 8px;
			display: table;
			width: 100%;
			border-spacing: 16px;
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
				vertical-align: top;
			}
		}	
		
		.gjs-cell-kenos {
			width: 8%;
			display: table-cell;
			height: 75px;
			vertical-align: top;
		}
	</style>
	<div class='gjs-row-kenos'>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
	</div>
	`

function Columns3Kenos(editor: any) {		
	editor.Blocks.add('columns3', {
		id: 'columns3',
		label: 'Columns 3',
		activate: true,
		content: div,
		category: 'Columns',
		media: iconsSvg.column3,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Columns3Kenos;