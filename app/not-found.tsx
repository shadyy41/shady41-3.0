'use client';
import { Pixelify_Sans as Font } from 'next/font/google';
const font = Font({ subsets: ['latin'] });

export default function Error() {
  return (
    <h2 className='text-lg text-stone-200'>
      <span className={`${font.className} text-xl font-medium text-lime-400`}>
        404:{' '}
      </span>{' '}
      Not Found{' '}
      <span role='img' aria-label='Nerd'>
        🤓
      </span>{' '}
    </h2>
  );
}
