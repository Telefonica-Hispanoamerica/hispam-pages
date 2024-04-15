import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider, 
	Text10, Text9, Text8, Text7, Text6, Text5, Text4, Text3, Text2, Text1, Stack,
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
		<Stack space={16} dataAttributes={{testid: 'text'}}>
			<Text10 dataAttributes={{qsysid: 'text10'}}>Text10 48/56 (Mobile) | 64/72 (Desktop)</Text10>13
			<Text9>Text9 40/48 (Mobile) | 56/64 (Desktop)</Text9>
			<Text8>Text8 32/40 (Mobile) | 48/56 (Desktop)</Text8>
			<Text7>Text7 28/32 (Mobile) | 40/48 (Desktop)</Text7>
			<Text6>Text6 24/32 (Mobile) | 32/40 (Desktop)</Text6>
			<Text5>Text5 20/24 (Mobile) | 28/32 (Desktop)</Text5>
			<Text4 medium>Text4 Medium 18/24 (Mobile) | 20/28 (Desktop)</Text4>
			<Text4 regular>Text4 Regular 18/24 (Mobile) | 20/28 (Desktop)</Text4>
			<Text4 light>Text4 Light 18/24 (Mobile) | 20/28 (Desktop)</Text4>
			<Text3 medium>Text3 Medium 16/24 (Mobile) | 18/24 (Desktop)</Text3>
			<Text3 regular>Text3 Regular 16/24 (Mobile) | 18/24 (Desktop)</Text3>
			<Text3 light>Text3 Light 16/24 (Mobile) | 18/24 (Desktop)</Text3>
			<Text2 medium>Text2 Medium 14/24 (Mobile) | 16/24 (Desktop)</Text2>
			<Text2 regular>Text2 Regular 14/20 (Mobile) | 16/24 (Desktop)</Text2>
			<Text1 medium>Text1 Medium 12/16 (Mobile) | 14/20 (Desktop)</Text1>
			<Text1 regular>Text1 Regular 12/16 (Mobile) | 14/20 (Desktop)</Text1>
		</Stack>	
	</ThemeContextProvider>
  );
});

function TextComponentKenos(editor: any) {

	editor.Blocks.add('textComponent', {
		id: 'textComponent',
		label: 'Text Component',
		activate: true,
		content: div.innerHTML,
		category: 'Text',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default TextComponentKenos;