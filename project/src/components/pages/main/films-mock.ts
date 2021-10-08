import { Movie } from '../../../types/film';

// ToDo: Delete mock on stage of integration with server
export const FILMS_MOCK: Array<Pick<Movie, 'id' | 'name' | 'previewImage' | 'isFavorite'>> = [
  {
    id: 1,
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    isFavorite: true,
  },
  {
    id: 2,
    previewImage: 'img/bohemian-rhapsody.jpg',
    name: 'Bohemian Rhapsody',
    isFavorite: true,
  },
  {
    id: 3,
    previewImage: 'img/macbeth.jpg',
    name: 'Macbeth',
    isFavorite: true,
  },
  {
    id: 4,
    previewImage: 'img/aviator.jpg',
    name: 'Aviator',
    isFavorite: true,
  },
  {
    id: 5,
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    name: 'We need to talk about Kevin',
    isFavorite: true,
  },
  {
    id: 6,
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    name: 'What We Do in the Shadows',
    isFavorite: true,
  },
  {
    id: 7,
    previewImage: 'img/revenant.jpg',
    name: 'Revenant',
    isFavorite: true,
  },
  {
    id: 8,
    previewImage: 'img/johnny-english.jpg',
    name: 'Johnny English',
    isFavorite: true,
  },
  {
    id: 9,
    previewImage: 'img/shutter-island.jpg',
    name: 'Shutter Island',
    isFavorite: true,
  },
  {
    id: 10,
    previewImage: 'img/pulp-fiction.jpg',
    name: 'Pulp Fiction',
    isFavorite: false,
  },
  {
    id: 11,
    previewImage: 'img/no-country-for-old-men.jpg',
    name: 'No Country for Old Men',
    isFavorite: false,
  },
  {
    id: 12,
    previewImage: 'img/snatch.jpg',
    name: 'Snatch',
    isFavorite: false,
  },
  {
    id: 13,
    previewImage: 'img/moonrise-kingdom.jpg',
    name: 'Moonrise Kingdom',
    isFavorite: false,
  },
  {
    id: 14,
    previewImage: 'img/seven-years-in-tibet.jpg',
    name: 'Seven Years in Tibet',
    isFavorite: false,
  },
  {
    id: 15,
    previewImage: 'img/midnight-special.jpg',
    name: 'Midnight Special',
    isFavorite: false,
  },
  {
    id: 16,
    previewImage: 'img/war-of-the-worlds.jpg',
    name: 'War of the Worlds',
    isFavorite: false,
  },
  {
    id: 17,
    previewImage: 'img/dardjeeling-limited.jpg',
    name: 'Dardjeeling Limited',
    isFavorite: false,
  },
  {
    id: 18,
    previewImage: 'img/orlando.jpg',
    name: 'Orlando',
    isFavorite: false,
  },
  {
    id: 19,
    previewImage: 'img/mindhunter.jpg',
    name: 'Mindhunter',
    isFavorite: false,
  },
  {
    id: 20,
    previewImage: 'img/midnight-special.jpg',
    name: 'Midnight Special',
    isFavorite: false,
  },
];
