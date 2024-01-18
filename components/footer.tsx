import { ArrowRight } from 'lucide-react';

const contact_links = [
  { name: 'Email', url: 'mailto:abhinavjha2512@gmail.com' },
  { name: 'Github', url: 'https://github.com/shadyy41' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/abhinavanand41/' },
];

const Footer = () => {
  return (
    <footer className='flex w-full flex-grow items-end justify-between py-2 text-sm'>
      <p>get in touch </p>
      <nav className='flex items-center gap-4'>
        {contact_links.map((e, idx) => (
          <a
            href={e.url}
            className='outline-custom transition-colors  hover:text-stone-200 focus:text-stone-200'
            key={idx}
            target='_blank'
            rel='noopener noreferrer'
          >
            {e.name.toLowerCase()}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
