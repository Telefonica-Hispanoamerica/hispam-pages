import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
	skinVars, 
	getMovistarSkin,
	NavigationBreadcrumbs,
} from '@uxhispam/kenos';


const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const args = {
	inverse: false,
};

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
	root.render(
		<ThemeContextProvider theme={kenosTheme}>
			<div style={{background: args.inverse ? skinVars.colors.backgroundBrand : skinVars.colors.background}}>
				<NavigationBreadcrumbs
					dataAttributes={{testid: 'story'}}
					title="Subsection"
					breadcrumbs={[
						{title: 'Home', url: 'https://example.org?path=home'},
						{title: 'Section', url: 'https://example.org?path=section'},
					]}
				/>
			</div>	
		</ThemeContextProvider>
	);
});

function BreadcrumbsKenos(editor: any) {

	editor.Blocks.add('breadcrumbs', {
		id: 'breadcrumbs',
		label: 'Breadcrumbs',
		activate: true,
		content: div.innerHTML,
		category: 'Components',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default BreadcrumbsKenos;