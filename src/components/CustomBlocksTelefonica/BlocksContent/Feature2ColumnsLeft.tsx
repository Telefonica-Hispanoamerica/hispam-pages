import { iconsSvg } from '../IconsSvgBlocks';

export const styleFeauture2ColumnsLeft = `
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
`

export const divFeauture2ColumnsLeft = `
	<div class='gjs-row-kenos column-2'>
		<div class='gjs-cell-kenos-feature'>
			<img 
				src="images/template-telefonica/feature-right.webp" 
				srcset-desktop="images/template-telefonica/feature-right.webp" 
				srcset-mobile="images/template-telefonica/feature-right.webp" 
				alt=""
				class="img-feature"
			/>
		</div>
		<div class='gjs-cell-kenos-feature p-40 '>
			<div class="content-feature">
				<h3>Encuentra teléfonos celulares de última generación sólo en Movistar.com</h3>
				<p>El teléfono celular se ha convertido en un medio de comunicación imprescindible en el día a día de las personas; ya que, además de permitirnos conectar de manera inmediata, es utilizado como herramienta principal de trabajo; debido a que cumple funciones que antiguamente solo las computadoras o laptop lo hacían. Hoy en día, existen en el mercado una gran variedad de smartphones, en distintas gamas, tamaños y marcas, para que elijas el que más se ajuste a tus necesidades. Encuentra los últimos modelos y las mejores marcas de celulares solo en nuestra <a class="text-link">Tienda Movistar</a>.</p>
			</div>
		</div>
	</div>
`;

function Feauture2ColumnsLeft(editor: any) {		
	editor.Blocks.add('feauture2ColumnsLeft', {
		id: 'feauture2ColumnsLeft',
		label: 'Feature 2 Col',
		activate: true,
		content: `<style>${styleFeauture2ColumnsLeft}</style>${divFeauture2ColumnsLeft}`,
		category: 'Bloques Contenido',
		media: iconsSvg.featureLeft,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default Feauture2ColumnsLeft;