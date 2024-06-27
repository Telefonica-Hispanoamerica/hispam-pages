import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
	p {
		margin: 0;
	}
	.pretitle-vp {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #fff;
		margin: 0 auto 8px;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.pretitle-vp {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.title-section-vp {
		font-family: Telefonica-Regular, sans-serif;
		font-size: 2.5rem;
		line-height: 48px;
		color: #fff;
		margin: 0 auto 16px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section-vp {
			margin: 0 auto 16px;
			font-size: 1.75rem;
			line-height: 36px;
		}
	}
	.description-vp {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 24px;
		color: #fff;
		margin: 0 auto;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.description-vp {
			font-size: 1rem;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-vp-img {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		text-align: center;
		margin: 64px auto 0;
	}	
	@media (max-width: 767px) {
		.card-vp-img {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-img .box-img {
		width: 48px;
		height: 48px;
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
	.card-vp-img .box-img img {
		object-fit: contain;
    	border-radius: inherit;
		width: inherit;
    	aspect-ratio: 1 / 1;
	}
	
	.card-vp-img .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #fff;
	}
	@media (max-width: 767px) {
		.card-vp-img .title {
			font-size: 1.125rem;
			line-height: 24px;
		}
	}
	.card-vp-img .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #fff;
		margin-top: 8px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-img .description {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-vp-img .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #fff;
		margin: 24px auto 0;
		-webkit-user-modify: read-write;
		
	}
	@media (max-width: 767px) {
		.card-vp-img .text-link {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.bg-dark {
		background-color: #0B2739
	}
	.ptb-80 {
		padding: 80px 0;
	}
	@media (max-width: 767px) {
		.ptb-80 {
			padding: 32px 16px;
		}
	}
	.gjs-row-kenos {
		max-width: 1200px;
		margin: 0 auto;
		padding: 8px;
		display: table;
		width: 100%;
		border-spacing: 16px;
	}

	@media (max-width: 768px) {
		.gjs-row-kenos {
			width: 100%;
			padding: 0;
			border-spacing: 8px;
		}
		.gjs-cell-kenos {
			width: 100%;
			display: block;
			height: 100%;
			margin: 0 0 16px;
			vertical-align: top;
		}
	}	
	
	.gjs-cell-kenos {
		width: 8%;
		display: table-cell;
		height: 75px;
		vertical-align: top;
	}
	</style>
	<section class='bg-dark ptb-80'>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<p class="pretitle-vp">Pretitle</p>
				<h2 class="title-section-vp">Value Proposition title goes here</h2>
				<p class="description-vp">This sample description is being used as a placeholder for real text.</p>
			</div>
		</div>		
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img">					
					<div class="box-img">
						<img src="images/template-telefonica/icon-light-blue.svg" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img">
					<div class="box-img">
						<img src="images/template-telefonica/icon-light-blue.svg" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img">
					<div class="box-img">
						<img src="images/template-telefonica/icon-light-blue.svg" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img">
					<div class="box-img">
						<img src="images/template-telefonica/icon-light-blue.svg" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
		</div>	
	</section>	
`

function ValuePrepositionIconDark4Col(editor: any) {		
	editor.Blocks.add('valuePrepositionIconDark4Col', {
		id: 'valuePrepositionIconDark4Col',
		label: 'Icono centrado',
		activate: true,
		content: div,
		category: 'Value Prepositions Dark',
		media: iconsSvg.headerTitleAnd4ColValueP,
		attributes: { 
			class: 'custom-block',
			type: 'image',
      		attributes: { src: 'https://path/image' },
		},
	});
	
}
  
export default ValuePrepositionIconDark4Col;