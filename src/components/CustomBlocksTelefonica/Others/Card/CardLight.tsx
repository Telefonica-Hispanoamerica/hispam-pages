import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
	.media-card {
		background-color: #fff;
		padding: 0 0 32px 0;
		border-radius: 16px;
		overflow: hidden;
		border: 1px solid #DDDDDD;
		display: flex;
		flex-direction: column;
		-webkit-border-radius: 16px;
		-moz-border-radius: 16px;
		-ms-border-radius: 16px;
		-o-border-radius: 16px;
	}
	.media-card .img-content {
		border-radius: 16px 16px 0 0;
		overflow: hidden;
	}
	.media-card .img-content img {
		width: 100%;
		height: inherit;
	}
	.media-card .txt-content {
		padding: 24px 24px 0;
	}
	.media-card .txt-content .pretitle {
		font-family: Roboto;
		font-size: 14px;
		line-height: 20px;
		color: #313235;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.media-card .txt-content .pretitle {
			font-size: 12px;
			line-height: 20px;
		}
	}
	.media-card .txt-content .title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 24px;
		line-height: 32px;
		color: #313235;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.media-card .txt-content .title {
			font-size: 20px;
			line-height: 28px;
		}
	}
	.media-card .txt-content .subtitle {
		font-family: Roboto;
		font-size: 14px;
		line-height: 20px;
		color: #313235;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.media-card .txt-content .subtitle {
			font-size: 12px;
			line-height: 20px;
		}
	}
	.media-card .txt-content .description {
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
		.media-card .txt-content .description {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.media-card .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
	}
	.media-card .button-group .link-button {
		font-family: Roboto;
		font-weight: 600;
		font-size: 16px;
		line-height: 26px;
		color: #737578;
		color: #019BEF;
		text-decoration: underline;
		text-underline-offset: 4px;
	}
	@media (max-width: 767px) {
		.media-card .button-group .link-button {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.media-card .button-group .primary-button {
		font-family: Roboto;
		font-weight: 600;
		font-size: 16px;
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
		.media-card .button-group .primary-button {
			font-size: 14px;
			line-height: 20px;
		}
	}
	p {
		margin: 0;
	}
	
	.brand-low {
		background-color: #E6F5FD;
	}
	</style>
	<div class="media-card">
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
`

function CardLight(editor: any) {		
	editor.Blocks.add('cardLight', {
		id: 'cardLight',
		label: 'Card',
		activate: true,
		content: div,
		category: 'Moleculas',
		media: iconsSvg.card,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default CardLight;