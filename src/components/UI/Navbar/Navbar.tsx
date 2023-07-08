import { SearchPost } from '@/components/SearchPost';
import Link from 'next/link';

const LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Log in', href: '/login' }
];

function Navbar() {
  return (
    <nav className="px-[5vw] py-9 lg:py-12 flex justify-between items-center">
      <Link href="/">
        <h2 className="text-primary">UI Library</h2>
      </Link>
      <div className="flex items-center">
        <SearchPost />
        <ul className="flex">
          {LINKS.map(({ href, name }) => (
            <Link className="ml-7" href={href}>
              <li className="text-xl font-medium">{name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
