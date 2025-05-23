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
      <head>
        
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <header className="w-full fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-red-600 shadow">
          <div className="max-w-5xl mx-auto flex justify-between items-center py-3 px-4 sm:px-8">
            <Link href="/" className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span className="text-red-600 font-black">F1</span>
              <span className="font-black">優勝予想</span>
            </Link>
            <nav className="flex gap-4 text-base font-bold">
              <Link href="/predict" className="hover:text-red-500 transition text-white">予想</Link>
              <Link href="/login" className="hover:text-red-500 transition text-white">ログイン</Link>
              <Link href="/register" className="hover:text-red-500 transition text-white">新規登録</Link>
            </nav>
          </div>
        </header>
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
