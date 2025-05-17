import Image from "next/image";
import { notFound } from "next/navigation";

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

// 型定義をNext.jsのPagePropsに合わせて修正
export async function generateStaticParams() {
	return DRIVERS.map((driver) => ({ id: driver.id }));
}

// Next.js App Routerの動的ルートでbuildエラーを防ぐため、export const dynamic = "force-static" を追加
export const dynamic = "force-static";

export default function DriverDetail({ params }: { params: { id: string } }) {
	const driver = DRIVERS.find((d) => d.id === params.id);
	if (!driver) return notFound();
	return (
		<main className="flex flex-col items-center min-h-screen bg-black text-white p-4 sm:p-8 pt-16 sm:pt-24">
			<div className="bg-gray-900 rounded-lg p-4 sm:p-8 flex flex-col items-center max-w-xs sm:max-w-md w-full">
				<div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-700 rounded-full mb-4 overflow-hidden">
					<Image
						src={driver.img || "/next.svg"}
						alt={driver.name}
						width={128}
						height={128}
						className="object-cover w-full h-full"
					/>
				</div>
				<h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
					{driver.name}
				</h1>
				<div className="text-base sm:text-lg text-gray-400 mb-2 text-center">
					{driver.team}（{driver.country}）
				</div>
				<div className="text-sm sm:text-base text-gray-300 mb-4 text-center">
					{driver.description}
				</div>
			</div>
		</main>
	);
}
