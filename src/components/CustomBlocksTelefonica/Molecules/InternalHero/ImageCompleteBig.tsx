import { iconsSvg } from '../../IconsSvgBlocks';
import { divLinkButton, styleLinkButton } from '../Buttons/LinkButton';
import { divPrimaryButton, stylePrimaryButton } from '../Buttons/PrimaryButton';
import { divDescription } from '../Content/Description';
import { divPretitle, stylePretitle } from '../Content/Pretitle';
import { divSubTitle, styleSubTitle } from '../Content/Subtitle';
import { divTag, styleTag } from '../Content/Tag';
import { divTitle, styleTitle } from '../Content/Title';

export const StyleHeroImageCompleteBig = `
	<style>
	.section-hero {
		background-color: #fff;
	}
	@media (max-width: 767px) {
		.section-hero {
			background-color: #000;
		}
	}
	.image-hero{
		width: 100%;
		//min-height: 524px;
		// aspect-ratio: 16 / 9;
		// object-fit: cover;
		// transform: translate(0, -16%);
	}
	/*@media (max-width: 767px) {
		.image-hero {
			width: 100%;
			aspect-ratio: 1 / 2;
			object-fit: cover;
			opcity: 0.4;
		}
	}*/
	@media (max-width: 767px) {
		.image-hero {
			width: initial;
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
			display: none;
		}
	}
	.hero-image-complete {
		margin: 0 auto;
		padding: 32px 20px 40px;
		display: grid;
		grid-template-columns: 60% 40%;
		grid-gap: 24px;
		align-items: center;
		width: 100%;
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
	.hero-image-complete .content .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
		width: 70%;
	}
	@media (max-width: 767px) {
		.hero-image-complete .content .button-group {
			flex-direction: column;
			width: 100%;
		}
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
	${stylePrimaryButton}
	${styleLinkButton}
	${styleTag}
	${stylePretitle}
	${styleTitle}
	${styleSubTitle}
	${divDescription}
	</style>`
export const DivHeroImageCompleteBig = `
	<section class='p-relative-hero section-hero' >
		<div class='gradient-hero'></div>
		<img 
			class='image-hero' 
			src="images/template-telefonica/hero.webp"
			srcset-desktop="images/template-telefonica/hero.webp" 
			srcset-mobile="images/template-telefonica/hero.webp" 
			alt=''
		/>
		<div class='gjs-row-kenos p-absolute-hero'>
			<div class='gjs-cell-kenos'>
				<div class="hero-image-complete">
					<div class="content">
						${divTag}
						${divPretitle}
						${divTitle}
						${divSubTitle}
						${divDescription}
						<div class="button-group">							
							${divPrimaryButton}
							${divLinkButton}
						</div>            
					</div>
				</div>
			</div>
		</div>
	</section>	
`

function HeroImageCompleteBig(editor: any) {		
	editor.Blocks.add('heroImageCompleteBig', {
		id: 'heroImageCompleteBig',
		label: 'Hero grande',
		activate: true,
		content: StyleHeroImageCompleteBig+DivHeroImageCompleteBig,
		category: 'Moleculas',
		media: iconsSvg.iHeroImageComplete,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default HeroImageCompleteBig;