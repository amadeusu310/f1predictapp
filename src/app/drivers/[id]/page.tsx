import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

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

// 型エラー回避のため、generateStaticParamsの返り値の型を明示
export async function generateStaticParams(): Promise<{ id: string }[]> {
	return DRIVERS.map((driver) => ({ id: driver.id }));
}

// Next.js App Routerの動的ルートでbuildエラーを防ぐため、export const dynamic = "force-static" を追加
export const dynamic = "force-static";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DriverDetail(props: any) {
	const params = props?.params as { id: string };
	const driver = DRIVERS.find((d) => d.id === params?.id);
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
				<Link href="/" className="hover:underline text-blue-500">
				 戻る
				 </Link>
			</div>
		</main>
	);
}
