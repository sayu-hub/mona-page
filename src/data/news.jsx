// src/data/news.jsx の先頭
import React from 'react';
// 正しいパス指定
import TweetEmbed from '../components/TweetEmbed'; 

export const newsData = [
  {
    date: '2024.05.20',
    title: 'moNa 2 の販売を開始しました',
    category: 'Product',
    content: (
      <div className="space-y-4">
        <p>大変お待たせいたしました。</p>
        <p>「moNa 2」の販売を開始いたしました。</p>
        
        {/* ▼ こんな感じで記事の中に直接ツイートを埋め込めます！ ▼ */}
        <div className="my-6">
          <TweetEmbed url="https://x.com/Pooh_pol0/status/2018878320671387878" />
        </div>

        <p>真鍮ウェイトによる極上の打鍵感と、ワイヤレスの快適さをぜひご体感ください。</p>
      </div>
    )
  },
  {
    date: '2025.09.23',
    title: 'TKX2025に出展しました',
    category: 'Event',
    content: (
      <div className="space-y-4">
        <p>9月23日に開催された「Tokyo Keyboard Expo 2025」に個人出展させていただきました。</p>
        <p>当日の様子です！</p>
        

        {/* ② src={ } の中に、画像リンクを入れる*/}
        <img src={'../assets/images/news/event-photo.png'} alt="イベントの様子" className="rounded-2xl w-full" />
        
      </div>
    )
  },
  {
    date: '2026.XX.XX',
    title: '公式Webサイトを製作しました',
    category: 'Info',
    content: (
      <div className="space-y-4">
        <p>moNa Projectの公式Webサイトを全面リニューアルいたしました。</p>
        <p>より見やすく、各プロダクトの魅力が伝わるデザインへと刷新しています。</p>
        <p>User GuideやKeymap Editorなどの機能なども順次追加していく予定ですので、是非ご活用ください。</p>
      </div>
    )
  },
  {
    date: '2026.03.28',
    title: 'キーケット2026に出展しました',
    category: 'Event',
    content: (
      <div>
        <p>当日の様子です！</p>
        {/* ② src={ } の中に、画像リンクを入れる*/}
        <img src={'../assets/images/news/event-photo.png'} alt="イベントの様子" className="rounded-2xl w-full" />
      </div>
    )
  },
  {
    date: '2025.11.1',
    title: 'note更新「moNa開発１周年！ ～誕生・改良の全記録～」',
    category: 'Event',
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
        </p>      </div>
    )
  },
];