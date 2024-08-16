import { ROLES } from '@/common/constants';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username:',
					type: 'text',
					placeholder: 'Your username',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'Your password',
				},
			},
			async authorize(credentials) {
				//todo: get data from db
				const USER = {
					id: '42',
					name: 'Admin',
					password: 'admin123!',
					role: ROLES.admin,
				};

				if (
					credentials?.username === USER.name &&
					credentials?.password === USER.password
				) {
					return USER;
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.role = user.role;
			}
			return token;
		},
		async session({ session, token }) {
			if (session?.user) {
				session.user.role = token.role;
			}
			return session;
		},
	},
};
