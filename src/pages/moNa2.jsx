import React, { useEffect } from 'react';
import { ArrowLeft, ShoppingCart, ChevronRight, Zap, Shield } from 'lucide-react';

export default function Mona2({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-32">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center text-slate-500 hover:text-emerald-600 font-bold transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Home
          </button>
          <div className="font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="text-xl">🐼</span> moNa Project
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-900/5 rounded-[2.5rem] transform translate-x-4 translate-y-4"></div>
            <div className="relative aspect-[4/3] bg-white rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-slate-900/5">
              <img 
                src="https://images.unsplash.com/photo-1618384887929-003281dc0b69?auto=format&fit=crop&q=80&w=800" 
                alt="moNa 2" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">
                Product 02
              </span>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">Split</span>
                <span className="text-xs font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">Ergonomic</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
              moNa 2
            </h1>
            
            <p className="text-lg text-slate-600 leading-loose mb-10 font-medium">
              人間の骨格に寄り添う左右分離型。長時間のタイピングを「作業」から「対話」へと変えるエルゴノミクス設計。
            </p>

            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border-2 border-slate-100 shadow-sm">
              <div className="flex-1">
                <p className="text-sm text-slate-400 font-bold mb-1">Base Price</p>
                <p className="text-3xl font-black text-slate-800 font-mono">¥28,000<span className="text-sm text-slate-500 font-normal">~</span></p>
              </div>
              <button className="flex-1 bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center py-4 rounded-2xl font-bold transition-colors shadow-lg shadow-emerald-600/20 group">
                <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                購入する
              </button>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center mb-10">
            <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-800">Features</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">自然な姿勢をサポート</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                肩を開き、胸を張った状態でタイピングできる左右分離型。長時間のデスクワークによる疲労を大幅に軽減します。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">自由なレイアウト配置</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                左右の間にマウスやトラックパッドを置くなど、デスク環境に合わせた最適な作業スペースを構築できます。
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-10">
            <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-800">Specifications</h2>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <dl className="divide-y divide-slate-100">
              {[
                { label: 'Layout', value: '左右分離型レイアウト' },
                { label: 'Switches', value: 'Cherry MX 互換スイッチ対応 (ホットスワップ非対応)' },
                { label: 'Connection', value: 'USB Type-C 有線接続 (左右間はTRRSケーブル)' },
                { label: 'Firmware', value: 'QMK Firmware / VIA, Remap対応' },
                { label: 'Weight', value: '約 750g (完成時・左右合計)' },
              ].map((spec, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center py-5 px-8 hover:bg-slate-50 transition-colors">
                  <dt className="w-48 text-sm font-bold text-slate-400 mb-1 sm:mb-0 uppercase tracking-wider">{spec.label}</dt>
                  <dd className="flex-1 text-slate-800 font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm px-6 z-50">
        <div className="bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-full shadow-2xl flex items-center justify-between border border-slate-700/50">
          <div className="pl-4 font-bold tracking-wide">
            moNa 2
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2.5 rounded-full font-bold transition-colors text-sm flex items-center">
            Buy Now
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}