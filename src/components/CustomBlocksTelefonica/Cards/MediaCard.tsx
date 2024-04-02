import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
	Placeholder,
	MediaCard,
	Tag,
	Image,
	ButtonPrimary,
	ButtonLink,
	getMovistarSkin
} from '@uxhispam/kenos';

const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};


const args = {
	media: 'image',
	headlineType: 'promo',
	headline: 'Priority',
	pretitle: 'Pretitle',
	title: 'Title',
	subtitle: 'Subtitle',
	description: 'This is a description for the card',
	withExtra: false,
	actions: 'button',
	closable: false,
};

const IMAGE_SRC = 'https://images.unsplash.com/photo-1575903013621-1387ce8caa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';

const div = document.createElement('div');
const root = createRoot(div);

flushSync(() => {
	root.render(
		<ThemeContextProvider theme={kenosTheme}>
			<MediaCard
				dataAttributes={{testid: 'media-card'}}
				headline={args.headline && <Tag type='promo'>{args.headline}</Tag>}
				pretitle={args.pretitle}
				title={args.title}
				subtitle={args.subtitle}
				description={args.description}
 				media={
					<Image aspectRatio="16:9" src={IMAGE_SRC} />
				}
				button={
					<ButtonPrimary small href="https://google.com">
						Action
					</ButtonPrimary>
				}
 				buttonLink={
					<ButtonLink href="https://google.com">Link</ButtonLink>
				}
 				extra={args.withExtra ? <Placeholder /> : undefined}
 				onClose={args.closable ? () => {} : undefined}
			/>
		</ThemeContextProvider>
	);	
});

function MediaCardKenos(editor: any) {		
	editor.Blocks.add('mediaCard', {
		id: 'mediaCard',
		label: 'Media Card',
		activate: true,
		content: div.innerHTML,
		category: 'Cards',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
	
}
  
export default MediaCardKenos;