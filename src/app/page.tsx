"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    img: "/drivers/hmilton.jpg",
    description: "7度のワールドチャンピオン。経験豊富なベテラン。",
    team: "メルセデス",
    country: "イギリス",
  },
  {
    id: "3",
    name: "シャルル・ルクレール",
    img: "/drivers/leclare.jpg",
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
  {
    id: "5",
    name: "ボルトレート",
    img: "/drivers/bortpletto.jpg",
    description: "レッドブルの安定感あるセカンドドライバー。",
    team: "レッドブル",
    country: "メキシコ",
  },
  {
    id: "6",
    name: "カルロス・サインツ",
    img: "/drivers/sainz.jpg",
    description: "フェラーリの堅実なレース運び。",
    team: "フェラーリ",
    country: "スペイン",
  },
  {
    id: "7",
    name: "ジョージ・ラッセル",
    img: "/drivers/russell.jpg",
    description: "メルセデスの若き才能。将来のチャンピオン候補。",
    team: "メルセデス",
    country: "イギリス",
  },
  {
    id: "8",
    name: "オスカー・ピアストリ",
    img: "/drivers/piastori.jpg",
    description: "マクラーレンの新星。安定した速さを見せる。",
    team: "マクラーレン",
    country: "オーストラリア",
  },
  {
    id: "9",
    name: "フェルナンド・アロンソ",
    img: "/drivers/alonso.jpg",
    description: "ベテランの2度のワールドチャンピオン。",
    team: "アストンマーティン",
    country: "スペイン",
  },
  {
    id: "10",
    name: "ランス・ストロール",
    img: "/drivers/stroll.jpg",
    description: "アストンマーティンの若手ドライバー。",
    team: "アストンマーティン",
    country: "カナダ",
  },
  {
    id: "11",
    name: "ピエール・ガスリー",
    img: "/drivers/gasly.jpg",
    description: "アルピーヌのエース。安定したパフォーマンス。",
    team: "アルピーヌ",
    country: "フランス",
  },
  {
    id: "12",
    name: "エステバン・オコン",
    img: "/drivers/ocon.jpg",
    description: "アルピーヌの堅実なドライバー。",
    team: "アルピーヌ",
    country: "フランス",
  },
  {
    id: "13",
    name: "アレクサンダー・アルボン",
    img: "/drivers/albon.jpg",
    description: "ウィリアムズのエース。速さと安定感を兼ね備える。",
    team: "ウィリアムズ",
    country: "タイ",
  },
  {
    id: "14",
    name: "コラピント",
    img: "/drivers/collapint.jpg",
    description: "ウィリアムズのアメリカ人ルーキー。",
    team: "ウィリアムズ",
    country: "アメリカ",
  },
  {
    id: "15",
    name: "角田裕毅",
    img: "/drivers/tsunoda.jpg",
    description: "RBの日本人ドライバー。攻めの走りが魅力。",
    team: "RB",
    country: "日本",
  },
  {
    id: "16",
    name: "リアム・ローソン",
    img: "/drivers/lawsom.jpg",
    description: "RBのベテラン。明るいキャラクターと経験豊富な走り。",
    team: "RB",
    country: "オーストラリア",
  },
  {
    id: "17",
    name: "ニコ・ヒュルケンベルグ",
    img: "/drivers/hurkenbelg.jpg",
    description: "ハースのベテラン。安定したパフォーマンス。",
    team: "ハース",
    country: "ドイツ",
  },
  {
    id: "18",
    name: "オリバー・ベアマン",
    img: "/drivers/bearman.jpg",
    description: "ハースのデンマーク人ドライバー。",
    team: "ハース",
    country: "デンマーク",
  },
];

export default function Home() {
  const drivers = DRIVERS;

  // アニメーション用ステート
  const [showMain, setShowMain] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const animationText = "Yamashitatomoya";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (displayText.length < animationText.length) {
      timeout = setTimeout(() => {
        setDisplayText(animationText.slice(0, displayText.length + 1));
      }, 100); // 1文字ずつ100msで表示
    } else {
      // 全部表示したら1秒後にメイン画面へ
      timeout = setTimeout(() => setShowMain(true), 1000);
    }
    return () => clearTimeout(timeout);
  }, [displayText, animationText.length]);

  if (!showMain) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <span className="text-3xl sm:text-5xl font-extrabold tracking-widest text-red-600 animate-pulse select-none">
          {displayText}
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 pt-24">
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-5xl font-bold mt-1 sm:mb-4 text-center sm:text-left">
          F1優勝予想サイト
        </h1>
        <p className="mb-6 sm:mb-8 text-xl text-gray-300 text-center sm:text-left">
          F1の優勝者を予想してポイントをゲットしよう！
        </p>
        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
            2025年F1ドライバー一覧
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {drivers.map((driver) => (
              <Link
                key={driver.id}
                href={`/drivers/${driver.id}`}
                className="bg-gray-900 hover:bg-gray-800 transition "
              >
                <div className="p-4  flex flex-col items-center rounded-lg">
                  <div className="w-50 h-40 sm:w-24 sm:h-24 bg-gray-700 rounded-full mb-2 overflow-hidden">
                    <Image
                      src={driver.img ?? "/drivers/placeholder.jpg"}
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
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
