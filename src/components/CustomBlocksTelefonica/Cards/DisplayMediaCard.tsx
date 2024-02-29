import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
	Tag,
	getMovistarSkin, 
	ButtonPrimary,
	DisplayMediaCard,
	ResponsiveLayout,
} from '@uxhispam/kenos';

const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const BACKGROUND_SRC = 'https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80';

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
  root.render(
	<ThemeContextProvider theme={kenosTheme}>
		<ResponsiveLayout>
		<DisplayMediaCard
			headline={<Tag type="promo">Headline</Tag>}
			pretitle="Pretitle"
			title="Title"
			description="Description"
			backgroundImage={BACKGROUND_SRC}
			button={
				<ButtonPrimary small href="https://google.com">
				Action
				</ButtonPrimary>
			}
		/>
		</ResponsiveLayout>		  
	</ThemeContextProvider>
  );
});

function DisplayMediaCardKenos(editor: any) {

	editor.Blocks.add('displayMediaCard', {
		id: 'displayMediaCard',
		label: 'Display Media Card',
		activate: true,
		content: div.innerHTML,
		category: 'Cards',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default DisplayMediaCardKenos;