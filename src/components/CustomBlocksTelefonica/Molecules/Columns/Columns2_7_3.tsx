import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>  
		.w-30-k {
		    width: 30%;
		}
		.w-70-k {
		    width: 70%;
		}
	</style>
	<div class='gjs-row-kenos'>
		<div class='gjs-cell-kenos w-70-k'></div>
		<div class='gjs-cell-kenos w-30-k'></div>
	</div>
	`

function Columns2_7_3Kenos(editor: any) {		
	editor.Blocks.add('columns2_7_3', {
		id: 'columns2_7_3',
		label: '2 Columns 7/3 ',
		activate: true,
		content: div,
		category: 'Columnas',
		media: iconsSvg.column2_7_3,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Columns2_7_3Kenos;