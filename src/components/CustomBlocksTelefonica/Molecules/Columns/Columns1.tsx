import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<div class='gjs-row-kenos'>
		<div class='gjs-cell-kenos'></div>
	</div>
	`

function Columns1Kenos(editor: any) {		
	editor.Blocks.add('columns1', {
		id: 'columns1',
		label: 'Columns 1',
		activate: true,
		content: div,
		category: 'Columnas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Columns1Kenos;