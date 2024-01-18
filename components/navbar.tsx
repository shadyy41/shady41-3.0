import Link from 'next/link';

type NavItem = {
  name: string;
  url: string;
};

const nav_items: Array<NavItem> = [
  { name: 'home', url: '/' },
  { name: 'work', url: '/work' },
  { name: 'blog', url: '/blog' },
];

const Navbar = () => {
  return (
    <nav className='flex w-full items-center justify-start gap-4 py-2 text-sm'>
      {nav_items.map((item, idx) => (
        <NavItem item={item} key={item.url} />
      ))}
    </nav>
  );
};

export default Navbar;

const NavItem = ({ item }: { item: NavItem }) => {
  return (
    <Link
      href={item.url}
      className='outline-custom transition-colors hover:text-stone-200 focus:text-stone-200'
    >
      {item.name}
    </Link>
  );
};
