import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const faqData = [
  {
    category: "商品について",
    items: [
      { q: "完成品は販売していますか？", a: "現在は自作キットのみの販売となっております。組み立てにははんだ付け等が必要なモデルもございますので、各商品ページをご確認ください。" },
      { q: "キースイッチやキーキャップは付属しますか？", a: "基本キットにはキースイッチやキーキャップは付属しておりません。別途お好みのものをご用意ください。" },
    ]
  },
  {
    category: "注文・発送について",
    items: [
      { q: "送料はいくらですか？", a: "全国一律500円となります。一定金額以上のご購入で送料無料となるキャンペーンを実施する場合もございます。" },
      { q: "注文から発送までどのくらいかかりますか？", a: "通常、ご注文確定から3〜5営業日以内に発送いたします。（在庫状況やイベント出展前後により遅れる場合がございます）" },
    ]
  },
  {
    category: "サポート・保証",
    items: [
      { q: "組み立てに失敗してしまった場合、サポートはありますか？", a: "物理的な破損等を除き、Discordコミュニティ等で可能な限りサポートさせていただきます。ご質問はお気軽にお寄せください。" },
      { q: "初期不良があった場合はどうすればよいですか？", a: "商品到着後7日以内にContactよりご連絡ください。状態を確認のうえ、パーツの交換等対応させていただきます。" },
    ]
  }
];

export default function FAQ({ onBack }) {
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
        <div className="mb-12 border-b border-slate-200 pb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">FAQ</h1>
          <p className="text-slate-500 font-medium">よくあるご質問</p>
        </div>

        <div className="space-y-12">
          {faqData.map((section, cIdx) => (
            <div key={cIdx}>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-emerald-500 rounded-full inline-block"></span>
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, iIdx) => {
                  const key = `${cIdx}-${iIdx}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={iIdx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all hover:border-emerald-200">
                      <button 
                        onClick={() => toggleItem(cIdx, iIdx)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                      >
                        <span className="font-bold text-slate-800 pr-8">{item.q}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                      </button>
                      <div 
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="text-slate-600 leading-relaxed font-medium pt-2 border-t border-slate-100">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
