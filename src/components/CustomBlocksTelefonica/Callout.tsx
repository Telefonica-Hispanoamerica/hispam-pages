import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
	ResponsiveLayout,
	Box,
	Callout,
	IconBoxLight,
	ButtonPrimary,
	ButtonLink,
	skinVars, 
	getMovistarSkin, 
	ThemeVariant,
} from '@uxhispam/kenos';


const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const args = {
	title: 'Some title',
	description: 'This is a description for the callout',
	actions: 'button and link',
	withIcon: true,
	isClosable: true,
	isOverInverse: false,
};

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
  root.render(
	<ThemeContextProvider theme={kenosTheme}>
		<ThemeVariant isInverse={args.isOverInverse}>
			<div
				style={{
				background: args.isOverInverse ? skinVars.colors.backgroundBrand : skinVars.colors.background,
			}}
			>
				<ResponsiveLayout>
					<Box paddingY={24}>
						<Callout
							icon={args.withIcon ? <IconBoxLight /> : undefined}
							onClose={args.isClosable ? () => {} : undefined}
							title={args.title}
							description={args.description}
							button={
								<ButtonPrimary small onPress={() => {}}>
									Action
								</ButtonPrimary>
							}
							buttonLink={
								<ButtonLink onPress={() => {}}>Link</ButtonLink>
							}
							aria-label="Callout label"
						/>
					</Box>
				</ResponsiveLayout>
			</div>
		</ThemeVariant>	
	</ThemeContextProvider>
  );
});

function CalloutKenos(editor: any) {

	editor.Blocks.add('callout', {
		id: 'callout',
		label: 'Callout',
		activate: true,
		content: div.innerHTML,
		category: 'Components',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default CalloutKenos;