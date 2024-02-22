import { useEffect,  } from 'react';
import ReactDOMServer from 'react-dom/server';
import { ThemeContextProvider, ButtonPrimary, getMovistarSkin } from '@uxhispam/kenos';

const kenosTheme = {
  	skin: getMovistarSkin(),
  	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const MyComponent = () => {
  	return (
      	<ThemeContextProvider theme={kenosTheme}>
        	<ButtonPrimary href="/">Primary</ButtonPrimary>
      	</ThemeContextProvider>
  	);
};


function ButtonPrimaryKenos(editor: any) {

	const htmlString = ReactDOMServer.renderToString(<MyComponent />);
	
	editor.Blocks.add('buttonPrimary', {
		id: 'buttonPrimary',
		label: 'Primary button',
		activate: true,
		content: htmlString,
		category: 'Buttons',
		media:
			'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}

export default ButtonPrimaryKenos;



