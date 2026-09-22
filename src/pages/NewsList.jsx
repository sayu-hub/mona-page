// src/pages/NewsList.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronRight, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getNewsPath, newsData } from '../data/news';

const getCategoryColor = (category) => {
  switch (category?.toLowerCase()) {
    case 'info': return 'bg-blue-50 text-blue-700';
    case 'product': return 'bg-purple-50 text-purple-700';
    case 'event': default: return 'bg-emerald-50 text-emerald-700';
  }
};

export default function NewsList({ onBack }) {
  const navigate = useNavigate();
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedNews ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedNews]);

  const closeNews = () => {
    setSelectedNews(null);
  };

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
            moNa Project
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
          {sortedNews.map((news) => (
            <article
              key={news.id}
              onClick={() => setSelectedNews(news)}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
              <div className="flex items-center gap-4 md:w-48 shrink-0">
                <time className="text-sm text-slate-400 font-mono font-medium">{news.date}</time>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider ${getCategoryColor(news.category)}`}>
                  {news.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-600 transition-colors flex-1">
                {news.title}
              </h3>
              <div className="hidden md:flex w-10 h-10 rounded-xl bg-slate-50 items-center justify-center text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                <ChevronRight size={20} />
              </div>
            </article>
          ))}
        </div>
      </main>

      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={closeNews} />
          <div className="relative flex w-full max-w-2xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
              <div className="flex items-center gap-3">
                <time className="font-mono text-sm font-medium text-slate-500">{selectedNews.date}</time>
                <span className={`rounded-sm px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${getCategoryColor(selectedNews.category)}`}>
                  {selectedNews.category}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => navigate(getNewsPath(selectedNews))}
                  className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                  aria-label="記事ページを全画面表示で開く"
                  title="記事ページを開く"
                >
                  <Maximize2 size={20} />
                </button>
                <button onClick={closeNews} className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700" aria-label="ニュースを閉じる">
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="no-scrollbar overflow-y-auto p-6 sm:p-10">
              <h2 className="mb-8 text-2xl font-black leading-tight text-slate-800 sm:text-3xl">
                {selectedNews.title}
              </h2>
              <div className="whitespace-pre-wrap font-medium leading-loose text-slate-600">
                {selectedNews.content}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
