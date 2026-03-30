import type {Metadata} from 'next';
import { Bebas_Neue, Exo_2, DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const exo = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Apex7tech | Digital Marketing Agency Kolkata',
  description: 'Apex7tech — SEO, PPC, Social Media Marketing, Ecommerce Development & Web Design. Google Certified. Based in Kolkata, serving clients globally.',
  openGraph: {
    title: 'Apex7tech Digital Marketing',
    description: 'Accelerate. Amplify. Achieve.',
    url: 'https://apex7tech.com',
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${bebas.variable} ${exo.variable} ${dmSans.variable} ${spaceMono.variable} dark`}>
      <body suppressHydrationWarning className="bg-surface text-text-light antialiased">
        {children}
      </body>
    </html>
  );
}
