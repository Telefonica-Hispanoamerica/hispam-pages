import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
	p {
		margin: 0;
	}
	.pretitle-vp-light {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #313235;
		margin: 0 auto 8px;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.pretitle-vp-light {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.title-section-vp-light {
		font-family: Telefonica-Regular, sans-serif;
		font-size: 2.5rem;
		line-height: 48px;
		color: #313235;
		margin: 0 auto 16px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section-vp-light {
			margin: 0 auto 16px;
			font-size: 1.75rem;
			line-height: 36px;
		}
	}
	.description-vp-light {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 24px;
		color: #737578;
		margin: 0 auto;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.description-vp-light {
			font-size: 1rem;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-vp-no-img-left-light {
		display: flex;
		flex-direction: row;
		align-items: start;
		width: 100%;
		text-align: left;
		margin: 64px auto 0;
		grid-gap: 24px;
	}	
	@media (max-width: 767px) {
		.card-vp-no-img-left-light {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-no-img-left-light .box-img {
		width: 96px;
		height: 96px;
		border-radius: 8px;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		-ms-border-radius: 8px;
		-o-border-radius: 8px;
		margin-bottom: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card-vp-no-img-left-light .box-img img {
		object-fit: contain;
    	border-radius: inherit;
		width: inherit;
		aspect-ratio: 1 / 1;
	}
	.card-vp-no-img-left-light .box-content {
		text-align: left
	}
	
	.card-vp-no-img-left-light .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #313235;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-left-light .title {
			font-size: 1.125rem;
			line-height: 24px;
		}
	}
	.card-vp-no-img-left-light .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #313235;
		margin-top: 8px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-left-light .description {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-vp-no-img-left-light .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #019BEF;
		margin: 24px auto 0;
		-webkit-user-modify: read-write;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-left-light .text-link {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.bg-light {
		background-color: #fff
	}
	.ptb-80 {
		padding: 80px 0;
	}
	@media (max-width: 767px) {
		.ptb-80 {
			padding: 32px 16px;
		}
	}
	</style>
	<section class='bg-light ptb-80'>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<p class="pretitle-vp-light">Pretitle</p>
				<h2 class="title-section-vp-light">Value Proposition title goes here</h2>
				<p class="description-vp-light">This sample description is being used as a placeholder for real text.</p>
			</div>
		</div>		
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-left-light">
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-left-light">
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-left-light">
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
		</div>	
	</section>	
`

function ValuePrepositionNoImageLightLeft3Col(editor: any) {		
	editor.Blocks.add('valuePrepositionNoImageLeftLight4Col', {
		id: 'valuePrepositionNoImageLeftLight4Col',
		label: 'Izquierda',
		activate: true,
		content: div,
		category: 'Value Prepositions Light',
		media: iconsSvg.headerTitleAnd3ColValueP,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrepositionNoImageLightLeft3Col;