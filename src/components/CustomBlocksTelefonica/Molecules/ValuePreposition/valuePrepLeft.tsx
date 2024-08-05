import { iconsSvg } from '../../IconsSvgBlocks';
export const StyleValuePrepLeft = `
<style>
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
		color: #313235;
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
		font-size: 1.25rem;
		line-height: 28px;
		color: #313235;
	}
	@media (max-width: 767px) {
		.card-vp-icon-left-light .title {
			font-size: 1.125rem;
			line-height: 24px;
		}
	}
	.card-vp-icon-left-light .description {
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
	}
	@media (max-width: 767px) {
		.card-vp-icon-left-light .description {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-vp-icon-left-light .text-link {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1rem;
		line-height: 24px;
		color: #019BEF;
		margin: 24px auto 0;
		-webkit-user-modify: read-write;
		display: block;
	}
	@media (max-width: 767px) {
		.card-vp-icon-left-light .text-link {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}	
</style>`
export const DivValuePrepLeft = `
	<div class="card-vp-icon-left-light">					
		<div class="box-img">
			<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4zNzQgMTguMDQ1OUMyNC43OTQxIDE4LjE1MjMgMjUuMTI0NyAxOC40NzczIDI1LjI0MjMgMTguOTAzQzI1LjM2IDE5LjMyODggMjUuMjQyMyAxOS43ODgyIDI0LjkzOTggMjAuMTAxOUw2LjM2ODM5IDM5LjM0QzYuMTMzMSAzOS41NzUzIDUuODMwNTggMzkuNjk4NSA1LjUyMjQ1IDM5LjY5ODVDNS4yOTgzNyAzOS42OTg1IDUuMDc0MjggMzkuNjMxMyA0Ljg3MjYgMzkuNDk2OEM0LjM5NjQxIDM5LjE4MzEgNC4yMDU5MyAzOC41NjY5IDQuNDEzMjEgMzguMDIzNEw5LjgxMzc3IDIzLjkyMjZMMS41ODk2OSAyMS44ODlDMS4xNzUxMiAyMS43ODgyIDAuODQ0NTkgMjEuNDYzMiAwLjcyNjk0MyAyMS4wNDMxQzAuNjA5Mjk2IDIwLjYyMjkgMC43MTU3MzggMjAuMTYzNSAxLjAxMjY2IDE5Ljg0OThMMTguODQ0NiAwLjcwNjk3NkMxOS4yNDIzIDAuMjgxMjA2IDE5Ljg2OTggMC4yMDgzNzcgMjAuMzUxNiAwLjUyNzcwNUMyMC44MzM0IDAuODQ3MDMyIDIxLjAyMzggMS40NzQ0OCAyMC44MTA5IDIuMDE3OUwxNS4zNzEyIDE1LjgyNzRMMjQuMzc0IDE4LjA0NTlaTTEyLjUzNjQgMjMuNTA4MUw4Ljc0OTM0IDMzLjM5NkwyMS43NTc3IDE5LjkxN0wxMy40NjY0IDE3Ljg3MjJDMTMuMTMwMyAxNy43ODgyIDEyLjg0NDYgMTcuNTU4NSAxMi42ODc3IDE3LjIzOTJDMTIuNTMwOCAxNi45MjU0IDEyLjUxNCAxNi41NTAxIDEyLjY0MjkgMTYuMjE5NkwxNi4yNzMxIDcuMDA5NDlMNC4xNzIzMiAyMC4wMDExTDExLjcwNzMgMjEuODY2NkMxMi4wNDM1IDIxLjk1MDYgMTIuMzI5MiAyMi4xODAzIDEyLjQ4NiAyMi40OTQxQzEyLjY0MjkgMjIuODA3OCAxMi42NTk3IDIzLjE3NzUgMTIuNTM2NCAyMy41MDgxWiIgZmlsbD0iIzAxOUJFRiIvPgo8L3N2Zz4K" />
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
		content: StyleValuePrepLeft+DivValuePrepLeft,
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