# Supabaseでのアカウント管理・認証の操作まとめ

## 1. プロジェクト準備
- Supabaseのプロジェクトを作成
- 「Authentication」→「Settings」でEmail認証を有効化（デフォルトでON）
- プロジェクトのAPIキーとURLを取得し、`.env.local`に設定

```
NEXT_PUBLIC_SUPABASE_URL=（あなたのURL）
NEXT_PUBLIC_SUPABASE_ANON_KEY=（あなたのanonキー）
```

## 2. パッケージインストール
```
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

## 3. サインアップ（新規登録）
```ts
const { error } = await supabase.auth.signUp({ email, password });
```
- メール認証が有効な場合、確認メールが送信される

## 4. ログイン
```ts
const { error } = await supabase.auth.signInWithPassword({ email, password });
```

## 5. ログアウト
```ts
await supabase.auth.signOut();
```

## 6. 現在のユーザー取得
```ts
const { data: { user } } = await supabase.auth.getUser();
```

## 7. ユーザー一覧の管理
- Supabase管理画面「Authentication」→「Users」で確認・削除可能

## 8. 注意事項
- サインアップ時はメール認証が必要な場合あり（設定による）
- パスワードリセットもSupabaseのAPIで可能
- ユーザー情報の追加属性（role等）は管理画面やAPIで付与可能

---

### 参考
- [Supabase Auth公式ドキュメント](https://supabase.com/docs/guides/auth)
- [Next.jsでのSupabase認証サンプル](https://supabase.com/docs/guides/auth/quickstarts/nextjs)
