import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
    Stack,
    HeaderLayout,
    NavigationBreadcrumbs,
    Header,
    Placeholder,
	getMovistarSkin,
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
		<Stack space={16}>
            <div data-testid="header-layout">
                <HeaderLayout
                    isInverse={true}
                    sideBySideExtraOnDesktop={true}
                    breadcrumbs={
                        true ? (
                            <NavigationBreadcrumbs
                                title="Bills"
                                breadcrumbs={[{title: 'Account', url: '/consumptions'}]}
                            />
                        ) : undefined
                    }
                    header={<Header pretitle='Your last bill' title='December bill is now available' description='This is a description' />}
                    extra={true ? <Placeholder /> : undefined}
                />
            </div>
        </Stack>	
	</ThemeContextProvider>
  );
});

function HeaderKenos(editor: any) {

	editor.Blocks.add('header', {
		id: 'header',
		label: 'Header',
		activate: true,
		content: div.innerHTML,
		category: 'Headers',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default HeaderKenos;