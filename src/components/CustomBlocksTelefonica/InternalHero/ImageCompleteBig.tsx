import { iconsSvg } from '../IconsSvgBlocks';

const div = `
	<style>
	/* .hero-image-complete*/
	p {
		margin: 0;
	}
	.image-hero{
		width: 100%;
		min-height: 524px;
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
	.gradient-hero {
		width: 80%;
		position: absolute;
		top: 0;
		left: 0;
		height: 524px;
		background: rgb(0,0,0);
		background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 76%);
	}
	@media (max-width: 767px) {
		.gradient-hero {
			width: 100%;
			border: none;
			height: 400px;
			background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%);
		}
	}
	.hero-image-complete {
		margin: 0 auto;
		padding: 32px 20px 40px;
		display: grid;
		grid-template-columns: 60% 40%;
		grid-gap: 24px;
		align-items: center;
	}
	@media (max-width: 767px) {
		.hero-image-complete {
			display: flex;
			flex-direction: column;
			padding: 24px;
			border: none;
			row-gap: initial;
		}
	}
	.hero-image-complete .content {
		order: 1
	}
	@media (max-width: 767px) {
		.hero-image-complete .content {
			order: 2
		}
	}
	.hero-image-complete .content .tag-label {
		font-family: Roboto;
		font-weight: 500;
		border-radius:4px;
		padding: 4px 4px 3px 4px;
		margin-bottom: 8px;
		color: 
		#019BEF;
		font-size: 0.875rem;
		width: fit-content;
		backgroud-color: #E6F5FD;
	}
	.hero-image-complete .content .pretitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin-bottom: 8px;
	}
	.hero-image-complete .content .title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 3rem;
		line-height: 56px;
		color: #fff;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.hero-image-complete .content .title {
			font-size: 1.5rem;
			line-height: 32px;
		}
	}
	.hero-image-complete .content .subtitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin-bottom: 8px;
	}
	.hero-image-complete .content .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin: 24px 0;
	}
	@media (max-width: 767px) {
		.hero-image-complete .content .description {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.hero-image-complete .content ul li {
		font-size: 1.125rem;
		line-height: 26px;
		color: #737578;
	}
	@media (max-width: 767px) {
		.hero-image-complete .content ul li {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.hero-image-complete .content .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
	}
	.hero-image-complete .img-content {
		overflow: hidden;
		border-radius: 16px;
		order: 2;
	}
	@media (max-width: 767px) {
		.hero-image-complete .img-content {
			order: 1;
		}
	}
	.hero-image-complete .img-content img {
		width: 100%;
	}
	.hero-image-complete .button-group .link-button {
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
		.hero-image-complete .button-group .link-button {
			margin: 16px 0 0;
			font-size: 0.875rem;
		}
	}
	.hero-image-complete .button-group .primary-button {
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
		.hero-image-complete .button-group .primary-button {
			padding: 12px 8px;
			margin: 16px 0 0;			
		}
	}
	/* .hero-image-complete */

	/* Color */
	.brand-low {
		background-color: #E6F5FD;
	}
	.ptb-80 {
		padding: 80px 0;
	}
	.p-relative-hero {
		position: relative;
		overflow: hidden;
		max-height: 524px;
		display: flex;
		align-items: center;
	}
	@media (max-width: 768px) {
		.p-relative-hero {
			height: 400px
		}
	}	
	.p-absolute-hero {
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
	<section class='p-relative-hero'>
		<div class='gradient-hero'></div>
		<img class='image-hero' src="" alt=''/>
		<div class='gjs-row-kenos p-absolute-hero'>
			<div class='gjs-cell-kenos'>
				<div class="hero-image-complete">
					<div class="content">
						<div class="tag-label brand-low">Tag label</div>
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">							
							<a class="primary-button">Primary button</a>
							<a class="link-button">Link button</a>
						</div>            
					</div>
					<div class="img-content">
						
					</div>
				</div>
			</div>
		</div>
	</section>	
`

function iHeroImageCompleteBig(editor: any) {		
	editor.Blocks.add('heroImageCompleteBig', {
		id: 'heroImageCompleteBig',
		label: 'Imagen completa grande',
		activate: true,
		content: div,
		category: 'Internal hero',
		media: iconsSvg.iHeroImageComplete,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default iHeroImageCompleteBig;