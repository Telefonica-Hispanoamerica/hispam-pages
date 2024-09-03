import { iconsSvg } from '../../IconsSvgBlocks';
import { divLinkButton, styleLinkButton } from '../Buttons/LinkButton';
import { divPrimaryButton, stylePrimaryButton } from '../Buttons/PrimaryButton';
import { divDescription, styleDescription } from '../Content/Description';
import { divTag, styleTag } from '../Content/Tag';
import { divTitle, styleTitle } from '../Content/Title';

export const StyleiHeroImageCompleteSmall = `
	<style>
	.image-hero-small{
		width: 100%;
		min-height: 348px;
	}
	@media (max-width: 767px) {
		.image-hero-small {
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
		height: 348px;
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
	.hero-image-complete-small {
		margin: 0 auto;
		padding: 32px 20px 40px;
		display: grid;
		grid-template-columns: 60% 40%;
		grid-gap: 24px;
		align-items: center;
	}
	@media (max-width: 767px) {
		.hero-image-complete-small {
			display: flex;
			flex-direction: column;
			padding: 24px;
			border: none;
			row-gap: initial;
		}
	}
	.hero-image-complete-small .content {
		order: 1
	}
	@media (max-width: 767px) {
		.hero-image-complete-small .content {
			order: 2
		}
	}	
	.hero-image-complete-small .content .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
	}
	.hero-image-complete-small .img-content {
		overflow: hidden;
		border-radius: 16px;
		order: 2;
	}
	@media (max-width: 767px) {
		.hero-image-complete-small .img-content {
			order: 1;
		}
	}
	.hero-image-complete-small .img-content img {
		width: 100%;
	}
	.brand-low {
		background-color: #E6F5FD;
	}
	.ptb-80 {
		padding: 80px 0;
	}
	.p-relative-hero {
		position: relative;
		overflow: hidden;
		max-height: 348px;
		display: flex;
		align-items: center;
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
	${styleTag}
	${styleTitle}
	${styleDescription}
	${stylePrimaryButton}
	${styleLinkButton}
	</style>`
	export const DiviHeroImageCompleteSmall = `
	<section class='p-relative-hero'>
		<div class='gradient-hero'></div>
		<img 
			class='image-hero-small' 
			src="images/template-telefonica/hero.webp"
			srcset-desktop="images/template-telefonica/hero.webp" 
			srcset-mobile="images/template-telefonica/hero.webp" 
			alt=''
		/>
		<div class='gjs-row-kenos p-absolute-hero'>
			<div class='gjs-cell-kenos'>
				<div class="hero-image-complete-small">
					<div class="content">
						${divTag}
						${divTitle}
						${divDescription}
						<div class="button-group">
							${divPrimaryButton}
							${divLinkButton}
						</div>            
					</div>
					<div class="img-content">
						
					</div>
				</div>
			</div>
		</div>
	</section>	
	`

function iHeroImageCompleteSmall(editor: any) {		
	editor.Blocks.add('heroImageCompleteSmall', {
		id: 'heroImageCompleteSmall',
		label: 'Hero pequeño',
		activate: false,
		content: StyleiHeroImageCompleteSmall+DiviHeroImageCompleteSmall,
		category: 'Moleculas',
		media: iconsSvg.iHeroImageComplete,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default iHeroImageCompleteSmall;