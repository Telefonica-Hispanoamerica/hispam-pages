import { iconsSvg } from '../IconsSvgBlocks';
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
		font-family: 'Telefonica-Regular';
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
	p {
		margin: 0;
	}	
	.card-hero-left-d {
		margin: 0 auto;
		padding: 32px 64px 32px;
		display: grid;
		grid-template-columns: 40% 60%;
		//grid-gap: 24px;
		align-items: center;
		//gap: 32px;
	}
	@media (max-width: 767px) {
		.card-hero-left-d {
			display: flex;
			flex-direction: column;
			padding: 0 0 24px;
			border: 1px solid #737578;
			border-radius: 16px;
			row-gap: initial;
		}
	}
	.card-hero-left-d .content {
		order: 2;
		padding: 24px 24px 0;
	}
	@media (max-width: 767px) {
		.card-hero-left-d .content {
			order: 2
		}
	}
	.card-hero-left-d .content .tag-label {
		font-family: Roboto;
		font-weight: 500;
		border-radius:4px;
		padding: 4px 4px 3px 4px;
		margin-bottom: 8px;
		color: #019BEF;
		font-size: 0.875rem;
		width: fit-content;
		background-color: #E6F5FD;
	}
	.card-hero-left-d .content .pretitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin-bottom: 8px;
	}
	.card-hero-left-d .content .title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 2.5rem;
		line-height: 48px;
		color: #fff;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.card-hero-left-d .content .title {
			font-size: 1.5rem;
			line-height: 32px;
		}
	}
	.card-hero-left-d .content .subtitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin-bottom: 8px;
	}
	.card-hero-left-d .content .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin: 24px 0;
	}
	@media (max-width: 767px) {
		.card-hero-left-d .content .description {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.card-hero-left-d .content ul li {
		font-size: 1.125rem;
		line-height: 26px;
		color: #737578;
	}
	@media (max-width: 767px) {
		.card-hero-left-d .content ul li {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.card-hero-left-d .content .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
	}
	.card-hero-left-d .img-content {
		overflow: hidden;
		border-radius: 16px;
		order: 1;
	}
	@media (max-width: 767px) {
		.card-hero-left-d .img-content {
			order: 1;
			height: 344px;
			overflow: hidden;
        	border-bottom-left-radius: 0;
        	border-bottom-left-radius: 0;
		}
	}
	.card-hero-left-d .img-content img {
		width: 100%;
    	height: auto;
	}
	@media (max-width: 767px) {
		.card-hero-left-d .img-content img {
			width: 100%;
			height: inherit;
			object-fit: cover;
		}
	}
	.card-hero-left-d .button-group .link-button {
		font-family: Roboto;
		font-weight: 500;
		font-size: 1rem;
		line-height: 26px;
		color: #737578;
		margin: 24px 0;
		color: #fff;
		text-decoration: underline;
		text-underline-offset: 4px;
		-webkit-user-modify: read-write;
		text-align: center;
	}
	@media (max-width: 767px) {
		.card-hero-left-d .button-group .link-button {
			margin: 16px 0 0;
			font-size: 0.875rem;
		}
	}
	.card-hero-left-d .button-group .primary-button {
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
		.card-hero-left-d .button-group .primary-button {
			padding: 12px 8px;
			margin: 16px 0 0;			
		}
	}
	.card-hero-right-d {
		margin: 0 auto;
		padding: 32px 64px 32px;
		display: grid;
		grid-template-columns: 60% 40%;
		//grid-gap: 24px;
		align-items: center;
		//gap: 24px;
	}
	@media (max-width: 767px) {
		.card-hero-right-d {
			display: flex;
			flex-direction: column;
			padding: 0 0 24px;
			border: 1px solid #737578;
			border-radius: 16px;
			row-gap: initial;
		}
	}
	.card-hero-right-d .content {
		order: 1;
		padding: 24px 24px 0;
	}
	@media (max-width: 767px) {
		.card-hero-right-d .content {
			order: 2
		}
	}
	.card-hero-right-d .content .tag-label {
		font-family: Roboto;
		font-weight: 500;
		border-radius:4px;
		padding: 4px 4px 3px 4px;
		margin-bottom: 8px;
		color: #019BEF;
		font-size: 0.875rem;
		width: fit-content;
		background-color: #E6F5FD;
	}
	.card-hero-right-d .content .pretitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin-bottom: 8px;
	}
	.card-hero-right-d .content .title {
		font-family: 'Telefonica-Regular', sans-serif;
		font-size: 2.5rem;
		line-height: 48px;
		color: #fff;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.card-hero-right-d .content .title {
			font-size: 1.5rem;
			line-height: 32px;
		}
	}
	.card-hero-right-d .content .subtitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin-bottom: 8px;
	}
	.card-hero-right-d .content .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
		margin: 24px 0;
	}
	@media (max-width: 767px) {
		.card-hero-right-d .content .description {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.card-hero-right-d .content ul li {
		font-size: 1.125rem;
		line-height: 26px;
		color: #fff;
	}
	@media (max-width: 767px) {
		.card-hero-right-d .content ul li {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.card-hero-right-d .content .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
	}
	.card-hero-right-d .img-content {
		overflow: hidden;
		border-radius: 16px;
		order: 2;
	}
	@media (max-width: 767px) {
		.card-hero-right-d .img-content {
			order: 1;
			height: 344px;
			overflow: hidden;
        	border-bottom-right-radius: 0;
        	border-bottom-left-radius: 0;
		}
	}
	.card-hero-right-d .img-content img {
		width: 100%;
    	height: auto;
	}
	@media (max-width: 767px) {
		.card-hero-right-d .img-content img {
			width: 100%;
			height: inherit;
			object-fit: cover;
		}
	}
	.card-hero-right-d .button-group .link-button {
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
		.card-hero-right-d .button-group .link-button {
			margin: 0;
			font-size: 0.875rem;
		}
	}
	.card-hero-right-d .button-group .primary-button {
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
		.card-hero-right-d .button-group .primary-button {
			padding: 12px 8px;
			margin: 0;			
		}
	}
	.brand-low {
		background-color: #E6F5FD;
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
	.odd-hero {
		background: rgba(255, 255, 255, .1);
    	border-radius: 16px;
	}
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
				<div class="card-hero-left-d">
					<div class="content">
						<div class="tag-label brand-low">Tag label</div>
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">
							<a class="link-button">Link button</a>
							<a class="primary-button">Primary button</a>
						</div>            
					</div>
					<div class="img-content">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-hero-right-d odd-hero">
					<div class="content">
						<div class="tag-label brand-low">Tag label</div>
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">
							<a class="link-button">Link button</a>
							<a class="primary-button">Primary button</a>
						</div>            
					</div>
					<div class="img-content">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-hero-left-d">
					<div class="content">
						<div class="tag-label brand-low">Tag label</div>
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">
							<a class="link-button">Link button</a>
							<a class="primary-button">Primary button</a>
						</div>            
					</div>
					<div class="img-content">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>	
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-hero-right-d odd-hero">
					<div class="content">
						<div class="tag-label brand-low">Tag label</div>
						<div class="pretitle">Pre-title</div>
						<div class="title">Fullbody Card title</div>
						<div class="subtitle">Subtitle</div>
						<div class="description">This sample description is being used as a placeholder for real text.</div>
						<div class="button-group">
							<a class="link-button">Link button</a>
							<a class="primary-button">Primary button</a>
						</div>            
					</div>
					<div class="img-content">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>	
`

function CardHeroSectionDark(editor: any) {		
	editor.Blocks.add('CardHeroSectionDark', {
		id: 'CardHeroSectionDark',
		label: 'Hero sección dark',
		activate: true,
		content: div,
		category: 'Cards',
		media: iconsSvg.iheroSectionDark,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default CardHeroSectionDark;