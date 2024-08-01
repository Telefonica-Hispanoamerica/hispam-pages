import { iconsSvg } from '../IconsSvgBlocks';
import { ColumnsGeneralStyleContent } from './ColumnsGeneral';
const div = `
	${ColumnsGeneralStyleContent}
	<div class='gjs-row-kenos'>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
	</div>
	`

function Columns5Kenos(editor: any) {		
	editor.Blocks.add('columns5', {
		id: 'columns5',
		label: 'Columns 5',
		activate: true,
		content: div,
		category: 'Columns',
		media: iconsSvg.column5,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Columns5Kenos;