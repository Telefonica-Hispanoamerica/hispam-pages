import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<div class='gjs-row-kenos'>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
		<div class='gjs-cell-kenos'></div>
	</div>
	`

function Columns6Kenos(editor: any) {		
	editor.Blocks.add('columns6', {
		id: 'columns6',
		label: 'Columns 6',
		activate: true,
		content: div,
		category: 'Columnas',
		media: iconsSvg.column6,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Columns6Kenos;