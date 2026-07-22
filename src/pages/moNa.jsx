import React, { useEffect, useState, useRef } from 'react';
import {
  ArrowLeft, ShoppingCart, ChevronRight, Zap, Shield,
  Settings2, LayoutGrid, Package, Cable, Wrench, FileText,
  MousePointerClick, Mouse, ArrowUp, Sparkles
} from 'lucide-react';
import { navLinks } from '../data/items';
import TweetEmbed from '../components/TweetEmbed';

// ▼▼▼ 画像の読み込み ▼▼▼
import monaImg from '../assets/images/common/moNa.png';
import mona2Img from '../assets/images/common/moNa2.png';
import whiteMonaImg from '../assets/images/products/mona/white_mona.png';
import deviceImg from '../assets/images/products/mona/device.png';
import batteryImg from '../assets/images/products/mona/battery.png';
import connectionImg from '../assets/images/products/mona/conection.png';
import layerImg from '../assets/images/products/mona/layer.png';
// ▲▲▲ ここまで ▲▲▲

// import sampleVideo from '../assets/images/common/sample.mp4';

// 映像フェードインコンポーネント（初回表示時のみアニメーション）
function VideoFadeIn({ feature, sectionIndex }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div key={sectionIndex} className="flex flex-col w-full gap-8 md:gap-12">
      <div
        ref={ref}
        className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#0b1121] via-[#0f172a] to-slate-50 px-4 sm:px-8 py-8 sm:py-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
        <div className="max-w-3xl mx-auto">
          {/* <video
            className="w-full rounded-2xl shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            poster=""
          >
            <source src={sampleVideo} type="video/mp4" />
          </video> */}
        </div>
      </div>
      <div className="px-2 md:px-0">
        {feature.tag && <p className="text-sm font-bold text-slate-500 mb-3">{feature.tag}</p>}
        {feature.title && <h3 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight mb-4">{feature.title}</h3>}
        <div className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          {feature.description}
        </div>
      </div>
    </div>
  );
}


export default function Mona({ onBack, onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 画面を開いた最初の1回だけ一番上にスクロールする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 画像の自動スライド
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4); // 4は画像の枚数
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ギャラリー用の画像リストを定義
  const productImages = [
    { src: monaImg, label: '', tagClass: 'hidden' },
    { src: whiteMonaImg, label: 'White', tagClass: 'bg-white/90 text-slate-800' },
    // 外部URLの画像もそのまま使用
    { src: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800', label: 'Black', tagClass: 'bg-slate-900/90 text-white' },
    { src: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=800', label: 'Gray', tagClass: 'bg-slate-400/90 text-white' }
  ];

  const features = [
    // ----------------------------------------------------
    // 全幅レイアウト（Featuresの最初）
    // ----------------------------------------------------
    {
      type: 'full',
      image: mona2Img,
      description: (
        <div className="space-y-4">
          <p>moNaはkumakeyさん制作のroBaにインスパイアされ、白湯_sayuとshakupanさんで作った小型分割キーボードです。</p>
          <p>またこのキーボードはキーボードマウス一体型の元祖であるkeyballと製作者のYowkees様 がいなければ実現していないものです。Yowkeesさんのその革新的なアイデアとユーザーの利便性を追求する姿勢に深い敬意を表します。</p>
        </div>
      )
    },
    // ----------------------------------------------------
    // 既存①（左右レイアウト）
    // ----------------------------------------------------
    {
      type: 'side',
      reverse: false,
      title: "入力デバイスを一台に集約",
      image: deviceImg,
      icon: <Mouse className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
      description: (
        <div className="space-y-4">
          <p>親指で操作できるトラックボールとエンコーダを備え、moNaのみでキーボードとマウス両方の役割を担います。</p>
          <p>(マウスボタンも使用可能)</p>
        </div>
      )
    },
    // ----------------------------------------------------
    // コンパクト設計（左右レイアウト）
    // ----------------------------------------------------
    {
      type: 'side',
      reverse: true,
      title: "場所を選ばないコンパクト設計",
      image: whiteMonaImg,
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-slate-100 text-slate-700",
      description: (
        <div className="space-y-4">
          <p>小型で軽量な設計により、バッグに入れて簡単に持ち運ぶことができます。</p>
          <p>自宅のデスクはもちろん、オフィスやカフェ、外出先など、あらゆる場所でいつもの快適な作業環境を実現します。</p>
        </div>
      )
    },
    // ----------------------------------------------------
    // インタラクティブレイヤーデモ
    // ----------------------------------------------------
    {
      type: 'video',
      tag: 'カスタマイズ',
      title: 'レイヤー機能で自由にカスタマイズ。',
      description: (
        <div className="space-y-4">
          <p>
            レイヤー機能は、特定のキーを押している間だけ<strong>キーの役割を丸ごと切り替える</strong>仕組みです。上のデモで実際にレイヤーを切り替えて、キー配列がどう変わるか体験してみてください。
          </p>
          <p>
            たとえば、あるキーに<strong>通常は「A」、レイヤー2では「B」</strong>を割り当てたとします。普段そのキーを押せばAが入力されますが、レイヤー切替キーを押しながら同じキーを押すと、Bが入力されます。
          </p>
          <p>
            moNaでは複数のレイヤーを使うことで、少ないキーでも自分だけのキー配列を自由に構築できます。
          </p>
          <p>
            さらに、<strong>Mod-Tap</strong>や<strong>Combo</strong>といった高度な機能も搭載。自分好みに徹底的にカスタマイズしてみてください！
          </p>

          <div className="pt-4 mt-2">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-orange-400 rounded-full"></span>
              接続別デフォルトレイヤー
            </h4>
            <p className="mb-2">
              ノートPCやiPadなど、異なるデバイスへの接続先に応じてデフォルトのレイヤーを設定することができます。<br />
              windowsやmacなど異なるOS間でも快適に使用することが可能です。
            </p>
            <p className="text-sm">
              詳しくは<button onClick={() => { if (onNavigate) onNavigate('guide'); window.scrollTo(0, 0); }} className="text-emerald-600 font-bold hover:underline mx-1 transition-colors">Support & Guide</button>から設定方法等をご覧ください。
            </p>
          </div>
        </div>
      )
    },
    // ----------------------------------------------------
    // 既存③（左右レイアウト）
    // ----------------------------------------------------
    {
      type: 'side',
      reverse: false,
      title: "ZMK Firmwareを採用",
      image: connectionImg,
      icon: <Settings2 className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600",
      description: (
        <div className="space-y-4">
          <p>無線キーボードに最適化されたZMK Firmwareを採用し、省電力で効率的に動作します。</p>
          <p>左右間のケーブルが不要な完全無線設計で、デスク周りをスッキリさせます。</p>
          <p>最大5つのデバイスを登録可能で、ワンボタンで接続先を素早く切り替えることができます。</p>
        </div>
      )
    },
    // ----------------------------------------------------
    // 既存②（左右レイアウト）
    // ----------------------------------------------------
    {
      type: 'side',
      reverse: true,
      title: "複数の状態が視覚的にわかるLEDインジケータ",
      image: batteryImg,
      icon: <Zap className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600",
      description: (
        <div className="space-y-4">
          <p>LEDインジケータを搭載しており、現在のバッテリー残量・接続状況・マウスレイヤー遷移を一目で確認できます。</p>
        </div>
      )
    }
  ];

  return (
    // ▼ 一番親のdivに `overflow-x-hidden` を追加し、全幅画像による横揺れを防止
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-32 scroll-smooth overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={onBack} className="flex items-center text-slate-500 hover:text-emerald-600 font-bold transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Home
            </button>
          </div>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <button
                  key={link.name}
                  onClick={() => { if (onNavigate) onNavigate(link.viewTarget); window.scrollTo(0, 0); }}
                  className="relative text-sm font-bold text-slate-500 hover:text-[#3CB371] transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => { onBack(); }}
                  className="relative text-sm font-bold text-slate-500 hover:text-[#3CB371] transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">

          {/* 左側：画像ギャラリー */}
          <div className="flex flex-col gap-4">
            {/* メイン画像 */}
            <div className="relative aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100">
              <div
                className="flex w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {productImages.map((img, idx) => (
                  <div key={idx} className="w-full h-full shrink-0 relative">
                    <img
                      src={img.src}
                      alt={`moNa ${img.label}`}
                      className="w-full h-full object-cover"
                    />
                    {img.label && (
                      <span className={`absolute top-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm ${img.tagClass}`}>
                        {img.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* サムネイル一覧 */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide py-1">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-20 sm:w-24 aspect-[4/3] shrink-0 rounded-xl overflow-hidden transition-all duration-200 focus:outline-none 
                    ${activeIndex === idx
                      ? 'border-2 border-emerald-500 ring-4 ring-emerald-500/10'
                      : 'border-2 border-transparent hover:border-slate-300'
                    }`}
                >
                  <img src={img.src} alt={`thumbnail ${idx}`} className="w-full h-full object-cover" />
                  {activeIndex !== idx && (
                    <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 右側：商品情報 */}
          <div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">Product 01</span>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">42key</span>
                <span className="text-xs font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">TrackBall(Left)</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">moNa</h1>

            <p className="text-lg text-slate-600 leading-loose mb-8 font-medium">
              原点でありプロジェクト始まりのキーボード。左手側にトラックボールを搭載。
            </p>

            <div className="mb-8 p-5 bg-slate-100/60 rounded-3xl border border-slate-200/60">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                <MousePointerClick className="w-3.5 h-3.5" /> Color Variations
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { name: 'ホワイト', color: 'bg-white', border: 'border-slate-300' },
                  { name: 'ブラック', color: 'bg-slate-900', border: 'border-slate-800' },
                  { name: 'グレー', color: 'bg-slate-400', border: 'border-slate-300' }
                ].map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i + 1)}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-2xl transition-all focus:outline-none 
                      ${activeIndex === i + 1 ? 'bg-white shadow-sm border border-emerald-200 ring-2 ring-emerald-500/20' : 'border border-transparent hover:bg-slate-200'}`}
                  >
                    <span className={`w-5 h-5 rounded-full ${c.color} ${c.border} border shadow-sm inline-block transition-transform group-hover:scale-110`}></span>
                    <span className={`text-sm font-bold ${activeIndex === i + 1 ? 'text-emerald-700' : 'text-slate-600'}`}>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex-1">
                <p className="text-sm text-slate-400 font-bold mb-1">Price</p>
                <p className="text-3xl font-black text-slate-800 font-mono">¥40,000<span className="text-sm text-slate-500 font-normal"> (税込)</span></p>
              </div>
              <button className="flex-1 bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center py-4 rounded-2xl font-bold transition-colors shadow-lg shadow-emerald-600/20 group">
                <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                購入する
              </button>
            </div>
          </div>
        </div>

        <div className="mb-32 mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">Features</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">細部までこだわり抜いた、moNaならではの設計と機能。</p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {features.map((feature, i) => {
              // ▼ 全幅レイアウトの場合
              if (feature.type === 'full') {
                return (
                  <div key={i} className="flex flex-col w-full gap-8 md:gap-12">
                    {/* 画像を画面の端まで広げる（ウィジェットの枠をなくす） */}
                    <div className="w-[100vw] relative left-1/2 -translate-x-1/2">
                      <img src={feature.image} alt={feature.title} className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] object-cover" />
                    </div>
                    {/* テキスト部分は元のコンテンツ幅に収める */}
                    <div className="px-2 md:px-0">
                      {feature.tag && <p className="text-sm font-bold text-slate-500 mb-3">{feature.tag}</p>}
                      {feature.title && <h3 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight mb-4">{feature.title}</h3>}
                      <div className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                );
              }

              // ▼ 映像セクションの場合
              if (feature.type === 'video') {
                return <VideoFadeIn key={i} feature={feature} sectionIndex={i} />;
              }

              // ▼ 従来の左右レイアウトの場合
              return (
                <div key={i} className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
                  <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
                    <img src={feature.image} alt={feature.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-6">
                    <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">{feature.title}</h3>
                    <div className="text-lg text-slate-600 leading-relaxed font-medium">{feature.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 商品内容 セクション */}
        <div className="mb-24 mt-32 border-t border-slate-200 pt-24">
          <div className="flex items-center mb-10">
            <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-800">商品内容</h2>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Package />, title: "moNa キーボード本体", desc: "はんだ済みの本体" },
                { icon: <Cable />, title: "moNa 標準キーキャップ", desc: "編み込み高耐久仕様（1.5m）" },
                { icon: <Wrench />, title: "25mmトラックボール", desc: "POM製のトラックボール" },
                { icon: <FileText />, title: "商品カード" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
                  <div className="text-emerald-500 shrink-0 mt-0.5">
                    {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications セクション */}
        <div>
          <div className="flex items-center mb-10">
            <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-800">Specifications</h2>
          </div>
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <dl className="divide-y divide-slate-100">
              {[
                { label: 'Layout', value: '40%レイアウト' },
                { label: 'Colors', value: 'ホワイト / ブラック / グレー' },
                { label: 'Switches', value: 'Choc v1/v2 Lofree製スイッチ対応 (ホットスワップ)' },
                { label: 'Connection', value: '無線/有線接続対応' },
                { label: 'Firmware', value: 'ZMK Firmware, Keymap Editor/ZMK Studio対応' },
                { label: 'Weight', value: '測定中...' },
              ].map((spec, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center py-5 px-8 hover:bg-slate-50 transition-colors">
                  <dt className="w-48 text-sm font-bold text-slate-400 mb-1 sm:mb-0 uppercase tracking-wider">{spec.label}</dt>
                  <dd className="flex-1 text-slate-800 font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* 購入アクションエリア */}
        <div className="mt-32 mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-6">moNa を手に入れる</h2>
          <p className="text-slate-500 font-medium mb-10 max-w-lg">
            すべての始まりとなった、原点のキーボードをあなたの手に。
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-emerald-500/30 flex items-center group hover:-translate-y-1">
            <ShoppingCart className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            購入ページへ進む
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>

      {/* トップへ戻るボタン */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-slate-900 text-white shadow-xl transition-all duration-300 hover:bg-emerald-500 hover:-translate-y-1 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <style>{`.animate-fade-in { animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; } @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } .scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
}