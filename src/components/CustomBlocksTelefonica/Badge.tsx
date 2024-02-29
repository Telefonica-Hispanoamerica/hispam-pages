import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider, 
	Badge,
	IconButton,
	IconBellFilled,
	Text2,
	IconShoppingCartFilled,
	IconStarFilled,
	skinVars,
	getMovistarSkin
} from '@uxhispam/kenos';


const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
  root.render(
	<ThemeContextProvider theme={kenosTheme}>
		<div style={{display: "block", margin: "16px"}}>
			<Text2 regular>Badge (non numeric) - </Text2>
			<Badge>
				<IconButton onPress={() => {}} aria-label="Read notifications">
					<IconBellFilled />
				</IconButton>
			</Badge>	
		</div>
		<div style={{display: "block", margin: "16px"}}>
			<Text2 regular>Badge (numeric, value 0) - </Text2>
			<Badge value={0}>
				<IconButton onPress={() => {}} aria-label="Read notifications">
					<IconBellFilled />
				</IconButton>
			</Badge>	
		</div>
		<div style={{display: "block", margin: "16px"}}>
			<Text2 regular>Badge (numeric, value 2) - </Text2>
			<Badge value={2}>
				<IconButton onPress={() => {}} aria-label="Shopping Cart with 2 items">
					<IconShoppingCartFilled />
				</IconButton>
			</Badge>	
		</div>
		<div style={{display: "block", margin: "16px"}}>
			<Text2 regular>Badge (numeric, value 14) - </Text2>
			<Badge value={14}>
				<IconButton onPress={() => {}} aria-label="Starred 14 times">
					<IconStarFilled />
				</IconButton>
			</Badge>	
		</div>
		<div style={{padding: 20, background: skinVars.colors.backgroundBrand}}>
			<Text2 regular>Badge (numeric, value 3) (Over inverse) - </Text2>
			<Badge value={3}>
				<IconButton onPress={() => {}} aria-label="3 notifications">
					<IconBellFilled color="#fff" />
				</IconButton>
			</Badge>	
		</div>
	</ThemeContextProvider>
  );
});

function BadgeKenos(editor: any) {

	editor.Blocks.add('badge', {
		id: 'badge',
		label: 'Badge',
		activate: true,
		content: div.innerHTML,
		category: 'Components',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default BadgeKenos;