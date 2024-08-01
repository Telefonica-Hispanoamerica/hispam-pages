import { DivCardHeroRightLightContent, StyleCardHeroRightLightContent } from "../Cards/CardHeroRightLight";
import { StylePlanCardContent, DivPlanCardContent } from "../Cards/PlanCard";
import { StylePlanCardFeatContent, DivPlanCardFeatContent } from "../Cards/PlanCardFeature";
import { ColumnsGeneralStyleContent } from "../Columns/ColumnsGeneral";
const div = `
	<style>	
		.page-content {
            margin: 32px auto; 
            padding: 0; 
            background: #F6F6F6;
        }
		.hero-right-image {
			padding-bottom: 52px;
			background-color: #fff;
		}

        .tabbed {
            overflow-x: hidden;
            margin: -48px 0 24px;
            padding-bottom: 16px;
            border-bottom: 1px solid #ccc;
        }

        .tabbed [type="radio"] {
            display: none;
        }

        .tabs {
            display: flex;
            align-items: center;
            list-style: none;
            border-bottom: 1px solid #ccc;
            grid-gap: 8px;
            justify-content: center;
            background-color: #fff;
            -webkit-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);
            padding: 8px;
            width: fit-content;
            border-radius: 6px;
            margin: -42px auto 16px;
        }
        .tab > label {
            display: block;
            margin-bottom: -1px;
            padding: 12px 46px;
            border: 1px solid #DDDDDD;
            background: #fff;
            color: #313235;
            font-size: 18px; 
            cursor: pointer;	
            transition: all 0.3s;
            border-radius: 6px;
        }

        .tab-content {
            /*display: none;*/
            color: #777;
            padding: 16px 42px;
        }
        
        .tabbed [type="radio"]:nth-of-type(1):checked ~ .tabs .tab:nth-of-type(1) label,
        .tabbed [type="radio"]:nth-of-type(2):checked ~ .tabs .tab:nth-of-type(2) label,
        .tabbed [type="radio"]:nth-of-type(3):checked ~ .tabs .tab:nth-of-type(3) label,
        .tabbed [type="radio"]:nth-of-type(4):checked ~ .tabs .tab:nth-of-type(4) label,
        .tabbed [type="radio"]:nth-of-type(5):checked ~ .tabs .tab:nth-of-type(5) label {
            background-color: #0B2739;
            color: #fff;
            border: 1px solid #0B2739;
        }

        .tabbed [type="radio"]:nth-of-type(1):checked ~ .tab-content:nth-of-type(1),
        .tabbed [type="radio"]:nth-of-type(2):checked ~ .tab-content:nth-of-type(2),
        .tabbed [type="radio"]:nth-of-type(3):checked ~ .tab-content:nth-of-type(3),
        .tabbed [type="radio"]:nth-of-type(4):checked ~ .tab-content:nth-of-type(4) {
            display: block;
        }	

		.tab-container {
    		display: inline-block;			
		}
		.tab {
			/*padding: 7px 14px;
			display: inline-block;
			border-radius: 3px;
			margin-right: 10px;*/

			display: block;
            margin-bottom: -1px;
            padding: 12px 46px;
            border: 1px solid #DDDDDD;
            background: #fff;
            color: #313235;
            font-size: 18px; 
            cursor: pointer;	
            transition: all 0.3s;
            border-radius: 6px;

		}
		.tab.tab-active {
			background-color: #0B2739;
            color: #fff;
            border: 1px solid #0B2739;
		}
		.tab-contents {
			min-height: 100px;
			padding: 10px;
		}
		.tab-content {
			animation: fadeEffect 1s;
		}
	</style>
	${ColumnsGeneralStyleContent}
	${StyleCardHeroRightLightContent}		
	${StylePlanCardFeatContent}
	${StylePlanCardContent}
	<div class="page-content">
		${DivCardHeroRightLightContent}
		<div data-gjs-highlightable="true" id="ihyvfg" data-gjs-type="tabs" draggable="true" class="">
			<div id="izkgll" data-gjs-type="tab-container" draggable="true" role="tablist" class="tabs">
				<div data-gjs-highlightable="true" id="ic6c6w" data-gjs-type="tab" draggable="true" role="tab" aria-controls="ietfse" class="tab tab-active" aria-selected="false">
					<span id="iutwxl" data-gjs-type="text" draggable="true" class="">Solo Internet</span>
				</div>
				<div data-gjs-highlightable="true" id="i5kopr" data-gjs-type="tab" draggable="true" role="tab" aria-controls="i2qqwr" class="tab" aria-selected="false">
					<span id="ij910t" data-gjs-type="text" draggable="true" class="">Internet + TV</span>
				</div>
				<div data-gjs-highlightable="true" id="ix0mp4" data-gjs-type="tab" draggable="true" role="tab" aria-controls="ixggop" class="tab" aria-selected="true">
					<span id="iodsof" data-gjs-type="text" draggable="true" class="">Internet + Fijo</span>
				</div>
				<div data-gjs-highlightable="true" id="ix0mp4" data-gjs-type="tab" draggable="true" role="tab" aria-controls="ixggopa" class="tab" aria-selected="true">
					<span id="iodsof" data-gjs-type="text" draggable="true" class="">Planes Trío</span>
				</div>
			</div>
			<div data-gjs-highlightable="true" id="inykh4" data-gjs-type="tab-contents" class="tab-contents" draggable="true">
				<div id="ietfse" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="ic6c6w" class="tab-content" draggable="true" hidden="">
					<div class='gjs-row-kenos'>
						<div class='gjs-cell-kenos'>
							${DivPlanCardContent}
						</div>
						<div class='gjs-cell-kenos'>						
							${DivPlanCardFeatContent}
						</div>
						<div class='gjs-cell-kenos'>
							${DivPlanCardContent}
						</div>
						<div class='gjs-cell-kenos'>
							${DivPlanCardContent}
						</div>
					</div>
				</div>
				<div id="i2qqwr" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="i5kopr" class="tab-content" draggable="true" hidden="">
					<div data-gjs-highlightable="true" id="iyfwwy" data-gjs-type="text" draggable="true" class="" contenteditable="false">Tab Content 2</div>
				</div>
				<div id="ixggop" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="ix0mp4" class="tab-content" draggable="true" hidden="">
					<div data-gjs-highlightable="true" id="iqqh8u" data-gjs-type="text" draggable="true" class="" contenteditable="false">Tab Content 3</div>
				</div>
				<div id="ixggopa" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="ix0mp5" class="tab-content" draggable="true">
					<div data-gjs-highlightable="true" id="iqqh8o" data-gjs-type="text" draggable="true" class="" contenteditable="false">Tab Content 4</div>
				</div>
			</div>
		</div>        
    </div>
	`

function TabsCardPlan(editor: any) {
	
	editor.Blocks.add('tabsCardPlan', {
		id: 'tabsCardPlan',
		label: 'Hero + Tabs + Plan Card',
		editable: true,
		activate: true,
		content: div,
		category: 'Tabs',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
	
}
  
export default TabsCardPlan;