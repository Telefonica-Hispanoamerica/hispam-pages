import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
	.header-light-vp {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 64px;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
	}
	@media (max-width: 767px) {
		.header-light-vp {
			display: flex;
			flex-direction: column;
			grid-gap: 24px;
		}
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
	}
	@media (max-width: 767px) {
		.description-vp-light {
			font-size: 1rem;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-vp-icon-d-left-light {
		display: flex;
		flex-direction: row;
		align-items: start;
		width: 100%;
		text-align: left;
		margin: 64px auto 0;
		grid-gap: 24px;
	}	
	@media (max-width: 767px) {
		.card-vp-icon-d-left-light {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-icon-d-left-light .box-img {
		width: 48px;
		height: 48px;
		border-radius: 8px;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		-ms-border-radius: 8px;
		-o-border-radius: 8px;
		margin-bottom: 24px;
		justify-content: center;
		align-items: center;
	}
	.card-vp-icon-d-left-light .box-img img {
		object-fit: contain;
    	border-radius: inherit;
		width: inherit;
    	aspect-ratio: 1 / 1;
	}
	.card-vp-icon-d-left-light .box-content {
		text-align: left
	}
	
	.card-vp-icon-d-left-light .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #313235;
	}
	@media (max-width: 767px) {
		.card-vp-icon-d-left-light .title {
			font-size: 1.125rem;
			line-height: 24px;
		}
	}
	.card-vp-icon-d-left-light .description {
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
		.card-vp-icon-d-left-light .description {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-vp-icon-d-left-light .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #019BEF;
		margin: 24px auto 0;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-icon-d-left-light .text-link {
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
	.text-left {
		text-align: left!important;
	}
	@media (max-width: 767px) {
		.ptb-80 {
			padding: 32px 16px;
		}
	}
	</style>
	<section class="bg-light ptb-80">
		<div class="header-light-vp">
			<h2 class="title-section-vp-light text-left">Value Proposition title is what you see here </h2>
			<p class="description-vp-light text-left">This sample description is being used as a placeholder for real text. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra. ornare, Lorem ipsum dolor sit amet, consectetur adipiscing eros dolor interdum nulla.  </p>
		</div>
		<div class="gjs-row-kenos">
			<div class="gjs-cell-kenos">
				<div class="card-vp-icon-d-left-light">					
					<div class="box-img">
						<img 
							src="images/template-telefonica/icon-light-blue.svg" 
							srcset-desktop="images/template-telefonica/icon-light-blue.svg" 
							srcset-mobile="images/template-telefonica/icon-light-blue.svg" 
							alt="" 
						/>
					</div>
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
			<div class="gjs-cell-kenos">
				<div class="card-vp-icon-d-left-light">					
					<div class="box-img">
						<img 
							src="images/template-telefonica/icon-light-blue.svg" 
							srcset-desktop="images/template-telefonica/icon-light-blue.svg" 
							srcset-mobile="images/template-telefonica/icon-light-blue.svg" 
							alt="" 
						/>
					</div>
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
			<div class="gjs-cell-kenos">
				<div class="card-vp-icon-d-left-light">					
					<div class="box-img">
						<img 
							src="images/template-telefonica/icon-light-blue.svg" 
							srcset-desktop="images/template-telefonica/icon-light-blue.svg" 
							srcset-mobile="images/template-telefonica/icon-light-blue.svg" 
							alt="" 
						/>
					</div>
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

function ValuePrep4xLeft(editor: any) {		
	editor.Blocks.add('ValuePrep4xLeft', {
		id: 'valuePrep4xLeft',
		label: 'Icono izquierda',
		activate: true,
		content: div,
		category: 'Organismos',
		media: iconsSvg.header2ColAnd3ColValueP,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrep4xLeft;