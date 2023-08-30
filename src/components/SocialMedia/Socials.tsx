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

function SocialMedia() {
	return (
		<div className="w-max">
			<h4 className="text-center my-1 mb-2 font-bold tracking-wide">
				Find us on
			</h4>
			<div className="flex">
				{SOCIAL_MEDIAS.map(media => (
					<a href={media.link} className="text-center">
						<media.Icon
							key={media.name}
							className="text-3xl text-text-gray-400 hover:text-textPrimary transition-all cursor-pointer p-1 mx-2"
						/>
					</a>
				))}
			</div>
		</div>
	);
}

export default SocialMedia;
