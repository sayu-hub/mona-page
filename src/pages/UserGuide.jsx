import React, { useState, useEffect } from 'react';
import { BookOpen, Package, CheckCircle, Keyboard, HelpCircle, Menu, X, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';

const SectionHeading = ({ children }) => (
  <div className="flex items-center mb-8 border-b border-slate-100 pb-6">
    <div className="w-4 h-1.5 bg-emerald-500 mr-4 rounded-full"></div>
    <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
      {children}
    </h1>
  </div>
);

const Badge = ({ children, type = 'info' }) => {
  const styles = {
    info: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
  };
  return (
    <span className={`inline-block px-2.5 py-1 text-[11px] font-bold rounded ${styles[type]} tracking-widest uppercase mb-2`}>
      {children}
    </span>
  );
};

const SECTIONS = {
  introduction: {
    id: 'introduction',
    title: 'はじめに',
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>はじめに</SectionHeading>
        <div className="space-y-6 text-slate-600 leading-loose">
          <p className="text-lg font-medium text-slate-800">
            この度は、moNa（モナ）キーボードをお迎えいただきありがとうございます。
          </p>
          <p>
            このガイドでは、お手元に届いたキーボードをPCに接続し、ご自身の手になじむようにキーマップを変更して、快適にタイピングを始められるまでの基本ステップをご案内します。
          </p>
          <div className="mt-8 border-2 border-emerald-50 rounded-3xl p-8 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-200 to-emerald-400"></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">まずは基本を押さえましょう</h3>
            <p className="text-sm">
              ひとまずこのガイドの通りに進めれば、キーボードとしての基本機能がすべて使えるようになります。
              よりマニアックな設定（マクロ機能や特殊なキーコードなど）を使った「より便利にする方法」については、後日公開予定の<strong>Advanced Guide</strong>にてご紹介しますので、お楽しみに！
            </p>
          </div>
        </div>
      </div>
    )
  },
  whatsInTheBox: {
    id: 'whatsInTheBox',
    title: '商品内容の確認',
    icon: <Package className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>商品内容の確認</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-8">
          まずは箱の中身をすべて取り出し、以下のものが揃っているか確認してください。
        </p>
        <div className="bg-slate-50 aspect-video rounded-[2rem] flex flex-col items-center justify-center text-slate-400 border-2 border-slate-100 mb-10 overflow-hidden">
          <Package className="w-16 h-16 mb-4 opacity-20" />
          <span className="font-medium tracking-wide">
            [ 内容物の集合写真 ]
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-50">
            <Badge type="info">同梱物</Badge>
            <h3 className="text-lg font-bold mb-4 text-slate-800">基本セット</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2"/> キーボード本体</span>
                <span className="text-slate-400 text-sm">1台</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2"/> ゴム足</span>
                <span className="text-slate-400 text-sm">1セット</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2"/> 保証書 / サンクスカード</span>
                <span className="text-slate-400 text-sm">1枚</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-50">
            <Badge type="warning">お客様でご用意いただくもの</Badge>
            <h3 className="text-lg font-bold mb-4 text-slate-800">別途必要なもの</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-400 mr-2"/> USBケーブル (Type-C)</span>
                <span className="text-slate-400 text-sm">1本</span>
              </li>
              <li className="flex items-start pb-2 text-sm text-slate-500 mt-2">
                ※PCと通信するため「データ通信対応」のケーブルをご用意ください。充電専用ケーブルでは反応しません。
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  testing: {
    id: 'testing',
    title: '動作確認を行う',
    icon: <CheckCircle className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>動作確認を行う</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-8">
          すべてのキーが正しく反応するか、PCに接続してテストを行いましょう。
        </p>
        <div className="space-y-8">
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2">01</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">PCに接続する</h3>
              <p className="text-slate-600 leading-relaxed">
                ご用意いただいたUSBケーブルで、キーボードとPCを接続します。
                OS標準のドライバーが自動的にインストールされます。特別なソフトウェアのインストールは不要です。
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2">02</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">テストツールを開く</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                ブラウザ（Google Chrome または Microsoft Edge を推奨）で、キーボード設定ツール「Remap」のテストページにアクセスします。
              </p>
              <a href="#" className="inline-flex items-center bg-slate-800 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-slate-700 transition-colors shadow-md">
                Remap Testモードを開く <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2">03</div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-3">キーを順番に押す</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                画面上のキーボードレイアウトを見ながら、実際のキーボードのキーを左上から順番に押していきます。
                正しく反応したキーは、画面上で色が変化します。
              </p>
              <div className="bg-slate-50 h-48 rounded-3xl border-2 border-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                 [ Remap テスト画面のイメージ画像 ]
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  keymap: {
    id: 'keymap',
    title: 'キーマップの変更',
    icon: <Keyboard className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>キーマップの変更</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-8">
          動作確認が終わったら、自分好みのキー配置に変更してみましょう。専用ソフトは不要で、ブラウザ上ですすぐに変更できます。
        </p>
        <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-sm">
          <Badge type="info">STEP BY STEP</Badge>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Remapを使った変更手順</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <p className="font-bold text-slate-800 mb-1">Remapにアクセス</p>
                <p className="text-slate-600 text-sm">ブラウザで <a href="#" className="text-emerald-600 hover:underline">Remap</a> を開き、「Start Remap for your keyboard」をクリックします。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <p className="font-bold text-slate-800 mb-1">キーボードを選択</p>
                <p className="text-slate-600 text-sm">「+ Keyboard」をクリックし、ポップアップから接続されているキーボードを選択して「接続」を押します。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <p className="font-bold text-slate-800 mb-1">ドラッグ＆ドロップで配置</p>
                <p className="text-slate-600 text-sm">画面下部に表示されるキーのリストから、割り当てたいキーを上部のキーボードの図にドラッグ＆ドロップします。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <p className="font-bold text-slate-800 mb-1">キーボードに保存（Flash）</p>
                <p className="text-slate-600 text-sm">変更が終わったら、右上の<span className="inline-block bg-slate-800 text-white px-2 py-0.5 rounded mx-1 text-xs">Flash</span>ボタンを押します。これで設定がキーボード本体に記憶されます。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  troubleshooting: {
    id: 'troubleshooting',
    title: 'トラブルシューティング',
    icon: <HelpCircle className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>トラブルシューティング</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-8">
          うまく動作しない場合のよくある原因と解決方法です。
        </p>
        <div className="space-y-4">
          {[
            {
              q: "PCにキーボードとして認識されない",
              a: "使用しているUSBケーブルが「充電専用」の可能性があります。「データ通信対応」のケーブルに変更して再度お試しください。また、USBハブを経由している場合は、PCに直接接続してみてください。"
            },
            {
              q: "Remapでキーボードが一覧に表示されない",
              a: "ブラウザがGoogle Chrome または Microsoft Edgeであることを確認してください。Safariなど他のブラウザではWebHIDという通信機能に対応していないため表示されません。"
            },
            {
              q: "特定のキーが反応しない",
              a: "キースイッチが奥までしっかりと差し込まれているか確認してください。配送時の衝撃等でスイッチが少し浮いてしまっている場合があります。"
            }
          ].map((item, index) => (
            <details key={index} className="group bg-white border-2 border-slate-100 rounded-2xl">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-800 select-none">
                {item.q}
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-open:bg-emerald-50 transition-colors">
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:text-emerald-500 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
        <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
          <p className="text-slate-800 font-bold mb-2">それでも解決しない場合は？</p>
          <p className="text-sm text-slate-500 mb-6">公式Discordコミュニティ、またはお問い合わせフォームよりご連絡ください。</p>
          <a href="#" className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
            お問い合わせはこちら <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    )
  }
};

export default function UserGuide({ onBack }) {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionKeys = Object.keys(SECTIONS);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const NavigationList = () => (
    <nav className="space-y-2">
      {sectionKeys.map((key) => {
        const section = SECTIONS[key];
        const isActive = activeSection === key;
        return (
          <button
            key={key}
            onClick={() => handleNavClick(key)}
            className={`w-full flex items-center px-4 py-3.5 text-sm font-bold rounded-2xl transition-all duration-200 ${
              isActive
                ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-100'
                : 'text-slate-500 hover:bg-slate-50 border-2 border-transparent'
            }`}
          >
            <span className={`mr-3 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`}>
              {section.icon}
            </span>
            {section.title}
          </button>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <header className="md:hidden sticky top-0 z-20 bg-white border-b border-slate-100 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-xl">
          <ArrowRight className="w-6 h-6 rotate-180" />
        </button>
        <div className="font-black text-lg text-slate-800 tracking-tight">
          User Guide
        </div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -mr-2 text-slate-600 hover:bg-slate-50 rounded-xl">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] flex">
          <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative flex-1 flex flex-col max-w-[280px] w-full bg-white shadow-2xl h-full animate-fade-in">
            <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100">
              <span className="font-black text-lg">目次</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-slate-400 hover:bg-slate-50 rounded-xl">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <NavigationList />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto flex">
        <aside className="hidden md:flex flex-col w-72 shrink-0 h-screen sticky top-0 border-r border-slate-100 bg-white">
          <div className="p-8 pb-4">
            <button onClick={onBack} className="flex items-center text-slate-500 hover:text-emerald-600 mb-6 font-bold transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> ホームに戻る
            </button>
            <h2 className="text-xl font-black text-slate-800 tracking-tight">
              moNa<br/>
              <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">User Guide</span>
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <NavigationList />
          </div>
          <div className="p-6 text-xs font-bold text-slate-300">
            © {new Date().getFullYear()} moNa Project
          </div>
        </aside>

        <main className="flex-1 min-w-0 p-6 md:p-12 lg:p-16">
          <div className="max-w-2xl">
            {SECTIONS[activeSection].content}

            <div className="mt-20 pt-8 border-t border-slate-100 flex justify-between">
              {sectionKeys.indexOf(activeSection) > 0 ? (
                <button onClick={() => handleNavClick(sectionKeys[sectionKeys.indexOf(activeSection) - 1])} className="flex items-center px-5 py-3 rounded-full hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180 text-slate-400" />
                  <span className="font-bold text-slate-600">
                    {SECTIONS[sectionKeys[sectionKeys.indexOf(activeSection) - 1]].title}
                  </span>
                </button>
              ) : <div></div>}

              {sectionKeys.indexOf(activeSection) < sectionKeys.length - 1 ? (
                <button onClick={() => handleNavClick(sectionKeys[sectionKeys.indexOf(activeSection) + 1])} className="flex items-center px-6 py-3 rounded-full bg-white border-2 border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all text-slate-800">
                  <span className="font-bold mr-2">
                    {SECTIONS[sectionKeys[sectionKeys.indexOf(activeSection) + 1]].title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                </button>
              ) : <div></div>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}