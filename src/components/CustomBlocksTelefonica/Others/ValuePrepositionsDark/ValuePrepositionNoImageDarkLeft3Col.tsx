import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
	.pretitle-vp {
		font-family: Roboto;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #fff;
		margin: 0 auto 8px;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.pretitle-vp {
			font-size: 16px;
			line-height: 24px;
		}
	}
	.title-section-vp {
		font-family: Telefonica-Regular, sans-serif;
		font-size: 40px;
		line-height: 48px;
		color: #fff;
		margin: 0 auto 16px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section-vp {
			margin: 0 auto 16px;
			font-size: 28px;
			line-height: 36px;
		}
	}
	.description-vp {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: #fff;
		margin: 0 auto;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.description-vp {
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-vp-no-img-left {
		display: flex;
		flex-direction: row;
		align-items: start;
		width: 100%;
		text-align: left;
		margin: 64px auto 0;
		grid-gap: 24px;
	}	
	@media (max-width: 767px) {
		.card-vp-no-img-left {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-no-img-left .box-img {
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
	.card-vp-no-img-left .box-img img {
		object-fit: contain;
    	border-radius: inherit;
		width: inherit;
		aspect-ratio: 1 / 1;
	}
	.card-vp-no-img-left .box-content {
		text-align: left
	}
	
	.card-vp-no-img-left .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #fff;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-left .title {
			font-size: 18px;
			line-height: 24px;
		}
	}
	.card-vp-no-img-left .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #fff;
		margin-top: 8px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-left .description {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.card-vp-no-img-left .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #fff;
		margin: 24px auto 0;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-left .text-link {
			font-size: 14px;
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
				<div class="card-vp-no-img-left">
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-left">
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-left">
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

function ValuePrepositionNoImageDarkLeft3Col(editor: any) {		
	editor.Blocks.add('valuePrepositionNoImageLeftDark3Col', {
		id: 'valuePrepositionNoImageLeftDark3Col',
		label: 'Izquierda',
		activate: true,
		content: div,
		category: 'Value Prepositions Dark',
		media: iconsSvg.headerTitleAnd3ColValueP,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrepositionNoImageDarkLeft3Col;