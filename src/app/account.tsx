"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type SupabaseUser = {
  id: string;
  email: string;
};

export default function Account() {
  const [users, setUsers] = useState<SupabaseUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      // Supabaseの管理者APIでユーザー一覧取得（要サービスロールキー or 管理者権限）
      // 通常のanonキーではユーザー一覧取得は不可のため、ここでは疑似的に現在のユーザーのみ取得
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setError(error.message);
      } else if (data && data.user) {
        setUsers([
          {
            id: data.user.id ?? "",
            email: data.user.email ?? ""
          }
        ]);
      } else {
        setUsers([]);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 sm:p-8">
      <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-center">アカウント情報</h2>
      {loading ? (
        <div className="text-gray-400">読み込み中...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : users.length === 0 ? (
        <div className="text-gray-400">ログイン中のアカウントはありません</div>
      ) : (
        <table className="w-full max-w-xs sm:max-w-md border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="text-left">メールアドレス</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2">{user.email}</td>
                <td>
                  <button
                    className="bg-red-600 hover:bg-red-700 rounded px-3 py-1 text-white font-bold"
                    onClick={handleLogout}
                  >
                    ログアウト
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
