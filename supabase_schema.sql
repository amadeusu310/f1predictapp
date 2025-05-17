-- ドライバー情報テーブル
CREATE TABLE drivers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  img text,
  description text,
  team text,
  country text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 予想テーブル
CREATE TABLE predictions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  driver_id uuid REFERENCES drivers(id),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 優勝者テーブル
CREATE TABLE winners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id uuid REFERENCES drivers(id),
  year int NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- ポイント履歴テーブル
CREATE TABLE points (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  points int NOT NULL,
  reason text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);
