import { iconsSvg } from '../../IconsSvgBlocks';
import { fontsTelefonica } from '../../../common';
import { divPrimaryButton, stylePrimaryButton } from '../Buttons/PrimaryButton';
import { divTag, styleTag } from '../Content/Tag';
import { divPretitle, stylePretitle } from '../Content/Pretitle';
import { divTitle, styleTitle } from '../Content/Title';
import { divSubTitle, styleSubTitle } from '../Content/Subtitle';
import { divDescription, styleDescription } from '../Content/Description';

export const StyleImageCompleteBigCenter = `
	${fontsTelefonica}
	.image-hero-big-center{
		width: 100%;
		min-height: 524px;
		opacity: .4;
		// aspect-ratio: 16 / 9;
		// object-fit: cover;
		// transform: translate(0, -16%);
	}
	@media (max-width: 767px) {
		.image-hero-big-center {
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
	.hero-image-complete-center .content .pretitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: #fff;
		margin-bottom: 8px;
	}
	.hero-image-complete-center .content .title {
		font-family: Telefonica-Regular;
		font-size: 48px;
		line-height: 56px;
		color: #fff;
		margin-bottom: 8px;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .content .title {
			font-size: 24px;
			line-height: 32px;
		}
	}
	.hero-image-complete-center .content .subtitle {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: #fff;
		margin-bottom: 8px;
	}
	.hero-image-complete-center .content .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: #fff;
		margin: 24px 0;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .content .description {
			font-size: 16px;
			line-height: 24px;
		}
	}
	.hero-image-complete-center .content ul li {
		font-size: 18px;
		line-height: 24px;
		color: #737578;
	}
	@media (max-width: 767px) {
		.hero-image-complete-center .content ul li {
			font-size: 16px;
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
	.brand-low {
		background-color: #E6F5FD;
	}
	.p-relative-hero-center {
		position: relative;
		overflow: hidden;
		max-height: 524px;
		display: flex;
		align-items: center;
		background-color: #000;
	}
	@media (max-width: 767px) {
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
	${stylePrimaryButton}
	${styleTag}
	${stylePretitle}
	${styleTitle}
	${styleSubTitle}
	${styleDescription}
`

	export const DivImageCompleteBigCenter = `
	<section class='p-relative-hero-center'>
		<img 
			class='image-hero-big-center' 
			src="images/template-telefonica/hero.webp" 
			srcset-desktop="images/template-telefonica/hero.webp" 
			srcset-mobile="images/template-telefonica/hero.webp" 
			alt=''
		/>
		<div class='gjs-row-kenos p-absolute-hero-center'>
			<div class='gjs-cell-kenos'>
				<div class="hero-image-complete-center">
					<div class="content">
						${divTag}
						${divPretitle}
						${divTitle}
						${divSubTitle}
						${divDescription}
						<div class="button-group">							
							${divPrimaryButton}
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
		label: 'Hero centrado',
		activate: true,
		content: `<style>${StyleImageCompleteBigCenter}</style>${DivImageCompleteBigCenter}`,
		category: 'Moleculas',
		media: iconsSvg.iHeroCenter,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ImageCompleteBigCenter;