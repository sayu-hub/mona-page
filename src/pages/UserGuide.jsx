import React, { useState, useEffect } from 'react';
import { BookOpen, Package, CheckCircle, Keyboard, HelpCircle, Menu, X, ChevronRight, ExternalLink, ArrowRight, Wrench, Github, Image as ImageIcon } from 'lucide-react';
import step1 from '../assets/images/userguide/step1.png';
import step2 from '../assets/images/userguide/step2.png';
import step8 from '../assets/images/userguide/step8.png';
import step10 from '../assets/images/userguide/step10.png';
import step11 from '../assets/images/userguide/step11.png';
import step_bt_1 from '../assets/images/userguide/step_bt_1.png';
import step_encoders_1 from '../assets/images/userguide/step_encoders_1.png';
import step12 from '../assets/images/userguide/step12.png';
import step_reset_1 from '../assets/images/userguide/step_reset_1.jpeg';
import firmwareDownloadGuide from '../assets/images/userguide/firmware-download-guide.svg';
import firmwareFilesGuide from '../assets/images/userguide/firmware-files-guide.svg';
import keyCheckerMona2 from '../assets/images/userguide/key-checker-mona2.svg';
import dyaStudioStep1 from '../assets/images/userguide/dya-studio-01.png';
import dyaStudioStep2 from '../assets/images/userguide/dya-studio-02.png';
import dyaStudioStep3 from '../assets/images/userguide/dya-studio-03.png';
import dyaStudioStep4 from '../assets/images/userguide/dya-studio-04.png';
import dyaStudioStep5 from '../assets/images/userguide/dya-studio-05.png';

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

const ZoomableImage = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in hover:opacity-90 transition-opacity`}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 md:p-8 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-0 right-0 bg-slate-800 hover:bg-slate-700 text-white rounded-full p-2 transition-colors z-10 shadow-lg"
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg cursor-zoom-out"
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            />
          </div>
        </div>
      )}
    </>
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
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2" /> キーボード本体</span>
                <span className="text-slate-400 text-sm">左右1台</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2" /> キーキャップ</span>
                <span className="text-slate-400 text-sm">42個</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2" /> 25mmトラックボール</span>
                <span className="text-slate-400 text-sm">1個</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-emerald-400 mr-2" /> バッテリー</span>
                <span className="text-slate-400 text-sm">2個</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-50">
            <h3 className="text-xl font-black text-slate-800 tracking-tight mb-6">お客様でご用意いただくもの</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-400 mr-2" /> キースイッチ</span>
                <span className="text-slate-400 text-sm">42個</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-50 pb-2">
                <span className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-400 mr-2" /> USBケーブル (Type-C)</span>
                <span className="text-slate-400 text-sm">1本</span>
              </li>
              <li className="flex items-start pb-2 text-sm text-slate-500 mt-4 flex-col gap-2">
                <span>※USBケーブルはPCとの接続に必要です。<br />（データ通信対応のもの）</span>
                <span>※キースイッチをご購入の際は、本機に対応している規格かご確認ください。<br />（Choc v1/v2、Lofree製スイッチ対応）</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-500 leading-relaxed">
          ※販売形態や販売時期により、商品内容（同梱物）が一部異なる場合があります。
        </p>
      </div>
    )
  },
  assemblyAndTesting: {
    id: 'assemblyAndTesting',
    title: '組み立てと動作確認',
    icon: <Wrench className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>組み立てと動作確認</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-8">
          キースイッチとキーキャップを本体に取り付け、PCに接続して正しく反応するかテストを行いましょう。
        </p>
        <div className="space-y-16">
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2 w-16 shrink-0">01</div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-3">キースイッチの取り付け</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                商品内容に不足がないか確認後、本体に別途で購入していただいた任意のキースイッチを差し込んでいきます。
                ピンが曲がらないよう、基板に対して垂直にゆっくりと押し込んでください。
              </p>
              <div className="w-full aspect-video bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                <ImageIcon className="w-10 h-10 mb-3 text-slate-300" />
                <span className="font-bold text-sm tracking-widest">[ 画像を挿入 ]</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2 w-16 shrink-0">02</div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-3">キーキャップの取り付け</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                すべてのキースイッチを差し込み終わったら、次に付属のキーキャップを取り付けていきます。
              </p>
              <div className="w-full aspect-video bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                <ImageIcon className="w-10 h-10 mb-3 text-slate-300" />
                <span className="font-bold text-sm tracking-widest">[ 画像を挿入 ]</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2 w-16 shrink-0">03</div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-3">ファームウェアの書き込み</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                本機とPCをUSBケーブルで接続し、左右それぞれにファームウェアを書き込みます。
                まず、以下のGitHub Actionsページからファームウェアをダウンロードしてください。
              </p>
              <a
                href="https://github.com/sayu-hub/zmk-config-moNa2-v2/actions/runs/33948061190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-600 underline underline-offset-4 mb-6"
              >
                <Github className="w-5 h-5" />
                ファームウェアをGitHubからダウンロード
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="space-y-8 mb-6">
                <figure>
                  <ZoomableImage
                    src={firmwareDownloadGuide}
                    alt="GitHub ActionsのArtifacts欄にあるfirmwareのダウンロードボタン"
                    className="w-full rounded-2xl border border-slate-200 shadow-sm"
                  />
                  <figcaption className="mt-3 text-sm text-slate-500">
                    ページ下部の「Artifacts」にある <strong>firmware</strong> のダウンロードボタンからZIPファイルを保存し、PC上で展開します。
                  </figcaption>
                </figure>
                <figure>
                  <ZoomableImage
                    src={firmwareFilesGuide}
                    alt="展開後のファームウェアZIPに含まれる4つのUF2ファイル"
                    className="w-full rounded-2xl border border-slate-200 shadow-sm"
                  />
                  <figcaption className="mt-3 text-sm text-slate-500">
                    展開したフォルダーには、上記の4つのUF2ファイルが入っています。
                  </figcaption>
                </figure>
              </div>
              <ol className="list-decimal space-y-4 pl-6 text-slate-600 leading-relaxed marker:font-bold marker:text-emerald-600">
                <li>
                  左右それぞれの本体をPCにUSBケーブルで接続します。マイコン部はケースで覆われていますが、ケース上からUSB端子のすぐ左側（リセットボタンの真上）を素早く2回押してください。クリック感のあるボタンです。ブートローダーが起動すると、PC上でドライブとして認識され、フォルダーが表示されます。
                </li>
                <li>
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-700">settings_reset-xiao_ble_nrf52840_zmk-zmk.uf2</code>
                  を、左右それぞれのドライブへドラッグ＆ドロップして書き込みます。
                </li>
                <li>
                  ケース上からUSB端子のすぐ左側を、再度素早く2回押してブートローダーを起動します。右側には
                  <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-700">mona2_r-pmw3610.uf2</code>
                  、左側には
                  <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-700">mona2_l_rgbled_adapter-xiao_ble_nrf52840_zmk-zmk.uf2</code>
                  を、それぞれのドライブへドラッグ＆ドロップして書き込みます。
                </li>
                <li>
                  ケース上からUSB端子のすぐ左側を1回押します。マイコン部のLEDが点灯すれば、書き込みは完了です。点灯しない場合は、最初から書き込みをやり直してください。
                </li>
              </ol>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2 w-16 shrink-0">04</div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-3">本体（左右）の電源を入れる</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                本機は無線設計です。USBケーブルを抜き、キーボード本体（左右両方）の電源スイッチをONにしてください。
              </p>
              <div className="w-full aspect-video bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                <ImageIcon className="w-10 h-10 mb-3 text-slate-300" />
                <span className="font-bold text-sm tracking-widest">[ 画像を挿入 ]</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2 w-16 shrink-0">05</div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-3">PCの設定画面からBluetooth接続する</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                お使いのPC（WindowsやMacなど）の設定画面から、Bluetoothデバイスの追加を開きます。
                デバイス一覧にキーボード名「mona2」と表示されるので、それを選択してBluetooth接続を完了させてください。
              </p>
              <div className="w-full aspect-video bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                <ImageIcon className="w-10 h-10 mb-3 text-slate-300" />
                <span className="font-bold text-sm tracking-widest">[ 画像を挿入 ]</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:block text-6xl font-black text-slate-100 mr-6 select-none -mt-2 w-16 shrink-0">06</div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-3">各キーやカーソル等が動くことを確認する</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                接続が完了したら、テキストエディタやブラウザを開き、各キーの入力とカーソルの動作を確認してください。
                以下のキー動作確認ツールを使うと、簡単に確認できます。キーボードの動作確認を行う場合は、「キーボード／ルール選択」から「mona2」を選び、「適用」を押してください。
              </p>
              <a
                href="https://key-checker-ruddy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-600 underline underline-offset-4 mb-6"
              >
                キー動作確認ツールを開く
                <ExternalLink className="w-4 h-4" />
              </a>
              <ZoomableImage
                src={keyCheckerMona2}
                alt="統合キーボードテスターでmona2を選択した画面"
                className="w-full rounded-2xl border border-slate-200 shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100 text-center animate-fade-in">
          <p className="text-emerald-800 font-bold mb-2">お疲れ様でした！これで動作確認は完了です 🎉</p>
          <p className="text-sm text-emerald-700">
            無事にすべてのキーが反応することが確認できたら、次はキーマップなどを自分好みにカスタマイズしていきましょう！
          </p>
        </div>

        <div className="mt-6 p-6 bg-amber-50/50 rounded-3xl border border-amber-100 animate-fade-in">
          <h4 className="text-amber-800 font-bold mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            うまく動作しない場合
          </h4>
          <p className="text-sm text-amber-700 leading-relaxed mb-4">
            キーが反応しない、PCと接続できないなどの初期不良と思われる症状がある場合は、提供元側の原因が考えられます。お手数ですが、以下のサポート窓口よりお問い合わせください。
          </p>
          <a href="https://discord.gg/v3AbrzjANB" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-amber-700 hover:text-amber-600 underline decoration-amber-300 underline-offset-4 transition-colors">
            サポートにお問い合わせする <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    )
  },
  keyboardSettings: {
    id: 'keyboardSettings',
    title: 'キーボードの設定変更',
    icon: <Keyboard className="w-5 h-5" />,
    redirectTo: 'dyaStudio'
  },
  dyaStudio: {
    id: 'dyaStudio',
    parentId: 'keyboardSettings',
    title: 'DYAStudioに接続する',
    icon: <Keyboard className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>DYAStudioに接続する</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-10">
          DYAStudioを使ってキーボードの設定を変更するには、最初にPCと本機を接続して認識させます。
        </p>

        <ol className="space-y-8 text-slate-600 leading-relaxed">
          <li>
            <p className="mb-3"><span className="mr-2 font-bold text-emerald-600">1.</span>DYAStudioにアクセスします。</p>
            <a
              href="https://studio.dya.cormoran.works/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-emerald-700 underline underline-offset-4 hover:text-emerald-600"
            >
              DYAStudioを開く
              <ExternalLink className="h-4 w-4" />
            </a>
          </li>
          <li>
            <p><span className="mr-2 font-bold text-emerald-600">2.</span>キーボードとPCをUSBケーブルで接続します。接続するのは右手側だけで問題ありません。</p>
          </li>
          <li>
            <p className="mb-4"><span className="mr-2 font-bold text-emerald-600">3.</span>画面のUSB接続ボタンをクリックし、一覧から「mona2」を選択します。</p>
            <ZoomableImage src={dyaStudioStep1} alt="DYAStudioのUSB接続ボタン" className="w-full rounded-xl border border-slate-200 shadow-sm" />
          </li>
          <li>
            <p className="mb-4"><span className="mr-2 font-bold text-emerald-600">4.</span>「mona2」が2つ表示される場合は、同じ操作をもう一度行い、2つとも選択します。</p>
            <ZoomableImage src={dyaStudioStep2} alt="DYAStudioでmona2を選択する画面" className="w-full rounded-xl border border-slate-200 shadow-sm" />
          </li>
        </ol>
        <p className="mt-8 rounded-2xl bg-emerald-50 px-5 py-4 text-sm leading-relaxed text-emerald-800">
          認識が完了するとDYAStudioの設定画面が開きます。ここからキーボードの各種設定を変更できます。
        </p>
      </div>
    )
  },
  keymapChange: {
    id: 'keymapChange',
    parentId: 'keyboardSettings',
    title: 'キーマップを変更する',
    icon: <Keyboard className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>キーマップを変更する</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-10">
          DYAStudioでキーボードを認識したら、キーごとに動作を割り当てたり、レイヤーごとのキーマップを編集したりできます。
        </p>

        <ol className="space-y-12 text-slate-600 leading-relaxed">
          <li>
            <h2 className="mb-3 flex items-center text-xl font-black text-slate-800">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-700">1</span>
              キーマップの編集画面を開く
            </h2>
            <p className="mb-4">
              画面上部の「キーボード」タブを開き、「キーマップ」タブを選択すると、キーマップの編集画面が表示されます。
            </p>
            <ZoomableImage src={dyaStudioStep3} alt="DYAStudioでキーボードとキーマップのタブを選択する画面" className="w-full rounded-xl border border-slate-200 shadow-sm" />
          </li>
          <li>
            <h2 className="mb-3 flex items-center text-xl font-black text-slate-800">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-700">2</span>
              編集するレイヤーとキーを選ぶ
            </h2>
            <p className="mb-4">
              編集したいレイヤーを選択してから、キーボード図で変更したいキーをクリックします。選択したキーの編集画面が開きます。
            </p>
            <ZoomableImage src={dyaStudioStep5} alt="DYAStudioでレイヤーを選択する画面" className="w-full rounded-xl border border-slate-200 shadow-sm" />
          </li>
          <li>
            <h2 className="mb-3 flex items-center text-xl font-black text-slate-800">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-700">3</span>
              キーに動作を割り当てる
            </h2>
            <p className="mb-4">
              編集画面の「レイヤーの項目設定」では、通常のキー入力に加え、レイヤーの切り替えや、タップ時と長押し時で異なる動作を割り当てるMod-Tapなどを設定できます。設定したい動作を選び、画面下部のキーボードから任意のキーコードを選択してください。
            </p>
            <ZoomableImage src={dyaStudioStep4} alt="DYAStudioでキーの動作を設定する編集画面" className="w-full rounded-xl border border-slate-200 shadow-sm" />
          </li>
        </ol>

        <div className="mt-12 space-y-6">
          <section className="rounded-3xl border-2 border-slate-100 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="mb-3 text-lg font-black text-slate-800">修飾キーを組み合わせる</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              「修飾キー」を選ぶと、CtrlやShiftなどを他のキーと組み合わせたショートカットを設定できます。たとえば、1つのキーにCtrl＋Cのような操作を割り当てることが可能です。
            </p>
          </section>
          <section className="rounded-3xl border-2 border-slate-100 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="mb-3 text-lg font-black text-slate-800">マウスボタンを設定する</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              マウスボタンの動作を割り当てる場合は、Behaviourの「マウス」から設定します。
            </p>
          </section>
        </div>
      </div>
    )
  },
  // Topics & Tips 保管（公開準備が整うまでユーザーガイドのナビゲーションには表示しない）
  githubSetup: {
    id: 'githubSetup',
    title: 'ファームウェアの準備 (GitHub)',
    icon: <Github className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>GitHubリポジトリのフォーク</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-8">
          キーマップの変更や、自分用のファームウェアを書き出すためには、<strong>GitHub Actions</strong>を利用します。<br />
          事前にGitHubアカウントを用意し、設定用のリポジトリをフォーク（複製）しておきましょう。
        </p>
        <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-sm mb-12">
          <Badge type="info">STEP BY STEP</Badge>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">アカウント登録とフォークの手順</h3>
          <ul className="space-y-8">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4 mt-1">1</span>
              <div className="w-full">
                <p className="font-bold text-slate-800 mb-2">GitHubアカウントの登録</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  GitHubアカウントをお持ちでない場合は、事前に <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-bold inline-flex items-center">アカウント登録 <ExternalLink className="w-3 h-3 ml-1" /></a> を済ませてください。
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4 mt-1">2</span>
              <div className="w-full">
                <p className="font-bold text-slate-800 mb-2">リポジトリのフォーク</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  準備ができたら、お使いの機種に合わせて以下のベースリポジトリをご自身のアカウントへフォーク（複製）します。<br />
                  リンク先の画面右上にある「Fork」ボタンから実行できます。
                </p>
                <div className="flex flex-col gap-2 mb-4">
                  <a href="https://github.com/sayu-hub/zmk-config-moNa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center w-fit px-4 py-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-lg border border-slate-200 hover:border-emerald-200 transition-colors font-bold text-sm">
                    <span className="w-16">moNa用:</span> zmk-config-moNa <ExternalLink className="w-4 h-4 ml-2 text-slate-400" />
                  </a>
                  <a href="https://github.com/sayu-hub/zmk-config-moNa2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center w-fit px-4 py-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-lg border border-slate-200 hover:border-emerald-200 transition-colors font-bold text-sm">
                    <span className="w-16">moNa2用:</span> zmk-config-moNa2 <ExternalLink className="w-4 h-4 ml-2 text-slate-400" />
                  </a>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500">
                    ※この時点でフォークしたリポジトリ（mainブランチ）にcommitやpushを行うと、自動的にGitHub Actionsが実行され、ご自身のキーボード用ファームウェアが自動で書き出される状態になります。
                  </p>
                </div>
              </div>
            </li>
          </ul>
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
        <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-sm mb-12">
          <Badge type="info">STEP BY STEP</Badge>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Keymap Editorを使った変更手順</h3>
          <ul className="space-y-12">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4 mt-1">1</span>
              <div className="w-full">
                <p className="font-bold text-slate-800 mb-2">Keymap Editorにアクセス</p>
                <p className="text-slate-600 text-sm mb-4">ブラウザで <a href="https://nickcoutsos.github.io/keymap-editor/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-bold">Keymap Editor</a> を開き、GitHubアカウントでログインします。</p>
                <ZoomableImage src={step1} alt="Keymap Editor Access" className="w-full max-w-lg rounded-xl border border-slate-100 shadow-sm" />
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4 mt-1">2</span>
              <div className="w-full">
                <p className="font-bold text-slate-800 mb-2">リポジトリの連携</p>
                <p className="text-slate-600 text-sm mb-4">事前にフォークしたご自身のZMK設定リポジトリ（<code>zmk-config-moNa</code> または <code>zmk-config-moNa2</code>）へのアクセスを許可して、現在のキーマップを読み込みます。</p>
                <ZoomableImage src={step2} alt="Repository Linking" className="w-full max-w-lg rounded-xl border border-slate-100 shadow-sm" />
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4 mt-1">3</span>
              <div className="w-full">
                <p className="font-bold text-slate-800 mb-2">キーマップの編集</p>
                <p className="text-slate-600 text-sm mb-6">画面下部に表示されるキーのリストから、割り当てたいキーをドラッグ＆ドロップして配置を変更します。以下の主要な設定を押さえておきましょう。</p>
                <ZoomableImage src={step8} alt="Keymap Editor UI" className="w-full rounded-2xl border border-slate-100 shadow-sm mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-5 rounded-2xl">
                    <span className="font-bold text-slate-700 block mb-2 text-sm">Behaviors（振る舞い）</span>
                    <p className="text-xs text-slate-500 mb-4"><code>&amp;kp</code>(通常のキー), <code>&amp;mo</code>(レイヤー切り替え), <code>&amp;mkp</code>(マウスボタン)などが基本です。</p>
                    <ZoomableImage src={step10} alt="Behaviors" className="w-full rounded-lg border border-slate-200" />
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl">
                    <span className="font-bold text-slate-700 block mb-2 text-sm">Bluetooth（無線）</span>
                    <p className="text-xs text-slate-500 mb-4"><code>BT_CLR_ALL</code>(ペアリング解除), <code>BT_SEL 0</code>(メインPC用)などを割り当てると便利です。</p>
                    <ZoomableImage src={step_bt_1} alt="Bluetooth" className="w-full rounded-lg border border-slate-200" />
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl">
                    <span className="font-bold text-slate-700 block mb-2 text-sm">Keycodes（キーコード）</span>
                    <p className="text-xs text-slate-500 mb-4">一般的なキー入力です。UI上の検索窓から探すことができます。</p>
                    <ZoomableImage src={step11} alt="Keycodes" className="w-full rounded-lg border border-slate-200" />
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl">
                    <span className="font-bold text-slate-700 block mb-2 text-sm">Encoders（つまみ）</span>
                    <p className="text-xs text-slate-500 mb-4"><code>&amp;inc_dec_kp</code>を使って、左回り・右回りそれぞれにキーを指定できます。</p>
                    <ZoomableImage src={step_encoders_1} alt="Encoders" className="w-full rounded-lg border border-slate-200" />
                  </div>
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4 mt-1">4</span>
              <div className="w-full">
                <p className="font-bold text-slate-800 mb-2">変更を保存してビルド</p>
                <p className="text-slate-600 text-sm mb-4">「Save」ボタンを押すと変更内容がGitHubリポジトリにpushされ、自動的に新しいファームウェアのビルド（GitHub Actions）が始まります。</p>
                <ZoomableImage src={step12} alt="Save Changes" className="w-full max-w-lg rounded-xl border border-slate-100 shadow-sm" />
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mr-4 mt-1">5</span>
              <div className="w-full">
                <p className="font-bold text-slate-800 mb-2">ファームウェアの書き込み</p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  ビルドが完了したらファームウェアをダウンロードして解凍します。<br />
                  PCとmoNa2をUSB-Cケーブルで繋ぎ、<strong>リセットボタンを2回</strong>押します。<br />
                  認識されたドライブに右手用なら<code>moNa2_R...uf2</code>（左手なら<code>moNa2_L...uf2</code>）をドラッグ＆ドロップすれば完了です！
                </p>
                <ZoomableImage src={step_reset_1} alt="Reset Button" className="w-full max-w-sm rounded-xl border border-slate-100 shadow-sm" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  mouseSettings: {
    id: 'mouseSettings',
    title: 'マウスの設定',
    icon: <Wrench className="w-5 h-5" />,
    content: (
      <div className="animate-fade-in">
        <SectionHeading>マウスの設定 (最新ファームウェア設定)</SectionHeading>
        <p className="text-slate-600 leading-relaxed mb-8">
          今回のアップデートでは、ファームウェアを <strong>ZMK Firmware v0.3.0</strong> に合わせて新たに作成し直しました。<br />
          より高度なカスタマイズ（トラックボールの挙動変更など）を行いたい方向けの設定です。
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center"><ChevronRight className="w-5 h-5 text-emerald-500 mr-2" />フォルダ構成とキーマップファイル</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              最新のフォルダ構成では、「<code>mona2.keymap</code>」が2か所に存在します。
            </p>
            <ul className="list-none space-y-2 mb-4 text-sm">
              <li className="flex items-center text-slate-700"><span className="text-emerald-500 mr-2">🔹</span> <code className="mx-1">mona2</code> フォルダ → <strong>初期設定</strong></li>
              <li className="flex items-center text-slate-700"><span className="text-emerald-500 mr-2">🔹</span> <code className="mx-1">config</code> フォルダ → <strong>個人用設定</strong></li>
            </ul>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              動作上は <strong>config フォルダ内のファイルが優先</strong> され、Keymap Editor で変更した内容も config フォルダ配下に保存されます。
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500">
                ※旧構成に含まれている docs / img / model は、moNa2のケースデータ等の保存先であり、ファームウェアの動作には直接関係しません。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center"><ChevronRight className="w-5 h-5 text-emerald-500 mr-2" />マウス動作の設定方法</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              今回のアップデートで ZMK Firmware がマウス入力を正式にサポートしたため、badjeff氏による派生ドライバーへ切り替え、マウス関連の処理は ZMK 側（<code>input-processors</code>）で行うように変更されました。<br />
              マウス動作をカスタマイズする際は、以下のファイルを編集します。
            </p>
            <ul className="list-none space-y-2 mb-6 text-sm">
              <li className="flex items-center text-slate-700"><span className="text-emerald-500 mr-2">🔹</span> <code className="mx-1">mona2.dtsi</code></li>
              <li className="flex items-center text-slate-700"><span className="text-emerald-500 mr-2">🔹</span> <code className="mx-1">mona2_r.overlay</code></li>
            </ul>

            <h4 className="font-bold text-slate-700 text-sm mb-2">dtsiファイル (デフォルトのマウス動作)</h4>
            <p className="text-xs text-slate-500 mb-2">
              有効化したい場合は、先頭の <code>//</code> を削除してください。（※日本語コメントの <code>//</code> は消さないでください）
            </p>
            <div className="bg-slate-800 rounded-xl p-4 overflow-x-auto text-emerald-400 text-sm font-mono mb-6 whitespace-pre">
              {`    trackball_central_listener: trackball_central_listener {
        compatible = "zmk,input-listener";
        status = "disabled";
        input-processors = 
            <&zip_xy_transform INPUT_TRANSFORM_Y_INVERT>;       //Y軸反転
            //<&zip_xy_transform INPUT_TRANSFORM_XY_SWAP>,      //X軸とY軸の入れ替え
            //<&zip_xy_transform INPUT_TRANSFORM_X_INVERT>,     //X軸反転
            //<&zip_temp_layer 5 500>;                          //オートマウスレイヤーの選択
    };`}
            </div>

            <h4 className="font-bold text-slate-700 text-sm mb-2">overlayファイル (スクロールレイヤー)</h4>
            <p className="text-xs text-slate-500 mb-2">
              <code>layers = &lt;3&gt;;</code> によってレイヤー3をスクロールレイヤーになるよう指定しています。
            </p>
            <div className="bg-slate-800 rounded-xl p-4 overflow-x-auto text-emerald-400 text-sm font-mono mb-6 whitespace-pre">
              {`    scroller {
        layers = <3>;  //有効化するレイヤーの指定
        input-processors = 
            // <&zip_xy_transform INPUT_TRANSFORM_XY_SWAP>,     //X軸とY軸の入れ替え
            <&zip_xy_transform INPUT_TRANSFORM_X_INVERT>,       //X軸反転
            <&zip_xy_to_scroll_mapper>,                         //スクロールモードに変更
            <&zip_scroll_transform INPUT_TRANSFORM_X_INVERT>,   //スクロールのX軸反転
            <&zip_scroll_scaler 1 5>;                           //スクロール量を1/4倍
    };`}
            </div>

            <p className="text-sm text-slate-600">
              その他、<code>input-processors</code> の設定項目については、以下のZMK公式ページをご覧ください。<br />
              <a href="https://zmk.dev/docs/features/pointing#input-processors" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-bold inline-flex items-center mt-2">
                Input Processor Overview | ZMK <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </p>
          </div>
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

const TOPICS_AND_TIPS_ARCHIVE_KEYS = new Set(['githubSetup', 'keymap', 'mouseSettings']);

export default function UserGuide({ onBack }) {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const sectionKeys = Object.keys(SECTIONS).filter((key) => !TOPICS_AND_TIPS_ARCHIVE_KEYS.has(key));
  const navigableSectionKeys = sectionKeys.filter((key) => !SECTIONS[key].redirectTo);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleNavClick = (sectionId) => {
    setActiveSection(SECTIONS[sectionId].redirectTo ?? sectionId);
    setIsMobileMenuOpen(false);
  };

  const NavigationList = () => (
    <nav className="space-y-2">
      {sectionKeys.map((key) => {
        const section = SECTIONS[key];
        const isActive = activeSection === key;
        const isSubsection = Boolean(section.parentId);
        return (
          <button
            key={key}
            onClick={() => handleNavClick(key)}
            className={`flex w-full items-center px-4 py-3.5 text-sm font-bold rounded-2xl transition-all duration-200 ${isSubsection ? 'ml-4 w-[calc(100%-1rem)]' : ''} ${
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
        <aside className={`relative hidden md:flex flex-col shrink-0 h-screen sticky top-0 bg-white transition-all duration-300 z-10 ${isDesktopSidebarOpen ? 'w-72 border-r border-slate-100' : 'w-0'}`}>
          <div className={`w-72 h-full flex flex-col overflow-hidden transition-opacity duration-300 ${isDesktopSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="p-8 pb-4 shrink-0">
              <button onClick={onBack} className="flex items-center text-slate-500 hover:text-emerald-600 mb-6 font-bold transition-colors">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> ホームに戻る
              </button>
              <h2 className="text-xl font-black text-slate-800 tracking-tight">
                moNa<br />
                <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">User Guide</span>
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2">
              <NavigationList />
            </div>
            <div className="p-6 text-xs font-bold text-slate-300 shrink-0">
              © {new Date().getFullYear()} moNa Project
            </div>
          </div>
          <button
            onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)}
            className={`absolute top-8 -right-3.5 z-20 bg-white border border-slate-200 shadow-sm rounded-full p-1 text-slate-400 hover:text-emerald-600 hover:shadow transition-all`}
          >
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isDesktopSidebarOpen ? 'rotate-180' : ''}`} />
          </button>
        </aside>

        <main className="flex-1 min-w-0 p-6 md:p-12 lg:p-16">
          <div className="max-w-2xl">
            {SECTIONS[activeSection].content}

            <div className="mt-20 pt-8 border-t border-slate-100 flex justify-between">
              {navigableSectionKeys.indexOf(activeSection) > 0 ? (
                <button onClick={() => handleNavClick(navigableSectionKeys[navigableSectionKeys.indexOf(activeSection) - 1])} className="flex items-center px-5 py-3 rounded-full hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180 text-slate-400" />
                  <span className="font-bold text-slate-600">
                    {SECTIONS[navigableSectionKeys[navigableSectionKeys.indexOf(activeSection) - 1]].title}
                  </span>
                </button>
              ) : <div></div>}

              {navigableSectionKeys.indexOf(activeSection) < navigableSectionKeys.length - 1 ? (
                <button onClick={() => handleNavClick(navigableSectionKeys[navigableSectionKeys.indexOf(activeSection) + 1])} className="flex items-center px-6 py-3 rounded-full bg-white border-2 border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all text-slate-800">
                  <span className="font-bold mr-2">
                    {SECTIONS[navigableSectionKeys[navigableSectionKeys.indexOf(activeSection) + 1]].title}
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
