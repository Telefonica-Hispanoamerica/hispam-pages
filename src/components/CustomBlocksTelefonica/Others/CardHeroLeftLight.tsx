import { iconsSvg } from '../IconsSvgBlocks';
import { divTag, styleTag } from '../Molecules/Content/Tag';
const div = `
	<style>	
	.card-hero-left-l {
		margin: 0 auto;
		padding: 32px 64px 32px;
		display: grid;
		grid-template-columns: 40% 60%;
		//grid-gap: 24px;
		align-items: center;
		//gap: 32px;
	}
	@media (max-width: 767px) {
		.card-hero-left-l {
			display: flex;
			flex-direction: column;
			padding: 0 0 24px;
			border: 1px solid #DDDDDD;
			border-radius: 16px;
			row-gap: initial;
		}
	}
	.card-hero-left-l .content {
		order: 2;
		padding: 24px 24px 0;
	}
	@media (max-width: 767px) {
		.card-hero-left-l .content {
			order: 2
		}
	}
	.card-hero-left-l .content .pretitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 26px;
		color: #313235;
		margin-bottom: 8px;
	}
	.card-hero-left-l .content .title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 40px;
		line-height: 48px;
		color: #313235;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.card-hero-left-l .content .title {
			font-size: 24px;
			line-height: 32px;
		}
	}
	.card-hero-left-l .content .subtitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 26px;
		color: #313235;
		margin-bottom: 8px;
	}
	.card-hero-left-l .content .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 26px;
		color: #737578;
		margin: 24px 0;
	}
	@media (max-width: 767px) {
		.card-hero-left-l .content .description {
			font-size: 16px;
			line-height: 24px;
		}
	}
	.card-hero-left-l .content ul li {
		font-size: 18px;
		line-height: 26px;
		color: #737578;
	}
	@media (max-width: 767px) {
		.card-hero-left-l .content ul li {
			font-size: 16px;
			line-height: 24px;
		}
	}
	.card-hero-left-l .content .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
	}
	.card-hero-left-l .img-content {
		overflow: hidden;
		border-radius: 16px;
		order: 1;
	}
	@media (max-width: 767px) {
		.card-hero-left-l .img-content {
			order: 1;
			height: 344px;
			overflow: hidden;
        	border-bottom-left-radius: 0;
        	border-bottom-left-radius: 0;
		}
	}
	.card-hero-left-l .img-content img {
		width: 100%;
    	height: auto;
	}
	@media (max-width: 767px) {
		.card-hero-left-l .img-content img {
			width: 100%;
			height: inherit;
			object-fit: cover;
		}
	}
	.card-hero-left-l .button-group .link-button {
		font-family: Roboto;
		font-weight: 500;
		font-size: 16px;
		line-height: 26px;
		color: #737578;
		margin: 24px 0;
		color: #019BEF;
		text-decoration: underline;
		text-underline-offset: 4px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.card-hero-left-l .button-group .link-button {
			margin: 16px 0 0;
			font-size: 14px;
		}
	}
	.card-hero-left-l .button-group .primary-button {
		font-family: Roboto;
		font-weight: 500;
		font-size: 16px;
		line-height: 26px;
		background-color: #019BEF;
		color: #fff;
		margin: 24px 0;
		padding: 12px 16px 11px 16px;
		border-radius: 60px;
		-webkit-border-radius: 60px;
		-moz-border-radius: 60px;
		-ms-border-radius: 60px;
		-o-border-radius: 60px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.card-hero-left-l .button-group .primary-button {
			padding: 12px 8px;
			margin: 16px 0 0;			
		}
	}
	.brand-low {
		background-color: #E6F5FD;
	}
	.ptb-80 {
		padding: 80px 0;
	}
	@media (max-width: 767px) {
		.ptb-80 {
			padding: 32px 16px;
		}
	}
	${styleTag}
	</style>
	<section class=''>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-hero-left-l">
					<div class="img-content">
						<img src="" alt="" />
					</div>
					<div class="content">
						${divTag}
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">
							<a class="link-button">Link button</a>
							<a class="primary-button">Primary button</a>
						</div>            
					</div>					
				</div>
			</div>
		</div>
	</section>	
`

function CardHeroLeft(editor: any) {		
	editor.Blocks.add('CardHeroLeft', {
		id: 'CardHeroLeft',
		label: 'Hero Izq.',
		activate: true,
		content: div,
		category: 'Cards',
		media: iconsSvg.iHeroCardLeft,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default CardHeroLeft;