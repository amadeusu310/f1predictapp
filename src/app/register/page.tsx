"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
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
    // 仮実装: ローカルストレージに保存
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if ((users as {email: string, password: string}[]).find((u) => u.email === email)) {
      setError("このメールアドレスは既に登録されています");
      return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setSuccess("登録が完了しました。ログインしてください。");
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
