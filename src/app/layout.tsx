import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Navbar } from '@/components/UI';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: 'Documentation blog',
  description: 'Documentation blog for ui design system'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} text-white min-h-screen bg-bgPrimary`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
