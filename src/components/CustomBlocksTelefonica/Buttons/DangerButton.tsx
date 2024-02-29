import { 
	ThemeContextProvider,
	getMovistarSkin,
	ButtonDanger
} from '@uxhispam/kenos';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

const kenosTheme = {
  	skin: getMovistarSkin(),
  	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
	root.render(
		<ThemeContextProvider theme={kenosTheme}>
			<ButtonDanger href="/">
				Danger button
			</ButtonDanger>
		</ThemeContextProvider>
	);
});

function DangerButtonKenos(editor: any) {
	
	editor.Blocks.add('dangerButton', {
		id: 'dangerButton',
		label: 'Danger button',
		activate: true,
		content: div.innerHTML,
		category: 'Buttons',
		media:
			'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}

export default DangerButtonKenos;



