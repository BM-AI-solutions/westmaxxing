
import type {Metadata} from 'next';
import {Creepster} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import FireParticles from '@/components/fire-particles';

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Decision Points: Inferno Edition',
  description: 'Autonomous AI Ecosystem for Passive Income Generation - Now with a Hellish Twist!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={creepster.className}>
      <body className="bg-black text-red-500">
        <FireParticles />
        <div className="relative z-10">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
