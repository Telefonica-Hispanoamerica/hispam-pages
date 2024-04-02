import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

import { 
	ThemeContextProvider,
    ButtonPrimary,
    ButtonLink,
    Image,
    Slideshow,    
    Hero,
    Tag,
    Placeholder,
	getMovistarSkin,
} from '@uxhispam/kenos';


const kenosTheme = {
	skin: getMovistarSkin(),
	i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};


const HeroComponent = ({idx}: {idx: number}) => {
        return (
            <Hero
                background="default"
                media={
                    <Image
                        src="https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                        aspectRatio="16:9"
                    />
                }
                headline={<Tag type="active">Headline</Tag>}
                pretitle="Pretitle"
                title="Title"
                description="This is a long description with a long text to see how this works"
                extra={idx === 1 ? <Placeholder /> : undefined}
                button={<ButtonPrimary fake>Action</ButtonPrimary>}
                buttonLink={<ButtonLink href="#">Link</ButtonLink>}
                desktopMediaPosition="right"
            />
        );
};

const div = document.createElement('div');
const root = createRoot(div);
flushSync(() => {
  root.render(
	<ThemeContextProvider theme={kenosTheme}>
		<Slideshow
            withBullets
            inverseBullets={false}
            dataAttributes={{testid: 'hero'}}
            items={Array.from({length: 3}).map((_, idx) => (
                <HeroComponent idx={idx} key={idx} />
            ))}
        />
	</ThemeContextProvider>
  );
});

function HeroSlideshowKenos(editor: any) {

	editor.Blocks.add('heroSlideshow', {
		id: 'heroSlideshow',
		label: 'Hero Slideshow',
		activate: true,
		content: div.innerHTML,
		category: 'Hero',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' },
	});
}
  
export default HeroSlideshowKenos;