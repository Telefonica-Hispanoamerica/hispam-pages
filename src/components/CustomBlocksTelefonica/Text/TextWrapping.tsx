import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider, 
	Text2,  Stack, Title1,
	getMovistarSkin,
} from '@uxhispam/kenos';


const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const Wrapper = ({children}: any) => (
	<div
		style={{
			padding: 8,
				// font sizes in safari and chrome are different, using different container sizes
				// so the word breaking places look more or less the same
				width: 200,
				 border: '1px solid lightgray',
			}}
		>
		{children}
		</div>
);

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
  root.render(
	<ThemeContextProvider theme={kenosTheme}>
		<Stack space={16} dataAttributes={{testid: 'text'}}>
			<Wrapper>
				<Title1>Default (with workBreak)</Title1>
				<Text2 regular>
					Strawberry Friendship Everything Pneumonoultramicroscopicsilicovolcanoconiosis Appreciate
					Motivation
				</Text2>
			</Wrapper>
			<Wrapper>
				<Title1>Without wordBreak</Title1>
				<Text2 regular wordBreak={false}>
					Strawberry Friendship Everything Pneumonoultramicroscopicsilicovolcanoconiosis Appreciate
					Motivation
				</Text2>
			</Wrapper>
			<Wrapper>
				<Title1>truncate=1</Title1>
				<Text2 regular truncate>
					Strawberry Friendship Everything Pneumonoultramicroscopicsilicovolcanoconiosis Appreciate
					Motivation
				</Text2>
			</Wrapper>
			<Wrapper>
				<Title1>truncate=3</Title1>
				<Text2 regular truncate={3}>
					Strawberry Friendship Everything Pneumonoultramicroscopicsilicovolcanoconiosis Appreciate
					Motivation
				</Text2>
			</Wrapper>
		</Stack>
	</ThemeContextProvider>
  );
});

function TextWrappingKenos(editor: any) {

	editor.Blocks.add('textWrapping', {
		id: 'textWrapping',
		label: 'Text Wrapping',
		activate: true,
		content: div.innerHTML,
		category: 'Text',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default TextWrappingKenos;