"use client";

import Image from "next/image";
import Link from "next/link";

type Driver = {
  id: string;
  name: string;
  img?: string;
  description?: string;
  team?: string;
  country?: string;
};

const DRIVERS: Driver[] = [
  {
    id: "1",
    name: "マックス・フェルスタッペン",
    img: "/drivers/verstappen.jpg",
    description: "レッドブルのエース。圧倒的な速さと安定感。",
    team: "レッドブル",
    country: "オランダ",
  },
  {
    id: "2",
    name: "ルイス・ハミルトン",
    img: "/drivers/hamilton.jpg",
    description: "7度のワールドチャンピオン。経験豊富なベテラン。",
    team: "メルセデス",
    country: "イギリス",
  },
  {
    id: "3",
    name: "シャルル・ルクレール",
    img: "/drivers/leclerc.jpg",
    description: "フェラーリの若きエース。予選での速さが武器。",
    team: "フェラーリ",
    country: "モナコ",
  },
  {
    id: "4",
    name: "ランド・ノリス",
    img: "/drivers/norris.jpg",
    description: "マクラーレンのホープ。安定したレース運び。",
    team: "マクラーレン",
    country: "イギリス",
  },
  // ...16人分のドライバーをここに追加...
];

export default function Home() {
  // Supabaseから取得せず、定数から表示
  const drivers = DRIVERS;
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 pt-24">
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
          F1優勝予想サイト
        </h1>
        <p className="mb-6 sm:mb-8 text-lg text-gray-300 text-center sm:text-left">
          F1の優勝者を予想してポイントをゲットしよう！
        </p>
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
            2025年F1ドライバー一覧
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {drivers.map((driver) => (
              <Link
                key={driver.id}
                href={`/drivers/${driver.id}`}
                className="bg-gray-900 rounded-lg p-4 flex flex-col items-center hover:bg-gray-800 transition w-full"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 rounded-full mb-2 overflow-hidden">
                  <Image
                    src={driver.img || "/next.svg"}
                    alt={driver.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="font-bold text-base mb-1 text-center">
                  {driver.name}
                </div>
                <div className="text-xs text-gray-400 mb-1 text-center">
                  {driver.team}（{driver.country}）
                </div>
                <div className="text-sm text-gray-400 text-center">
                  {driver.description}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
