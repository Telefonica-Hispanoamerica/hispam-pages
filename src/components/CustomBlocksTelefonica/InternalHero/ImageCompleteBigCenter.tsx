import { iconsSvg } from '../IconsSvgBlocks';

const div = `
	<style>
	/* .hero-image-complete-center*/
	p {
		margin: 0;
	}
	.image-hero{
		width: 100%;
		min-height: 524px;
		opacity: .4;
		// aspect-ratio: 16 / 9;
		// object-fit: cover;
		// transform: translate(0, -16%);
	}
	@media (max-width: 767px) {
		.image-hero {
			width: 100%;
			aspect-ratio: 1 / 2;
			object-fit: cover;
		}
	}
	.hero-image-complete-center {
		margin: 0 auto;
		padding: 32px 20px 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center {
			padding: 24px;
			border: none;
		}
	}
	.hero-image-complete-center .content {
		order: 1
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .content {
			order: 2
		}
	}
	.hero-image-complete-center .content .tag-label {
		font-family: Roboto;
		font-weight: 500;
		border-radius:4px;
		padding: 4px 4px 3px 4px;
		margin: 0 auto 15px;
		color: #019BEF;
		font-size: 0.875rem;
		width: fit-content;
		backgroud-color: #E6F5FD;
	}
	.hero-image-complete-center .content .pretitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin-bottom: 8px;
	}
	.hero-image-complete-center .content .title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 3rem;
		line-height: 56px;
		color: #fff;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .content .title {
			font-size: 1.5rem;
			line-height: 32px;
		}
	}
	.hero-image-complete-center .content .subtitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin-bottom: 8px;
	}
	.hero-image-complete-center .content .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin: 24px 0;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .content .description {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.hero-image-complete-center .content ul li {
		font-size: 1.125rem;
		line-height: 26px;
		color: #737578;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .content ul li {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.hero-image-complete-center .content .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
		justify-content: center;
	}
	.hero-image-complete-center .img-content {
		overflow: hidden;
		border-radius: 16px;
		order: 2;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .img-content {
			order: 1;
		}
	}
	.hero-image-complete-center .img-content img {
		width: 100%;
	}
	.hero-image-complete-center .button-group .link-button {
		font-family: Roboto;
		font-weight: 500;
		font-size: 1rem;
		line-height: 26px;
		color: #737578;
		margin: 24px 0;
		color: #019BEF;
		text-decoration: underline;
		text-underline-offset: 4px;
		-webkit-user-modify: read-write;
		text-align: center;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .button-group .link-button {
			margin: 16px 0 0;
			font-size: 0.875rem;
		}
	}
	.hero-image-complete-center .button-group .primary-button {
		font-family: Roboto;
		font-weight: 500;
		font-size: 1rem;
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
		-webkit-user-modify: read-write;
		text-align: center;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .button-group .primary-button {
			padding: 12px 8px;
			margin: 16px 0 0;			
		}
	}
	/* .hero-image-complete-center */

	/* Color */
	.brand-low {
		background-color: #E6F5FD;
	}
	.ptb-80 {
		padding: 80px 0;
	}
	.p-relative-hero-center {
		position: relative;
		overflow: hidden;
		max-height: 524px;
		display: flex;
		align-items: center;
		background-color: #000;
	}
	@media (max-width: 768px) {
		.p-relative-hero {
			height: 400px
		}
	}	
	.p-absolute-hero-center {
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
	}
	@media (max-width: 767px) {
		.ptb-80 {
			padding: 32px 16px;
		}
	}
	/* Columns */
	.gjs-row-kenos {
		max-width: 1200px;
		margin: 0 auto;
		padding: 8px;
		display: table;
		width: 100%;
		border-spacing: 16px;
	}

	@media (max-width: 768px) {
		.gjs-row-kenos {
			width: 100%;
			padding: 0;
			border-spacing: 8px;
		}
		.gjs-cell-kenos {
			width: 100%;
			display: block;
			height: 100%;
			margin: 0 0 16px;
			vertical-align: top;
		}
	}	
	
	.gjs-cell-kenos {
		width: 8%;
		display: table-cell;
		height: 75px;
		vertical-align: top;
	}
	</style>
	<section class='p-relative-hero-center'>
		<div class='gradient-hero'></div>
		<img class='image-hero' src="" alt=''/>
		<div class='gjs-row-kenos p-absolute-hero-center'>
			<div class='gjs-cell-kenos'>
				<div class="hero-image-complete-center">
					<div class="content">
						<div class="tag-label brand-low">Tag label</div>
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">							
							<a class="primary-button">Primary button</a>
						</div>            
					</div>
					<div class="img-content">
						
					</div>
				</div>
			</div>
		</div>
	</section>	
`

function ImageCompleteBigCenter(editor: any) {		
	editor.Blocks.add('heroImageCompleteBigCenter', {
		id: 'heroImageCompleteBigCenter',
		label: 'Imagen completa grande centrado',
		activate: true,
		content: div,
		category: 'Internal hero',
		media: iconsSvg.iHeroCenter,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ImageCompleteBigCenter;