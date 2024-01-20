import { Pixelify_Sans as Font } from 'next/font/google';
const font = Font({ subsets: ['latin'] });

export default function Blog() {
  return (
    <section className='flex w-full flex-col justify-start gap-6'>
      <h1 className={`${font.className} text-2xl font-medium text-lime-400`}>
        Blog
      </h1>
      <p className='text-pretty'>
        I will start writing soon.
      </p>
    </section>
  )
}