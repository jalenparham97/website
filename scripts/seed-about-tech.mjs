import { getCliClient } from 'sanity/cli';

const token =
  process.env.SANITY_API_WRITE_TOKEN ?? process.env.SANITY_AUTH_TOKEN;
const client = getCliClient({
  apiVersion: '2025-02-19',
  ...(token ? { token } : {}),
});

const tech = {
  headline: 'Tech I use',
  intro:
    'A few of the tools that help me move from an idea to something real, from the code I write to the setup I use every day.',
  items: [
    {
      _key: 'nextjs',
      name: 'Next.js',
      category: 'development',
      description:
        'The React framework I use for routing, server-rendered pages, and the structure around a web project.',
      url: 'https://nextjs.org',
    },
    {
      _key: 'tailwind-css',
      name: 'Tailwind CSS',
      category: 'development',
      description:
        'The CSS framework I use to build and refine interfaces directly alongside the markup.',
      url: 'https://tailwindcss.com',
    },
    {
      _key: 'sanity',
      name: 'Sanity',
      category: 'development',
      description:
        'The headless CMS I use to model and edit content without tying it to one particular page layout.',
      url: 'https://www.sanity.io',
    },
    {
      _key: 'typescript',
      name: 'TypeScript',
      category: 'development',
      description:
        "The typed language I use to make the relationships between a project's data and code easier to follow.",
      url: 'https://www.typescriptlang.org',
    },
    {
      _key: 'vercel',
      name: 'Vercel',
      category: 'development',
      description:
        'The platform I use to deploy and host web projects, especially ones built with Next.js.',
      url: 'https://vercel.com',
    },
    {
      _key: 'railway',
      name: 'Railway',
      category: 'development',
      description:
        'The platform I use to deploy backend services and the infrastructure that supports them.',
      url: 'https://railway.com',
    },
    {
      _key: 'postgres',
      name: 'Postgres',
      category: 'development',
      description:
        'The relational database I use when a project needs structured data and dependable queries.',
      url: 'https://www.postgresql.org',
    },
    {
      _key: 'upstash',
      name: 'Upstash',
      category: 'development',
      description:
        'I use it for managed Redis and other fast, lightweight data services without running them myself.',
      url: 'https://upstash.com',
    },
    {
      _key: 'tigris-data',
      name: 'Tigris Data',
      category: 'development',
      description:
        'The object storage I use for the files and assets that sit alongside an application.',
      url: 'https://www.tigrisdata.com',
    },
    {
      _key: 'vs-code',
      name: 'VS Code',
      category: 'development',
      description:
        'My code editor for writing, navigating, and understanding the pieces of a project.',
      url: 'https://code.visualstudio.com',
    },
    {
      _key: 'warp',
      name: 'Warp',
      category: 'development',
      description:
        'The terminal I use to run commands, scripts, and the small investigations behind the work.',
      url: 'https://www.warp.dev',
    },
    {
      _key: 'bruno',
      name: 'Bruno',
      category: 'development',
      description:
        'The API client I use to send requests, inspect responses, and test endpoints while I build.',
      url: 'https://www.usebruno.com',
    },
    {
      _key: 'macbook-pro',
      name: 'MacBook Pro M4 Max',
      category: 'hardware',
      description:
        'My main computer for designing, developing, and running the tools that make up a project.',
      url: 'https://www.apple.com/macbook-pro/',
    },
    {
      _key: 'airpods-pro-2',
      name: 'AirPods Pro 2',
      category: 'hardware',
      description:
        'I use them for music, calls, and noise cancellation when I need to focus in a busy space.',
      url: 'https://www.apple.com/airpods-pro/',
    },
    {
      _key: 'apple-watch-series-10',
      name: 'Apple Watch Series 10',
      category: 'hardware',
      description:
        'I use it for time, notifications, activity tracking, and the occasional reminder to step away from the screen.',
      url: 'https://www.apple.com/apple-watch-series-10/',
    },
    {
      _key: 'iphone-15-pro',
      name: 'iPhone 15 Pro',
      category: 'hardware',
      description:
        'My everyday phone for communication, photos, capturing ideas, and checking how websites feel on a smaller screen.',
      url: 'https://support.apple.com/iphone-15-pro',
    },
    {
      _key: 'ipad-pro-11-inch',
      name: 'iPad Pro 11-inch',
      category: 'hardware',
      description:
        'I use it for reading, sketching, reviewing work, and testing interfaces with touch.',
      url: 'https://www.apple.com/ipad-pro/',
    },
    {
      _key: 'playstation-5',
      name: 'PlayStation 5',
      category: 'gaming',
      description:
        'My console for playing through the games I want to experience when I am away from work.',
      url: 'https://www.playstation.com/en-us/ps5/',
    },
    {
      _key: 'xbox-series-x',
      name: 'Xbox Series X',
      category: 'gaming',
      description:
        'Another place I play, especially when a game is better suited to the Xbox library or controller.',
      url: 'https://www.xbox.com/en-US/consoles/xbox-series-x',
    },
    {
      _key: 'crossover',
      name: 'CrossOver',
      category: 'gaming',
      description:
        'The compatibility layer I use to run some Windows games on my Mac without installing Windows.',
      url: 'https://www.codeweavers.com/crossover',
    },
    {
      _key: 'raycast',
      name: 'Raycast',
      category: 'apps',
      description:
        'An app launcher and command bar I use to open tools, search files, and handle small tasks quickly.',
      url: 'https://www.raycast.com',
    },
    {
      _key: 'arc',
      name: 'Arc',
      category: 'apps',
      description:
        'My browser for keeping research, references, and active projects organized without one long row of tabs.',
      url: 'https://arc.net',
    },
    {
      _key: 'paste',
      name: 'Paste',
      category: 'apps',
      description:
        'A clipboard manager that lets me find and reuse text, images, and links I copied earlier.',
      url: 'https://pasteapp.io',
    },
    {
      _key: 'dropover',
      name: 'Dropover',
      category: 'apps',
      description:
        'A temporary shelf for collecting files and links while I move them between folders or apps.',
      url: 'https://dropoverapp.com',
    },
    {
      _key: '1password',
      name: '1Password',
      category: 'apps',
      description:
        'My password manager for keeping logins, secure notes, and other sensitive details in one place.',
      url: 'https://1password.com',
    },
    {
      _key: 'cleanshot-x',
      name: 'CleanShot X',
      category: 'apps',
      description:
        'The screenshot and screen recording tool I use when a visual explanation is clearer than a message.',
      url: 'https://cleanshot.com',
    },
    {
      _key: 'spark-mail',
      name: 'Spark Mail',
      category: 'apps',
      description:
        'My email client for keeping messages, conversations, and follow-ups easier to sort through.',
      url: 'https://sparkmailapp.com',
    },
    {
      _key: 'raindrop',
      name: 'Raindrop',
      category: 'apps',
      description:
        'A bookmark manager where I save articles, references, and other links I want to find again.',
      url: 'https://raindrop.io',
    },
    {
      _key: 'github-copilot',
      name: 'GitHub Copilot',
      category: 'ai',
      description:
        'An AI coding assistant I use to explore ideas, work through problems, and speed up routine parts of development.',
      url: 'https://github.com/features/copilot',
    },
    {
      _key: 'raycast-ai',
      name: 'Raycast AI',
      category: 'ai',
      description:
        'A convenient way to work with AI from the same command bar I already use for the rest of my desktop.',
      url: 'https://www.raycast.com/ai',
    },
    {
      _key: 'openrouter',
      name: 'OpenRouter',
      category: 'ai',
      description:
        'A single API for testing and working with models from different providers in one place.',
      url: 'https://openrouter.ai',
    },
  ],
};

const result = await client.patch('aboutPage').set({ tech }).commit();

console.log(JSON.stringify({ id: result._id, revision: result._rev }, null, 2));
