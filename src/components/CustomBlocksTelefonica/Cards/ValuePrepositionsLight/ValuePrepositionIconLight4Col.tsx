import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
	p {
		margin: 0;
	}
	.pretitle-vp-light {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #313235;
		margin: 0 auto 8px;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.pretitle-vp-light {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.title-section-vp-light {
		font-family: Telefonica-Regular, sans-serif;
		font-size: 2.5rem;
		line-height: 48px;
		color:#313235;
		margin: 0 auto 16px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section-vp-light {
			margin: 0 auto 16px;
			font-size: 1.75rem;
			line-height: 36px;
		}
	}
	.description-vp-light {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 24px;
		color: #737578;
		margin: 0 auto;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.description-vp-light {
			font-size: 1rem;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-vp-img-light {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		text-align: center;
		margin: 0 auto 0;
	}	
	@media (max-width: 767px) {
		.card-vp-img-light {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-img-light .box-img {
		width: 48px;
		height: 48px;
		border-radius: 8px;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		-ms-border-radius: 8px;
		-o-border-radius: 8px;
		margin-bottom: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.card-vp-img-light .box-img img {
		object-fit: contain;
    	border-radius: inherit;
		width: inherit;
    	aspect-ratio: 1 / 1;
	}
	
	.card-vp-img-light .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #313235;
	}
	@media (max-width: 767px) {
		.card-vp-img .title {
			font-size: 1.125rem;
			line-height: 24px;
		}
	}
	.card-vp-img-light .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #313235;
		margin-top: 8px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-img-light .description {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-vp-img-light .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #019BEF;
		margin: 24px auto 0;
		-webkit-user-modify: read-write;
		
	}
	@media (max-width: 767px) {
		.card-vp-img-light .text-link {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.bg-light {
		background-color: #fff
	}
	.ptb-80 {
		padding: 80px 0;
	}
	@media (max-width: 767px) {
		.ptb-80 {
			padding: 32px 16px;
		}
	}
	</style>
	<section class='bg-light ptb-80'>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<p class="pretitle-vp-light">Pretitle</p>
				<h2 class="title-section-vp-light">Value Proposition title goes here</h2>
				<p class="description-vp-light">This sample description is being used as a placeholder for real text.</p>
			</div>
		</div>		
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img-light">					
					<div class="box-img">
						<img src="" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img-light">
					<div class="box-img">
						<img src="" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img-light">
					<div class="box-img">
						<img src="" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img-light">
					<div class="box-img">
						<img src="" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
		</div>	
	</section>	
`

function ValuePrepositionIconLight4Col(editor: any) {		
	editor.Blocks.add('valuePrepositionIconLight4Col', {
		id: 'valuePrepositionIconLight4Col',
		label: 'Icono centrado',
		activate: true,
		content: div,
		category: 'Value Prepositions Light',
		media: iconsSvg.headerTitleAnd4ColValueP,
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
export default ValuePrepositionIconLight4Col;