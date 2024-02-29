import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
	getMovistarSkin, 
	ButtonPrimary,
	HighlightedCard,
	ResponsiveLayout,
} from '@uxhispam/kenos';

const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const BACKGROUND_SRC = 'https://images.unsplash.com/photo-1587302186428-d3753405ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80';

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
  root.render(
	<ThemeContextProvider theme={kenosTheme}>
		<ResponsiveLayout>
			<HighlightedCard
				title="Resolver problema técnico"
				description="Usa nuestra herramienta para resolver tus problemas técnicos"
				imageUrl={BACKGROUND_SRC}
				dataAttributes={{testid: 'highlighted-card'}}
				button={
					<ButtonPrimary small href="https://google.com">
						Action
					</ButtonPrimary>				
				}
				imageFit="fit"
 			/>
		</ResponsiveLayout>		  
	</ThemeContextProvider>
  );
});

function HighlightedCardKenos(editor: any) {

	editor.Blocks.add('highlightedCard', {
		id: 'highlightedCard',
		label: 'Highlighted Card',
		activate: true,
		content: div.innerHTML,
		category: 'Cards',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default HighlightedCardKenos;