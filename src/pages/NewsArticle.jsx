import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { newsData } from '../data/news';

const getCategoryColor = (category) => {
  switch (category?.toLowerCase()) {
    case 'info': return 'bg-blue-50 text-blue-700';
    case 'product': return 'bg-purple-50 text-purple-700';
    case 'event': default: return 'bg-emerald-50 text-emerald-700';
  }
};

export default function NewsArticle() {
  const navigate = useNavigate();
  const { newsId } = useParams();
  const news = newsData.find((item) => item.id === newsId && item.isPublic !== false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [newsId]);

  if (!news) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-24">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button onClick={() => navigate('/')} className="group flex items-center font-bold text-slate-500 transition-colors hover:text-emerald-600">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" /> Home
          </button>
          <div className="flex items-center gap-2 font-extrabold tracking-tight text-slate-800">
            moNa Project
          </div>
          <div className="w-20" />
        </div>
      </header>

      <main className="mx-auto mt-12 max-w-4xl px-6 animate-fade-in">
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10">
          <div className="mb-8 flex items-center gap-3 border-b border-slate-200 pb-6">
            <time className="font-mono text-sm font-medium text-slate-500">{news.date}</time>
            <span className={`rounded-sm px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${getCategoryColor(news.category)}`}>
              {news.category}
            </span>
          </div>
          <h1 className="mb-8 text-3xl font-black leading-tight tracking-tight text-slate-800 sm:text-4xl">
            {news.title}
          </h1>
          <div className="whitespace-pre-wrap font-medium leading-loose text-slate-600">
            {news.content}
          </div>
        </article>
      </main>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
