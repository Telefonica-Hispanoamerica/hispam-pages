import { iconsSvg } from '../IconsSvgBlocks';

export const styleReasonsPurchase = `
	h2.title-reasons-purchase {
		font-family: Telefonica-Regular, sans-serif;
		font-size: 32px;
		line-height: 40px;
		color: #313235;
		text-align: center;
	}
	@media (max-width: 767px) {
		h2.title-reasons-purchase {
			font-size: 24px;
			line-height:32px;
		}
	}
	.card-vp-img-light {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		text-align: center;
		margin: 0 auto 0;
	}	
	@media (max-width: 767px) {
		.card-vp-img-light {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-img-light .box-img {
		border-radius: 8px;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		-ms-border-radius: 8px;
		-o-border-radius: 8px;
		margin-bottom: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.card-vp-img-light .box-img img {
		width: 80px;
		height: 80px;
		object-fit: contain;
    	border-radius: inherit;
		width: inherit;
    	aspect-ratio: 1 / 1;
	}
	@media (max-width: 767px) {
		.card-vp-img-light .box-img img  {
			width: 60px;
			height: 60px;
		}
	}
	
	.card-vp-img-light .title {
		font-family: Roboto;
		font-weight: 700;
		font-size: 16px;
		line-height: 28px;
		color: #313235;
	}
	@media (max-width: 767px) {
		.card-vp-img .title {
			font-size: 16px;
			line-height: 24px;
		}
	}
	.card-vp-img-light .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #313235;
		margin-top: 8px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-img-light .description {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.card-vp-img-light .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #019BEF;
		margin: 24px auto 0;		
	}
	@media (max-width: 767px) {
		.card-vp-img-light .text-link {
			font-size: 14px;
			line-height: 20px;
		}
	}	
	@media(max-width: 767px){
		.gjs-row-kenos{
			display: grid;
			grid-template-columns: repeat(2, 2fr);
			grid-gap: 16px;
		}
		.gjs-row-kenos.w-100-col {
			grid-template-columns: initial;
		}
	}
		.gjs-cell-kenos {
			height: initial;
		}
`

const data = [
	{
		image: "images/template-telefonica/offer-percent-filled-gray.svg",
		title: "Exclusivo Online",
		description: "Celulares en oferta solo en nuestra Tienda Online"
	},
	{
		image: "images/template-telefonica/delivery-van-moving-filled.svg",
		title: "Envío GRATIS",
		description: "Despacho gratis y seguro en menos de 24 horas"
	},
	{
		image: "images/template-telefonica/credit-card-filled.svg",
		title: "Paga en cuotas con tu Tarjeta",
		description: "Aprovecha cuotas sin interés con tu Tarjeta"
	},
	{
		image: "images/template-telefonica/shield-checked-ok-filled.svg",
		title: "Compra segura",
		description: "Compra con todo el respaldo y garantía de Movistar"
	}
];

export const divReasonsPurchase = `
	<div class='gjs-row-kenos w-100-col'>	
		<div class='gjs-cell-kenos'>
			<h2 class="title-reasons-purchase">Grandes razones para comprar tu celular en Movistar.com</h2>
		</div>
	</div>
	<div class='gjs-row-kenos'>		
		${data
			.map(item => `
				<div class='gjs-cell-kenos'>
					<div class="card-vp-img-light">
						<div class="box-img">
							<img 
								src="${item.image}" 
								srcset-desktop="${item.image}" 
								srcset-mobile="${item.image}" 
								alt=""
							/>
						</div>        
						<div class="title">${item.title}</div>
						<div class="description">${item.description}</div>
						<a href="" class="text-link">Text Link</a>
					</div>
				</div>
			`)
			.join('')}
	</div>
`;

function ReasonsPurchase(editor: any) {		
	editor.Blocks.add('valuePreBC', {
		id: 'valuePreBC',
		label: 'Razones compra',
		activate: true,
		content: `<style>${styleReasonsPurchase}</style>${divReasonsPurchase}`,
		category: 'Bloques Contenido',
		media: iconsSvg.column2,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ReasonsPurchase;