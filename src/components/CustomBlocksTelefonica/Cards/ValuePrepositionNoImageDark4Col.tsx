const div = `
	<style>
	p {
		margin: 0;
	}
	.title-section {
		font-size: 2.5rem;
		line-height: 48px;
		color: #fff;
		margin: 0 auto 64px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section {
			margin: 0 auto 24px;
			font-size: 1.75 rem;
			line-height: 36px;
		}
	}
	.card-vp-no-img {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* max-width: 288px; */
		width: 100%;
		text-align: center;
		margin: 0 auto;
	}	
	@media (max-width: 767px) {
		.card-vp-no-img {
			margin: 0 auto 24px;
		}
	}
	
	.card-vp-no-img .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #fff;
	}
	@media (max-width: 767px) {
		.card-vp-no-img .title {
			font-size: 1.125rem;
			line-height: 24px;
		}
	}
	.card-vp-no-img .description {
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
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-no-img .description {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-vp-no-img .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #fff;
		margin: 24px auto 0;
		-webkit-user-modify: read-write;
		
	}
	@media (max-width: 767px) {
		.card-vp-no-img .text-link {
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
		<h2 class="title-section">Title section</h2>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img">      
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img">     
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
					</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img">    
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-no-img">      
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
		</div>	
	</section>	
`

function ValuePrepositionNoImageDark4Col(editor: any) {		
	editor.Blocks.add('valuePrepositionNoImageDark4Col', {
		id: 'valuePrepositionNoImageDark4Col',
		label: 'With No Image Dark 4 Col',
		activate: true,
		content: div,
		category: 'Value Prepositions',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrepositionNoImageDark4Col;