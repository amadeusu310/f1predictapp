import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { createBrowserClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
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
  // ...existing code...
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
          <header className="w-full max-w-2xl flex justify-between items-center mb-8">
            <Link href="/" className="text-xl font-bold hover:underline">F1優勝予想</Link>
            <nav className="flex gap-4">
              <Link href="/predict" className="hover:underline">予想</Link>
              <Link href="/account" className="hover:underline">アカウント</Link>
              <Link href="/login" className="hover:underline">ログイン</Link>
              <Link href="/register" className="hover:underline">新規登録</Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
