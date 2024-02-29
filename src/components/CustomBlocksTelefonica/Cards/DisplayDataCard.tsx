import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider, 
	Inline,
	Text2,
	Tag, 
	Circle, 
	IconInvoicePlanFileRegular,
	skinVars, 
	getMovistarSkin, 
	ButtonPrimary,
	DisplayDataCard,
	ResponsiveLayout,
	Stack,
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
		<ResponsiveLayout>
			<Stack space={16}>
				<Text2 regular>
					We can group multiple cards and they adjust to the same height. The card content is
					aligned to the bottom
				</Text2>
				<style>{`.group > * {width: 300px}`}</style>
 				<Inline space={16} className="group">
					<DisplayDataCard
						headline={<Tag type="promo">Headline</Tag>}
						pretitle="Pretitle"
						title="Title"
						description="Description"
						button={
							<ButtonPrimary small href="https://google.com">
								Action
							</ButtonPrimary>
						}
					/>
					<DisplayDataCard
						icon={
							<Circle size={40} backgroundColor={skinVars.colors.brandLow}>
								<IconInvoicePlanFileRegular color={skinVars.colors.brand} />
							</Circle>
						}
						title="Title"
						button={
							<ButtonPrimary small href="https://google.com">
								Action
							</ButtonPrimary>
						}
					/>
				</Inline>
			</Stack>
		</ResponsiveLayout>		  
	</ThemeContextProvider>
  );
});

function DisplayDataCardKenos(editor: any) {

	editor.Blocks.add('displayDataCard', {
		id: 'displayDataCard',
		label: 'Display Data Card',
		activate: true,
		content: div.innerHTML,
		category: 'Cards',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default DisplayDataCardKenos;