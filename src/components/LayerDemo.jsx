import React, { useEffect, useRef, useState, useCallback } from 'react';

// ─── レイアウトデータ ───────────────────────────────────────
const leftLayouts = {
  base: [
    "Q", "W", "E", "R", "T", "",
    "A", "S", "D", "F", "G", "",
    "Z", "X", "C", "V", "B", " ",
    "^", "WIN", " ", "⌫", "2|ENT", "3|LANG2"
  ],
  layer1: [
    "1", "2", "3", "4", "5", "",
    "▽", "▽", "[", "]", "▽", "",
    "▽", "▽", "▽", "▽", "▽", "▽",
    "▽", "▽", "▽", "▽", "▽", "▽"
  ],
  layer2: [
    "!", "@", "#", "$", "%", "",
    "`", "~", "\"", "'", "🔊", "",
    "F1", "F2", "F3", "F4", "F5", "F11",
    "▽", "▽", "▽", "▽", "▽", "▽"
  ],
  layer3: [
    "▽", "^⇧TAB", "PSCRN", "^TAB", "▽", "",
    "▽", "⊞←", "⊞→", "^⊞←", "^⊞→", "",
    "▽", "⇧", "⇧⊞←", "⇧⊞→", "▽", "▽",
    "▽", "▽", "▽", "▽", "▽", "▽"
  ]
};

const rightLayouts = {
  base: [
    "", "Y", "U", "I", "O", "P",
    "", "H", "J", "K", "L", ";",
    " ", "N", "M", ",", ".", "/",
    "3|LANG1", "1|SPC", "", "", "", "LALT"
  ],
  layer1: [
    "", "6", "7", "8", "9", "0",
    "", "▽", "(", ")", "▽", "\\",
    "▽", "▽", "▽", "▽", "▽", "|",
    "▽", "▽", "", "", "", "▽"
  ],
  layer2: [
    "", "^", "&", "*", "-", "_",
    "", "MB3", "MB1", "MB2", "=", "+",
    "F12", "F6", "F7", "F8", "F9", "F10",
    "▽", "▽", "", "", "", "▽"
  ],
  layer3: [
    "", "▽", "HOME", "↑", "END", "▽",
    "", "▽", "←", "↓", "→", "▽",
    "▽", "▽", "⌫", "PG_UP", "PG_DN", "▽",
    "▽", "▽", "", "", "", "▽"
  ]
};

// ─── レイヤー設定 ────────────────────────────────────────
const LAYERS = {
  base: { name: 'Default Layer', color: 'slate', dotClass: 'bg-slate-400' },
  layer1: { name: 'Layer 1', color: 'blue', dotClass: 'bg-blue-500' },
  layer2: { name: 'Layer 2', color: 'red', dotClass: 'bg-red-500' },
  layer3: { name: 'Layer 3', color: 'purple', dotClass: 'bg-purple-500' },
};

// レイヤートリガーキーの判定
const TRIGGER_MAP = {
  'left-22': 'layer2',
  'left-23': 'layer3',
  'right-18': 'layer3',
  'right-19': 'layer1',
};

// ─── 1キー分のコンポーネント ─────────────────────────────
function Key({ label, isHidden, isTrans, triggerLayer, activeLayer, onActivate, onDeactivate }) {
  const [pressed, setPressed] = useState(false);

  const handleDown = useCallback((e) => {
    e.preventDefault();
    setPressed(true);
    if (onActivate) onActivate();
  }, [onActivate]);

  const handleUp = useCallback((e) => {
    e.preventDefault();
    setPressed(false);
    if (onDeactivate) onDeactivate();
  }, [onDeactivate]);

  // マウスアップがキー外で発生した場合の処理
  useEffect(() => {
    if (!pressed) return;
    const up = () => { setPressed(false); if (onDeactivate) onDeactivate(); };
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => { window.removeEventListener('mouseup', up); window.removeEventListener('touchend', up); };
  }, [pressed, onDeactivate]);

  if (isHidden) return <div className="w-full aspect-square" />;

  // トリガーキー用の枠色
  const triggerBorder = triggerLayer === 'layer1'
    ? 'border-blue-500/50' : triggerLayer === 'layer2'
      ? 'border-red-500/50' : triggerLayer === 'layer3'
        ? 'border-purple-500/50' : 'border-white/[0.06]';

  // レイヤーアクティブ時のキー色（トリガーキーとトランスキーは変えない）
  const layerStyle = (!triggerLayer && !isTrans && activeLayer !== 'base')
    ? activeLayer === 'layer1'
      ? 'bg-blue-900/80 text-blue-200 border-blue-700/60'
      : activeLayer === 'layer2'
        ? 'bg-red-900/80 text-red-200 border-red-700/60'
        : 'bg-purple-900/80 text-purple-200 border-purple-700/60'
    : '';

  // ラベル分割（2|ENT → サブ: 2, メイン: ENT）
  let mainLabel = label;
  let subLabel = null;
  if (label && label.includes('|')) {
    const [s, m] = label.split('|');
    subLabel = s;
    mainLabel = m;
  }

  const fontSize = mainLabel && mainLabel.length >= 4
    ? 'text-[0.6rem] sm:text-[0.65rem]'
    : mainLabel && mainLabel.length > 2
      ? 'text-[0.7rem] sm:text-[0.75rem]'
      : 'text-xs sm:text-sm';

  return (
    <div
      onMouseDown={triggerLayer ? handleDown : undefined}
      onTouchStart={triggerLayer ? handleDown : undefined}
      className={`
        aspect-square rounded-lg flex flex-col items-center justify-center select-none
        border transition-all duration-200 relative
        ${isTrans
          ? 'bg-[#151a24] border-white/[0.04] text-slate-500'
          : layerStyle || `bg-[#1e2532] border-white/[0.06] text-slate-200 ${triggerBorder}`}
        ${triggerLayer ? 'cursor-pointer hover:brightness-125' : 'cursor-default'}
        ${pressed ? 'translate-y-[2px] shadow-none bg-[#2a3446]' : 'shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}
      `}
    >
      {subLabel && <span className="text-[0.45rem] sm:text-[0.5rem] opacity-60 leading-none mb-0.5">{subLabel}</span>}
      <span className={`${fontSize} font-medium leading-none`}>{mainLabel}</span>
    </div>
  );
}

// ─── 半分キーボード ──────────────────────────────────────
function HalfKeyboard({ layouts, side, activeLayer, onActivate, onDeactivate }) {
  const currentLayout = layouts[activeLayer] || layouts.base;
  const baseLayout = layouts.base;

  return (
    <div className="grid grid-cols-6 gap-[3px] sm:gap-1">
      {currentLayout.map((label, i) => {
        const baseKey = baseLayout[i];
        const isHidden = baseKey === '';
        const isTrans = label === '▽' || label === ' ';
        const triggerId = `${side}-${i}`;
        const triggerLayer = TRIGGER_MAP[triggerId] || null;

        return (
          <Key
            key={i}
            label={isTrans && label === '▽' ? '▽' : isTrans ? '' : label}
            isHidden={isHidden}
            isTrans={isTrans}
            triggerLayer={triggerLayer}
            activeLayer={activeLayer}
            onActivate={triggerLayer ? () => onActivate(triggerLayer) : null}
            onDeactivate={triggerLayer ? () => onDeactivate() : null}
          />
        );
      })}
    </div>
  );
}

// ─── メインコンポーネント ────────────────────────────────
export default function LayerDemo() {
  const [activeLayer, setActiveLayer] = useState('base');
  const containerRef = useRef(null);

  // キーボードショートカット (1, 2, 3)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.repeat) return;
      if (e.key === '1') { e.preventDefault(); setActiveLayer('layer1'); }
      if (e.key === '2') { e.preventDefault(); setActiveLayer('layer2'); }
      if (e.key === '3') { e.preventDefault(); setActiveLayer('layer3'); }
    };
    const onKeyUp = (e) => {
      if (['1', '2', '3'].includes(e.key)) { e.preventDefault(); setActiveLayer('base'); }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => { window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); };
  }, []);

  const layerInfo = LAYERS[activeLayer];

  // インジケータのドットの glow
  const dotGlow = activeLayer === 'layer1'
    ? 'shadow-[0_0_12px_rgba(59,130,246,0.7)]'
    : activeLayer === 'layer2'
      ? 'shadow-[0_0_12px_rgba(239,68,68,0.7)]'
      : activeLayer === 'layer3'
        ? 'shadow-[0_0_12px_rgba(168,85,247,0.7)]'
        : 'shadow-[0_0_8px_rgba(100,116,139,0.4)]';

  return (
    <div ref={containerRef} className="w-full">
      {/* キーボード本体 */}
      <div className="bg-[#0b1121]/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/[0.06] p-3 sm:p-6 md:p-8 shadow-2xl">
        {/* 分割キーボード */}
        <div className="flex gap-3 sm:gap-6 md:gap-10 justify-center mb-4 sm:mb-6">
          <div className="flex-1 max-w-[280px] sm:max-w-[320px]">
            <HalfKeyboard
              layouts={leftLayouts}
              side="left"
              activeLayer={activeLayer}
              onActivate={setActiveLayer}
              onDeactivate={() => setActiveLayer('base')}
            />
          </div>
          <div className="flex-1 max-w-[280px] sm:max-w-[320px]">
            <HalfKeyboard
              layouts={rightLayouts}
              side="right"
              activeLayer={activeLayer}
              onActivate={setActiveLayer}
              onDeactivate={() => setActiveLayer('base')}
            />
          </div>
        </div>

        {/* レイヤーインジケータ */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-slate-900/80 border border-white/10 transition-all duration-300">
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${layerInfo.dotClass} ${dotGlow}`} />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 min-w-[120px] sm:min-w-[140px] text-left transition-all duration-300">
              {layerInfo.name}
            </span>
          </div>
        </div>
      </div>

      {/* 操作ヒント */}
      <p className="text-center text-xs text-slate-400 mt-3 sm:mt-4">
        色付き枠のキーを<strong className="text-slate-300">長押し</strong>するか、キーボードの
        <kbd className="mx-1 px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[0.65rem] font-mono font-bold">1</kbd>
        <kbd className="mx-1 px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[0.65rem] font-mono font-bold">2</kbd>
        <kbd className="mx-1 px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[0.65rem] font-mono font-bold">3</kbd>
        を長押しして確認
      </p>
    </div>
  );
}
