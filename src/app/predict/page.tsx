"use client";

import Image from "next/image";
import { useState } from "react";

const DRIVERS = [
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
  // ...他のドライバーも同様に追加...
];

export default function Predict() {
  const [selected, setSelected] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  const driver = DRIVERS.find((d) => d.id === selected);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 sm:p-8">
      <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-center">優勝者予想</h2>
      <label htmlFor="driver-select" className="mb-2 text-gray-300 text-center w-full max-w-xs">
        ドライバー選択
      </label>
      <select
        id="driver-select"
        title="ドライバー選択"
        value={selected}
        onChange={handleChange}
        className="mb-6 p-3 rounded bg-gray-800 border border-gray-700 text-white w-full max-w-xs"
      >
        <option value="">ドライバーを選択</option>
        {DRIVERS.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>
      {driver && (
        <div className="bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center w-full max-w-xs">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 rounded-full mb-2 overflow-hidden">
            <Image
              src={driver.img || "/next.svg"}
              alt={driver.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="font-bold text-base mb-1 text-center">{driver.name}</div>
          <div className="text-xs text-gray-400 mb-1 text-center">
            {driver.team}（{driver.country}）
          </div>
          <div className="text-sm text-gray-400 text-center">
            {driver.description}
          </div>
        </div>
      )}
    </main>
  );
}
