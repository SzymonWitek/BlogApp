import { NextRequestWithAuth } from 'next-auth/middleware';

import type { PathKeys, RoleKeys } from '@/common/types';
import { getAvailableRoles } from '@/utils/getAvailableRoles';

const availableRoles = getAvailableRoles();
//TODO: create checkIfAllowed instead
export const checkIfNotAllowed = (
	request: NextRequestWithAuth,
	path: PathKeys,
	requiredRole: RoleKeys | RoleKeys[] = availableRoles,
) => {
	const isPathMatching = request.nextUrl.pathname.startsWith(path);
	let isRoleMatching: boolean;

	if (Array.isArray(requiredRole)) {
		isRoleMatching = !availableRoles.includes(
			request.nextauth.token?.role as RoleKeys,
		);
	} else {
		isRoleMatching = request.nextauth.token?.role !== requiredRole;
	}
	const isAllowed = isPathMatching && isRoleMatching;

	return isAllowed;
};
