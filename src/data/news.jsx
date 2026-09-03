// src/data/news.jsx の先頭
import React from 'react';
// 正しいパス指定
import TweetEmbed from '../components/TweetEmbed';
import { ArrowRight } from 'lucide-react';
import tkx26Img from '../assets/images/news/tkx26_top.png';
import keymarket26Img from '../assets/images/news/keymarket26.png';
import tkx25Img from '../assets/images/news/tkx25_top.png';
import moNaAniversaryImg from '../assets/images/news/moNa_aniversary.png';

export const newsData = [
  {
    date: '2026.08.08',
    title: 'TKX2026に出展します',
    category: 'Event',
    isPublic: true,
    content: (
      <div className="space-y-4">
        <img src={tkx26Img} alt="TKX2026 出展" className="w-full rounded-xl object-cover shadow-sm mb-4" />
        <p>昨年に続き今年も2026.9.23(水)に開催される、TOKYO KEYBOARD EXPO 2026 に 「sayu/shakupan」として出店することになりました！</p>
        <p>当日 moNa2の販売等も行う予定です。ぜひ、お越しください！</p>
        <div className="mt-4 p-4 bg-slate-50 border-l-4 border-emerald-500 rounded-r-lg">
          <p className="font-bold text-slate-800 mb-2">TKX26公式ページ</p>
          <a
            href="https://tkx.yushakobo.jp/tkx2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700 underline flex items-center gap-1 w-fit"
          >
            詳細はこちら <ArrowRight size={16} />
          </a>
        </div>
      </div>
    )
  },
  {
    date: '2026.xx.xx',
    title: '公式Webサイトを開設しました',
    category: 'Info',
    isPublic: true, // true: 公開, false: 非公開
    content: (
      <div className="space-y-4">
        <p>日頃よりmoNa Projectを応援いただき、誠にありがとうございます。</p>
        <p>この度、私たちが開発しているキーボードや関連アイテムの情報をまとめた公式Webサイト（当ページ）を新しく開設いたしました。</p>
        <p>各プロダクトの魅力や詳細なスペック、User Guide、Keymap Editorなど、ユーザーの皆様に役立つコンテンツを集約しています。</p>
        <p>今後も最新情報やイベント出展のお知らせなどを発信してまいりますので、どうぞよろしくお願いいたします。</p>
      </div>
    )
  },
  {
    date: '2026.03.28',
    title: 'キーケット2026に出展しました',
    category: 'Event',
    isPublic: true,
    content: (
      <div className="space-y-4">
        <img src={keymarket26Img} alt="キーケット2026の様子" className="rounded-2xl w-full object-cover mb-4" />
        <p>3月28日に開催されたキーボードイベント「キーケット2026」に出展いたしました。</p>
        <p>当日は私たちのブースへ非常に多くの方々に足を運んでいただき、心より感謝申し上げます。実機に触れていただいた皆様から温かいお言葉をいただき、大変励みになりました！</p>
        <p>当日の様子です↓</p>
        <div className="my-6 space-y-6">
          {/* 当日の様子の後にツイートを載せる */}
          <TweetEmbed url="https://x.com/Arai_Lab/status/2037690644177797156?s=20" />
          <TweetEmbed url="https://x.com/shakupan_/status/2037366813861069213?s=20" />
        </div>
      </div>
    )
  },
  {
    date: '2025.09.23',
    title: 'TKX2025に出展しました',
    category: 'Event',
    isPublic: true,
    content: (
      <div className="space-y-4">
        <img src={tkx25Img} alt="TKX2025の様子" className="rounded-2xl w-full object-cover mb-4" />
        <p>9月23日に開催された「Tokyo Keyboard Expo (TKX) 2025」に出展いたしました。</p>
        <p>私たちにとって初めてのイベント参加ということもあり、不手際なところもあったかと思いますが、当ブースへ足を運んでくださった皆様、本当にありがとうございました！</p>
        <p>たくさんの方にmoNaを試打していただき、貴重なご意見や感想を直接お聞きすることができて大変有意義な時間となりました。</p>
        <p>当日の様子です↓</p>
        <div className="my-6 space-y-6">
          {/* 当日の様子の後にツイートを載せる */}
          <TweetEmbed url="https://x.com/Pooh_pol0/status/1970388505097646334?s=20" />
          <TweetEmbed url="https://x.com/shakupan_/status/1970138723653398699?s=20" />
        </div>
      </div>
    )
  },
  {
    date: '2024.05.20',
    title: 'moNa 2 の販売を開始しました',
    category: 'Product',
    isPublic: true,
    content: (
      <div className="space-y-4">
        <p>大変お待たせいたしました。</p>
        <p>「moNa 2」の販売を開始いたしました。</p>

        {/* moNa2.jsx へ飛ぶボタン */}
        <div className="mt-8 flex justify-center">
          <a
            href="/mona-page/#/mona2"
            className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            商品ページはこちら <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    )
  },
  {
    date: '2025.11.1',
    title: 'note更新「moNa開発１周年！ ～誕生・改良の全記録～」',
    category: 'INFO',
    isPublic: true,
    content: (
      <div className="space-y-4">
        <img src={moNaAniversaryImg} alt="moNa開発1周年" className="w-full rounded-xl object-cover shadow-sm mb-4" />
        <p>moNa Projectを開始してから、無事に1周年を迎えることができました！</p>
        <p>
          これを記念して、moNaの誕生から現在に至るまでの開発の道のりや、こだわって改良を重ねたポイントなどをまとめたnote記事を公開しました。
        </p>
        <p>
          これまでの試行錯誤の裏側や、これからの展望についても綴っています。ぜひご覧ください。
        </p>
        <div className="pt-4">
          <a
            href="https://note.com/pooh_polo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full font-bold hover:bg-emerald-100 transition-colors"
          >
            note記事を読む
          </a>
        </div>
      </div>
    )
  },
];