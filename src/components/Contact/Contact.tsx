import Link from 'next/link';

type linkType = { text: string; href: string; isExternal?: boolean };

const LINKS: linkType[] = [{ text: 'Send me an email!', href: '#' }];

function Contact() {
	const textStyle =
		'text-text-gray-400 hover:text-textPrimary transition-all cursor-pointer';

	const renderLink = (link: linkType) => {
		return (
			<Link href={link.href}>
				<p className={textStyle}>{link.text}</p>
			</Link>
		);
	};

	return (
		<div className="w-max">
			<div className="flex flex-col">
				<h4 className="my-1 mb-2 text-center font-bold tracking-wide">
					Socials
				</h4>
			</div>
			{LINKS.map(link => {
				if (link?.isExternal) return renderLink(link);
				return <p className={textStyle}>{link.text}</p>;
			})}
		</div>
	);
}

export default Contact;
