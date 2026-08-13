import { getCliClient } from 'sanity/cli';

const token =
  process.env.SANITY_API_WRITE_TOKEN ?? process.env.SANITY_AUTH_TOKEN;
const client = getCliClient({
  apiVersion: '2025-02-19',
  ...(token ? { token } : {}),
});

const currentlyExploring = {
  headline: 'Currently exploring',
  intro:
    'A few things I am spending time with, learning from, or looking for a place to use in the work.',
  items: [
    {
      _key: 'new-ai-workflows',
      name: 'New AI workflows',
      description:
        'Testing different ways to use AI across research, planning, development, and the everyday parts of a project.',
    },
    {
      _key: 'ai-skills',
      name: 'AI skills for faster project creation',
      description:
        'Building reusable skills and workflows that help turn an idea into a working project with less repeated setup.',
    },
    {
      _key: 'bjj',
      name: 'Brazilian jiu-jitsu',
      description:
        'Learning the techniques, patience, and problem-solving that come from training consistently.',
    },
    {
      _key: 'mac-gaming',
      name: 'Mac gaming possibilities',
      description:
        'Finding out what can run well on a Mac, from native games to compatibility tools and newer options.',
      url: 'https://www.codeweavers.com/crossover',
    },
    {
      _key: 'fitness-routines',
      name: 'Refining my gym and fitness routines',
      description:
        'Finding a sustainable balance between strength training, conditioning, recovery, and the rest of life.',
    },
  ],
};

const currentlyPlaying = {
  headline: 'What I am playing',
  intro:
    'A few games I am spending time with right now, depending on the platform and the kind of evening I want.',
  items: [
    {
      _key: 'star-wars-jedi-survivor',
      name: 'Star Wars - Jedi Survivor',
      description:
        "Working my way through another chapter of Cal Kestis's journey and the worlds he gets to explore.",
      url: 'https://www.ea.com/games/starwars/jedi/jedi-survivor',
    },
    {
      _key: 'witcher-3',
      name: 'Witcher 3',
      description:
        'Getting ready for the new DLC and The Witcher 4 by spending more time in a world I still enjoy returning to.',
      url: 'https://www.thewitcher.com/us/en/witcher3',
    },
    {
      _key: 'pragmata',
      name: 'PRAGMATA',
      description:
        'A great father-daughter story with striking visuals and gameplay that looks genuinely fun to play.',
      url: 'https://www.pragmata-game.com',
    },
    {
      _key: 're9',
      name: 'Resident Evil Requiem',
      description:
        'I loved Resident Evil 4 Remake, so I am looking forward to playing as Leon again.',
      url: 'https://www.residentevil.com/requiem/',
    },
  ],
};

const result = await client
  .patch('aboutPage')
  .set({ currentlyExploring, currentlyPlaying })
  .unset(['favorites'])
  .commit();

console.log(JSON.stringify({ id: result._id, revision: result._rev }, null, 2));
