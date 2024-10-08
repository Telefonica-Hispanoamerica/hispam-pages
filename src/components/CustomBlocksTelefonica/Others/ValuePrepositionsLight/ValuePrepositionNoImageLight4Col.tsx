import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
	.pretitle-vp-light {
		font-family: Roboto;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #313235;
		margin: 0 auto 8px;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.pretitle-vp-light {
			font-size: 16px;
			line-height: 24px;
		}
	}
	.title-section-vp-light {
		font-family: Telefonica-Regular, sans-serif;
		font-size: 40px;
		line-height: 48px;
		color: #313235;
		margin: 0 auto 16px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section-vp-light {
			margin: 0 auto 16px;
			font-size: 28px;
			line-height: 36px;
		}
	}
	.description-vp-light {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: #737578;
		margin: 0 auto;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.description-vp-light {
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-vp-no-img-light {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		text-align: center;
		margin: 64px auto 0;
	}	
	@media (max-width: 767px) {
		.card-vp-no-img-light {
			margin: 0 auto 24px;
		}
	}
	
	.card-vp-no-img-light .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #313235;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-light .title {
			font-size: 18px;
			line-height: 24px;
		}
	}
	.card-vp-no-img-light .description {
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
		.card-vp-no-img-light .description {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.card-vp-no-img-light .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #019BEF;
		margin: 24px auto 0;		
	}
	@media (max-width: 767px) {
		.card-vp-no-img-light .text-link {
			font-size: 14px;
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
				<div class="card-vp-no-img-light">      
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-light">     
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
					</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-light">    
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-light">      
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
		</div>	
	</section>	
`

function ValuePrepositionNoImageLight4Col(editor: any) {		
	editor.Blocks.add('valuePrepositionNoImageLight4Col', {
		id: 'valuePrepositionNoImageLight4Col',
		label: 'Centrado',
		activate: true,
		content: div,
		category: 'Value Prepositions Light',
		media: iconsSvg.headerTitleAnd4ColValueP,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrepositionNoImageLight4Col;