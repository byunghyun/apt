import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import ErrorRoot from './error';
import AptHeader from '@/components/layout/AptHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aptner Coding Test',
  description: 'byunghyunWoo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <ErrorBoundary errorComponent={ErrorRoot}>
          <div className='flex flex-col min-h-screen'>
            <AptHeader />
            {children}
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
