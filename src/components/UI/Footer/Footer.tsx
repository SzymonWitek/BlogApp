import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const SOCIAL_MEDIAS = [
	{
		name: 'Twitter',
		link: '#',
		Icon: FaTwitter,
	},
	{
		name: 'Facebook',
		link: '#',
		Icon: FaFacebook,
	},
	{
		name: 'Instagram',
		link: '#',
		Icon: FaInstagram,
	},
];

function Footer() {
	return (
		<footer className=" p-2 border-t-[1px] border-gray-600">
			<div className="w-max">
				<h4 className="text-center my-1">Find us on</h4>
				<div className="flex">
					{SOCIAL_MEDIAS.map(media => (
						<media.Icon
							key={media.name}
							className="text-3xl text-text-gray-400 hover:text-textPrimary transition-all cursor-pointer p-1 mr-4"
						/>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
