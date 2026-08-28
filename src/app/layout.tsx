import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ExcelSimulator - Platform Interaktif Belajar Rumus Excel',
  description: 'Simulasi dan latihan interaktif rumus Excel untuk menguasai SUM, AVERAGE, MAX, COUNTIF, dan IF dengan studi kasus dunia nyata.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased font-sans bg-slate-100 text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
