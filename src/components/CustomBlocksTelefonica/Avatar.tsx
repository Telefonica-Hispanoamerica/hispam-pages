import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider, 
	Avatar,
	skinVars, 
	getMovistarSkin, 
	ThemeVariant,
	IconStarFilled,
	IconFireRegular,
	IconBrainRegular,
} from '@uxhispam/kenos';


const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const args = {
	size: 64,
	hideImage: false,
	src: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
	hideInitials: false,
	initials: 'PL',
	icon: 'undefined',
	badge: '5',
	inverse: false,
	ariaLabel: 'Avatar',
};

const badgeOptions = ['true', 'false', 'undefined', '0', '1', '5', '10'];
const badgeValue = badgeOptions.includes(args.badge) ? eval(args.badge) : undefined;
const Icon = {IconStarFilled, IconFireRegular, IconBrainRegular}[args.icon];

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
  root.render(
	<ThemeContextProvider theme={kenosTheme}>
		<ThemeVariant isInverse={args.inverse}>
			<div
				style={{
					padding: 16,
					width: 'fit-content',
					background: args.inverse ? skinVars.colors.backgroundBrand : skinVars.colors.background,
					// prevent line-height from affecting the height of the container;
					// happens when changing the base font size
					lineHeight: 0,
				}}
				data-testid="avatar"
			>
				<Avatar
					size={args.size}
					src={args.hideImage ? undefined : args.src || undefined}
					initials={args.hideInitials ? undefined : args.initials}
					badge={badgeValue}
					Icon={Icon}
					aria-label={args.ariaLabel}
				/>
			</div>
		</ThemeVariant>		
	</ThemeContextProvider>
  );
});

function AvatarKenos(editor: any) {

	editor.Blocks.add('avatar', {
		id: 'avatar',
		label: 'Avatar',
		activate: true,
		content: div.innerHTML,
		category: 'Components',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default AvatarKenos;