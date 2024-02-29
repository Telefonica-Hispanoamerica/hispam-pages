import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider, 
	SnapCard, 
	Placeholder,
	IconMobileDeviceRegular,
	Circle,
	skinVars,
	getMovistarSkin
} from '@uxhispam/kenos';

const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const args = {
	asset: 'icon in circle',
	title: 'Some title',
	subtitle: 'Some subtitle',
	touchable: true,
	isInverse: false,
	withExtra: false,
};

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
	root.render(
		<ThemeContextProvider theme={kenosTheme}>
			<SnapCard
				icon={
					<Circle
						size={40}
						backgroundColor={args.isInverse ? skinVars.colors.brandHigh : skinVars.colors.brandLow}
					>
						<IconMobileDeviceRegular
							color={args.isInverse ? skinVars.colors.inverse : skinVars.colors.brand}
						/>
					</Circle>
				}
				title={args.title}
				subtitle={args.subtitle}
				dataAttributes={{testid: 'snap-card'}}
				aria-label="SnapCard card label"
				isInverse={args.isInverse}
				extra={args.withExtra ? <Placeholder /> : undefined}
				onPress={
					args.touchable
					? () => {
						window.alert('SnapCard clicked');
					}: undefined
				}
				/>  
		</ThemeContextProvider>
	);
});

function SnapCardKenos(editor: any) {

	editor.Blocks.add('snapCard', {
		id: 'snapCard',
		label: 'Snap Card',
		activate: true,
		content: div.innerHTML,
		category: 'Cards',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default SnapCardKenos;