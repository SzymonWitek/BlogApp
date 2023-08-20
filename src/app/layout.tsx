import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Navbar } from '@/components/UI';
import { getPostsMetadata } from '@/features/BlogPosts/utils/getPostsMetadata';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
				<ToastContainer
					toastClassName={
						'relative flex mx-auto py-3 w-max min-h-10 rounded-md justify-between overflow-hidden cursor-pointer tracking-wide border-2 border-gray-800 bg-bgPrimary mb-2'
					}
				/>
			</body>
		</html>
	);
}
