"use client";

import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      router.push('/');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 sm:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center tracking-tight">ログイン</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-xs bg-gray-900 rounded-lg p-6 shadow-lg">
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 rounded p-3 font-bold transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "ログイン中..." : "ログイン"}
        </button>
        <div className="text-center text-sm mt-2">
          アカウントをお持ちでない方は{" "}
          <a href="/register" className="text-red-400 hover:underline">新規登録</a>
        </div>
      </form>
    </main>
  );
}
