import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider, 
	Stack,
	Title1,
	Checkbox,
	Inline,
	Text3,
	getMovistarSkin
} from '@uxhispam/kenos';


const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const checked = false;
const div = document.createElement('div');
const root = createRoot(div);

flushSync(() => {

	
  	root.render(
		<ThemeContextProvider theme={kenosTheme}>
			<Stack space={32}>
				<>
					<Title1>Uncontrolled (render prop)</Title1>
					<Checkbox
						name="uncontrolled-render"
						defaultChecked={false}
						render={({controlElement, labelId}) => (
							<Inline alignItems="center" space={16}>
								{controlElement}
								{/* set the text id to match the checkbox name, so this text can be linked as label for accessibility */}
								<Text3 regular id={labelId}>
									You accept to sell your soul
								</Text3>
							</Inline>
						)}
					/>
				</>
				<>
					<Title1>Uncontrolled (children)</Title1>
					<Checkbox name="uncontrolled-children" defaultChecked={false}>
						You accept to sell your soul
					</Checkbox>
				</>
				<>
					<Title1>Controlled (render prop)</Title1>
					<Checkbox
						name="controlled-render"
						checked={checked}
						render={({controlElement, labelId}) => (
							<Inline alignItems="center" space={16}>
								{controlElement}
								{/* set the text id to match the checkbox name, so this text can be linked as label for accessibility */}
								<Text3 regular id={labelId}>
									You accept to sell your soul: {checked ? 'sure!' : 'nahh'}
								</Text3>
							</Inline>
						)}
					/>
				</>
				<>
					<Title1>Controlled (children)</Title1>
					<Checkbox name="controlled-children" checked={checked}>
						You accept to sell your soul: {checked ? 'sure!' : 'nahh'}
					</Checkbox>
				</>
				<>
					<Title1>Without box</Title1>
					<Checkbox
						name="no-box"
						checked={checked}
						render={({labelId}) => (
							<Inline alignItems="center" space={16}>
								{/* set the text id to match the checkbox name, so this text can be linked as label for accessibility */}
								<Text3 regular id={labelId}>
									You accept to sell your soul: {checked ? 'sure!' : 'nahh'}
								</Text3>
							</Inline>
						)}
					/>
				</>
				<>
					<Title1>Disabled</Title1>
					<Checkbox name="disabled-children" checked={checked} disabled>
						You accept to sell your soul
					</Checkbox>
				</>
				<>
					<Title1>Multiline</Title1>
					<Checkbox name="multiline" checked={checked}>
						<Text3 regular>
							Checkbox with a very large very large very large very large very large very large very
							large very large very large text that falls
						</Text3>
					</Checkbox>
				</>
			</Stack>
		</ThemeContextProvider>
	);
});

function CheckboxKenos(editor: any) {	

	editor.Blocks.add('checkbox', {
		id: 'checkbox',
		label: 'Checkbox',
		activate: true,
		content: div.innerHTML,
		category: 'Components',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default CheckboxKenos;