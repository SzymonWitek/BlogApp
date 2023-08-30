import { Contact } from '@/components/Contact';
import { General } from '@/components/General';
import { SocialMedia } from '@/components/SocialMedia';

function Footer() {
	return (
		<footer className=" p-2 border-t-[1px] border-gray-600  pt-[4vh] pb-[5vh] mt-[5vh]">
			<div className="flex justify-around">
				<SocialMedia />
				<Contact />
				<General />
			</div>
		</footer>
	);
}

export default Footer;
