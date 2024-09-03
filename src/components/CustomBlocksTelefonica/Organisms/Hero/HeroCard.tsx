import { iconsSvg } from '../../IconsSvgBlocks';
import { divPrimaryButton, stylePrimaryButton } from '../../Molecules/Buttons/PrimaryButton';
import { divLinkButton, styleLinkButton } from '../../Molecules/Buttons/LinkButton';
import { divTag, styleTag } from '../../Molecules/Content/Tag';
import { divPretitle, stylePretitle } from '../../Molecules/Content/Pretitle';
import { divTitle, styleTitle } from '../../Molecules/Content/Title';
import { divSubTitle, styleSubTitle } from '../../Molecules/Content/Subtitle';
import { divDescription } from '../../Molecules/Content/Description';
export const StyleHeroCardContent = `
	<style>
	.hero-right-image {
		background-color: #fff;
	}
	.hero-card-right-l {
		width: 100%;
		margin: 0 auto;
		padding: 32px 0 52px;
		display: grid;
		grid-template-columns: 50% 50%;
		align-items: center;
		border-radius: 16px;
	}

	@media (max-width: 767px) {
		.hero-card-right-l {
			display: flex;
			flex-direction: column;
			padding: 0 0 24px;
			border-radius: 0;
			row-gap: initial;
		}
	}

	.hero-card-right-l .content {
		order: 1;
		padding: 24px 24px 0;
	}

	@media (max-width: 767px) {
		.hero-card-right-l .content {
			order: 2
		}
	}
	.hero-card-right-l .img-content {
		overflow: hidden;
		border-radius: 16px;
		order: 2;
	}
	@media (max-width: 767px) {
		.hero-card-right-l .img-content {
			order: 1;
			overflow: hidden;
			border-radius: 0;
		}
	}
	.hero-card-right-l .img-content img {
		width: 100%;
		height: auto;
	}

	@media (max-width: 767px) {
		.hero-card-right-l .img-content img {
			width: 100%;
			height: inherit;
			object-fit: fill;
		}
	}
	.hero-card-right-l .content .button-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		grid-gap: 16px;
		width: 70%;
	}

	.hero-card-right-l .content .button-group .primary-button-glp{
		order: 2;
	}

	.hero-card-right-l .content .button-group .link-button-glp{
		order: 1;
	}

	@media(max-width: 767px) {
		.hero-card-right-l .content .button-group {
			flex-direction: column;
			width: 100%;
		}
		.hero-card-right-l .content .button-group .primary-button-glp{
			order: 1;
		}

		.hero-card-right-l .content .button-group .link-button-glp{
			order: 2;
		}
	}
	@media (max-width: 767px) {
		.gjs-row-kenos {
			padding: 0;
		}
	}
	${stylePrimaryButton}
	${styleLinkButton}
	${styleTag}
	${stylePretitle}
	${styleTitle}
	${styleSubTitle}
	</style>
	`	
	export const DivHeroCardContent = `
	<section class='hero-right-image'>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="hero-card-right-l">
					<div class="content">
						${divTag}
						${divPretitle}
						${divTitle}
						${divSubTitle}
						${divDescription}
						<div class="button-group">
							${divLinkButton}
							${divPrimaryButton}
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

function HeroCard(editor: any) {		
	editor.Blocks.add('HeroCardRight', {
		id: 'HeroCardRight',
		label: 'Hero Der.',
		activate: true,
		content: StyleHeroCardContent+DivHeroCardContent,
		category: 'Organismos',
		media: iconsSvg.iheroCardRight,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default HeroCard;