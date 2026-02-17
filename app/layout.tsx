import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/Analytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aldor and Scryers Reputation Calculator',
  description:
    'Free Aldor and Scryers reputation calculator for World of Warcraft. Calculate how many Marks, Signets, Fel Armaments or Arcane Tomes you need to reach Exalted and chooses the cheapest option. Includes human racial bonus and cost analysis.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        {children}
        <Footer />
        <GoogleAnalytics GA_ID="G-W7F7BDXE3S" />
      </body>
    </html>
  );
}
