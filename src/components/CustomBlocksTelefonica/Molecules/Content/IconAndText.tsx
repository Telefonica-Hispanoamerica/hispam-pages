import { iconsSvg } from '../../IconsSvgBlocks';
export const styleIconAndText = `
	<style>
		.icon-and-text {
			display: flex;
    		align-items: center;
		}
		.icon-and-text img {
			margin-right: 12px;
		}
		.icon-and-text span {
			font-family: Roboto;
			font-size: 16px;
			line-height: 24px;
			color: #313235;
			font-weight: 500;
		}
		.icon-and-text span a {
			color: #1976d2;
		}
		.ribbon-gray {
			background-color: #F6F6F6;
		}
		@media(max-width: 767px){
			.icon-and-text {
				display: flex;
				align-items: start;
			}
		}
	</style>
`
export const divIconAndText = `
	<div class="icon-and-text">
		<img 
			src="images/template-telefonica/shop-regular.svg"
			srcset-desktop="images/template-telefonica/shop-regular.svg" 
			srcset-mobile="images/template-telefonica/shop-regular.svg" 
			alt=""
		/>
		<span>Recoge tu pedido en tu Movistar Store</span>
	</div>
`

function IconAndText(editor: any) {		
	editor.Blocks.add('icon-plus-text', {
		id: 'icon-plus-text',
		label: 'Icono + Texto',
		activate: true,
		// content: styleTag+divTag,
		content: {
			type: 'icon-plus-text', // Usa el tipo de componente personalizado definido arriba
			style: { 'background-color': 'white' }, // Estilo inicial
			content: styleIconAndText + divIconAndText, // Contenido HTML o texto del bloque
		},
		category: 'Moleculas',
		media: iconsSvg.column1,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default IconAndText;