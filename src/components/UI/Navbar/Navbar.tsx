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
      <ul className="flex">
        {LINKS.map(({ href, name }) => (
          <Link href={href}>
            <li className="text-xl font-medium ml-7">{name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
