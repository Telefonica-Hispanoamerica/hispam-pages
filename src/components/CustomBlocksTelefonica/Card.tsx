import { Editor } from 'grapesjs';

function Card(editor: Editor) {
	editor.Blocks.add('card', {
		id: 'card',
		label: 'Card',
		activate: true,
		content: `
			<div data-gjs-type="card" class="box-card">
				<h3>Item title</h3>
				<p>Paragraph</p>
				<img src="">
				<button>
					Primary small
				</button>
			</div>
			<style>
				.box-card {						
					background-color: #019DF4;
					padding: 24px;
					border-radius: 8px;
				}
				.box-card h3 {
					font-family: 'Telefonica-Regular', sans-serif;
					font-size: 20px;
					line-height: 28px;
					color: #fff;
					margin: 0 0 8px;
					font-weight: normal;
				}
				.box-card p {
					font-family: 'Telefonica-Regular', sans-serif;
					font-size: 16px;
					line-height: 24px;
					color: #fff;
					margin: 0;
				}
				.box-card button {
					background-color: #fff;
					border-radius: 60px;						
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: 'Telefonica-Bold', sans-serif;
					font-weight: 600;
					font-size: 14px;
					line-height: 20px;
					color: #019DF4;
					margin: 16px 0 0;
					padding: 6px 12px 5px 12px;
					border: 0;
				}
			</style>
			`,
		category: 'Telefónica',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' }
	});
}
  
export default Card;