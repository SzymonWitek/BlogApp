import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Navbar } from '@/components/UI';
import { getPostsMetadata } from '@/features/BlogPosts/utils/getPostsMetadata';
import './globals.css';

const roboto = Roboto({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
	style: ['normal', 'italic'],
});

export const metadata: Metadata = {
	title: 'Documentation blog',
	description: 'Documentation blog for ui design system',
};

interface RootLayoutProps {
	children: React.ReactNode;
}

const posts = getPostsMetadata();

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} text-slate-500 min-h-screen bg-bgPrimary`}>
				<Navbar posts={posts} />
				{children}
			</body>
		</html>
	);
}
