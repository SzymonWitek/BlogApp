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
        <h2 className="text-gray-300 tracking-wide font-medium">DevBlog</h2>
      </Link>
      <div className="flex items-center">
        <SearchPost />
        <ul className="flex">
          {LINKS.map(({ href, name }) => (
            <Link className="ml-7" href={href} key={href}>
              <li className="text-xl font-medium text-gray-400 hover:text-textPrimary transition-all">
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
