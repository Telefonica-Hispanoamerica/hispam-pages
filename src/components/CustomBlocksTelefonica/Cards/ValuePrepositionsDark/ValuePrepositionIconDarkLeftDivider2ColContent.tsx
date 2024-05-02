import { iconsSvg } from "../../IconsSvgBlocks";

const div = `
	<style>
	p {
		margin: 0;
	}
	.header-dark-vp-2col {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 64px;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		align-items: center;
	}
	@media (max-width: 767px) {
		.header-dark-vp-2col {
			display: flex;
			flex-direction: column;
			grid-gap: 24px;
		}
	}
	.pretitle-vp-dark {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #fff;
		margin: 0 auto 8px;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.pretitle-vp-dark {
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.title-section-vp-dark {
		font-family: 'Telefonica-Regular';
		font-size: 2.5rem;
		line-height: 48px;
		color: #fff;
		margin: 0 auto 16px;
		text-align: center;
	}
	@media (max-width: 767px) {
		.title-section-vp-dark {
			margin: 0 auto 16px;
			font-size: 1.75rem;
			line-height: 36px;
		}
	}
	.description-vp-dark {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 24px;
		color: #fff;
		margin: 0 auto;
    	text-align: center;
	}
	@media (max-width: 767px) {
		.description-vp-dark {
			font-size: 1rem;
			line-height: 24px;
			margin-bottom: 32px;
		}
	}
	.card-vp-img-left-dark-2col {
		display: flex;
		flex-direction: row;
		align-items: start;
		/* max-width: 288px; */
		width: 100%;
		text-align: left;
		margin: 16px auto 0;
		grid-gap: 24px;
	}	
	@media (max-width: 767px) {
		.card-vp-img-left-dark-2col {
			margin: 0 auto 24px;
		}
	}	
	.card-vp-img-left-dark-2col .box-img {
		width: 48px;
		height: 48px;
		/*overflow: hidden;*/
		border-radius: 8px;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		-ms-border-radius: 8px;
		-o-border-radius: 8px;
		margin-bottom: 24px;
		/*display: flex;
		justify-content: center;
		align-items: center;	*/
	}
	.card-vp-img-left-dark-2col .box-img img {
		object-fit: contain;
    	border-radius: inherit;	
	}
	.card-vp-img-left-dark-2col .box-content {
		text-align: left
	}
	
	.card-vp-img-left-dark-2col .title {
		font-family: Roboto;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 28px;
		color: #fff;
	}
	@media (max-width: 767px) {
		.card-vp-img-left-dark-2col .title {
			font-size: 1.125rem;
			line-height: 24px;
		}
	}
	.card-vp-img-left-dark-2col .description {
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
		.card-vp-img-left-dark-2col .description {
			font-size: 0.875rem;
			line-height: 20px;
		}
	}
	.card-vp-img-left-dark-2col .text-link {
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
		.card-vp-img-left-dark-2col .text-link {
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
	.text-left {
		text-align: left!important;
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
		<div class="header-dark-vp-2col">
			<div>
				<p class="pretitle-vp-dark text-left">Pretitle</p>
				<h2 class="title-section-vp-dark text-left">Value Proposition title is what you see here </h2>
				<p class="description-vp-dark text-left">This sample description is being used as a placeholder for real text. </p>
			</div>
			<div>
				<div class='gjs-row-kenos'>
					<div class='gjs-cell-kenos'>
						<div class="card-vp-img-left-dark-2col">					
							<div class="box-img">
								<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4zNzQgMTguMDQ1OUMyNC43OTQxIDE4LjE1MjMgMjUuMTI0NyAxOC40NzczIDI1LjI0MjMgMTguOTAzQzI1LjM2IDE5LjMyODggMjUuMjQyMyAxOS43ODgyIDI0LjkzOTggMjAuMTAxOUw2LjM2ODM5IDM5LjM0QzYuMTMzMSAzOS41NzUzIDUuODMwNTggMzkuNjk4NSA1LjUyMjQ1IDM5LjY5ODVDNS4yOTgzNyAzOS42OTg1IDUuMDc0MjggMzkuNjMxMyA0Ljg3MjYgMzkuNDk2OEM0LjM5NjQxIDM5LjE4MzEgNC4yMDU5MyAzOC41NjY5IDQuNDEzMjEgMzguMDIzNEw5LjgxMzc3IDIzLjkyMjZMMS41ODk2OSAyMS44ODlDMS4xNzUxMiAyMS43ODgyIDAuODQ0NTkgMjEuNDYzMiAwLjcyNjk0MyAyMS4wNDMxQzAuNjA5Mjk2IDIwLjYyMjkgMC43MTU3MzggMjAuMTYzNSAxLjAxMjY2IDE5Ljg0OThMMTguODQ0NiAwLjcwNjk3NkMxOS4yNDIzIDAuMjgxMjA2IDE5Ljg2OTggMC4yMDgzNzcgMjAuMzUxNiAwLjUyNzcwNUMyMC44MzM0IDAuODQ3MDMyIDIxLjAyMzggMS40NzQ0OCAyMC44MTA5IDIuMDE3OUwxNS4zNzEyIDE1LjgyNzRMMjQuMzc0IDE4LjA0NTlaTTEyLjUzNjQgMjMuNTA4MUw4Ljc0OTM0IDMzLjM5NkwyMS43NTc3IDE5LjkxN0wxMy40NjY0IDE3Ljg3MjJDMTMuMTMwMyAxNy43ODgyIDEyLjg0NDYgMTcuNTU4NSAxMi42ODc3IDE3LjIzOTJDMTIuNTMwOCAxNi45MjU0IDEyLjUxNCAxNi41NTAxIDEyLjY0MjkgMTYuMjE5NkwxNi4yNzMxIDcuMDA5NDlMNC4xNzIzMiAyMC4wMDExTDExLjcwNzMgMjEuODY2NkMxMi4wNDM1IDIxLjk1MDYgMTIuMzI5MiAyMi4xODAzIDEyLjQ4NiAyMi40OTQxQzEyLjY0MjkgMjIuODA3OCAxMi42NTk3IDIzLjE3NzUgMTIuNTM2NCAyMy41MDgxWiIgZmlsbD0iIzAxOUJFRiIvPgo8L3N2Zz4K" />
							</div>
							<div class="box-content">
								<div class="title roboto-regular">Block Title</div>
								<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
								<a href="" class="text-link">Text Link</a>
							</div>					
						</div>
					</div>
				</div>
				<div class='gjs-row-kenos'>
					<div class='gjs-cell-kenos'>
						<div class="card-vp-img-left-dark-2col">					
							<div class="box-img">
								<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4zNzQgMTguMDQ1OUMyNC43OTQxIDE4LjE1MjMgMjUuMTI0NyAxOC40NzczIDI1LjI0MjMgMTguOTAzQzI1LjM2IDE5LjMyODggMjUuMjQyMyAxOS43ODgyIDI0LjkzOTggMjAuMTAxOUw2LjM2ODM5IDM5LjM0QzYuMTMzMSAzOS41NzUzIDUuODMwNTggMzkuNjk4NSA1LjUyMjQ1IDM5LjY5ODVDNS4yOTgzNyAzOS42OTg1IDUuMDc0MjggMzkuNjMxMyA0Ljg3MjYgMzkuNDk2OEM0LjM5NjQxIDM5LjE4MzEgNC4yMDU5MyAzOC41NjY5IDQuNDEzMjEgMzguMDIzNEw5LjgxMzc3IDIzLjkyMjZMMS41ODk2OSAyMS44ODlDMS4xNzUxMiAyMS43ODgyIDAuODQ0NTkgMjEuNDYzMiAwLjcyNjk0MyAyMS4wNDMxQzAuNjA5Mjk2IDIwLjYyMjkgMC43MTU3MzggMjAuMTYzNSAxLjAxMjY2IDE5Ljg0OThMMTguODQ0NiAwLjcwNjk3NkMxOS4yNDIzIDAuMjgxMjA2IDE5Ljg2OTggMC4yMDgzNzcgMjAuMzUxNiAwLjUyNzcwNUMyMC44MzM0IDAuODQ3MDMyIDIxLjAyMzggMS40NzQ0OCAyMC44MTA5IDIuMDE3OUwxNS4zNzEyIDE1LjgyNzRMMjQuMzc0IDE4LjA0NTlaTTEyLjUzNjQgMjMuNTA4MUw4Ljc0OTM0IDMzLjM5NkwyMS43NTc3IDE5LjkxN0wxMy40NjY0IDE3Ljg3MjJDMTMuMTMwMyAxNy43ODgyIDEyLjg0NDYgMTcuNTU4NSAxMi42ODc3IDE3LjIzOTJDMTIuNTMwOCAxNi45MjU0IDEyLjUxNCAxNi41NTAxIDEyLjY0MjkgMTYuMjE5NkwxNi4yNzMxIDcuMDA5NDlMNC4xNzIzMiAyMC4wMDExTDExLjcwNzMgMjEuODY2NkMxMi4wNDM1IDIxLjk1MDYgMTIuMzI5MiAyMi4xODAzIDEyLjQ4NiAyMi40OTQxQzEyLjY0MjkgMjIuODA3OCAxMi42NTk3IDIzLjE3NzUgMTIuNTM2NCAyMy41MDgxWiIgZmlsbD0iIzAxOUJFRiIvPgo8L3N2Zz4K" />
							</div>
							<div class="box-content">
								<div class="title roboto-regular">Block Title</div>
								<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
								<a href="" class="text-link">Text Link</a>
							</div>					
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class='gjs-row-kenos'>
					<div class='gjs-cell-kenos'>
						<div class="card-vp-img-left-dark-2col">					
							<div class="box-img">
								<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4zNzQgMTguMDQ1OUMyNC43OTQxIDE4LjE1MjMgMjUuMTI0NyAxOC40NzczIDI1LjI0MjMgMTguOTAzQzI1LjM2IDE5LjMyODggMjUuMjQyMyAxOS43ODgyIDI0LjkzOTggMjAuMTAxOUw2LjM2ODM5IDM5LjM0QzYuMTMzMSAzOS41NzUzIDUuODMwNTggMzkuNjk4NSA1LjUyMjQ1IDM5LjY5ODVDNS4yOTgzNyAzOS42OTg1IDUuMDc0MjggMzkuNjMxMyA0Ljg3MjYgMzkuNDk2OEM0LjM5NjQxIDM5LjE4MzEgNC4yMDU5MyAzOC41NjY5IDQuNDEzMjEgMzguMDIzNEw5LjgxMzc3IDIzLjkyMjZMMS41ODk2OSAyMS44ODlDMS4xNzUxMiAyMS43ODgyIDAuODQ0NTkgMjEuNDYzMiAwLjcyNjk0MyAyMS4wNDMxQzAuNjA5Mjk2IDIwLjYyMjkgMC43MTU3MzggMjAuMTYzNSAxLjAxMjY2IDE5Ljg0OThMMTguODQ0NiAwLjcwNjk3NkMxOS4yNDIzIDAuMjgxMjA2IDE5Ljg2OTggMC4yMDgzNzcgMjAuMzUxNiAwLjUyNzcwNUMyMC44MzM0IDAuODQ3MDMyIDIxLjAyMzggMS40NzQ0OCAyMC44MTA5IDIuMDE3OUwxNS4zNzEyIDE1LjgyNzRMMjQuMzc0IDE4LjA0NTlaTTEyLjUzNjQgMjMuNTA4MUw4Ljc0OTM0IDMzLjM5NkwyMS43NTc3IDE5LjkxN0wxMy40NjY0IDE3Ljg3MjJDMTMuMTMwMyAxNy43ODgyIDEyLjg0NDYgMTcuNTU4NSAxMi42ODc3IDE3LjIzOTJDMTIuNTMwOCAxNi45MjU0IDEyLjUxNCAxNi41NTAxIDEyLjY0MjkgMTYuMjE5NkwxNi4yNzMxIDcuMDA5NDlMNC4xNzIzMiAyMC4wMDExTDExLjcwNzMgMjEuODY2NkMxMi4wNDM1IDIxLjk1MDYgMTIuMzI5MiAyMi4xODAzIDEyLjQ4NiAyMi40OTQxQzEyLjY0MjkgMjIuODA3OCAxMi42NTk3IDIzLjE3NzUgMTIuNTM2NCAyMy41MDgxWiIgZmlsbD0iIzAxOUJFRiIvPgo8L3N2Zz4K" />
							</div>
							<div class="box-content">
								<div class="title roboto-regular">Block Title</div>
								<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
								<a href="" class="text-link">Text Link</a>
							</div>					
						</div>
					</div>
				</div>
				<div class='gjs-row-kenos'>
					<div class='gjs-cell-kenos'>
						<div class="card-vp-img-left-dark-2col">					
							<div class="box-img">
								<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4zNzQgMTguMDQ1OUMyNC43OTQxIDE4LjE1MjMgMjUuMTI0NyAxOC40NzczIDI1LjI0MjMgMTguOTAzQzI1LjM2IDE5LjMyODggMjUuMjQyMyAxOS43ODgyIDI0LjkzOTggMjAuMTAxOUw2LjM2ODM5IDM5LjM0QzYuMTMzMSAzOS41NzUzIDUuODMwNTggMzkuNjk4NSA1LjUyMjQ1IDM5LjY5ODVDNS4yOTgzNyAzOS42OTg1IDUuMDc0MjggMzkuNjMxMyA0Ljg3MjYgMzkuNDk2OEM0LjM5NjQxIDM5LjE4MzEgNC4yMDU5MyAzOC41NjY5IDQuNDEzMjEgMzguMDIzNEw5LjgxMzc3IDIzLjkyMjZMMS41ODk2OSAyMS44ODlDMS4xNzUxMiAyMS43ODgyIDAuODQ0NTkgMjEuNDYzMiAwLjcyNjk0MyAyMS4wNDMxQzAuNjA5Mjk2IDIwLjYyMjkgMC43MTU3MzggMjAuMTYzNSAxLjAxMjY2IDE5Ljg0OThMMTguODQ0NiAwLjcwNjk3NkMxOS4yNDIzIDAuMjgxMjA2IDE5Ljg2OTggMC4yMDgzNzcgMjAuMzUxNiAwLjUyNzcwNUMyMC44MzM0IDAuODQ3MDMyIDIxLjAyMzggMS40NzQ0OCAyMC44MTA5IDIuMDE3OUwxNS4zNzEyIDE1LjgyNzRMMjQuMzc0IDE4LjA0NTlaTTEyLjUzNjQgMjMuNTA4MUw4Ljc0OTM0IDMzLjM5NkwyMS43NTc3IDE5LjkxN0wxMy40NjY0IDE3Ljg3MjJDMTMuMTMwMyAxNy43ODgyIDEyLjg0NDYgMTcuNTU4NSAxMi42ODc3IDE3LjIzOTJDMTIuNTMwOCAxNi45MjU0IDEyLjUxNCAxNi41NTAxIDEyLjY0MjkgMTYuMjE5NkwxNi4yNzMxIDcuMDA5NDlMNC4xNzIzMiAyMC4wMDExTDExLjcwNzMgMjEuODY2NkMxMi4wNDM1IDIxLjk1MDYgMTIuMzI5MiAyMi4xODAzIDEyLjQ4NiAyMi40OTQxQzEyLjY0MjkgMjIuODA3OCAxMi42NTk3IDIzLjE3NzUgMTIuNTM2NCAyMy41MDgxWiIgZmlsbD0iIzAxOUJFRiIvPgo8L3N2Zz4K" />
							</div>
							<div class="box-content">
								<div class="title roboto-regular">Block Title</div>
								<div class="description roboto-regular">This sample description is being used as a placeholder for real text.</div>
								<a href="" class="text-link">Text Link</a>
							</div>					
						</div>
					</div>
				</div>
			</div>			
		</div>
	</section>	
`

function ValuePrepositionIconDarkLeftDivider2ColContent(editor: any) {		
	editor.Blocks.add('valuePrepositionIconLeftDarkDivider2ColContent', {
		id: 'valuePrepositionIconLeftDarkDivider2ColContent',
		label: 'Icono izquierda',
		activate: true,
		content: div,
		category: 'Value Prepositions Dark',
		media: iconsSvg.headerLeftAnd2ColValueP,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default ValuePrepositionIconDarkLeftDivider2ColContent;