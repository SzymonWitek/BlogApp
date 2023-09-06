'use client';

import { PATHS } from '@/common/constants';
import NextError from 'next/error';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
	error,
}: {
	error: NextError;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex-grow flex flex-col items-center pt-[10vh]">
			<h5 className="text-3xl">Something went wrong!</h5>
			<button className="px-4 py-2 border-[1px] mt-8 border-textSecondary  hover:bg-textSecondary hover:text-bgPrimary transition-all">
				<Link href={PATHS.dashboard}>Go back to home</Link>
			</button>
		</div>
	);
}
