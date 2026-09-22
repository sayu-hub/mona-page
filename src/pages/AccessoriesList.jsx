import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { accessories } from '../data/items';

export default function AccessoriesList({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // カテゴリーごとに自動でグループ分けする処理
  const groupedAccessories = accessories.reduce((acc, item) => {
    const category = item.name.split(' ')[0];
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // 画像のパスか、従来のテキストかを判定する関数
  // （「/」や「.」が含まれていれば画像パスとみなす）
  const isImagePath = (str) => {
    return str.includes('/') || str.includes('.');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-32">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-500 hover:text-emerald-600 font-bold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Home
          </button>
          <div className="font-extrabold text-slate-800 tracking-tight">
            moNa Project
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12 animate-fade-in">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">
              Store
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tight">
            Accessories & Parts
          </h1>
          <p className="text-base text-slate-600 font-medium">
            キーキャップやアタッチメントなど、あなたのキーボードをさらに彩るおすすめのアクセサリー一覧です。
          </p>
        </div>

        {Object.entries(groupedAccessories).map(([category, items]) => (
          <div key={category} className="mb-16 last:mb-0">
            <div className="flex items-center mb-6 border-b border-slate-200 pb-3">
              <div className="w-2 h-6 bg-emerald-400 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-slate-800">{category}</h2>
              <span className="ml-3 text-sm font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                {items.length} items
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {items.map((item, index) => (
                <a 
                  key={index} 
                  href={item.isComingSoon ? undefined : item.url}
                  target={item.isComingSoon ? undefined : "_blank"}
                  rel={item.isComingSoon ? undefined : "noopener noreferrer"}
                  aria-disabled={item.isComingSoon || undefined}
                  onClick={item.isComingSoon ? (event) => event.preventDefault() : undefined}
                  className={`relative bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block flex flex-col h-full ${item.isComingSoon ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {item.isComingSoon && (
                    <div className="pointer-events-none absolute inset-x-3 top-3 z-10 rounded-lg bg-slate-900/90 px-2 py-1.5 text-center text-[10px] font-bold leading-tight text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                      商品・販売ページ準備中
                    </div>
                  )}
                  
                  {/* ▼ ここから：画像の有無で表示を切り替える処理 ▼ */}
                  {isImagePath(item.image) ? (
                    // ① 画像パスが設定されている場合（横幅に合わせる）
                    <div className="mb-4 rounded-xl overflow-hidden shrink-0 bg-slate-50 flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    // ② 画像パスがない（MATなどの文字）場合（従来の正方形デザイン）
                    <div className="aspect-square bg-slate-50 rounded-xl mb-4 flex items-center justify-center text-slate-300 font-black text-3xl group-hover:bg-emerald-50 group-hover:text-emerald-400 transition-colors relative overflow-hidden shrink-0">
                      {item.image}
                      <div className="absolute -bottom-4 -right-4 text-emerald-100/50 text-7xl select-none pointer-events-none">🎋</div>
                    </div>
                  )}
                  {/* ▲ ここまで ▼ */}

                  <div className="flex justify-between items-start gap-2 flex-1">
                    <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                      <h4 className="font-bold text-slate-800 text-sm mb-2 group-hover:text-emerald-700 transition-colors leading-tight line-clamp-2">
                        {item.name.replace(`${category} `, '')}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono font-bold mt-auto">{item.price}</p>
                    </div>
                    <div className="w-6 h-6 shrink-0 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors mt-auto">
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </main>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
