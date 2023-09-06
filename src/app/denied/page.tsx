import Link from 'next/link';

import { PATHS } from '@/common/constants';

function AccessDenied() {
	return (
		<div className="flex-grow flex flex-col items-center pt-[10vh]">
			<h5 className="text-3xl">You do not have access to this page!</h5>
			<button className="px-4 py-2 border-[1px] mt-8 border-textSecondary  hover:bg-textSecondary hover:text-bgPrimary transition-all">
				<Link href={PATHS.dashboard}>Go back to home</Link>
			</button>
		</div>
	);
}

export default AccessDenied;
