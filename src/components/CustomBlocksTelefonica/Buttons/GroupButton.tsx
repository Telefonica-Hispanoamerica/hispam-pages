import { 
	ThemeContextProvider, 
	Stack,
	Title1,
	ButtonLink,
	ButtonPrimary,
	ButtonSecondary,
	ButtonGroup,
	getMovistarSkin 
} from '@uxhispam/kenos';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

const kenosTheme = {
  	skin: getMovistarSkin(),
  	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const handleOnPress = () => window.alert('pressed!');

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {

	const primaryButton = <ButtonPrimary onPress={handleOnPress}>Action</ButtonPrimary>;
	const secondaryButton = <ButtonSecondary onPress={handleOnPress}>Action 2</ButtonSecondary>;
	const buttonLink = <ButtonLink onPress={handleOnPress}>Link</ButtonLink>;
	const longButton = (
		<ButtonPrimary onPress={handleOnPress}>A very long action text in this button</ButtonPrimary>
	);
	root.render(
		<ThemeContextProvider theme={kenosTheme}>
			<Stack space={16}>
				<Title1 as="h2">One Button</Title1>
				<ButtonGroup primaryButton={primaryButton}></ButtonGroup>

				<Title1 as="h2">Two Buttons</Title1>
				<ButtonGroup primaryButton={primaryButton} secondaryButton={secondaryButton}></ButtonGroup>

				<Title1 as="h2">Primary Button and Link</Title1>
				<ButtonGroup primaryButton={primaryButton} link={buttonLink}></ButtonGroup>

				<Title1 as="h2">Secondary Button and Link</Title1>
				<ButtonGroup secondaryButton={secondaryButton} link={buttonLink}></ButtonGroup>

				<Title1 as="h2">only Link</Title1>
				<ButtonGroup link={buttonLink}></ButtonGroup>

				<Title1 as="h2">Two Buttons and Link</Title1>
				<ButtonGroup
					primaryButton={primaryButton}
					secondaryButton={secondaryButton}
					link={buttonLink}
				></ButtonGroup>

				<Title1 as="h2">Different-length Buttons</Title1>
				<ButtonGroup primaryButton={longButton} secondaryButton={secondaryButton}></ButtonGroup>
			</Stack>
		</ThemeContextProvider>
	);
});

function GroupButtonKenos(editor: any) {	
	
	editor.Blocks.add('buttonGroup', {
		id: 'buttonGroup',
		label: 'Group button',
		activate: true,
		content: div.innerHTML,
		category: 'Buttons',
		media:
			'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}

export default GroupButtonKenos;



