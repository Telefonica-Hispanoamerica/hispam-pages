import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
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
		category: 'Columnas',
		media: iconsSvg.column2,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Columns2Kenos;