import { iconsSvg } from '../../IconsSvgBlocks';
export const StyleValuePrepLeft = `
	.pretitle-vp-light {
		font-family: Roboto;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #313235;
		margin: 0 auto 8px;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.pretitle-vp-light {
			font-size: 16px;
			line-height: 24px;
		}
	}
	.title-section-vp-light {
		font-family: Telefonica-Regular, sans-serif;
		font-size: 40px;
		line-height: 48px;
		color: #313235;
		margin: 0 auto 16px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section-vp-light {
			margin: 0 auto 16px;
			font-size: 28px;
			line-height: 36px;
		}
	}
	.description-vp-light {
		font-family: Roboto;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: #737578;
		margin: 0 auto;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.description-vp-light {
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-vp-icon-left-light {
		display: flex;
		flex-direction: row;
		align-items: start;
		width: 100%;
		text-align: left;
		margin: 0 auto 0;
		grid-gap: 24px;
	}	
	@media (max-width: 767px) {
		.card-vp-icon-left-light {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-icon-left-light .box-img {
		width: 48px;
		height: 48px;
		border-radius: 8px;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		-ms-border-radius: 8px;
		-o-border-radius: 8px;
		margin-bottom: 24px;
		justify-content: center;
		align-items: center;
	}
	.card-vp-icon-left-light .box-img img {
		object-fit: contain;
    	border-radius: inherit;
		width: inherit;
    	aspect-ratio: 1 / 1;
	}
	.card-vp-icon-left-light .box-content {
		text-align: left
	}
	
	.card-vp-icon-left-light .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #313235;
	}
	@media (max-width: 767px) {
		.card-vp-icon-left-light .title {
			font-size: 18px;
			line-height: 24px;
		}
	}
	.card-vp-icon-left-light .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #313235;
		margin-top: 8px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	@media (max-width: 767px) {
		.card-vp-icon-left-light .description {
			font-size: 14px;
			line-height: 20px;
		}
	}
	.card-vp-icon-left-light .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #019BEF;
		margin: 24px auto 0;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-icon-left-light .text-link {
			font-size: 14px;
			line-height: 20px;
		}
	}	
`
export const DivValuePrepLeft = `
	<div class="card-vp-icon-left-light">					
		<div class="box-img">
			<img 
				src="images/template-telefonica/icon-light-blue.svg"
				srcset-desktop="images/template-telefonica/icon-light-blue.svg" 
				srcset-mobile="images/template-telefonica/icon-light-blue.svg" 
				alt="" 
			/>
		</div>
		<div class="box-content">
			<div class="title roboto-regular">Block Title</div>
			<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
			<a href="" class="text-link">Text Link</a>
		</div>					
	</div>
`

function ValuePrepLeft(editor: any) {		
	editor.Blocks.add('valuePrepLeft', {
		id: 'valuePrepLeft',
		label: 'Img Izquierda',
		activate: true,
		content: `<style>${StyleValuePrepLeft}</style>${DivValuePrepLeft}`,
		category: 'Moleculas',
		media: iconsSvg.valuePrepositionLeft,
		attributes: { class: 'custom-block' },
	});
	
}

/* 6 Col */
/* <svg width="38" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 auto;"><rect x="0.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="6.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="12.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="18.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="24.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="31.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect></svg>*/

/* 5 Col */
/* <svg width="34" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 auto;"><rect x="0.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="6.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="12.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="18.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="24.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect></svg> */

/* 4 Col */
/* <svg width="28" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 auto;"><rect x="0.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="6.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="12.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="18.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect></svg>*/

/*3 col*/
/* <svg width="22" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 auto;"><rect x="0.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="6.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="12.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect></svg>*/

/*2 col*/
/* <svg width="16" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 auto;"><rect x="0.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect><rect x="6.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect></svg> */

/*1 col*/
/* <svg width="10" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 auto;"><rect x="0.25" y="0.25" width="4" height="18" rx="0.75" stroke="#019BEF" stroke-width="1"></rect></svg> */
export default ValuePrepLeft;