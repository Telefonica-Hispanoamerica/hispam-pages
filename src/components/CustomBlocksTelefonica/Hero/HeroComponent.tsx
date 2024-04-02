import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
    ButtonPrimary,
    ButtonLink,
    Image,
    Hero,
    Tag,
    Placeholder,
	getMovistarSkin,
} from '@uxhispam/kenos';


const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const args = {
        media: 'image',
        headlineType: 'promo',
        headline: 'Hero',
        pretitle: 'Pretitle',
        title: 'Title',
        description: 'This is a long description with a long text to see how this works',
        withExtra: false,
        actions: 'button and link',
        background: 'default',
        desktopMediaPosition: 'right',
        height: '100%',
        aspectRatio: '16:9',
};

const mediaComponent =
        args.media === 'video' ? (
             <Placeholder />
            ) : (
            <Image
                src="https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                aspectRatio='16:9'
            />
        );

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
  root.render(
	<ThemeContextProvider theme={kenosTheme}>
		<Hero
            background='default'
            media={mediaComponent}
            headline={args.headline ? <Tag type='promo'>{args.headline}</Tag> : undefined}
            pretitle={args.pretitle}
            title={args.title}
            description={args.description}
            extra={args.withExtra ? <Placeholder /> : undefined}
            button={
                <ButtonPrimary fake>Action</ButtonPrimary>
            }
            buttonLink={
                <ButtonLink href="#">Link</ButtonLink>
            }
            dataAttributes={{testid: 'hero'}}
            desktopMediaPosition='right'
            height={args.height}
        />
	</ThemeContextProvider>
  );
});

function HeroComponentKenos(editor: any) {

	editor.Blocks.add('heroComponent', {
		id: 'heroComponent',
		label: 'Hero Component',
		activate: true,
		content: div.innerHTML,
		category: 'Hero',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default HeroComponentKenos;