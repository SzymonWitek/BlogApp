import { ROLES } from '@/common/constants';

export const getAvailableRoles = () => {
	const availableRoles = Object.values(ROLES);

	return availableRoles;
};
