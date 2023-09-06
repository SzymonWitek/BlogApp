import { ROLES } from '@/common/constants';

import type { RoleKeys } from '@/common/types';

export const getAvailableRoles = () => {
	const availableRoles = Object.values(ROLES);

	return availableRoles as RoleKeys[];
};
