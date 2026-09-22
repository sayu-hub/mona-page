import React, { useEffect, useState, useRef } from 'react';
import {
  ArrowLeft, ShoppingCart, ChevronRight, Zap, Shield,
  Settings2, LayoutGrid, Package, Cable, Wrench, FileText,
  Mouse, ArrowUp, Sparkles, ExternalLink
} from 'lucide-react';
import { navLinks } from '../data/items';
import TweetEmbed from '../components/TweetEmbed';

// import sampleVideo from '../assets/images/common/sample.mp4';

// ▼▼▼ 画像の読み込み ▼▼▼
import mona2Img from '../assets/images/common/moNa2.png';
import whitemona2Img from '../assets/images/products/mona2/white_mona2.png';
import blackmona2Img from '../assets/images/products/mona2/black_mona2.png';
import graymona2Img from '../assets/images/products/mona2/gray_mona2.png';
import deviceImg from '../assets/images/products/mona2/device.png';
import batteryImg from '../assets/images/products/mona2/battery.png';
import connectionImg from '../assets/images/products/mona2/conection.png';
import layerImg from '../assets/images/products/mona2/layer.png';
import carryImg from '../assets/images/products/carry.png';

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
          {feature.image && (
            <img 
              src={feature.image} 
              alt="Layer feature" 
              className="w-full rounded-2xl shadow-2xl" 
            />
          )}
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

export default function Mona2({ onBack, onNavigate }) {
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
    { src: mona2Img, label: '', tagClass: 'hidden' },
    { src: whitemona2Img, label: 'White', tagClass: 'bg-white/90 text-slate-800' },
    { src: blackmona2Img, label: 'Black', tagClass: 'bg-slate-900/90 text-white' },
    { src: graymona2Img, label: 'Gray', tagClass: 'bg-slate-400/90 text-white' }
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
          <p>moNaはkumakeyさん制作のroBaにインスパイアされ、白湯_sayuとshakupanで作った小型分割キーボードです。</p>
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
          <p>親指で操作できるトラックボールとエンコーダを備え、moNaだけでキーボードとマウス両方の役割を担います。</p>
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
      image: carryImg,
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
      image: layerImg,
      description: (
        <div className="space-y-4">
          <p>
            レイヤー機能は、特定のキーを押している間だけ<strong>キーの役割を丸ごと切り替える</strong>仕組みです。
          </p>
          <p>
            たとえば、あるキーに<strong>通常は「A」、レイヤー2では「B」</strong>を割り当てたとします。<br />
            普段そのキーを押せばAが入力されますが、レイヤー切替キーを押しながら同じキーを押すと、Bが入力されます。
          </p>
          <p>
            moNa2では複数のレイヤーを使うことで、少ないキーでも自分だけのキー配列を自由に構築できます。
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
              詳しくは<span className="text-emerald-600 font-bold hover:underline mx-1">Topics & Tips</span>から設定方法等をご覧ください。
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-32 scroll-smooth overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 px-6 py-4 md:fixed md:left-0 md:w-full">
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
              ) : link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-bold text-slate-500 hover:text-[#3CB371] transition-colors py-1 group flex items-center gap-1"
                >
                  {link.name}
                  <ExternalLink size={14} className="opacity-70" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { 
                    e.preventDefault();
                    onBack(); 
                    setTimeout(() => {
                      const id = link.href.replace('#', '');
                      const element = document.getElementById(id);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16 md:mt-0 md:pt-24 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start mb-16 md:mb-28">

          {/* 左側：画像ギャラリー */}
          <div className="flex flex-col gap-4">
            {/* メイン画像 */}
            <div className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden border border-slate-200">
              <div
                className="flex w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {productImages.map((img, idx) => (
                  <div key={idx} className="w-full h-full shrink-0 relative">
                    <img
                      src={img.src}
                      alt={`moNa 2 ${img.label}`}
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
                  className={`relative w-16 sm:w-24 aspect-[4/3] shrink-0 overflow-hidden transition-all duration-200 focus:outline-none
                    ${activeIndex === idx
                      ? 'outline outline-2 outline-slate-900 outline-offset-2'
                      : 'opacity-55 hover:opacity-100'
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
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 mt-1">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-[0.16em]">Product 02</span>
              <div className="flex gap-3 text-[11px] font-medium text-slate-500">
                <span>42key</span>
                <span className="before:mr-3 before:text-slate-300 before:content-['/']">TrackBall (Right)</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 mb-5 md:mb-7 tracking-[-0.055em] leading-none">moNa 2</h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed md:leading-loose mb-9 md:mb-11 font-medium">
              独立した矢印キーを追加し、実用性を高めた第2世代モデル。<br />待望のホットスワップに対応し、無限の打鍵感を探求できます。
            </p>

            <div className="mb-6 border-b border-slate-200 pb-5">
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { name: 'ホワイト', color: 'bg-white', border: 'border-slate-300' },
                  { name: 'ブラック', color: 'bg-slate-900', border: 'border-slate-800' },
                  { name: 'グレー', color: 'bg-slate-400', border: 'border-slate-300' }
                ].map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i + 1)}
                    className={`group flex items-center gap-2 py-1 transition-colors focus:outline-none
                      ${activeIndex === i + 1 ? 'text-slate-950' : 'text-slate-400 hover:text-slate-700'}`}
                  >
                    <span className={`w-5 h-5 rounded-full ${c.color} ${c.border} border shadow-sm inline-block transition-transform group-hover:scale-110`}></span>
                    <span className={`text-sm font-medium ${activeIndex === i + 1 ? 'text-slate-900' : 'text-slate-500'}`}>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-5">
              <div className="flex-1">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.14em] mb-1">Price</p>
                <p className="text-2xl md:text-3xl font-semibold text-slate-900 font-mono tracking-[-0.04em]">¥45,000<span className="text-sm text-slate-500 font-normal ml-1 tracking-normal">(税込)</span></p>
              </div>
              <button
                type="button"
                onClick={() => document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="sm:flex-1 bg-slate-900 hover:bg-slate-700 text-white flex items-center justify-center py-3.5 md:py-4 rounded-md font-bold transition-colors group"
              >
                <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                購入する
              </button>
            </div>
          </div>
        </div>

        <div className="mb-32 mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">Features</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">機能美を追求した、moNa 2 の新たなアプローチ。</p>
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

        <div className="mb-24 mt-32 border-t border-slate-200 pt-24">
          <div className="flex items-center mb-10">
            <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-800">商品内容</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 左カード */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight mb-6">
                同梱物
              </h3>
              <ul className="divide-y divide-slate-100/80">
                {[
                  { name: "キーボード本体", qty: "左右1台" },
                  { name: "キーキャップ", qty: "42個" },
                  { name: "25mmトラックボール", qty: "1個" },
                  { name: "バッテリー", qty: "2個" },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center py-4">
                    <div className="flex items-center text-slate-800 font-bold">
                      <ChevronRight className="w-5 h-5 text-emerald-500 mr-3" />
                      {item.name}
                    </div>
                    <div className="text-slate-400 font-medium">{item.qty}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 右カード */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight mb-6">
                  お客様でご用意いただくもの
                </h3>
                <ul className="divide-y divide-slate-100/80">
                  {[
                    { name: "キースイッチ", qty: "42個" },
                    { name: "USBケーブル (Type-C)", qty: "1本" },
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between items-center py-4">
                      <div className="flex items-center text-slate-800 font-bold">
                        <ChevronRight className="w-5 h-5 text-orange-400 mr-3" />
                        {item.name}
                      </div>
                      <div className="text-slate-400 font-medium">{item.qty}</div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 space-y-2">
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  ※USBケーブルはPCとの接続に必要です（データ通信対応のもの）。
                </p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  ※キースイッチをご購入の際は、本機に対応している規格かご確認ください（Choc v1/v2、Lofree製スイッチ対応）。
                </p>
              </div>
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
                { label: 'Layout', value: '40%レイアウト' },
                { label: 'Colors', value: 'ホワイト / ブラック / グレー' },
                { label: 'Switches', value: 'Choc v1/v2 Lofree製スイッチ対応 (ホットスワップ)' },
                { label: 'Connection', value: '無線/有線接続対応' },
                { label: 'Firmware', value: <span>ZMK Firmware <span className="text-slate-400 text-sm ml-2">DYA Studio対応</span></span> },
                { label: 'Size', value: '測定中...' },
                { label: 'Battery', value: '170 mAh' }
              ].filter((spec) => !['Size', 'Battery'].includes(spec.label)).map((spec, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center py-5 px-8 hover:bg-slate-50 transition-colors">
                  <dt className="w-48 text-sm font-bold text-slate-400 mb-1 sm:mb-0 uppercase tracking-wider">{spec.label}</dt>
                  <dd className="flex-1 text-slate-800 font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* 購入アクションエリア */}
        <div id="purchase" className="scroll-mt-24 mt-32 mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-[-0.03em] mb-10">moNa 2 を手に入れる</h2>
          
          <div className="max-w-3xl w-full text-left border-y border-slate-200">
            <ul className="divide-y divide-slate-200">
              <li className="flex items-start px-6 py-6">
                <span className="hidden">🔸</span>
                <div className="text-slate-700 font-medium leading-relaxed">
                  <a href="https://shakupan.booth.pm/items/6376654" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline text-lg inline-flex items-center">
                    Boothページ
                  </a>
                </div>
              </li>
              <li className="flex items-start px-6 py-5">
                <span className="hidden">🔸</span>
                <div className="text-slate-700 font-medium leading-relaxed">
                  moNaサーバ内マーケットプレイス訳あり品 中古品<br />
                  <a href="https://discord.gg/SZ3EMRdk9N" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline text-sm inline-flex items-center mt-1">
                    Discordへ参加 <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </li>
              <li className="flex items-start px-6 py-5">
                <span className="hidden">🔸</span>
                <div className="text-slate-700 font-medium leading-relaxed">
                  お苦しみmoNa（基板＋バッテリーのみの販売） <br />
                  <a href="https://note.com/shakupan/n/n285a125abbb7" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline text-sm inline-flex items-center mt-1">
                    詳細はこちら <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </li>
              <li className="flex items-start px-6 py-5">
                <span className="hidden">🔸</span>
                <div className="text-slate-700 font-medium leading-relaxed">
                  <a href="https://x.com/shakupan_" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">@shakupan_</a> または <a href="https://x.com/Pooh_pol0" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">@Pooh_pol0</a> による企画販売
                </div>
              </li>
              <li className="flex items-start px-6 py-5">
                <span className="hidden">🔸</span>
                <div className="text-slate-700 font-medium leading-relaxed">
                  TKXなどのオフラインイベント販売
                </div>
              </li>
            </ul>
          </div>
          
          <div className="border-l-2 border-rose-500 max-w-3xl w-full mt-8 px-4 py-1 text-left">
            <p className="text-sm md:text-base font-medium text-slate-600 flex items-center leading-relaxed">
              <span className="mr-3 text-lg leading-none text-rose-500">※</span>
              <span>上記以外の購入ルートの場合、サポート等は一切対応しません。</span>
            </p>
          </div>
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
