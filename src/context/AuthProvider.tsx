'use client';

import { SessionProvider } from 'next-auth/react';

import type { ReactNode } from 'react';

interface AuthProviderProps {
	children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
	return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;
