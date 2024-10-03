import { iconsSvg } from '../IconsSvgBlocks';

export const styleFeauture2ColumnsRight = `
	.img-feature {
		width: 100%;
	}
	.content-feature h3 {
		font-family: Telefonica-Regular, sans-serif;
		font-size: 40px;
		line-height: 48px;
		color: #313235;
		margin-bottom: 24px;
	}
	.content-feature p {
		font-family: Roboto;
		font-size: 16px;
		line-height: 24px;
		color: #313235;
	}
	.content-feature .text-link {
		color: #019BEF;
		text-decoration: underline;
	}
	@media(max-width: 767px){
		.content-feature h3 {
			font-size: 24px;
			line-height: 32px;
		}
		.content-feature p {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.gjs-row-kenos.column-2{
		max-width: 1200px;
		padding: 16px;
		display: grid;
		grid-template-columns: repeat(2, 2fr);
		width: 100%;
		grid-gap: 16px;
	}
	.gjs-cell-kenos-feature {
		display: flex;
		align-items: center
	}
	@media(max-width: 767px){
		.gjs-row-kenos.column-2 {
			display: flex;
			flex-direction: column;
			grid-gap: 16px;
		}
	}
	.w-initial {
		width: initial;
		vertical-align: middle;
	}
	.p-40 {
		padding: 40px;
	}
	@media(max-width: 767px){
		.p-40 {
			padding: 0;
		}
	}
	.order-1-feat {
		order: 0;
	}
	.order-2-feat {
		order: 1;
	}
	@media(max-width: 767px){
		.order-1-feat {
			order: 1;
		}
		.order-2-feat {
			order: 0;
		}
	}
`

export const divFeauture2ColumnsRight = `
	<div class='gjs-row-kenos column-2'>
		<div class='gjs-cell-kenos-feature p-40 order-1-feat'>
			<div class="content-feature">
				<h3>¿Cómo elegir el smartphone indicado para ti?</h3>
				<p>La tecnología digital avanza a pasos agigantados; por ende, la oferta de dispositivos electrónicos es cada vez más amplia, y la fabricación de equipos móviles con mayores y mejores funcionalidades; razón por la cual, elegir un dispositivo nuevo no es tarea fácil.<br><br>

				Además de optar por un sistema operativo adecuado, te sugerimos fijarte en aspectos como: capacidad de memoria, velocidad, cámara, resolución de pantalla, entre otros; con el fin de sacar el mayor provecho a tu teléfono celular.<br><br>

				A su vez, el uso que le darás a tu smartphone debe ser un factor determinante al momento de elegir el modelo y el precio a pagar; ya que no es lo mismo adquirir un teléfono móvil para uso personal, que comprar un celular para trabajar.
				</p>
			</div>			
		</div>
		<div class='gjs-cell-kenos-feature order-2-feat'>
			<img 
				src="images/template-telefonica/feature-left.webp" 
				srcset-desktop="images/template-telefonica/feature-left.webp" 
				srcset-mobile="images/template-telefonica/feature-left.webp" 
				alt=""
				class="img-feature"
			/>
		</div>
	</div>
`;

function Feauture2ColumnsRight(editor: any) {		
	editor.Blocks.add('feauture2ColumnsRight', {
		id: 'feauture2ColumnsRight',
		label: 'Feature 2 Col',
		activate: true,
		content: `<style>${styleFeauture2ColumnsRight}</style>${divFeauture2ColumnsRight}`,
		category: 'Bloques Contenido',
		media: iconsSvg.featureRight,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Feauture2ColumnsRight;