"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient"; // 既存のsupabaseClientを利用

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!email || !password) {
      setError("メールアドレスとパスワードを入力してください");
      return;
    }
    if (password !== confirm) {
      setError("パスワードが一致しません");
      return;
    }

    // Supabase Authでサインアップ
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
      return;
    }
    setSuccess("登録が完了しました。メール認証を確認してください。");
    setTimeout(() => router.push("/login"), 1500);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 sm:p-8">
      <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-center">新規登録</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full max-w-xs">
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
        <input
          type="password"
          placeholder="パスワード（確認）"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
          required
        />
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}
        <button type="submit" className="bg-red-600 hover:bg-red-700 rounded p-3 font-bold">新規登録</button>
      </form>
    </main>
  );
}
