import { Pixelify_Sans as Font } from 'next/font/google';
const font = Font({ subsets: ['latin'] });

export default function Work() {
  return (
    <section className='flex w-full flex-col justify-start gap-6'>
      <h1 className={`${font.className} text-2xl font-medium text-lime-400`}>
        Work
      </h1>
      <p className='text-pretty'>
        Will update once I join 🙃
      </p>
    </section>
  )
}