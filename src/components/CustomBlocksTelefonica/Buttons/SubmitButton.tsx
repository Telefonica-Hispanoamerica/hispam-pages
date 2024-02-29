import { 
	ThemeContextProvider, 
	ButtonPrimary, 
	getMovistarSkin,
	Text2,
	Box,
	Stack,
	TextField
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
			<Text2 as="p" regular>
				A button with submit attribute in a form doesn't need a onPress prop. And clicking on it will fire
				onSubmit event, that should be handled by the form.
			</Text2>
			<form onSubmit={() => window.alert('form submitted')}>
				<Box paddingY={16}>
					<Stack space={16}>
						<TextField />
						<ButtonPrimary submit>Submit</ButtonPrimary>
					</Stack>
				</Box>
			</form>
		</ThemeContextProvider>
	);
});

function SubmitButtonKenos(editor: any) {
	
	editor.Blocks.add('submitButton', {
		id: 'submitButton',
		label: 'Submit button',
		activate: true,
		content: div.innerHTML,
		category: 'Buttons',
		media:
			'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}

export default SubmitButtonKenos;



