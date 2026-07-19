import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Menu, X, ArrowRight, Twitter, Instagram, ChevronRight, Star, Sparkles, ArrowDown, ShoppingCart, Zap, ArrowLeft, BookOpen, Keyboard, Lightbulb } from 'lucide-react';
import { navLinks, mainWorks, accessories, members, tweetUrls } from './data/items';
import { newsData } from './data/news';

// pages フォルダ配下のコンポーネントをインポート
import NewsList from './pages/NewsList';
import Mona from './pages/moNa';
import Mona2 from './pages/moNa2';
import Mona2plus from './pages/moNa2plus';
import UserGuide from './pages/UserGuide';
import KeymapEditor from './pages/Keymap-Editor';
import AccessoriesList from './pages/AccessoriesList';
import TweetEmbed from './components/TweetEmbed';

// ▼▼▼ 追加：背景画像をインポートする ▼▼▼
import heroBgImage from './assets/images/common/moNa2.png';
// ▲▲▲ ここまで ▲▲▲

// ==========================================
// note カスタムアイコンコンポーネント
// ==========================================
const NoteIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.3 14.5c0-3.6 2.8-5.2 5.8-5.2 2.1 0 4.4 1 4.4 3.5v7H20v-7.6c0-4-3.2-6.3-7-6.3-3.2 0-5.7 1.5-6.5 3.1V7.2H2.7v13.4h3.8v-5.3z" />
  </svg>
);

// ==========================================
// 配列をランダムに並び替える関数（フィッシャー–イェーツのシャッフル）
// ==========================================
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// ==========================================
// 2. メインAppコンポーネント
// ==========================================
export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'moNa' | 'moNa2' | 'moNa2plus' | 'guide' | 'keymap'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const scrollContainerRef = useRef(null);
  const galleryScrollRef = useRef(null);
  const randomAccessories = useMemo(() => shuffleArray(accessories), []);
  const randomTweets = useMemo(() => shuffleArray(tweetUrls), []);


  // ニュースを日付の降順（最新順）に並び替え
  const sortedNews = useMemo(() => {
    return [...newsData].sort((a, b) => b.date.localeCompare(a.date));
  }, []);

  // スクロール検知 & アニメーション発火用Observer (ホーム画面用)
  useEffect(() => {
    if (view !== 'home') return;

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal')) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
          if (entry.target.classList.contains('reveal-left')) {
            entry.target.classList.remove('opacity-0', '-translate-x-24');
            entry.target.classList.add('opacity-100', 'translate-x-0');
          }
          if (entry.target.classList.contains('reveal-right')) {
            entry.target.classList.remove('opacity-0', 'translate-x-24');
            entry.target.classList.add('opacity-100', 'translate-x-0');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(el);
    });
    document.querySelectorAll('.reveal-left').forEach((el) => {
      el.classList.add('opacity-0', '-translate-x-24', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(el);
    });
    document.querySelectorAll('.reveal-right').forEach((el) => {
      el.classList.add('opacity-0', 'translate-x-24', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [view]);

  // アクセサリの自動スクロール処理 (ホーム画面用)
  useEffect(() => {
    if (view !== 'home') return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 280;

    const intervalId = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [view]);

  // ギャラリー（User Showcase）用の自動スクロール処理
  useEffect(() => {
    if (view !== 'home') return;

    const container = galleryScrollRef.current;
    if (!container) return;

    let autoScrollTimer;

    const startAutoScroll = () => {
      clearInterval(autoScrollTimer);
      autoScrollTimer = setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;

        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 370, behavior: 'smooth' });
        }
      }, 3000);
    };

    const stopAutoScroll = () => clearInterval(autoScrollTimer);

    startAutoScroll();

    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);
    container.addEventListener('touchstart', stopAutoScroll);
    container.addEventListener('touchend', startAutoScroll);

    return () => {
      clearInterval(autoScrollTimer);
      container.removeEventListener('mouseenter', stopAutoScroll);
      container.removeEventListener('mouseleave', startAutoScroll);
      container.removeEventListener('touchstart', stopAutoScroll);
      container.removeEventListener('touchend', startAutoScroll);
    };
  }, [view]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // === ルーティング処理（Viewの切り替え） ===
  if (view === 'moNa') return <Mona onBack={() => setView('home')} onNavigate={setView} />;
  if (view === 'moNa2') return <Mona2 onBack={() => setView('home')} onNavigate={setView} />;
  if (view === 'moNa2plus') return <Mona2plus onBack={() => setView('home')} onNavigate={setView} />;
  if (view === 'guide') return <UserGuide onBack={() => setView('home')} onNavigate={setView} />;
  if (view === 'keymap') return <KeymapEditor onBack={() => setView('home')} onNavigate={setView} />;
  if (view === 'newsList') return <NewsList onBack={() => setView('home')} onNavigate={setView} />;
  if (view === 'accessoriesList') return <AccessoriesList onBack={() => setView('home')} onNavigate={setView} />;

  // === ホーム画面のレンダリング ===
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-40 mix-blend-overlay"></div>

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/40 backdrop-blur-lg py-3 shadow-sm border-b border-white/20' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight flex items-center gap-2 group hover:opacity-80 transition-opacity">

            <span className={`font-extrabold transition-colors duration-300 ${scrolled ? 'text-slate-700 hover:text-[#3CB371]' : 'text-slate-400 hover:text-[#3CB371]'}`}>
              moNa Project
            </span>
          </a>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <button
                  key={link.name}
                  onClick={() => { setView(link.viewTarget); window.scrollTo(0, 0); }}
                  className={`relative text-sm font-bold transition-colors py-1 group ${scrolled ? 'text-slate-700 hover:text-[#3CB371]' : 'text-slate-400 hover:text-[#3CB371]'}`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => { if (view !== 'home') setView('home'); }}
                  className={`relative text-sm font-bold transition-colors py-1 group ${scrolled ? 'text-slate-700 hover:text-[#3CB371]' : 'text-slate-400 hover:text-[#3CB371]'}`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          <button className="md:hidden p-2 bg-white/50 rounded-full hover:bg-white transition-colors shadow-sm" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {navLinks.map((link) => (
          link.isPage ? (
            <button
              key={link.name}
              onClick={() => { setView(link.viewTarget); window.scrollTo(0, 0); setIsMenuOpen(false); }}
              className="text-3xl font-extrabold text-slate-800 hover:text-emerald-600 tracking-tight"
            >
              {link.name}
            </button>
          ) : (
            <a
              key={link.name}
              href={link.href}
              onClick={() => { setIsMenuOpen(false); if (view !== 'home') setView('home'); }}
              className="text-3xl font-extrabold text-slate-800 hover:text-emerald-600 tracking-tight"
            >
              {link.name}
            </a>
          )
        ))}
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-slate-200 transition-colors rounded-full shadow-sm">
          <X size={24} />
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[30s] hover:scale-105"
          style={{
            // ▼▼▼ 変更：インポートした背景画像の変数を使うように修正 ▼▼▼
            backgroundImage: `url(${heroBgImage})`,
            // ▲▲▲ ここまで ▲▲▲
          }}
        >
          <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mt-12">
          <h1 className="reveal text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight drop-shadow-xl leading-[1.1]">
            {/* 小さなボディでどこでも最大のパフォーマンスを */}
            サイト制作中...
          </h1>
          <p className="reveal text-lg md:text-xl text-white/90 font-bold mb-12 drop-shadow-md max-w-xl mx-auto leading-relaxed">
            moNa は、小さな機体に機能性・デザイン性・打鍵感のすべてを追求した<br className="md:hidden" />カスタムキーボードシリーズです。
          </p>

          <div className="reveal absolute bottom-[-20vh] md:bottom-[-25vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/90 animate-bounce">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-300">Scroll</span>
            <ArrowDown size={24} className="text-slate-300" />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-32 px-6 md:px-12 bg-white relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3 reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4 text-slate-800 tracking-tight">
              <span className="w-12 h-1.5 bg-emerald-600 rounded-full"></span>
              News
            </h2>
            <p className="text-slate-500 text-lg font-bold">最新の活動情報</p>
          </div>

          <div className="flex-1 space-y-12">
            {sortedNews.slice(0, 3).map((news, index) => (
              <article
                key={index}
                onClick={() => setSelectedNews(news)}
                className="reveal border-b border-slate-200 pb-8 last:border-0 cursor-pointer group"
              >
                <div className="flex items-center gap-5 mb-4">
                  <time className="text-base text-slate-400 font-mono font-medium tracking-wide">{news.date}</time>
                  <span className={`text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider bg-emerald-50 text-emerald-700`}>
                    {news.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors leading-snug">
                  {news.title}
                </h3>
              </article>
            ))}
            <div className="pt-6 reveal text-right md:text-left">
              <button
                onClick={() => { setView('newsList'); window.scrollTo(0, 0); }}
                className="inline-flex items-center text-base font-bold text-slate-400 hover:text-emerald-600 transition-colors gap-2 group"
              >
                すべての記事を見る
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="work" className="py-32 bg-slate-50/80 relative z-10 border-t border-slate-100">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <div className="mb-24 text-center md:text-left reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 inline-block relative">
              Works
              <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/50 -z-10 rounded-full transform -rotate-1"></span>
            </h2>
            <p className="text-slate-500 mt-4 font-bold text-lg">～製作物の紹介～</p>
          </div>

          <div className="space-y-32 mb-40">
            {mainWorks.map((work, index) => {
              return (
                <div key={work.id} className={`${work.animClass} flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
                  <div
                    className={`w-full md:w-1/2 relative group ${work.isPublic === false ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={() => {
                      if (work.isPublic !== false) {
                        setView(work.targetView);
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-emerald-900/5 rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                    <div className="relative aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-900/5">
                      <img
                        src={work.image}
                        alt={work.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 ${work.isPublic === false ? 'bg-black/20' : 'bg-black/0 group-hover:bg-black/10'} transition-colors duration-300 rounded-[2rem]`}></div>
                      <div className={`absolute bottom-6 right-6 bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 ${work.isPublic === false ? 'bg-slate-100 text-slate-500' : ''}`}>
                        {work.isPublic === false ? (
                          <>準備中 <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse ml-1"></div></>
                        ) : (
                          <>View Details <ArrowRight size={16} /></>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 space-y-8">
                    <div className="flex items-baseline gap-4">
                      <span className="text-6xl font-black text-slate-200 select-none font-mono">{work.id}</span>
                      <h3 className="text-4xl font-bold text-slate-900">{work.name}</h3>
                    </div>
                    <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>
                    <p className="text-slate-600 leading-loose text-lg font-medium">
                      {work.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {work.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* アクセサリー部分 */}
          <div className="reveal">
            <div className="flex items-end justify-between mb-8 px-2 border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-bold text-slate-800">Accessories & Parts</h3>
              <button
                onClick={() => { setView('accessoriesList'); window.scrollTo(0, 0); }}
                className="text-sm font-bold text-slate-400 hover:text-emerald-600 flex items-center gap-1 group transition-colors"
              >
                すべて表示 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x snap-mandatory"
            >
              {randomAccessories.map((item, index) => {
                const isImage = typeof item.image === 'string' ? item.image.includes('/') || item.image.includes('.') : !!item.image;

                return (
                  <a
                    key={index}
                    href={item.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="snap-start shrink-0 w-64 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col self-stretch"
                  >
                    {isImage ? (
                      <div className="aspect-square bg-slate-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="aspect-square bg-slate-50 rounded-xl mb-4 flex items-center justify-center text-slate-300 font-black text-4xl group-hover:bg-emerald-50 group-hover:text-emerald-400 transition-colors relative overflow-hidden shrink-0">
                        {item.image}
                        <div className="absolute -bottom-4 -right-4 text-emerald-100/50 text-8xl select-none pointer-events-none">🎋</div>
                      </div>
                    )}

                    <div className="flex justify-between gap-2 flex-1">
                      <div className="flex-1 min-w-0 flex flex-col h-full">
                        <h4 className="font-bold text-slate-800 text-sm mb-2 group-hover:text-emerald-700 transition-colors leading-tight line-clamp-2">
                          {item.name}
                        </h4>
                        <p className="text-sm text-slate-500 font-mono font-bold mt-auto">{item.price}</p>
                      </div>
                      <div className="w-6 h-6 shrink-0 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors mt-auto">
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <div className="mb-16 text-center reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 inline-block relative">
              Support & Guide
              <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/50 -z-10 rounded-full transform rotate-1"></span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium">購入後のセットアップから、よりディープなカスタマイズまで</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8">
            <div
              onClick={() => {
                setView('guide');
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer group bg-slate-50 rounded-[2.5rem] p-8 lg:p-10 border-2 border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden reveal-left"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-300 to-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-white border-2 border-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">User Guide</h3>
              <p className="text-slate-600 leading-relaxed mb-8 font-medium text-sm lg:text-base">
                初めての方はこちらから。内容物の確認からPCへの接続、ブラウザを使ったキーマップの変更まで、基本のセットアップ手順をご案内します。
              </p>
              <div className="inline-flex items-center text-emerald-600 font-bold group-hover:translate-x-2 transition-transform">
                ガイドを読む <ArrowRight size={18} className="ml-2" />
              </div>
            </div>

            <div
              onClick={() => {
                setView('keymap');
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer group bg-slate-50 rounded-[2.5rem] p-8 lg:p-10 border-2 border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden reveal"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-300 to-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                <Keyboard size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Keymap Editor
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-medium text-sm lg:text-base">
                ブラウザから直接キーマップを変更できます。専用ソフトのインストールは不要です。（WebHID API使用）
              </p>
              <div className="inline-flex items-center text-emerald-600 font-bold group-hover:translate-x-2 transition-transform">
                エディタを開く <ArrowRight size={18} className="ml-2" />
              </div>
            </div>

            <div className="group bg-slate-50 rounded-[2.5rem] p-8 lg:p-10 border-2 border-slate-100 relative overflow-hidden reveal-right opacity-80 cursor-default">
              <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-8 shadow-sm">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex flex-col items-start gap-2 xl:flex-row xl:items-center">
                Topics & Tips
                <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-1 rounded font-black tracking-widest uppercase mt-1 xl:mt-0">Coming Soon</span>
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-medium text-sm lg:text-base">
                もっと自分好みに。レイヤー機能の活用術やマクロ設定、打鍵感を高める静音化のコツなどの応用テクニックを紹介します。
              </p>
              <div className="inline-flex items-center text-slate-400 font-bold">
                近日公開予定
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery (User Showcase) Section */}
      <section id="gallery" className="py-24 px-0 md:px-12 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 md:px-0 mb-12 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 inline-block relative">
            Gallery
            <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/50 -z-10 rounded-full transform rotate-1"></span>
          </h2>
          <p className="text-slate-500 mt-4 font-medium">ユーザーの皆様のカスタム例をご紹介</p>
        </div>

        <div className="relative w-full reveal">
          <div
            ref={galleryScrollRef}
            className="flex overflow-x-auto gap-6 pb-8 px-6 md:px-0 no-scrollbar snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {randomTweets.map((url, index) => (
              <div key={index} className="tweet-wrapper flex-none w-[350px] snap-start">
                <TweetEmbed url={url} />
              </div>
            ))}
          </div>

          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block z-10"></div>
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block z-10"></div>
        </div>
      </section>

      {/* Member Section */}
      <section id="member" className="py-24 px-6 md:px-12 bg-slate-50/80 relative z-10 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold inline-block relative">
              Members
              <Star className="absolute -top-4 -right-6 text-yellow-400 fill-yellow-400 animate-bounce" size={24} />
            </h2>
            <div className="w-8 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {members.map((member) => (
              <div key={member.id} className="reveal flex flex-col items-center text-center p-10 rounded-[2.5rem] border-2 border-slate-200 bg-white hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 group relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-slate-50 rounded-t-[2.5rem] -z-10 group-hover:bg-emerald-50/50 transition-colors"></div>

                <div className="w-28 h-28 shrink-0 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden mb-6 text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>🐼</span>
                  )}
                </div>

                <div className="flex-1 w-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest mb-6 bg-emerald-50/50 border border-emerald-100 px-4 py-1.5 rounded-full inline-block">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-8 font-medium border-t border-b border-slate-100 py-4">
                    {member.bio}
                  </p>

                  <div className="flex gap-4 justify-center">
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1DA1F2] hover:bg-blue-50 transition-all bg-white border border-slate-200 p-3 rounded-full hover:-translate-y-1 hover:shadow-md">
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.note && (
                      <a href={member.note} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2CB696] hover:bg-emerald-50 transition-all bg-white border border-slate-200 p-3 rounded-full hover:-translate-y-1 hover:shadow-md">
                        <NoteIcon size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t-4 border-emerald-600 relative z-10 overflow-hidden">
        <div className="absolute -bottom-10 -left-10 text-[10rem] font-black text-slate-800 select-none opacity-50 pointer-events-none">moNa</div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/20">🐼</div>
              <span className="font-bold text-2xl tracking-tight">moNa Project</span>
            </div>
            <p className="text-slate-400 text-sm mt-1">Handmade Keyboards from Japan.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-bold hover:underline decoration-emerald-500 decoration-2 underline-offset-4">Top</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-bold hover:underline decoration-emerald-500 decoration-2 underline-offset-4">Contact</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-slate-800 flex justify-center md:justify-between items-center text-xs text-slate-500 font-bold">
          <p>&copy; {new Date().getFullYear()} sayu shakupan.</p>
        </div>
      </footer>

      {/* ▼ ニュース用ポップアップ ▼ */}
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
              {selectedNews.tweetUrl && (
                <div className="mt-8">
                  <TweetEmbed url={selectedNews.tweetUrl} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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