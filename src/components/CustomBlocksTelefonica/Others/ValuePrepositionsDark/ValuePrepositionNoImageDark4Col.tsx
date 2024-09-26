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
	.card-vp-no-img {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		text-align: center;
		margin: 64px auto 0;
	}	
	@media (max-width: 767px) {
		.card-vp-no-img {
			margin: 0 auto 24px;
		}
	}
	
	.card-vp-no-img .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #fff;
	}
	@media (max-width: 767px) {
		.card-vp-no-img .title {
			font-size: 18px;
			line-height: 24px;
		}
	}
	.card-vp-no-img .description {
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
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-no-img .description {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.card-vp-no-img .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #fff;
		margin: 24px auto 0;		
	}
	@media (max-width: 767px) {
		.card-vp-no-img .text-link {
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
				<div class="card-vp-no-img">      
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img">     
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
					</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img">    
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img">      
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
		</div>	
	</section>	
`

function ValuePrepositionNoImageDark4Col(editor: any) {		
	editor.Blocks.add('valuePrepositionNoImageDark4Col', {
		id: 'valuePrepositionNoImageDark4Col',
		label: 'Centrado',
		activate: true,
		content: div,
		category: 'Value Prepositions Dark',
		media: iconsSvg.headerTitleAnd4ColValueP,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrepositionNoImageDark4Col;