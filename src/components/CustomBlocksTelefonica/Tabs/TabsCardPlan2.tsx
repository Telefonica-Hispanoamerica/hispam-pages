const div = `
	<style>	
		.tab-container {
    		display: inline-block;
		}
		.tab {
			padding: 7px 14px;
			display: inline-block;
			border-radius: 3px;
			margin-right: 10px;
		}
		.tab.tab-active {
			background-color: #0d94e6;
			color: white;
		}
		.tab-contents {
			min-height: 100px;
			padding: 10px;
		}
		.tab-content {
			animation: fadeEffect 1s;
		}
	</style>
	<div data-gjs-highlightable="true" id="ihyvfg" data-gjs-type="tabs" draggable="true" class="">
		<div id="izkgll" data-gjs-type="tab-container" draggable="true" role="tablist" class="tab-container">
			<div data-gjs-highlightable="true" id="ic6c6w" data-gjs-type="tab" draggable="true" role="tab" aria-controls="ietfse" class="tab" aria-selected="false">
				<span id="iutwxl" data-gjs-type="text" draggable="true" class="">Tab</span>
			</div>
			<div data-gjs-highlightable="true" id="i5kopr" data-gjs-type="tab" draggable="true" role="tab" aria-controls="i2qqwr" class="tab" aria-selected="false">
				<span id="ij910t" data-gjs-type="text" draggable="true" class="">Tab</span>
			</div>
			<div data-gjs-highlightable="true" id="ix0mp4" data-gjs-type="tab" draggable="true" role="tab" aria-controls="ixggop" class="tab tab-active gjs-selected" aria-selected="true">
				<span id="iodsof" data-gjs-type="text" draggable="true" class="">Tab</span>
			</div>
		</div>
		<div data-gjs-highlightable="true" id="inykh4" data-gjs-type="tab-contents" class="tab-contents" draggable="true">
			<div id="ietfse" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="ic6c6w" class="tab-content" draggable="true" hidden="">
				<div data-gjs-highlightable="true" id="iwghl8" data-gjs-type="text" draggable="true" class="" contenteditable="false">Tab Content 1</div>
			</div>
			<div id="i2qqwr" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="i5kopr" class="tab-content" draggable="true" hidden="">
				<div data-gjs-highlightable="true" id="iyfwwy" data-gjs-type="text" draggable="true" class="" contenteditable="false">Tab Content 2</div>
			</div>
			<div id="ixggop" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="ix0mp4" class="tab-content" draggable="true">
				<div data-gjs-highlightable="true" id="iqqh8u" data-gjs-type="text" draggable="true" class="" contenteditable="false">Tab Content 3</div>
			</div>
		</div>
	</div>
	`

function TabsCardPlan2(editor: any) {
	const script = function() {
		console.log('the element JS');

		const handleChange = () => {
            const label = document.getElementsByClassName('toggleLabel') as HTMLCollectionOf<HTMLElement>;
            if (toggle.checked) {
                label[0].innerHTML = "Hide details";
            } else {
                label[0].innerHTML = "More details";
            }
        };

		const toggle = document.getElementById('toggle') as HTMLInputElement;
        toggle.addEventListener('change', handleChange);
	};
	
	// Define a new custom component
	editor.Components.addType('comp-with-js', {
		model: {
			defaults: {
				script,
			}
		}
	});
	
	editor.Blocks.add('tabsCardPlan2', {
		id: 'tabsCardPlan2',
		label: '2 Hero + Tabs + Plan Card',
		editable: true,
		activate: true,
		content: [
			{ type: 'comp-with-js' },
			div
		],
		category: 'Tabs',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
	
}
  
export default TabsCardPlan2;