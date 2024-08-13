import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
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
	.card-dark-left {
		background-color: #0B2739;
		padding: 0 0 32px 0;
		border-radius: 16px;
		overflow: hidden;
		border: 1px solid #737578;
		display: flex;
		flex-direction: column;
		-webkit-border-radius: 16px;
		-moz-border-radius: 16px;
		-ms-border-radius: 16px;
		-o-border-radius: 16px;
	}
	.card-dark-left .img-content {
		border-radius: 16px 16px 0 0;
		overflow: hidden;
		height: 344px;
	}
	.card-dark-left .img-content img {
		width: 100%;
		height: inherit;
		object-fit: cover;
	}
	.card-dark-left .txt-content {
		padding: 24px 24px 0;
	}
	.card-dark-left .txt-content .pretitle {
		font-family: Roboto;
		font-size: 0.875rem;
		line-height: 20px;
		color: #fff;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.card-dark-left .txt-content .pretitle {
			font-size: 0.75rem;
			line-height: 20px;
		}
	}
	.card-dark-left .txt-content .title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 1.5rem;
		line-height: 32px;
		color: #fff;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.card-dark-left .txt-content .title {
			font-size: 1.25rem;
			line-height: 28px;
		}
	}
	.card-dark-left .txt-content .subtitle {
		font-family: Roboto;
		font-size: 0.875rem;
		line-height: 20px;
		color: #fff;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.card-dark-left .txt-content .subtitle {
			font-size: 0.75rem;
			line-height: 20px;
		}
	}
	.card-dark-left .txt-content .description {
		font-family: Roboto;
		font-size: 1rem;
		line-height: 24px;
		color: #fff;
		margin-bottom: 16px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		margin: 0;
	}	
	@media (max-width: 767px) {
		.card-dark-left .txt-content .description {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-dark-left .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
		margin-top: 16px;
	}
	.card-dark-left .button-group .link-button {
		font-family: Roboto;
		font-weight: 500;
		font-size: .875rem;
		line-height: 26px;
		color: #737578;
		color: #019BEF;
		text-decoration: underline;
		text-underline-offset: 4px;
		-webkit-user-modify: read-write;
	}
	@media (max-width: 767px) {
		.card-dark-left .button-group .link-button {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-dark-left .button-group .primary-button {
		font-family: Roboto;
		font-weight: 500;
		font-size: .875rem;
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
		-webkit-user-modify: read-write;
	}
	@media (max-width: 767px) {
		.card-dark-left .button-group .primary-button {
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
	.mt-64 {
		margin-top: 64px!important;
	}
	@media (max-width: 768px) {
		.mt-64 {
			margin-top: 32px!important;
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
		<div class='gjs-row-kenos mt-64'>
			<div class='gjs-cell-kenos'>
				<div class="card-dark-left">
					<div class="img-content">
						<img src="" />
					</div>
					<div class="txt-content">
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
				<div class="card-dark-left">
					<div class="img-content">
						<img src="" />
					</div>
					<div class="txt-content">
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
				<div class="card-dark-left">
					<div class="img-content">
						<img src="" />
					</div>
					<div class="txt-content">
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
				<div class="card-dark-left">
					<div class="img-content">
						<img src="" />
					</div>
					<div class="txt-content">
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

function CardDark4Col(editor: any) {		
	editor.Blocks.add('cardDark4Col', {
		id: 'cardDark4Col',
		label: 'Card - 4 col',
		activate: true,
		content: div,
		category: 'Card',
		media: iconsSvg.cards4Col,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default CardDark4Col;