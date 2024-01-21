import breeze from '../public/breeze.png';
import snippetShare from '../public/snippetshare.png';
import ticTacToe from '../public/tictactoe.png';
import codeShack from '../public/codeshack.png';

export type Project = {
  name: string;
  description: string;
  banner: any;
  url: string;
  gh?: string;
  tech: Array<{ name: string; url: string }>;
  short_desc: string;
};

export const projects: Map<string, Project> = new Map([
  [
    'codeshack',
    {
      name: 'CodeShack',
      description:
        'CodeShack is a realtime collaborative coding web application with additional features such as video calls, text chat, online code compilation.',
      banner: codeShack,
      url: 'https://codeshack.vercel.app',
      gh: 'https://github.com/shadyy41/codeshack',
      tech: [
        {
          name: 'Next.js',
          url: 'https://nextjs.org/',
        },
        {
          name: 'Trystero',
          url: 'https://oxism.com/trystero/',
        },
        {
          name: 'Yjs',
          url: 'https://docs.yjs.dev/',
        },
        {
          name: 'Zustand',
          url: 'https://github.com/pmndrs/zustand',
        },
      ],
      short_desc:
        'Collaborative coding web app built with Nextjs 13, Tailwind, VercelKV and MongoDB.',
    },
  ],
  [
    'breeze',
    {
      name: 'Breeze',
      description:
        'Breeze is a music player app similar to Spotify Web, where users can upload songs and create playlists.',
      banner: breeze,
      url: 'https://breeze41.vercel.app',
      gh: 'https://github.com/shadyy41/breeze-2.0',
      tech: [
        {
          name: 'Next.js',
          url: 'https://nextjs.org/',
        },
        {
          name: 'Supabase',
          url: 'https://supabase.com/',
        },
        {
          name: 'Postgres',
          url: 'https://www.postgresql.org/',
        },
        {
          name: 'Auth.js',
          url: 'https://authjs.dev/',
        },
      ],
      short_desc:
        'Music player built with Next.js 14, Postgres, Supabase, ShadCN, and Tailwind.',
    },
  ],
  [
    'tictactoe',
    {
      name: 'TicTacToe',
      description:
        'Online TicTacToe app which supports Auth using JWT. Users can start a game with other users using their email ids. Finished games are stored in MongoDB database.',
      banner: ticTacToe,
      url: 'https://tictactoe41.vercel.app',
      gh: 'https://github.com/shadyy41/tic-tac-toe',
      tech: [
        {
          name: 'Next.js',
          url: 'https://nextjs.org/',
        },
        {
          name: 'Socket.IO',
          url: 'https://socket.io/',
        },
        {
          name: 'Express.js',
          url: 'https://expressjs.com/',
        },
        {
          name: 'MongoDB',
          url: 'https://www.mongodb.com/',
        },
      ],
      short_desc:
        'P2P TicTacToe app built with Nextjs, Tailwind, Express and MongoDB.',
    },
  ],
  [
    'snippetshare',
    {
      name: 'SnippetShare',
      description:
        'SnippetShare is a web app that allows users to create, save, share code snippets. The code editor supports 6 languages.',
      banner: snippetShare,
      url: 'https://snippetshare41.cyclic.app/explore',
      tech: [
        {
          name: 'Express.js',
          url: 'https://expressjs.com/',
        },
        {
          name: 'MongoDB',
          url: 'https://www.mongodb.com/',
        },
        {
          name: 'Bulma',
          url: 'https://bulma.io/',
        },
      ],
      short_desc:
        'Basic CRUD application built with Express, CSS, EJS and MongoDB.',
    },
  ],
]);
