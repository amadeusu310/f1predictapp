import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'F1優勝予想サイト',
  description: 'F1の優勝予想とポイント分配ができるサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <header className="w-full max-w-2xl mx-auto flex justify-between items-center py-6 px-4 sm:px-0 fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
          <Link href="/" className="text-xl font-bold hover:underline">F1優勝予想</Link>
          <nav className="flex gap-4">
            <Link href="/predict" className="hover:underline">予想</Link>
            <Link href="/account" className="hover:underline">アカウント</Link>
            <Link href="/login" className="hover:underline">ログイン</Link>
            <Link href="/register" className="hover:underline">新規登録</Link>
          </nav>
        </header>
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
