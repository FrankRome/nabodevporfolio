import { Project, Award, MakingOf, SkillCategory, TechBadge } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Loop Cat',
    description:
      'Mecánica de Giro Central: Controla a Loop Cat mientras gira por el centro de la mazmorra. Usa tus reflejos para evitar obstáculos y enemigos que se interpongan en tu camino.',
    imageUrl: 'https://img.itch.zone/aW1nLzExMzI2NjMyLnBuZw==/original/03aDDH.png',
    projectLink: 'https://nabo-games.itch.io/loop-cat',
    demoLink: 'https://nabo-games.itch.io/loop-cat',
    tags: ['Game maker', 'Programacion', 'Arte', 'Diseño'],
    trailerUrl: 'https://www.youtube.com/watch?v=LKOyFtPGTYE',
  },
  {
    id: 2,
    title: '999 Laugh Souls',
    description:
      '999 Laugh Souls es un juego tipo Rouge-like de surpervivencia en 2d con animaciones chistosas y muchos payasos',
    imageUrl: 'https://img.itch.zone/aW1nLzE0ODgyOTQyLnBuZw==/original/sBoc1w.png',
    projectLink: 'https://nabo-games.itch.io/999-souls-laugh',
    demoLink: 'https://nabo-games.itch.io/999-souls-laugh',
    tags: ['Game maker', 'Programacion', 'Game jam'],
    trailerUrl: 'https://www.youtube.com/watch?v=5l_vQzqz5hA',
  },
  {
    id: 3,
    title: 'Ghostle',
    description:
      '¡Explora la casa embrujada en Ghostle! Usa linternas para descubrir fantasmas y resolver acertijos.',
    imageUrl: 'https://img.itch.zone/aW1nLzE1ODQxMDc0LmdpZg==/315x250%23cm/qrzgg7.gif',
    projectLink: 'https://luife.itch.io/ghostle',
    demoLink: 'https://luife.itch.io/ghostle',
    tags: ['Arte', 'Sonidos', 'Musica'],
    trailerUrl: 'https://www.youtube.com/watch?v=IrdEZ2C4MSw',
  },
];

export const KNOCK_TIME_DATA = {
  badge: "Beat 'Em Up · Gameboy Advance",
  title: 'KNOCK TIME',
  shortDescription:
    'Un Beat \'Em Up sobre Latinoamérica 🇻🇪. Eres un boxeador que debe rescatar a su hermano tras ser capturado por la policía corrupta.',
  imageUrl: 'https://img.itch.zone/aW1nLzI5OTcyOTYzLnBuZw==/315x250%23c/np%2Bc%2Bk.png',
  imageBadge: 'GBA',
  longDescription:
    'Un Beat \'Em Up para Gameboy Advance ambientado en Latinoamérica 🇻🇪. Juega como un boxeador dispuesto a todo para rescatar a su hermano de las manos de la policía corrupta. Actualmente cuenta con una demo disponible en itch.io.',
  demoUrl: 'https://www.newgrounds.com/portal/view/1052492',
  itchUrl: 'https://stuck-pixel-studio.itch.io/knock-time',
  status: 'Demo disponible ahora',
  footerNote: '¡Pruébala y dime qué te parece! 💙',
};

export const AWARDS_DATA: Award[] = [
  {
    title: 'Mejor juego de la comunidad',
    organization: 'Global Game Jam sede Tepic, Nayarit',
    year: '2024',
    description:
      'Nuestro proyecto fue seleccionado por la comunidad como el Mejor Juego en la Global Game Jam 2024, sede Tepic, Nayarit.',
    projectTitle: '999 Laugh Souls',
    imageUrl:
      'https://cdn.beacons.ai/user_content/aFksGMKPE5Y5DcXmLmJ2KfSL65f2/referenced_images/b0f3f31a-2da1-474d-aee5-0efdd94d68eb__link-in-bio__image-block__ccbf701b-d956-4e0e-b3e8-3b39a196b0ed__1caf8add-92a0-4123-9fa4-50353e261a19__0c154022-0c1f-443a-a719-f112af1666c6.jpg?t=1738524876898',
  },
  {
    title: '2do lugar en Tepic Jam 2019',
    organization: 'CODEVIN',
    year: '2019',
    description:
      'Nuestro equipo obtuvo el segundo lugar en la Tepic Jam 2019, un reconocimiento que destacó nuestra propuesta creativa, jugabilidad y trabajo en equipo.',
    projectTitle: 'San Battle',
    imageUrl:
      'https://cdn.beacons.ai/user_content/aFksGMKPE5Y5DcXmLmJ2KfSL65f2/referenced_images/e4b31ceb-3f2f-4b70-ad91-fe821d8ecc3d__link-in-bio__image-block__ccbf701b-d956-4e0e-b3e8-3b39a196b0ed__1caf8add-92a0-4123-9fa4-50353e261a19__c44efe04-4d92-4c63-b9e4-f2d4dd1324ae.jpg?t=1738524855331',
  },
  {
    title: 'Charla chispa creativa',
    organization: 'CODEVIN Conference',
    year: '2024',
    description:
      'Comparti mi experiencia creativa en el desarrollo de Loop Cat durante una charla especializada, donde exploramos desde la idea inicial hasta los aspectos emocionales',
    projectTitle: 'Loop Cat',
    imageUrl:
      'https://cdn.beacons.ai/user_content/aFksGMKPE5Y5DcXmLmJ2KfSL65f2/referenced_images/91bd6294-0c07-49ec-9830-303e7e10e267__link-in-bio__image-block__ccbf701b-d956-4e0e-b3e8-3b39a196b0ed__1caf8add-92a0-4123-9fa4-50353e261a19__771cf516-e53a-48e6-ae9a-a49ec41033d9.jpg?t=1738524867105',
  },
];

export const MAKING_OF_DATA: MakingOf[] = [
  {
    id: 1,
    projectId: 2,
    title: 'Global game jam 2024',
    date: '2024-01',
    description:
      'La global game jam 2024 donde obtuvimos el primer lugar como mejor juego de la comunidad :D',
    mediaUrl:
      'https://cdn.beacons.ai/user_content/aFksGMKPE5Y5DcXmLmJ2KfSL65f2/referenced_images/95ef4e91-ec7c-43b3-82ef-5d3ffdc2aca0__link-in-bio__image-block__ccbf701b-d956-4e0e-b3e8-3b39a196b0ed__1caf8add-92a0-4123-9fa4-50353e261a19__f5f35c84-d360-4043-9dd1-b6025c288012.jpg?t=1738524872295',
    mediaType: 'image',
  },
  {
    id: 2,
    projectId: 0,
    title: 'Presentacion San batle',
    date: '2019-11',
    description:
      'Mi primera game jam presencial donde obtuvimos el 2do lugar con el juego Sam battle',
    mediaUrl:
      'https://cdn.beacons.ai/user_content/aFksGMKPE5Y5DcXmLmJ2KfSL65f2/referenced_images/25d96da0-b6dd-4746-aff6-0921aedc63fa__link-in-bio__image-block__ccbf701b-d956-4e0e-b3e8-3b39a196b0ed__1caf8add-92a0-4123-9fa4-50353e261a19__019f8340-4235-43b7-b68c-237e4b375f17.jpg?t=1738524847691',
    mediaType: 'image',
  },
  {
    id: 3,
    projectId: 2,
    title: '999 Laugh Souls en Talent Land',
    date: '2024-04',
    description:
      'La comunidad de CODEVIN presento nuestro juego de la global game jam como parte de una charla, Donde los invitados probaron nuestro juego en version android',
    mediaUrl: 'https://pbs.twimg.com/media/GgOWFDgaYAAt8g2?format=jpg&name=large',
    mediaType: 'image',
  },
  {
    id: 4,
    projectId: 1,
    title: 'Inicios de Loop cat',
    date: '2024-06',
    description: 'El primer diseño del sprite de loop cat',
    mediaUrl: 'https://pbs.twimg.com/media/FVF9jWyUcAA0Ph0?format=jpg&name=large',
    mediaType: 'image',
  },
  {
    id: 5,
    projectId: 0,
    title: 'Otro Tetris',
    date: '2023-09',
    description: 'Hicimos un tetris para pico-8 el cual se puede ejecutar en consolas portatiles',
    mediaUrl: 'https://pbs.twimg.com/media/F492w9zbYAAQBVO?format=jpg&name=4096x4096',
    mediaType: 'image',
  },
  {
    id: 6,
    projectId: 0,
    title: 'James is bananas',
    date: '2023-01',
    description:
      'Hice musica y sonidos para James is bananas juegos de mis amigos de Bear boy studios',
    mediaUrl: 'https://pbs.twimg.com/media/FlVGQqwaEAEY9aF?format=jpg&name=4096x4096',
    mediaType: 'image',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 1,
    title: 'Desarrollo de Juegos',
    description: 'Game maker studio, Godot y motores personalizados',
    iconName: 'code',
    tags: ['GameMaker Studio 2', 'Godot', 'Custom Engines', '2D Physics'],
  },
  {
    id: 2,
    title: 'Animación y Música',
    description: 'Animación 2D, efectos visuales y composición musical',
    iconName: 'sparkles',
    tags: ['Pixel Art', 'Chiptune', 'SFX 8-Bit', 'Composición OST'],
  },
  {
    id: 3,
    title: 'Experiencia del Jugador',
    description: 'Diseño de juegos y psicología del jugador',
    iconName: 'users',
    tags: ['Game Feel / Juiciness', 'Level Design', 'Arcade Pacing', 'Retro UX'],
  },
  {
    id: 4,
    title: 'Herramientas y Flujos',
    description: 'Herramientas personalizadas, gestión de recursos y optimización',
    iconName: 'coffee',
    tags: ['Git & Pipelines', 'Optimization', 'Tooling', 'Export GBA/Web'],
  },
];

export const TECH_BADGES: TechBadge[] = [
  { name: 'GameMaker Studio 2', category: 'engine', level: 'Nivel Maestro ★★★', color: '#7C3AED' },
  { name: 'Godot Engine', category: 'engine', level: 'Nivel Avanzado ★★☆', color: '#6D28D9' },
  { name: 'Unity 2D', category: 'engine', level: 'Nivel Avanzado ★★☆', color: '#5B21B6' },
  { name: 'TypeScript / JS', category: 'code', level: 'Nivel Experto ★★★', color: '#7C3AED' },
  { name: 'C# & C++', category: 'code', level: 'Nivel Sólido ★★☆', color: '#9F1239' },
  { name: 'Python', category: 'code', level: 'Nivel Sólido ★★☆', color: '#6D28D9' },
  { name: 'Pico-8 / Retro GBA', category: 'engine', level: 'Pixel Sorcerer ★★★', color: '#5B21B6' },
  { name: 'Audio & Chiptune', category: 'audio', level: 'Compositor ★★★', color: '#9F1239' },
  { name: 'Pixel Art 2D', category: 'art', level: 'Toon Sprite Artist ★★★', color: '#881337' },
];

export const SOCIAL_LINKS = [
  {
    name: 'itch.io',
    url: 'https://nabo-games.itch.io/',
    icon: 'Gamepad2',
    color: '#FF4081',
    label: 'Juegos en itch.io',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@nabodev',
    icon: 'Youtube',
    color: '#EF4444',
    label: 'Trailers & Devlogs',
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/nabodrop',
    icon: 'Twitter',
    color: '#6D28D9',
    label: '@nabodrop',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nabodrop/',
    icon: 'Instagram',
    color: '#8B5CF6',
    label: '@nabodrop',
  },
  {
    name: 'Google Play',
    url: 'https://play.google.com/store/apps/dev?id=6277823320637847447',
    icon: 'Play',
    color: '#4C1D95',
    label: 'Juegos Android',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fran-rome-016109172/',
    icon: 'Linkedin',
    color: '#0284C7',
    label: 'Fran Romero',
  },
];
