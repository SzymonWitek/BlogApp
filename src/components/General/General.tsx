import Link from 'next/link';

type linkType = { text: string; href: string; isExternal?: boolean };

const LINKS: linkType[] = [
	{ text: 'Our Discord', href: '#', isExternal: true },
];

function General() {
	return (
		<div className="w-max">
			<h4 className="my-1  font-bold tracking-wide text-center">General</h4>
			{LINKS.map(link => {
				return (
					<Link href={link.href}>
						<p className="text-text-gray-400 hover:text-textPrimary transition-all cursor-pointer">
							{link.text}
						</p>
					</Link>
				);
			})}
		</div>
	);
}

export default General;
