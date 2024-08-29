import { iconsSvg } from "../../IconsSvgBlocks";
import { DivHeroCardContent, StyleHeroCardContent } from "../Hero/HeroCard";
const div = `
	<style>	
		.page-content {
            margin: 0 auto 32px; 
            padding: 0; 
            background: #F6F6F6;
        }
		@media(max-width: 767px) {
			.tabs-content {
				width: 100%;
				overflow-x: hidden;
				white-space: nowrap; 
			}
		}
		.hero-right-image {
			padding-bottom: 52px;
			background-color: #fff;
		}

		@media (max-width: 767px) {
			.hero-right-image {
				padding-bottom: 16px;			
			}
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
            width: max-content;
            border-radius: 6px;
            margin: -42px auto 16px;
        }
		@media (max-width: 767px) {
			.tabs{
				border-radius: 0px;
				margin: 0 auto 16px;
				justify-content: initial;
				width: 100%;
  				overflow-x: auto;
			}
		}	
		
        .tab > label {
            display: block;
            margin-bottom: -1px;
            padding: 12px;
            border: 1px solid #DDDDDD;
            background: #fff;
            color: #313235;
            font-size: 18px; 
            cursor: pointer;	
            transition: all 0.3s;
            border-radius: 6px;
        }
		.tab {
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
		@media (max-width: 767px) {
			.tab{
				padding: 8px 12px;
				width: max-content;
			}
		}	
		.tab.tab-active {
			background-color: #0B2739;
            color: #fff;
            border: 1px solid #0B2739;
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
		
		.tab-contents {
			min-height: 100px;
			padding: 10px;
		}
		.tab-content {
			animation: fadeEffect 1s;
		}
	</style>
	${StyleHeroCardContent}
	<div class="page-content">
		${DivHeroCardContent}
		<div data-gjs-highlightable="true" id="ihyvfg" data-gjs-type="tabs" draggable="true" class="tabs-content">
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
						<div class='gjs-cell-kenos'></div>
						<div class='gjs-cell-kenos'></div>
						<div class='gjs-cell-kenos'></div>
						<div class='gjs-cell-kenos'></div>
					</div>
				</div>
				<div id="i2qqwr" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="i5kopr" class="tab-content" draggable="true" hidden="">
					<div data-gjs-highlightable="true" id="iyfwwy" data-gjs-type="text" draggable="true" class="" contenteditable="false">
						<div class='gjs-row-kenos'>
							<div class='gjs-cell-kenos'></div>
							<div class='gjs-cell-kenos'></div>
							<div class='gjs-cell-kenos'></div>
							<div class='gjs-cell-kenos'></div>
						</div>
					</div>
				</div>
				<div id="ixggop" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="ix0mp4" class="tab-content" draggable="true" hidden="">
					<div data-gjs-highlightable="true" id="iqqh8u" data-gjs-type="text" draggable="true" class="" contenteditable="false">
						<div class='gjs-row-kenos'>
							<div class='gjs-cell-kenos'></div>
							<div class='gjs-cell-kenos'></div>
							<div class='gjs-cell-kenos'></div>
							<div class='gjs-cell-kenos'></div>
						</div>
					</div>
				</div>
				<div id="ixggopa" data-gjs-type="tab-content" role="tabpanel" aria-labelledby="ix0mp5" class="tab-content" draggable="true">
					<div data-gjs-highlightable="true" id="iqqh8o" data-gjs-type="text" draggable="true" class="" contenteditable="false">
						<div class='gjs-row-kenos'>
							<div class='gjs-cell-kenos'></div>
							<div class='gjs-cell-kenos'></div>
							<div class='gjs-cell-kenos'></div>
							<div class='gjs-cell-kenos'></div>
						</div>
					</div>
				</div>
			</div>
		</div>        
    </div>
	`

function TabsHero(editor: any) {
	
	editor.Blocks.add('tabsHero', {
		id: 'tabsHero',
		label: 'Hero + 4 Tabs',
		editable: true,
		activate: true,
		content: div,
		category: 'Organismos',
		media: iconsSvg.heroTabs,
		attributes: { class: 'custom-block' },
	});
	
}
  
export default TabsHero;