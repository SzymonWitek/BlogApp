import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

import { checkIfNotAllowed } from './app/helpers/checkIfNotAllowed';
import { PATHS, ROLES } from './common/constants';

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		const isAccessNotAllowed = checkIfNotAllowed.bind(null, request);
	
		if (isAccessNotAllowed(PATHS.login, ROLES.admin)) {
			return NextResponse.rewrite(new URL(PATHS.denied, request.url));
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	},
);

export const config = { matcher: [PATHS.dashboard, PATHS.post] }; // TEMPORARY MATCHERS
