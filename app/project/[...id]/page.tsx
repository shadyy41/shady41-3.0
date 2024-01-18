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
              href={project.url}
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
      <div className='relative flex aspect-[16/10] w-full flex-shrink-0 overflow-hidden rounded-md border border-stone-800 bg-stone-950'>
        <Image
          src={project.banner}
          alt='banner image'
          placeholder='blur'
          fill={true}
        />
      </div>

      <div className='grid grid-cols-1 gap-1'>
        <h2 className='text-stone-300'>About</h2>
        <p className='text-pretty text-sm'>{project.description}</p>
      </div>

      <div className='grid grid-cols-1 gap-1'>
        <h2 className='text-stone-300'>Tech Stack</h2>
        <ul className='list-inside list-disc text-sm'>
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
