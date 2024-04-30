const div = `
	<style>
	p {
		margin: 0;
	}
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
	.card-vp-no-img-left {
		display: flex;
		flex-direction: row;
		align-items: start;
		/* max-width: 288px; */
		width: 100%;
		text-align: left;
		margin: 64px auto 0;
		grid-gap: 24px;
	}	
	@media (max-width: 767px) {
		.card-vp-no-img-left {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-no-img-left .box-img {
		width: 96px;
		height: 96px;
		/*overflow: hidden;*/
		border-radius: 8px;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		-ms-border-radius: 8px;
		-o-border-radius: 8px;
		margin-bottom: 24px;
		display: flex;
		justify-content: center;
		align-items: center;	
	}
	.card-vp-no-img-left .box-img img {
		object-fit: contain;
    	border-radius: inherit;	
	}
	.card-vp-no-img-left .box-content {
		text-align: left
	}
	
	.card-vp-no-img-left .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #fff;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-left .title {
			font-size: 1.125rem;
			line-height: 24px;
		}
	}
	.card-vp-no-img-left .description {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #fff;
		margin-top: 8px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-left .description {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-vp-no-img-left .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #fff;
		margin: 24px auto 0;
		-webkit-user-modify: read-write;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-no-img-left .text-link {
			font-size: 0.875rem;
			line-height: 20px;
		}
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
	/* Columns */
	.gjs-row-kenos {
		max-width: 1200px;
		margin: 0 auto;
		padding: 8px;
		display: table;
		width: 100%;
		border-spacing: 8px;
	}

	@media (max-width: 768px) {
		.gjs-row-kenos {
			width: 100%;
			padding: 0;
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
		<p class="pretitle-vp">Pretitle</p>
		<h2 class="title-section-vp">Value Proposition title goes here</h2>
		<p class="description-vp">This sample description is being used as a placeholder for real text.</p>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-left">
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-left">
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img-left">
					<div class="box-content">
						<div class="title roboto-regular">Block Title</div>
						<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
						<a href="" class="text-link">Text Link</a>
					</div>					
				</div>
			</div>
		</div>	
	</section>	
`

function ValuePrepositionNoImageDarkLeft4Col(editor: any) {		
	editor.Blocks.add('valuePrepositionNoImageLeftDark4Col', {
		id: 'valuePrepositionNoImageLeftDark4Col',
		label: 'With No Image Left Dark 4 Col',
		activate: true,
		content: div,
		category: 'Value Prepositions Dark',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrepositionNoImageDarkLeft4Col;