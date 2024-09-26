import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
	.pretitle-light3col {
		font-family: Roboto;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #313235;
		margin: 0 auto 8px;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.pretitle-light3col {
			font-size: 16px;
			line-height: 24px;
		}
	}
	.title-section-light3col {
		font-family: Telefonica-Regular, sans-serif;
		font-size: 40px;
		line-height: 48px;
		color: #313235;
		margin: 0 auto 16px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section-light3col {
			margin: 0 auto 16px;
			font-size: 28px;
			line-height: 36px;
		}
	}
	.description-light3col {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: #737578;
		margin: 0 auto;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.description-light3col {
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-light-3col {
		background-color: #fff;
		padding: 0 0 32px 0;
		border-radius: 16px;
		overflow: hidden;
		border: 1px solid #737578;
		display: flex;
		flex-direction: column;
		border: 1px solid #DDDDDD;
		-webkit-border-radius: 16px;
		-moz-border-radius: 16px;
		-ms-border-radius: 16px;
		-o-border-radius: 16px;
	}
	.card-light-3col .img-content {
		border-radius: 16px 16px 0 0;
		overflow: hidden;
		height: 344px;
	}
	.card-light-3col .img-content img {
		width: 100%;
		height: inherit;
		object-fit: cover;
	}
	.card-light-3col .txt-content {
		padding: 24px 24px 0;
	}

	.card-light-3col .txt-content .tag {
		font-family: Roboto;
		background-color: #F6ECF6;
		padding: 4px 4px 3px 4px;
		border-radius: 4px;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #712B71;
		margin-bottom: 8px;
		width: fit-content;
	}
	.card-light-3col .txt-content .pretitle {
		font-family: Roboto;
		font-size: 14px;
		line-height: 20px;
		color: #313235;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.card-light-3col .txt-content .pretitle {
			font-size: 12px;
			line-height: 20px;
		}
	}
	.card-light-3col .txt-content .title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 24px;
		line-height: 32px;
		color: #313235;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.card-light-3col .txt-content .title {
			font-size: 20px;
			line-height: 28px;
		}
	}
	.card-light-3col .txt-content .subtitle {
		font-family: Roboto;
		font-size: 14px;
		line-height: 20px;
		color: #313235;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.card-light-3col .txt-content .subtitle {
			font-size: 12px;
			line-height: 20px;
		}
	}
	.card-light-3col .txt-content .description {
		font-family: Roboto;
		font-size: 16px;
		line-height: 24px;
		color: #737578;
		margin-bottom: 16px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		margin: 0;
	}	
	@media (max-width: 767px) {
		.card-light-3col .txt-content .description {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.card-light-3col .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
		margin-top: 16px;
	}
	.card-light-3col .button-group .link-button {
		font-family: Roboto;
		font-weight: 500;
		font-size: 14px;
		line-height: 26px;
		color: #737578;
		color: #019BEF;
		text-decoration: underline;
		text-underline-offset: 4px;
	}
	@media (max-width: 767px) {
		.card-light-3col .button-group .link-button {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.card-light-3col .button-group .primary-button {
		font-family: Roboto;
		font-weight: 500;
		font-size: 14px;
		line-height: 26px;
		background-color: #019BEF;
		color: #fff;
		padding: 12px 16px 11px 16px;
		border-radius: 60px;
		text-decoration: none;
		-webkit-border-radius: 60px;
		-moz-border-radius: 60px;
		-ms-border-radius: 60px;
		-o-border-radius: 60px;
	}
	@media (max-width: 767px) {
		.card-light-3col .button-group .primary-button {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.bg-light {
		background-color: #fff;
	}
	.ptb-80 {
		padding: 80px 0;
	}
	@media (max-width: 767px) {
		.ptb-80 {
			padding: 32px 16px;
		}
	}
	.mt-64 {
		margin-top: 64px!important;
	}
	@media (max-width: 767px) {
		.mt-64 {
			margin-top: 32px!important;
		}
	}
	</style>
	<section class='bg-light ptb-80'>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'> 
				<p class="pretitle-light3col">Pretitle</p>
				<h2 class="title-section-light3col">Value Proposition title goes here</h2>
				<p class="description-light3col">This sample description is being used as a placeholder for real text.</p>
			</div>
		</div>		
		<div class='gjs-row-kenos mt-64'>
			<div class='gjs-cell-kenos'>
				<div class="card-light-3col">
					<div class="img-content">
						<img src="" />
					</div>
					<div class="txt-content">
						<div class="tag">Tag label</div>
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">
							<a class="link-button roboto-medium">Link button</a>
							<a class="primary-button roboto-medium">Primary button</a>
						</div>  
					</div>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-light-3col">
					<div class="img-content">
						<img src="" />
					</div>
					<div class="txt-content">
						<div class="tag">Tag label</div>
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">
							<a class="link-button roboto-medium">Link button</a>
							<a class="primary-button roboto-medium">Primary button</a>
						</div>  
					</div>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-light-3col">
					<div class="img-content">
						<img src="" />
					</div>
					<div class="txt-content">
						<div class="tag">Tag label</div>
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">
							<a class="link-button roboto-medium">Link button</a>
							<a class="primary-button roboto-medium">Primary button</a>
						</div>  
					</div>
				</div>
			</div>
		</div>	
	</section>	
`

function CardLight3Col(editor: any) {		
	editor.Blocks.add('cardLight3Col', {
		id: 'cardLight3Col',
		label: 'Card - 3 col',
		activate: true,
		content: div,
		category: 'Card',
		media: iconsSvg.cards3Col,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default CardLight3Col;