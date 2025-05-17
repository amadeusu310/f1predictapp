"use client";

import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push('/');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 sm:p-8">
      <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-center">ログイン</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-xs">
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
          required
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
          required
        />
        {error && <div className="text-red-500">{error}</div>}
        <button type="submit" className="bg-red-600 hover:bg-red-700 rounded p-3 font-bold">ログイン</button>
      </form>
    </main>
  );
}
