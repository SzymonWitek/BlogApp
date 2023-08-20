'use client';

import NextError from 'next/error';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: NextError;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<p> smth went wrong!</p>
			<button>go back to the main page</button>
		</div>
	);
}
