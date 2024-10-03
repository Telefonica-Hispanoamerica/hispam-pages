import { iconsSvg } from '../../IconsSvgBlocks';

export const stylePrep4xCenter = `
	<style>
	.header-light-vp-2col {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 64px;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		align-items: center;
	}
	@media (max-width: 767px) {
		.header-light-vp-2col {
			display: flex;
			flex-direction: column;
			grid-gap: 24px;
		}
	}
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
	.card-vp-img-left-light-2col {
		display: flex;
		flex-direction: row;
		align-items: start;
		width: 100%;
		text-align: left;
		margin: 16px auto 0;
		grid-gap: 24px;
	}	
	@media (max-width: 767px) {
		.card-vp-img-left-light-2col {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-img-left-light-2col .box-img {
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
	.card-vp-img-left-light-2col .box-img img {
		object-fit: contain;
    	border-radius: inherit;
		width: inherit;
    	aspect-ratio: 1 / 1;
	}
	.card-vp-img-left-light-2col .box-content {
		text-align: left
	}
	
	.card-vp-img-left-light-2col .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #313235;
	}
	@media (max-width: 767px) {
		.card-vp-img-left-light-2col .title {
			font-size: 18px;
			line-height: 24px;
		}
	}
	.card-vp-img-left-light-2col .description {
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
	}
	@media (max-width: 767px) {
		.card-vp-img-left-light-2col .description {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.card-vp-img-left-light-2col .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #019BEF;
		margin: 24px auto 0;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-img-left-light-2col .text-link {
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
	.text-left {
		text-align: left;
	}
	@media (max-width: 767px) {
		.ptb-80 {
			padding: 32px 16px;
		}
	}
	</style>`
export const divValuePrep4xCenter = `
	<section class='bg-light ptb-80'>
		<div class="header-light-vp-2col">
			<div>
				<p class="pretitle-vp-light text-left">Pretitle</p>
				<h2 class="title-section-vp-light text-left">Value Proposition title is what you see here </h2>
				<p class="description-vp-light text-left">This sample description is being used as a placeholder for real text. </p>
			</div>
			<div>
				<div class='gjs-row-kenos'>
					<div class='gjs-cell-kenos'>
						<div class="card-vp-img-left-light-2col">					
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
				<div class='gjs-row-kenos'>
					<div class='gjs-cell-kenos'>
						<div class="card-vp-img-left-light-2col">					
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
			</div>
			<div>
				<div class='gjs-row-kenos'>
					<div class='gjs-cell-kenos'>
						<div class="card-vp-img-left-light-2col">					
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
				<div class='gjs-row-kenos'>
					<div class='gjs-cell-kenos'>
						<div class="card-vp-img-left-light-2col">					
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
			</div>			
		</div>
	</section>	
`

function ValuePrep4xCenter(editor: any) {		
	editor.Blocks.add('ValuePrep4xCenter', {
		id: 'valuePrep4xCenter',
		label: 'Template VP Center',
		activate: true,
		content: `<style>${stylePrep4xCenter}</style>${divValuePrep4xCenter}`,
		category: 'Organismos',
		media: iconsSvg.headerLeftAnd2ColValueP,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrep4xCenter;