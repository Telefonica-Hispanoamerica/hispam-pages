const id = crypto.randomUUID();
export const StylePlanCardContent = `
	<style>	
		.toggle {
			display: none;
		}

		.card-collapse {
			padding: 0;
			overflow: hidden;
			position: relative;
		}

		.card-content {
			max-height: 500px;
			transition: max-height 0.5s ease-out;			
			overflow: hidden;
			margin-top: 1rem;
		}

		.card-header {
			cursor: pointer;
			bottom: 0;
			left: 0;
			width: 100%;
			background-color: #fff;
			box-sizing: border-box;
			transition: transform 0.5s ease-in-out;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.card-collapse .card-header {
			font-family: 'Roboto';
			transform: translateY(0);
			font-size: 1rem;
			color: #019BEF;
			text-decoration: underline;
			text-underline-offset: 4px;
			margin-top: 16px;
		}

		.card-collapse .card-header img {
			margin-left: 4px;
			transform: rotate(180deg);
			-webkit-transform: rotate(180deg);
			-moz-transform: rotate(180deg);
			-ms-transform: rotate(180deg);
			-o-transform: rotate(180deg);
		}

		.toggle:checked+.card-collapse .card-content {
			max-height: 0;
			transition: max-height 0.5s ease-in-out;
		}

		.toggle:checked+.card-collapse .card-header {
			transform: translateY(0);
			margin-top: 1rem;
		}

		.toggle:checked+.card-collapse .card-header img {
			transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			-o-transform: rotate(0deg);
		}

		body {
			margin: 24px auto;
			font-family: 'Telefonica-Regular', sans-serif;
		}

		.card {
			background-color: #fff;
			border-radius: 1rem;
			position: relative;
			border: 1px solid #dddddd;
			overflow: hidden;
			padding: 0 0 24px;
			margin-top: 28px;
		}

		@media (max-width: 768px) {
			.card {
				margin-bottom: 24px;
			}
		}

		.card .header-plan {
			background-color: #0B2739;
			padding: 1rem 1rem 2rem;
			color: #fff;
			display: flex;
			flex-direction: column;
			position: relative;
			justify-content: center;
			align-items: center;
		}

		.card .header-plan .tag {
			background-color: #e63780;
			padding: 4px 1rem;
			color: #fff;
			font-size: 0.875rem;
			border-radius: 4px;
			position: absolute;
			bottom: -12px;
			text-align: center;
			-webkit-user-modify: read-write;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.card .header-plan .tag img {
			margin-right: 4px;
		}

		.card .header-plan .tag p {
			font-family: Roboto;
			margin: 0 auto;
		}

		.card .header-plan .plan-name {
			font-family: 'Roboto';
			font-size: 0.875rem;
			line-height: 20px;
			color: #fff;
			margin: 0;
			text-align: center;
			-webkit-user-modify: read-write;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.card .header-plan .plan-name img {
			margin-left: 6px;
		}

		.card .header-plan .capacity {
			font-family: Telefonica-Regular;
			font-size: 2rem;
			line-height: 40px;
			color: #fff;
			margin: 0;
			text-align: center;
			-webkit-user-modify: read-write;
		}

		.card .header-plan .offer-description {
			font-family: 'Roboto';
			font-size: 0.875rem;
			line-height: 20px;
			color: #fff;
			margin: 0;
			text-align: center;
			-webkit-user-modify: read-write;
		}

		.card .header-plan .offer-description span {
			font-weight: 700;
		}

		.card .price-table {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 2rem 1rem 8px;
		}

		.card .price-table .offer-description-price {
			font-family: 'Roboto';
			font-size: 0.875rem;
			line-height: 20px;
			color: #737578;
			-webkit-user-modify: read-write;
		}

		.card .price-table .price {
			font-family: Telefonica-Regular;
			font-size: 2rem;
			line-height: 40px;
			color: #313235;
			-webkit-user-modify: read-write;
		}

		.card .price-table .price span {
			font-size: 22px;
			line-height: 30px;
			color: #313235;
			-webkit-user-modify: read-write;
		}

		.card .price-table .offer-per-month {
			color: #737578;
		}

		.card .price-table .offer-per-month p {
			font-family: 'Roboto';
			font-size: 0.875rem;
			line-height: 20px;
			color: #737578;
			-webkit-user-modify: read-write;
		}

		.card .price-table .offer-per-month span {
			font-family: 'Roboto';
			font-weight: 700;
		}

		.card .btn-main-content {
			padding: 0 1rem;
		}

		.card .btn-main-content .btn-primary {
			font-family: 'Roboto';
			font-size: 1.125rem;
			font-weight: 600;
			padding: 1rem 12px;
			display: block;
			background-color: #019df4;
			color: #fff;
			border-radius: 50px;
			border: 0;
			margin: 1rem auto 1rem;
			cursor: pointer;
			-webkit-user-modify: read-write;
			text-align: center;
		}

		.card .btn-main-content .btn-second {
			font-family: 'Roboto';
			font-size: 1.125rem;
			font-weight: 600;
			padding: 1rem 12px;
			display: block;
			background-color: #fff;
			color: #019df4;
			border-radius: 50px;
			border: 1.5px solid #019df4;
			margin: 1rem auto 1rem;
			cursor: pointer;
			-webkit-user-modify: read-write;
			text-align: center;
		}

		.card .switch-options {
			display: flex;
			padding: 1rem 8px;
			flex-direction: row;
			border-radius: 12px;
			border: 1px solid #DDD;
			background: #FFF;
			margin: 0 1rem 1rem;
			align-items: center;
			justify-content: space-between;
		}

		.card .switch-options .icon-circle {
			width: 40px;
			height: 40px;
			border-radius: 1000px;
			background: url(<path-to-image>) lightgray 50% / cover no-repeat;
		}

		.card .switch-options .streaming {
			width: 60%;
			display: flex;
			flex-direction: column;
			margin-left: 8px;
		}

		.card .switch-options .streaming .add-streaming {
			font-family: 'Roboto';
			align-self: stretch;
			color: #313235;
			font-size: 1rem;
			font-style: normal;
			font-weight: 400;
			line-height: 24px;
			-webkit-user-modify: read-write;
		}

		.card .switch-options .streaming .description {
			font-family: 'Roboto';
			color: #737578;
			font-size: 0.875rem;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;
			-webkit-user-modify: read-write;
		}

		.card .switch-options .switch {
			position: relative;
			display: inline-block;
			width: 60px;
			height: 34px;
		}

		.card .switch-options .switch input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		.card .switch-options .slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #ccc;
			-webkit-transition: .4s;
			transition: .4s;
		}

		.card .switch-options .slider:before {
			position: absolute;
			content: "";
			height: 26px;
			width: 26px;
			left: 4px;
			bottom: 4px;
			background-color: white;
			-webkit-transition: .4s;
			transition: .4s;
		}

		.card .switch-options input:checked+.slider {
			background-color: #2196F3;
		}

		.card .switch-options input:focus+.slider {
			box-shadow: 0 0 1px #2196F3;
		}

		.card .switch-options input:checked+.slider:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}

		.card .switch-options .slider.round {
			border-radius: 34px;
		}

		.card .switch-options .slider.round:before {
			border-radius: 50%;
		}

		.card .long-offer-row {
			display: flex;
			height: 40px;
			padding: 4px 8px 4px 1rem;
			align-items: center;
			gap: 1rem;
			border-radius: 8px;
			background: #F6F6F6;
			margin: 0 1rem 1rem;
		}

		.card .long-offer-row .icon {
			width: 24px;
			height: 24px;
		}

		.card .long-offer-row .img {
			height: 24px;
		}

		.card .long-offer-row .txt {
			font-family: 'Roboto';
			flex: 1 0 0;
			color: #737578;
			font-size: 0.875rem;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;
			-webkit-user-modify: read-write;
		}

		.card .long-offer-row-streaming {
			display: flex;
			height: auto;
			padding: 8px 8px 8px 1rem;
			align-items: center;
			gap: 1rem;
			border-radius: 8px;
			background: #F6F6F6;
			margin: 0 1rem 1rem;
		}

		.card .long-offer-row-streaming .streaming-app {
			height: 24px;
		}

		.card .long-offer-row-streaming .txt {
			font-family: 'Roboto';
			flex: 1 0 0;
			color: #737578;
			font-size: 0.875rem;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;
			-webkit-user-modify: read-write;
		}

		.card .long-offer-list .icon {
			width: 24px;
			height: 24px;
		}

		.card .long-offer-list {
			display: flex;
			padding-top: 1rem;
			padding-bottom: 1rem;
			flex-direction: row;
			gap: 1rem;
			align-items: center;
			margin: 0 1rem 0;
			border-top: 1px solid #EEE;
		}

		.card .long-offer-list:last-child {
			border-bottom: 1px solid #EEE;
		}

		.card .long-offer-list .content {
			display: flex;
			flex-direction: column;
			justify-content: start;
			align-items: start;
		}

		.card .long-offer-list .content .title {
			font-family: 'Roboto';
			color: #313235;
			font-size: 0.875rem;
			font-weight: 700;
			line-height: 20px;
			-webkit-user-modify: read-write;
		}

		.card .long-offer-list .content .description {
			font-family: 'Roboto';
			color: #737578;
			font-size: 0.875rem;
			font-weight: 400;
			line-height: 20px;
			-webkit-user-modify: read-write;
		}

		.card .long-offer-list .content .link {
			font-family: 'Roboto';
			color: #019BEF;
			text-align: center;
			font-size: 0.875rem;
			font-weight: 500;
			line-height: 20px;
			-webkit-user-modify: read-write;
		}
	</style>`
export const DivPlanCardContent = `
	<div class='card'>
		<div class='header-plan'>
			<div class='plan-name'>
				Plan name
				<img src="hispam-pages/images/question-regular.svg" alt="" />
			</div>
			<span class='capacity'>12 GB</span>
			<div class='offer-description'><span>x12 month </span>Offer description</div>
			<div class='tag'>
				<img src="hispam-pages/images/offer-percent-filled.svg" alt="offer" />
				<p>Tag label</p>
			</div>
		</div>
		<div class='price-table'>
			<div class='offer-description-price'>Offer description</div>
			<div class='price'>
				$2.199
				<span>x month</span>
			</div>
			<div class='offer-per-month'><span>x12 month.</span> Offer description</div>
		</div>
		<div class='btn-main-content'>
			<a class='btn-primary'>Primary button</a>
			<a class='btn-second'>Secondary button</a>
		</div>

		<input type="checkbox" class="toggle" id="toggle${id}">
		<div class="card-collapse">
			<div class="card-content" id="content">
				<div class='switch-options'>
					<img src="hispam-pages/images/Image.jpg" class='icon-circle' />
					<div class='streaming'>
						<span class='add-streaming'>Add Streaming</span>
						<span class='description'>Description</span>
					</div>
					<label class="switch">
						<input type="checkbox" checked>
						<span class="slider round"></span>
					</label>
				</div>
				<div class='switch-options'>
					<img src="hispam-pages/images/Image.jpg" class='icon-circle' />
					<div class='streaming'>
						<span class='add-streaming'>Add Streaming</span>
						<span class='description'>Description</span>
					</div>
					<label class="switch">
						<input type="checkbox" checked>
						<span class="slider round"></span>
					</label>
				</div>
				<div class='long-offer-row'>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						viewBox="0 0 24 24" fill="none">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M17.687 11.023C17.8971 11.0762 18.0623 11.2386 18.1212 11.4515C18.18 11.6644 18.1212 11.8941 17.9699 12.051L8.6842 21.67C8.56655 21.7876 8.41529 21.8493 8.26123 21.8493C8.14919 21.8493 8.03714 21.8157 7.9363 21.7484C7.69821 21.5916 7.60297 21.2834 7.70661 21.0117L10.4069 13.9613L6.29485 12.9445C6.08756 12.8941 5.9223 12.7316 5.86348 12.5216C5.80465 12.3115 5.85787 12.0818 6.00633 11.9249L14.9223 2.3535C15.1212 2.14062 15.4349 2.1042 15.6758 2.26387C15.9167 2.42353 16.0119 2.73726 15.9055 3.00896L13.1856 9.91372L17.687 11.023ZM11.7682 13.754L9.87467 18.698L16.3789 11.9585L12.2332 10.9361C12.0651 10.8941 11.9223 10.7793 11.8439 10.6196C11.7654 10.4627 11.757 10.2751 11.8215 10.1098L13.6366 5.50476L7.58616 12.0005L11.3537 12.9333C11.5217 12.9753 11.6646 13.0902 11.743 13.247C11.8214 13.4039 11.8299 13.5888 11.7682 13.754Z"
							fill="#008EDD" />
					</svg>
					<span class='txt'>Long offer description</span>
				</div>
				<div class='long-offer-row-streaming'>
					<img src="hispam-pages/images/Image2.jpg" class='streaming-app' />
					<span class='txt'>Long offer description</span>
				</div>
				<div class='long-offer-list'>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						viewBox="0 0 24 24" fill="none">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M17.687 11.023C17.8971 11.0762 18.0623 11.2386 18.1212 11.4515C18.18 11.6644 18.1212 11.8941 17.9699 12.051L8.6842 21.67C8.56655 21.7876 8.41529 21.8493 8.26123 21.8493C8.14919 21.8493 8.03714 21.8157 7.9363 21.7484C7.69821 21.5916 7.60297 21.2834 7.70661 21.0117L10.4069 13.9613L6.29485 12.9445C6.08756 12.8941 5.9223 12.7316 5.86348 12.5216C5.80465 12.3115 5.85787 12.0818 6.00633 11.9249L14.9223 2.3535C15.1212 2.14062 15.4349 2.1042 15.6758 2.26387C15.9167 2.42353 16.0119 2.73726 15.9055 3.00896L13.1856 9.91372L17.687 11.023ZM11.7682 13.754L9.87467 18.698L16.3789 11.9585L12.2332 10.9361C12.0651 10.8941 11.9223 10.7793 11.8439 10.6196C11.7654 10.4627 11.757 10.2751 11.8215 10.1098L13.6366 5.50476L7.58616 12.0005L11.3537 12.9333C11.5217 12.9753 11.6646 13.0902 11.743 13.247C11.8214 13.4039 11.8299 13.5888 11.7682 13.754Z"
							fill="#008EDD" />
					</svg>
					<div class='content'>
						<span class='title'>Offer description longer </span>
						<span class='description'>Long offer description</span>
						<a class='link' href>Text link</a>
					</div>
				</div>
			</div>
			<label class="card-header" for="toggle${id}">
				<span class="toggleLabel" id="toggleLabel${id}">Ocultar detalles</span>
				<img src="hispam-pages/images/chevron-down-regular.svg" alt="expanded" />
			</label>
		</div>
	</div>
	`

function PlanCard(editor: any) {
	const script = function() {
		console.log('the element JS');

		const handleChange = (index: string) => {
			const labels = document.getElementById(`toggleLabel${index}`) as HTMLInputElement;
			const toggle = document.getElementById(`toggle${index}`) as HTMLInputElement;
			if (!toggle.checked) {
				console.log("UNCHECKED", labels)
				labels.innerHTML = "Ocultar detalles";
			} else {
				console.log("CHECKED", labels)
				labels.innerHTML = "Más detalles";
			}
		};

		// Attach event listeners for each toggle
		(document.getElementById('toggle'+id) as HTMLInputElement).addEventListener('change', () => handleChange(id));
	};
	
	// Define a new custom component
	editor.Components.addType('comp-with-js', {
		model: {
			defaults: {
				script,
			}
		}
	});
	
	editor.Blocks.add('planCard', {
		id: 'planCard',
		label: 'Plan Card',
		editable: true,
		activate: true,
		content: [
			{ type: 'comp-with-js' },
			StylePlanCardContent+DivPlanCardContent
		],
		category: 'Cards',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
	
}
  
export default PlanCard;