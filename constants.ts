import type { PortfolioData, SocialLink } from './types.ts';
import { ArtStationIcon, MobyGamesIcon, IMDbIcon } from './components/Icons.tsx';

/* 
  =============================================================================
  HOW TO CHANGE IMAGES IN GITHUB:
  
  1. To use your own images, upload them to your GitHub repository (e.g., in a folder named 'assets').
     Then change the 'url' below to the path relative to index.html (e.g., './assets/my-image.jpg').
     
  2. Or, use an external URL (like Imgur, ArtStation CDN, etc.) inside the quotes.

  3. Commit your changes, and the site will update automatically.
  =============================================================================
*/

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'ArtStation',
    url: 'https://www.artstation.com/',
    icon: ArtStationIcon,
  },
  {
    name: 'MobyGames',
    url: 'https://www.mobygames.com/',
    icon: MobyGamesIcon,
  },
  {
    name: 'IMDb',
    url: 'https://www.imdb.com/',
    icon: IMDbIcon,
  },
];

export const PORTFOLIO_DATA: PortfolioData = {
  title: "JUDAS",
  subtitle: "LEAD ARTIST APPLICANT",
  description: "Exploration of the decaying retro-futuristic interiors of the Mayflower colony ship. The focus was on blending organic corruption with rigid, golden-age art deco structures.",
  images: [
    {
      id: 'img-1',
      // CHANGE THE URL BELOW TO YOUR OWN IMAGE
      url: 'https://picsum.photos/1920/1080?random=1',
      alt: 'Main Hallway Concept',
      fullWidth: true,
    },
    {
      id: 'img-2',
      url: 'https://picsum.photos/1920/800?random=2',
      alt: 'Character Detail',
    },
    {
      id: 'img-3',
      url: 'https://picsum.photos/1920/1200?random=3',
      alt: 'Machinery Room',
      fullWidth: true,
    },
    {
      id: 'img-4',
      url: 'https://picsum.photos/1920/1080?random=4',
      alt: 'Atmospheric Lighting Study',
    },
    {
      id: 'img-5',
      url: 'https://picsum.photos/1920/900?random=5',
      alt: 'Weapon Prop Design',
    },
     {
      id: 'img-6',
      url: 'https://picsum.photos/1920/1400?random=6',
      alt: 'Vertical Slice Level Layout',
      fullWidth: true,
    },
  ],
};