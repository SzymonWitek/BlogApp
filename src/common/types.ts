import { PATHS, ROLES } from './constants';

export type RoleKeys = (typeof ROLES)[keyof typeof ROLES];

export type PathKeys = (typeof PATHS)[keyof typeof PATHS];
