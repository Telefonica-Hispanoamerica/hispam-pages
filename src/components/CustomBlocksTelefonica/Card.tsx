import { useEffect } from 'react';
import { Editor } from 'grapesjs';
import ReactDOMServer from 'react-dom/server';
import { 
	ThemeContextProvider, 
	DataCard, 
	Tag, 
	Circle, 
	IconMobileDeviceRegular, 
	ButtonLink, 
	skinVars, 
	getMovistarSkin, 
	ButtonPrimary,
	ResponsiveLayout,
	Stack,
	Inline
} from '@uxhispam/kenos';

const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};
  
// Separate layout effect logic
function useLayoutEffectExample() {
	useEffect(() => {
		// Your layout effect code here
		// This will run synchronously after all DOM mutations
		// and before the browser has a chance to paint.
		// console.log('Layout effect executed');
	
		return () => {
			// Cleanup code (if needed)
			// console.log('Layout effect cleanup');
		};
	}, []); // Empty dependency array means it runs once after the initial render
}
  
const MyComponent = () => {
	useLayoutEffectExample();
  
	return (
		<ThemeContextProvider theme={kenosTheme}>
			<ResponsiveLayout>
				<Stack space={8}>
					<DataCard  
						headline={<Tag type="promo">Headline</Tag>}
						pretitle='Pretitle'
						title='Title'
						subtitle='Subtitle'
						description='Description'
						button={<ButtonPrimary href="https://google.com" small>Action</ButtonPrimary>}
						icon={
							<Circle size={40} backgroundColor={skinVars.colors.brandLow}>
								<IconMobileDeviceRegular color={skinVars.colors.brand} />
							</Circle>
						}
						buttonLink={<ButtonLink href="https://google.com">Link</ButtonLink>}
						dataAttributes={{testid: 'data-card'}}
					/>
				</Stack>
			</ResponsiveLayout>		  
		</ThemeContextProvider>
	);
};

function DataCardKenos(editor: any) {
	const htmlString = ReactDOMServer.renderToString(<MyComponent />);

	editor.Blocks.add('dataCard', {
		id: 'dataCard',
		label: 'Data Card',
		activate: true,
		content: htmlString,
		category: 'Cards',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default DataCardKenos;