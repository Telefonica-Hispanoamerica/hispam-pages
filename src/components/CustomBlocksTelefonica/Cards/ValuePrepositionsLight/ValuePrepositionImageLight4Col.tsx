import { iconsSvg } from '../../IconsSvgBlocks';
const div = `
	<style>
	p {
		margin: 0;
	}
	.pretitle-vp-light{
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #313235;
		margin: 0 auto 8px;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.pretitle-vp-light{
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.title-section-vp-light{
		font-family: 'Telefonica-Regular';
		font-size: 2.5rem;
		line-height: 48px;
		color: #313235;
		margin: 0 auto 16px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section-vp-light{
			margin: 0 auto 16px;
			font-size: 1.75rem;
			line-height: 36px;
		}
	}
	.description-vp-light{
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 24px;
		color: #737578;
		margin: 0 auto;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.description-vp-light{
			font-size: 1rem;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-vp-img-light {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* max-width: 288px; */
		width: 100%;
		text-align: center;
		margin: 64px auto 0;
	}	
	@media (max-width: 767px) {
		.card-vp-img-light {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-img-light .box-img {
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
	.card-vp-img-light .box-img img {
		object-fit: contain;
    	border-radius: inherit;	
	}
	
	.card-vp-img-light .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #313235;
	}
	@media (max-width: 767px) {
		.card-vp-img-light .title {
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
	<section class='bg-light ptb-80'>
		<p class="pretitle-vp-light">Pretitle</p>
		<h2 class="title-section-vp-light">Value Proposition title goes here</h2>
		<p class="description-vp-light">This sample description is being used as a placeholder for real text.</p>
		<div class='gjs-row-kenos'>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img-light">					
					<div class="box-img">
						<img src="data:image/jpeg;base64,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" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img-light">
					<div class="box-img">
						<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCABgAGADAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+7fUdQmvZn+dhAGIiiBwu0HhmA4ZmxuJOcZwOBX0uGw0KEI+6nUaTnNrW73Sb2S20tfd6nHObk3rp0Rm11EBQAUAFABQAUAFABQAUAFAGlp+ozWcyfOxgLASRE5XaeCyg5Cso5BGM4APFcuJw0K8Je6lUSbhNLW+9nbdPazva91qXCbi1rp1XQza6iAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDjPGPjbT/CFvC08T3l9dbja2MTiMuiEB5ZpSriCEEhQ3luzvlURgsjJpTpuo+yW7/wCATKSj5vsc54U+Kmn+IdQj0u8sH0q6uTstH+0i6t55MZELP5MDRSvjEQKOkjfJvV2RWqdFxXMndLfSz/UmNRN2tY6Dxj450/whFAs0Ml7f3QZ7eyikWL90p2tNPMyyeTFuyiERyO7hgqYV2WadN1L62S3f+SHKaj5vsYnhL4oaf4lvl0y5sn0u9m3fZQbgXMFyyqWMQl8qBo5toZlRoyrhSFk3lUNTouCunddejQozUna1meo1iaBQAUAFABQAUAFABQB8f/EXWf7a8V6jIj77axcaba4OV8u0LJKy4JBWW5M8gI6qy13Uo8sF3er+f/Asc83eT8tEUfA9hNqXizQoIcgxajb3sjj+CGxcXcrZ7EpCUU/32Ud6dR2hJ+TX36CiryXrf7tTT+JVzqF54rv57y0vLWBW+yacLqCeBZbS0/dCaDzkTfFPL5k4ZAV/e9c0qSSgkmn1dmtG+jsOd+Z3+XojjLG8m0+9tL+3O2eyuYLqE/8ATSCRZUzjsSoDDuCQeDWjV00+qa+8nbU+4dNvodT0+y1G3OYL61guo+ckLNGsgVvRk3bHBwVYEEAgivOa5W0+ja+46U7pPurl2kMKACgAoAKACgDD8S6hLpXh/WNRgBM9pp9zLDgZ2zCNhE5H92Nyrt/sqelVBXlFd2hSdot+R8RkliWYkkkkknJJPJJJ5JJ5JPWvQOU9b8BW02k+GfF3i5EYXEFhJpumyBTmOWQIbi4U+kUklq2V/wCecqk9cYVHzTpw6Xu/0X5mkFaMpeVkc3pNzPruha7ot3PNdXNnANe0gzyNNJG9jn+1LeFpCzgXFi7TmNDh3tVbaW5q5e7KMlon7svnt9z/ADEtU0+mq+W/4fkcPWhB9R/CDUZrzwu9pKCRpd9NbQOehhlVLoJn1jkmkHXhCg4xXHXVp3/mV/u0N6bvH0Z6tWJoFABQAUAFABQBFcQQ3UE1rcRrLb3EUkE8TjKSRSoY5I2HdXRipHoaE7ardAeH3PwTtnvGe112SCwaQsLeSyE1xFGTny1uBcxo+B8qu8IIGCyuc56frGmsde99PusZey1309D1rT/D2l6doi+H4bcPpv2aW2ljlO5rhbgMLh52AXdJOXdnKhQC2IwiqqjBzk5c19b3Xlbb7jRJJW6f5nm1j8JF0rXLfVdO114ra3nMi2lxYJcSNA4ZJrSSb7TGksU0DyQOzQA+W5yGbmtnXvFpx1fVO3z23vqZqnZ3T28ipqPwWsri9kn0/WJLGzkkL/Y5LP7U0AY5McM/2qElB0QSIzKuNzuRkkcQ0rON3be+/wArfqDpdn+B6p4f0Cw8N6ZDpenq3lRlpJJZMGW4nfHmTykAAu2FUAAKkaoi/KorGUnOTk/+GNElFWRt1IwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKANHUNPmspnyjGAsTFKASpU8hSRkKyjgg4JwSMjmuXDYmFeEfeSqJLng3rfZtLqm9U13s9S5wcW9NOj6GdXUQFABQAUAFABQAUAFABQAUAaOn6fNezJ8jCAMDLKRhQoOSqk8MzYwAM4JyeAa5cTiYUIS95Oo01CCet3s2uiW7bt2WpcIOTWmnV+QP/Z" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
					</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img-light">
					<div class="box-img">
						<img src="data:image/jpeg;base64,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" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
			<div class='gjs-cell-kenos'>
				<div class="card-vp-img-light">
					<div class="box-img">
						<img src="data:image/jpeg;base64,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" />
					</div>        
					<div class="title roboto-regular">Block Title</div>
					<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
					<a href="" class="text-link">Text Link</a>
				</div>
			</div>
		</div>	
	</section>	
`

function ValuePrepositionImageLight4Col(editor: any) {		
	editor.Blocks.add('valuePrepositionImageLight4Col', {
		id: 'valuePrepositionImageLight4Col',
		label: 'Imagen centrada',
		activate: true,
		content: div,
		category: 'Value Prepositions Light',
		media: iconsSvg.headerTitleAnd4ColValueP,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrepositionImageLight4Col;