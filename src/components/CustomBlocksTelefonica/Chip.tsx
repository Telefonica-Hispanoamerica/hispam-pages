import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
	Chip,
	IconLightningFilled,
	Inline,
	Checkbox,
	RadioGroup,
	RadioButton,
	getMovistarSkin
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
		<div style={{display: "block", margin: "16px"}}>
			<Chip>Chip</Chip>
		</div>
		<div style={{display: "block", margin: "16px"}}>
			<Chip
				onClose={() => {
					window.alert('closed');
				}}
			>
				Chip closeable
			</Chip>
		</div>
		<div style={{display: "block", margin: "16px"}}>
			<Chip Icon={IconLightningFilled}>Chip with icon</Chip>
		</div>
		<div style={{display: "block", margin: "16px"}}>
			<Chip
				Icon={IconLightningFilled}
				onClose={() => {
					window.alert('closed');
				}}
			>
				Chip with icon and closeable
			</Chip>
		</div>
		<div style={{display: "block", margin: "16px"}}>
			<Inline space={8}>
				<Checkbox
					name="chip-checkbox-1"
					render={({labelId, checked}) => (
						<Chip active={checked} id={labelId} Icon={IconLightningFilled}>
							Chip 1
						</Chip>
					)}
				/>
				<Checkbox
					name="chip-checkbox-2"
					render={({labelId, checked}) => (
						<Chip active={checked} id={labelId} Icon={IconLightningFilled}>
							Chip 2
						</Chip>
					)}
				/>
				<Checkbox
					name="chip-checkbox-3"
					render={({labelId, checked}) => (
						<Chip active={checked} id={labelId} Icon={IconLightningFilled}>
							Chip 3
						</Chip>
					)}
				/>
			</Inline>
		</div>
		<div style={{display: "block", margin: "16px"}}>
			<RadioGroup name="chip-group" defaultValue="1">
				<Inline space={8}>
					<RadioButton
						value="1"
						render={({checked, labelId}) => (
							<Chip active={checked} id={labelId} Icon={IconLightningFilled}>
								Chip 1
							</Chip>
						)}
					/>
					<RadioButton
						value="2"
						render={({checked, labelId}) => (
							<Chip active={checked} id={labelId} Icon={IconLightningFilled}>
								Chip 2
							</Chip>
						)}
					/>
					<RadioButton
						value="3"
						render={({checked, labelId}) => (
							<Chip active={checked} id={labelId} Icon={IconLightningFilled}>
								Chip 3
							</Chip>
						)}
					/>
				</Inline>
			</RadioGroup>
		</div>
	</ThemeContextProvider>
  );
});

function ChipKenos(editor: any) {

	editor.Blocks.add('chip', {
		id: 'chip',
		label: 'Chip',
		activate: true,
		content: div.innerHTML,
		category: 'Components',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default ChipKenos;