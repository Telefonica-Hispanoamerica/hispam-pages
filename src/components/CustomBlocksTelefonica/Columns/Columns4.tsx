import { iconsSvg } from '../IconsSvgBlocks';
import { ColumnsGeneralStyleContent } from './ColumnsGeneral';
const div = `
	${ColumnsGeneralStyleContent}
	<div class='gjs-row-kenos'>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
	</div>
	`

function Columns4Kenos(editor: any) {		
	editor.Blocks.add('columns4', {
		id: 'columns4',
		label: 'Columns 4',
		activate: true,
		content: div,
		category: 'Columns',
		media: iconsSvg.column4,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Columns4Kenos;