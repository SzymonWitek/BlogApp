import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { PATHS, ROLES } from './common/constants';
import { getAvailableRoles } from './utils/getAvailableRoles';

const availableRoles = getAvailableRoles();

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		if (
			request.nextUrl.pathname.startsWith(PATHS.dashboard) &&
			request.nextauth.token?.role !== ROLES.admin
		) {
			return NextResponse.rewrite(new URL(PATHS.denied, request.url));
		}

		if (
			request.nextUrl.pathname.startsWith(PATHS.dashboard) &&
			!availableRoles.includes(request.nextauth.token?.role as any) // TODO: CHANGE
		) {
			return NextResponse.rewrite(new URL('/denied', request.url));
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	},
);

// export const config = {
// matcher: [
// new RegExp('^/blog/*')
// ],
// }; //pages that require auth

export const config = { matcher: [PATHS.dashboard, PATHS.post] };
