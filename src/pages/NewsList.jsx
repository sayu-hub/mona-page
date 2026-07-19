// src/pages/NewsList.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronRight } from 'lucide-react';
import { newsData } from '../data/news';

export default function NewsList({ onBack }) {
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedNews = [...newsData].filter(n => n.isPublic !== false).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-32">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center text-slate-500 hover:text-emerald-600 font-bold transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Home
          </button>
          <div className="font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="text-xl">🐼</span> moNa Project
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 animate-fade-in">
        <div className="mb-12 border-b border-slate-200 pb-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">News</h1>
          <p className="text-slate-500 font-medium">これまでの活動情報やお知らせの一覧です</p>
        </div>

        {/* ニュース一覧リスト */}
        <div className="space-y-6">
          {/* ▼ newsData を sortedNews に変更し、key を index にする ▼ */}
          {sortedNews.map((news, index) => (
            <article 
              key={index} 
              onClick={() => setSelectedNews(news)}
              className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer group flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
              <div className="flex items-center gap-4 md:w-48 shrink-0">
                <time className="text-sm text-slate-400 font-mono font-medium">{news.date}</time>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider bg-emerald-50 text-emerald-700`}>
                  {news.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors flex-1">
                {news.title}
              </h3>
              <div className="hidden md:flex w-10 h-10 rounded-full bg-slate-50 items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <ChevronRight size={20} />
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* ポップアップ（モーダル）部分 */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedNews(null)}></div>
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-3">
                <time className="text-sm text-slate-500 font-mono font-medium">{selectedNews.date}</time>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider bg-emerald-50 text-emerald-700">
                  {selectedNews.category}
                </span>
              </div>
              <button onClick={() => setSelectedNews(null)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 sm:p-10 overflow-y-auto no-scrollbar">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-8 leading-tight">
                {selectedNews.title}
              </h2>
              <div className="text-slate-600 leading-loose font-medium whitespace-pre-wrap">
                {selectedNews.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}