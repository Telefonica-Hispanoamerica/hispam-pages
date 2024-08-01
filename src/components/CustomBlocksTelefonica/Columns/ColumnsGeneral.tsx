import { iconsSvg } from '../IconsSvgBlocks';
export const ColumnsGeneralStyleContent = `
	<style>  
		.gjs-row-kenos {
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
	`

function ColumnsGeneralStyle(editor: any) {		
	editor.Blocks.add('columns1', {
		id: 'columns1',
		label: 'Columns 1',
		activate: true,
		content: ColumnsGeneralStyleContent,
		category: 'Columns',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ColumnsGeneralStyle;