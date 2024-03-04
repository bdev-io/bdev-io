import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
import Header from '@/components/shared/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://bdev.io'),
  title: 'BDEV.IO',
  description: 'Dive into the world of programming, hacking, and cutting-edge technologies at bdev.io. Explore tutorials, insights, and resources to master coding languages, cybersecurity, and innovative tech realms.',
  authors: [
    { url: 'https://bdev.io', name: 'bdev-io' },
  ],
  generator: 'bdev.io',
  applicationName: 'BDEV.IO',
  referrer: 'origin-when-cross-origin',
  creator: 'ShellcodeSniper',
  publisher: 'KuuwangE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    '컴퓨터 해킹',
    '프로그래밍',
    '컴퓨터 공학',
    '기술 블로그',
    '정보 보안',
    '기술 동향',
    '네트워크 보안',
  ],
  openGraph: {
    images: [],
    title: 'BDEV.IO',
    type: 'website',
    url: 'https://bdev.io',
    emails: ['public@bdev.io'],
    ttl: 60,

  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" style={{ height: '100%' }}>
      <body className={'None'}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
