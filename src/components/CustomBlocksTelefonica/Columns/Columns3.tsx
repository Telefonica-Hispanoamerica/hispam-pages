import { iconsSvg } from '../IconsSvgBlocks';
import { ColumnsGeneralStyleContent } from './ColumnsGeneral';
const div = `
	${ColumnsGeneralStyleContent}
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