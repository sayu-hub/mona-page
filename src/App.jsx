import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Twitter, Instagram, ChevronRight, Star, Sparkles, ArrowDown, BookOpen, Lightbulb } from 'lucide-react';

// 作成したデータをインポート
import { navLinks, newsItems, mainWorks, accessories, members, tweetUrls } from './data/items';

// 作成した各ページコンポーネントをインポート
import Mona from './pages/moNa';
import Mona2 from './pages/moNa2';
import Mona2plus from './pages/moNa2plus';
import UserGuide from './pages/UserGuide';

// ==========================================
// Twitter埋め込みコンポーネント
// ==========================================
const TweetEmbed = ({ url }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const callbackName = 'twitterCallback_' + Math.random().toString(36).substring(7);
    
    window[callbackName] = (data) => {
      if (isMounted && containerRef.current) {
        containerRef.current.innerHTML = data.html;
        if (window.twttr) {
          window.twttr.widgets.load(containerRef.current);
        } else {
          if (!document.getElementById('twitter-wjs')) {
            const script = document.createElement('script');
            script.id = 'twitter-wjs';
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.charset = 'utf-8';
            document.head.appendChild(script);
          }
        }
      }
      delete window[callbackName];
    };

    const script = document.createElement('script');
    script.src = `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&callback=${callbackName}&omit_script=true`;
    script.onerror = () => {
      console.error("ツイートの読み込みに失敗しました: " + url);
      delete window[callbackName];
    };
    document.head.appendChild(script);

    return () => {
      isMounted = false;
      if (window[callbackName]) delete window[callbackName];
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, [url]);

  return (
    <div ref={containerRef} className="w-full flex justify-center min-h-[200px] items-center bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
      <div className="w-8 h-8 border-4 border-emerald-100 border-t-emerald-500 rounded-full animate-spin"></div>
    </div>
  );
};

// ==========================================
// メインAppコンポーネント
// ==========================================
export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'moNa' | 'moNa2' | 'moNa2plus' | 'guide'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollContainerRef = useRef(null);
  const galleryScrollRef = useRef(null);

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
  if (view === 'moNa') {
    return <Mona onBack={() => setView('home')} />;
  }
  if (view === 'moNa2') {
    return <Mona2 onBack={() => setView('home')} />;
  }
  if (view === 'moNa2plus') {
    return <Mona2plus onBack={() => setView('home')} />;
  }
  if (view === 'guide') {
    return <UserGuide onBack={() => setView('home')} />;
  }

  // === ホーム画面のレンダリング ===
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden relative">
      {/* 全体のノイズオーバーレイ */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-40 mix-blend-overlay"></div>

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-3 shadow-sm border-b border-white/20' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className={`w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs transition-transform duration-500 group-hover:rotate-12`}>
                🐼
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full border-2 border-white"></div>
            </div>
            <span className="font-extrabold text-slate-800">moNa Project</span>
          </a>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors py-1 group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
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
          <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-extrabold text-slate-800 hover:text-emerald-600 tracking-tight">
            {link.name}
          </a>
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=2000")',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mt-12">
          <div className="reveal mb-6 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-emerald-800 shadow-lg shadow-emerald-900/10">
            <Sparkles size={14} className="text-yellow-500" /> HANDCRAFTED IN JAPAN
          </div>
          <h1 className="reveal text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight drop-shadow-xl leading-[1.1]">
            指先に、<br className="md:hidden"/>笹の葉の<span className="text-emerald-200">揺らぎ</span>を。
          </h1>
          <p className="reveal text-lg md:text-xl text-white/90 font-bold mb-12 drop-shadow-md max-w-xl mx-auto leading-relaxed">
            機能美と静寂を追求した、<br className="md:hidden"/>ハンドメイド・キーボードチーム
          </p>
          
          <div className="reveal absolute bottom-[-20vh] md:bottom-[-15vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/90 animate-bounce">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-shadow-sm">Scroll</span>
            <ArrowDown size={24} />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 px-6 md:px-12 bg-white relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/4 reveal">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-slate-800">
              <span className="w-8 h-1 bg-emerald-600 rounded-full"></span>
              News
            </h2>
            <p className="text-slate-500 text-sm font-medium">最新の活動情報</p>
          </div>
          
          <div className="flex-1 space-y-8">
            {newsItems.map((news, index) => (
              <article key={index} className="reveal border-b border-slate-100 pb-6 last:border-0 cursor-pointer group">
                <div className="flex items-center gap-4 mb-2">
                  <time className="text-sm text-slate-400 font-mono font-medium tracking-wide">{news.date}</time>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider bg-emerald-50 text-emerald-700`}>
                    {news.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                  {news.title}
                </h3>
              </article>
            ))}
            <div className="pt-4 reveal text-right md:text-left">
              <a href="#" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-emerald-600 transition-colors gap-1 group">
                すべての記事を見る 
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="work" className="py-32 bg-slate-50/80 relative z-10">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <div className="mb-24 text-center md:text-left reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 inline-block relative">
              Works
              <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/50 -z-10 rounded-full transform -rotate-1"></span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium">こだわり抜いたプロダクトコレクション</p>
          </div>

          {/* Main Products */}
          <div className="space-y-32 mb-40">
            {mainWorks.map((work, index) => {
              // 各商品ごとの遷移先を決定
              let targetView = 'home';
              if (work.id === '01') targetView = 'moNa';
              if (work.id === '02') targetView = 'moNa2';
              if (work.id === '03') targetView = 'moNa2plus';

              return (
                <div key={work.id} className={`${work.animClass} flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
                  <div 
                    className="w-full md:w-1/2 relative group cursor-pointer"
                    onClick={() => {
                      setView(targetView);
                      window.scrollTo(0, 0); // 上にスクロール
                    }}
                  >
                    <div className="absolute inset-0 bg-emerald-900/5 rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                    <div className="relative aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-900/5">
                      <img 
                        src={work.image} 
                        alt={work.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute bottom-6 right-6 bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                        View Details <ArrowRight size={16} />
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

          {/* Accessories */}
          <div className="reveal">
            <div className="flex items-end justify-between mb-8 px-2 border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-bold text-slate-800">Accessories & Parts</h3>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 animate-pulse">
                SCROLLING... <ArrowRight size={12} />
              </span>
            </div>
            
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x snap-mandatory"
            >
              {accessories.map((item, index) => (
                <div key={index} className="snap-start shrink-0 w-64 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <div className="aspect-square bg-slate-50 rounded-xl mb-5 flex items-center justify-center text-slate-300 font-black text-4xl group-hover:bg-emerald-50 group-hover:text-emerald-400 transition-colors relative overflow-hidden">
                    {item.image}
                    <div className="absolute -bottom-4 -right-4 text-emerald-100/50 text-8xl select-none pointer-events-none">🎋</div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1 group-hover:text-emerald-700 transition-colors">{item.name}</h4>
                      <p className="text-sm text-slate-500 font-mono font-bold">{item.price}</p>
                    </div>
                    <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-24 bg-white relative z-10">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <div className="mb-16 text-center reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 inline-block relative">
              Support & Guide
              <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/50 -z-10 rounded-full transform rotate-1"></span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium">購入後のセットアップから、よりディープなカスタマイズまで</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              onClick={() => {
                setView('guide');
                window.scrollTo(0, 0); // 上にスクロール
              }} 
              className="cursor-pointer group bg-slate-50 rounded-[2.5rem] p-10 border-2 border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden reveal-left"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-300 to-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-white border-2 border-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">User Guide</h3>
              <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                初めての方はこちらから。内容物の確認からPCへの接続、ブラウザを使ったキーマップの変更まで、基本のセットアップ手順をご案内します。
              </p>
              <div className="inline-flex items-center text-emerald-600 font-bold group-hover:translate-x-2 transition-transform">
                ガイドを読む <ArrowRight size={18} className="ml-2" />
              </div>
            </div>

            <div className="group bg-slate-50 rounded-[2.5rem] p-10 border-2 border-slate-100 relative overflow-hidden reveal-right opacity-80 cursor-default">
              <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-8 shadow-sm">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                Topics & Tips
                <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-1 rounded font-black tracking-widest uppercase">Coming Soon</span>
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-medium">
                キーボードをもっと自分好みに。レイヤー機能の活用術やおすすめのマクロ設定、打鍵感を高める静音化のコツなどの応用テクニックを紹介します。
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
          <h2 className="text-3xl font-bold inline-block relative text-slate-900">
            User Showcase
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-10 rounded-full transform -rotate-1"></span>
          </h2>
          <p className="text-slate-500 mt-4 font-medium">ユーザーの皆様のカスタム例をご紹介</p>
        </div>

        <div className="relative w-full reveal">
          <div 
            ref={galleryScrollRef}
            className="flex overflow-x-auto gap-6 pb-8 px-6 md:px-0 no-scrollbar snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {tweetUrls.map((url, index) => (
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
              <div key={member.id} className="reveal flex flex-col items-center text-center p-10 rounded-[2.5rem] border-2 border-slate-100 bg-white hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 group relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-slate-50 rounded-t-[2.5rem] -z-10 group-hover:bg-emerald-50/50 transition-colors"></div>
                <div className="w-28 h-28 shrink-0 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden mb-6 text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  🐼
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
                    <a href="#" className="text-slate-400 hover:text-[#1DA1F2] hover:bg-blue-50 transition-all bg-white border border-slate-200 p-3 rounded-full hover:-translate-y-1 hover:shadow-md"><Twitter size={18} /></a>
                    <a href="#" className="text-slate-400 hover:text-[#E1306C] hover:bg-pink-50 transition-all bg-white border border-slate-200 p-3 rounded-full hover:-translate-y-1 hover:shadow-md"><Instagram size={18} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t-4 border-emerald-600 relative z-10 overflow-hidden">
        <div className="absolute -bottom-10 -left-10 text-[10rem] font-black text-slate-800 select-none opacity-50 pointer-events-none">moNa</div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/20">🐼</div>
              <span className="font-bold text-2xl tracking-tight">moNa Project</span>
            </div>
            <p className="text-slate-400 text-sm mt-2">Handmade Keyboards from Japan.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-bold hover:underline decoration-emerald-500 decoration-2 underline-offset-4">About</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-bold hover:underline decoration-emerald-500 decoration-2 underline-offset-4">Contact</a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setView('guide'); window.scrollTo(0, 0); }}
              className="text-slate-400 hover:text-white transition-colors text-sm font-bold hover:underline decoration-emerald-500 decoration-2 underline-offset-4"
            >
              User Guide
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex justify-center md:justify-between items-center text-xs text-slate-500 font-bold">
          <p>&copy; {new Date().getFullYear()} moNa Project.</p>
          <p className="flex items-center gap-2">Handcrafted with <span className="text-lg">🎋</span> & <span className="text-lg">🐼</span></p>
        </div>
      </footer>
    </div>
  );
}