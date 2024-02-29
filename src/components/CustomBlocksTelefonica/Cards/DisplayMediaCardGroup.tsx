import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider, 
	Inline,
	Text2,
	Tag,
	getMovistarSkin, 
	ButtonPrimary,
	DisplayMediaCard,
	ResponsiveLayout,
	Stack,
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
			<Stack space={16}>
				<Text2 regular>
				We can group multiple cards and they adjust to the same height. The card content is
				aligned to the bottom
				</Text2>
				<style>{`.group > * {width: 300px}`}</style>
				<Inline space={16} className="group">
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
					<DisplayMediaCard title="Title" backgroundImage={BACKGROUND_SRC} />
					<DisplayMediaCard title="Title" backgroundImage={BACKGROUND_SRC} onClose={() => {}} />
				</Inline>
			</Stack>
		</ResponsiveLayout>		  
	</ThemeContextProvider>
  );
});

function DisplayMediaCardGroupKenos(editor: any) {

	editor.Blocks.add('displayMediaCardGroup', {
		id: 'displayMediaCardGroup',
		label: 'Display Media Card Group',
		activate: true,
		content: div.innerHTML,
		category: 'Cards',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default DisplayMediaCardGroupKenos;