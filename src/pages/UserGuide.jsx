import React, { useState, useEffect } from 'react';
import { BookOpen, Package, CheckCircle, Keyboard, HelpCircle, Menu, X, ChevronRight, ExternalLink, ArrowRight, Wrench } from 'lucide-react';

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
              よりマニアックな設定（マクロ機能や特殊なキーコードなど）を使った「より便利にする方法」については、後日公開予定の<strong>Topics & Tips</strong>にてご紹介しますので、お楽しみに！
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
            <h3 className="text-xl font-black text-slate-800 tracking-tight mb-6">同梱物</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2"/> キーボード本体</span>
                <span className="text-slate-400 text-sm">左右1台</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2"/> キーキャップ</span>
                <span className="text-slate-400 text-sm">42個</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2"/> 25mmトラックボール</span>
                <span className="text-slate-400 text-sm">1個</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2"/> バッテリー</span>
                <span className="text-slate-400 text-sm">2個</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2"/> サンクスカード</span>
                <span className="text-slate-400 text-sm">1枚</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-50">
            <h3 className="text-xl font-black text-slate-800 tracking-tight mb-6">お客様でご用意いただくもの</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-400 mr-2"/> キースイッチ</span>
                <span className="text-slate-400 text-sm">42個</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-400 mr-2"/> USBケーブル (Type-C)</span>
                <span className="text-slate-400 text-sm">1本</span>
              </li>
              <li className="flex items-start pb-2 text-sm text-slate-500 mt-4 flex-col gap-2">
                <span>※USBケーブルはPCとの接続に必要です（データ通信対応のもの）。</span>
                <span>※キースイッチをご購入の際は、本機に対応している規格かご確認ください（Choc v1/v2、Lofree製スイッチ対応）。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  assembly: {
    id: 'assembly',
    title: '本体の組み立て',
    icon: <Wrench className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>本体の組み立て</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-8">
          動作確認を行う前に、キースイッチとキーキャップを本体に取り付けます。
        </p>
        <div className="space-y-8">
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2">01</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">キースイッチの取り付け</h3>
              <p className="text-slate-600 leading-relaxed">
                商品内容に不足がないか確認後、本体に別途で購入していただいた任意のキースイッチを差し込んでいきます。
                ピンが曲がらないよう、基板に対して垂直にゆっくりと押し込んでください。
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2">02</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">キーキャップの取り付け</h3>
              <p className="text-slate-600 leading-relaxed">
                すべてのキースイッチを差し込み終わったら、次に付属のキーキャップを取り付けていきます。
              </p>
            </div>
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
          すべてのキーやカーソルが正しく反応するか、PCに接続してテストを行いましょう。
        </p>
        <div className="space-y-8">
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2">01</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">本体（左右）の電源を入れる</h3>
              <p className="text-slate-600 leading-relaxed">
                本機は完全無線設計です。まずはキーボード本体（左右両方）の電源スイッチをONにしてください。
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2">02</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">PCの設定画面からBluetooth接続する</h3>
              <p className="text-slate-600 leading-relaxed">
                お使いのPC（WindowsやMacなど）の設定画面から、Bluetoothデバイスの追加を開きます。
                ペアリングモードになっている本機を選択し、Bluetooth接続を完了させてください。
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2">03</div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-3">各キーやカーソル等が動くか確認する</h3>
              <p className="text-slate-600 leading-relaxed">
                接続が完了したら、テキストエディタやブラウザを開き、実際に各キーを押して入力できるか確認してください。
                また、トラックボールを動かしてマウスカーソルが正常に動作することも合わせて確認しましょう。
              </p>
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
          動作確認が終わったら、自分好みのキー配置に変更してみましょう。本機はZMK Firmwareを採用しているため、「Keymap Editor」というWebツールを使ってブラウザ上から視覚的に変更できます。
        </p>
        <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-sm">
          <Badge type="info">STEP BY STEP</Badge>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Keymap Editorを使った変更手順</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <p className="font-bold text-slate-800 mb-1">Keymap Editorにアクセス</p>
                <p className="text-slate-600 text-sm">ブラウザで <a href="https://nickcoutsos.github.io/keymap-editor/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Keymap Editor</a> を開き、GitHubアカウントでログインします。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <p className="font-bold text-slate-800 mb-1">リポジトリの連携</p>
                <p className="text-slate-600 text-sm">ご自身のZMK設定が保存されているGitHubリポジトリへのアクセスを許可して、現在のキーマップを読み込みます。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <p className="font-bold text-slate-800 mb-1">ドラッグ＆ドロップで配置</p>
                <p className="text-slate-600 text-sm">画面下部に表示されるキーのリストから、割り当てたいキーを上部のキーボードの図にドラッグ＆ドロップして配置を変更します。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <p className="font-bold text-slate-800 mb-1">変更を保存してビルド</p>
                <p className="text-slate-600 text-sm">「Save」ボタンを押すと変更内容がGitHubに送信され、自動的に新しいファームウェアのビルド（作成）が始まります。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4">5</span>
              <div>
                <p className="font-bold text-slate-800 mb-1">ファームウェアの書き込み</p>
                <p className="text-slate-600 text-sm">GitHub Actionsでビルドが完了したら「.uf2」ファイルをダウンロードします。キーボードをPCにUSB接続してブートローダーモードにし、表示されたドライブへ「.uf2」ファイルをコピーすれば完了です。</p>
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
              q: "PCにBluetoothデバイスとして認識されない",
              a: "キーボード本体の電源がONになっているか確認してください。また、他のデバイス（スマートフォン等）に既に接続されていないか確認し、ペアリングモードをやり直してみてください。"
            },
            {
              q: "Keymap Editorで自分のリポジトリが表示されない",
              a: "GitHubアカウントとの連携時に、ZMK設定が含まれるリポジトリへのアクセス権限（リポジトリへの許可）が正しく設定されているか確認してください。"
            },
            {
              q: "特定のキーが反応しない",
              a: "キースイッチが奥までしっかりと差し込まれているか、ピンが折れ曲がっていないか確認してください。配送時や組み立て時の衝撃等でスイッチが少し浮いてしまっている場合があります。"
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