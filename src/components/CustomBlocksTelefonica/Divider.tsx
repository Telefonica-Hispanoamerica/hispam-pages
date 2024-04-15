import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
	Divider,
	useIsInverseVariant,
	skinVars, 
	getMovistarSkin, 
	ThemeVariant
} from '@uxhispam/kenos';


const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const Container = ({children}: {children: React.ReactNode}) => {
const isInverse = useIsInverseVariant();
	return (
		<div
			style={{
		 		background: isInverse ? skinVars.colors.backgroundBrand : skinVars.colors.background,
				padding: 16,
				height: 96,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				border: `1px solid ${skinVars.colors.border}`,
			}}
		>
			{children}
		</div>
	);
};

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
  root.render(
	<ThemeContextProvider theme={kenosTheme}>
		<div style={{display: "block", margin: "16px"}}>
			<Container>
				<Divider />
			</Container>
		</div>
		<div style={{display: "block", margin: "16px"}}>
			<ThemeVariant isInverse>
				<Container>
					<Divider />
				</Container>
			</ThemeVariant>
		</div>
	</ThemeContextProvider>
  );
});

function DividerKenos(editor: any) {

	editor.Blocks.add('divider', {
		id: 'divider',
		label: 'Divider',
		activate: true,
		content: div.innerHTML,
		category: 'Components',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default DividerKenos;