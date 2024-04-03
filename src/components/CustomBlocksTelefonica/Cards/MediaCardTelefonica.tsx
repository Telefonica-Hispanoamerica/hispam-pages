const div = `
	<style> 
		.media-card {
			width: 100%;
			display: flex;
			flex-direction: column;
			border: 1px solid #DDDDDD;
			border-radius: 8px;
			overflow: hidden;
		}
		.media-card .box-image {
			overflow:hidden
		}
		.media-card .box-image img{
			object-fit: cover;
			width: 100%;
			aspect-ratio: 16 / 9;
		}
		.media-card .box-content {
			padding: 16px 16px 24px;
		}
		.media-card .box-content .content{
		}
		.media-card .box-content .content .tab{
			padding: 4px 12px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-direction: row;
			background-color: #F6ECF6;
			color: #712B71;
			font-size: 0.875rem;
			line-height: 1.250rem;
			border-radius: 50px;
		}
		.media-card .box-content .content .pretitle{
			font-size: 0.875rem;
			line-height: 1.250rem;
			color: #0B2739;
			margin-top: 8px;
		}
		.media-card .box-content .content .title{
			font-size: 1.125rem;
			line-height: 1.500rem;
			color: #0B2739;
			margin-top: 4px;
		}
		.media-card .box-content .content .subtitle{
			font-size: 0.875rem;
			line-height: 1.250rem;
			color: #0B2739;
			margin-top: 4px;
		}
		.media-card .box-content .content .description{
			font-size: 0.875rem;
			line-height: 1.250rem;
			color: #86888C;
			margin-top: 8px;
		}
		.media-card .box-content .buttons {
			display: flex;
			align-items: flex-end;
			flex: 1;
			margin-top: 16px;
		}
		.media-card .box-content .buttons .primary-buttom {
			background-color: #00A9E0;
			box-sizing: border-box;
			min-width: 104px;
			padding: 4.5px 10.5px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 0.875rem;
			line-height: 1.250rem;
			color: #fff;
			border-radius: 4px;
			word-break: break-all;
			text-decoration: none;
			-webkit-user-drag: element;
			user-select: none;
			-webkit-user-modify: read-write;
		}
		.media-card .box-content .buttons .link-buttom {
			color: #00A9E0;
			box-sizing: border-box;
			min-width: 104px;
			padding: 4.5px 10.5px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 0.875rem;
			line-height: 1.250rem;
			background-color: #fff;
			text-decoration: underline;
			text-underline-offset: 5px;
    		margin-left: 16px;
			-webkit-user-modify: read-write;
		}		

		@media (max-width: 768px) {

		}
	</style>
	<div class='media-card'>
		<div class='box-image'>
		<img src="https://images.unsplash.com/photo-1575903013621-1387ce8caa74?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80" alt="">
		</div>
		<div class='box-content'>
			<div class='content'>
				<div class='tab'>Priority</div>
				<div class='pretitle'>Pretitle</div>
				<h3 class='title'>Title</h3>
				<div class='subtitle'>Subtitle</div>
				<p class='description'>Description</p>
			</div>
			<div class='buttons'>
				<a class='primary-buttom' href >Action</a>
				<a class='link-buttom' href >Link</a>
			</div>
		</div>
	</div>
	`

function MediaCardTelefonica(editor: any) {		
	editor.Blocks.add('mediaCardTelefonica', {
		id: 'mediaCardTelefonica',
		label: 'Media Card Telefónica',
		activate: true,
		content: div,
		category: 'Cards',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
	
}
  
export default MediaCardTelefonica;