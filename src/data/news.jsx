// src/data/news.jsx の先頭
import React from 'react';
// 正しいパス指定
import TweetEmbed from '../components/TweetEmbed';
import { ArrowRight } from 'lucide-react';

export const newsData = [
  {
    date: '2026.07.22',
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
        <p>3月28日に開催されたキーボードイベント「キーケット2026」に出展いたしました。</p>
        <p>当日は私たちのブースへ非常に多くの方々に足を運んでいただき、心より感謝申し上げます。実機に触れていただいた皆様から温かいお言葉をいただき、大変励みになりました！</p>
        <p>当日の様子です↓</p>
        <img src={'../assets/images/news/event-photo.png'} alt="キーケット2026の様子" className="rounded-2xl w-full" />
        <div className="my-6">
          {/* 当日の様子の後にツイートを載せる */}
          <TweetEmbed url="https://x.com/Pooh_pol0/status/2018878320671387878" />
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
        <p>9月23日に開催された「Tokyo Keyboard Expo (TKX) 2025」に出展いたしました。</p>
        <p>私たちにとって初めてのイベント参加ということもあり、不手際なところもあったかと思いますが、当ブースへ足を運んでくださった皆様、本当にありがとうございました！</p>
        <p>たくさんの方にmoNaを試打していただき、貴重なご意見や感想を直接お聞きすることができて大変有意義な時間となりました。</p>
        <p>当日の様子です↓</p>
        <img src={'../assets/images/news/event-photo.png'} alt="TKX2025の様子" className="rounded-2xl w-full" />
        <div className="my-6">
          {/* 当日の様子の後にツイートを載せる */}
          <TweetEmbed url="https://x.com/Pooh_pol0/status/2018878320671387878" />
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

        {/* ▼ こんな感じで記事の中に直接ツイートを埋め込めます！ ▼ */}
        <div className="my-6">
          <TweetEmbed url="https://x.com/Pooh_pol0/status/2018878320671387878" />
        </div>

        {/* moNa2.jsx へ飛ぶボタン */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'moNa2' }))}
            className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            商品ページはこちら <ArrowRight className="ml-2 w-5 h-5" />
          </button>
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
        <p>5月26日(日)に開催される「技術書典16」にmoNa Projectとして出展いたします。</p>
        <p>当日は実機に触れられる展示スペースもご用意しております。</p>
        <p>
          ブース番号等は追って
          {/* ↓ リンク（aタグ）を使った例 ↓ */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-1 text-emerald-600 font-bold hover:underline">
            公式Twitter
          </a>
          にて告知いたしますので、ぜひ遊びに来てください！
        </p>
      </div>
    )
  },
];