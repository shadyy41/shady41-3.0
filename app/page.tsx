import Link from 'next/link';
import { Pixelify_Sans as Font } from 'next/font/google';
import { ArrowUpRightFromSquare } from 'lucide-react';
const font = Font({ subsets: ['latin'] });

import { Project, projects } from '@/lib/projects';
export default function Home() {
  return (
    <section className='flex w-full flex-col justify-start gap-6'>
      <h2 className='text-lg text-stone-200'>
        Hey, I&apos;m{' '}
        <span className={`${font.className} text-xl font-medium text-lime-400`}>
          Abhinav Anand
        </span>{' '}
        <span role='img' aria-label='Waving Hand'>
          👋
        </span>{' '}
      </h2>
      <p className='text-pretty'>
        I am a fullstack web developer and an engineering undergrad at NSUT,
        Delhi. I like building web apps with Nextjs and Tailwind, and currently
        I am learning Rust and TypeScript.
      </p>
      <p className='text-pretty'>
        These are some projects I have built recently.
      </p>
      <ul className='grid w-full grid-cols-1 gap-2 sm:grid-cols-1'>
        {Array.from(projects).map(([key, project], idx) => (
          <li
            key={key}
            className={`${idx !== Array.from(projects).length - 1 ? 'border-b border-stone-800 pb-2' : ''}`}
          >
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

const Project = ({ project }: { project: Project }) => {
  return (
    <section className='flex w-full items-center gap-2'>
      <Link
        href={project.url}
        className='outline-custom flex w-fit flex-shrink-0 items-center justify-center gap-1 text-stone-300/90 transition-colors hover:text-stone-200 focus:text-stone-200'
        target='_blank'
        rel='noopener noreferrer'
      >
        {project.name.toLowerCase()}
        <ArrowUpRightFromSquare size={12} />
      </Link>
      <p> - </p>
      <Link
        href={`/project/${project.name.toLowerCase()}`}
        className='outline-custom truncate transition-colors hover:text-stone-200 focus:text-stone-200'
      >
        {project.description.toLowerCase()}
      </Link>
    </section>
  );
};
