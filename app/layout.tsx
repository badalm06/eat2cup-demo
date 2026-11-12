import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CUP2EAT — Eat Your Drink',
  description: 'Edible cups for chai, coffee, desserts and memorable business experiences.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
