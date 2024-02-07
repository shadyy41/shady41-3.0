import './globals.css';
import { Rubik as Font } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const font = Font({ subsets: ['latin'] });

export const metadata = {
  title: 'Abhinav Anand',
  description: 'Personal website and blog of Abhinav Anand.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='overflow-scroll overflow-x-auto bg-stone-950'>
      <head>
        <meta name="google-site-verification" content="B4qraK5_yDKGXcJf_4uLkQbWM0LMf4cHQ9_xR0Ouo2w" />
      </head>
      <body
        className={`${font.className} flex justify-center text-stone-400 sm:min-h-screen`}
      >
        <main className='flex w-full max-w-xl flex-col justify-center gap-6 px-4 py-8 sm:gap-10 sm:py-16'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
