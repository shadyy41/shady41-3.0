import { Pixelify_Sans as Font } from 'next/font/google';
const font = Font({ subsets: ['latin'] });
import { projects } from '@/lib/projects';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export function generateStaticParams(): Array<{ name: string }> {
  const list: Array<{ name: string }> = [];

  for (let name of projects.keys()) {
    list.push({ name });
  }

  return list;
}

export default function Project({ params }: { params: { id: string[] } }) {
  const project = projects.get(params.id[0]);

  if (!project) {
    return redirect('/');
  }

  return (
    <section className='flex w-full flex-col justify-start gap-6'>
      <header className='grid grid-cols-1 gap-1'>
        <h1 className={`${font.className} text-2xl font-medium text-lime-400`}>
          {project.name}{' '}
        </h1>
        <nav className='flex gap-2 text-sm text-stone-300'>
          {project.gh ? (
            <a
              href={project.gh}
              className='outline-custom w-fit transition-colors hover:text-stone-200 active:text-stone-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              repo
            </a>
          ) : null}
          <a
            href={project.url}
            className='outline-custom w-fit transition-colors hover:text-stone-200 active:text-stone-200'
            target='_blank'
            rel='noopener noreferrer'
          >
            visit
          </a>
        </nav>
      </header>

      <div className='flex w-full flex-col items-center justify-center overflow-hidden rounded border border-white border-opacity-10'>
        <div className='relative hidden h-7 w-full items-center justify-center border-b border-white border-opacity-10 bg-stone-800 sm:flex'>
          <div className='absolute left-0 flex items-center justify-center gap-2 p-2'>
            <span className='h-2 w-2 rounded-full bg-red-600 transition-colors sm:h-3 sm:w-3'></span>
            <span className='h-2 w-2 rounded-full bg-yellow-600 transition-colors sm:h-3 sm:w-3'></span>
            <span className='h-2 w-2 rounded-full bg-green-600 transition-colors sm:h-3 sm:w-3'></span>
          </div>
          <div className='relative hidden h-full w-full max-w-[260px] p-1 sm:block'>
            <a
              href={project.url}
              className='outline-custom flex h-full w-full items-center justify-center rounded bg-stone-600 text-xs text-stone-300 transition-colors hover:text-stone-200 focus:text-stone-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              <p>{project.url}</p>
            </a>
          </div>
        </div>
        <div className='relative flex aspect-[16/10] w-full flex-shrink-0 bg-neutral-950'>
          <Image
            src={project.banner}
            alt='banner image'
            placeholder='blur'
            fill={true}
          />
        </div>
      </div>

      <div className='grid grid-cols-1 gap-1'>
        <h2 className='text-lg text-stone-300'>About</h2>
        <p className='text-pretty'>{project.description}</p>
      </div>

      <div className='grid grid-cols-1 gap-1'>
        <h2 className='text-lg text-stone-300'>Tech Stack</h2>
        <ul className='list-inside list-disc'>
          {project.tech.map((e, idx) => {
            return (
              <li key={idx}>
                <a
                  className='outline-custom transition-colors hover:text-stone-200 focus:text-stone-200'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={e.url}
                >
                  {e.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
