// ▼▼▼ 1. すべての画像をインポートする ▼▼▼
import monaImg from '../assets/images/common/moNa.png';
import mona2Img from '../assets/images/common/moNa2.png';
import mona2plusImg from '../assets/images/common/moNa2plus.png';

import monaKeycapsImg from '../assets/images/home/Accessories/mona_keycaps.png';
import kotoriShimaImg from '../assets/images/home/Accessories/kotori-shimaenaga.png';
import kotoriBlankImg from '../assets/images/home/Accessories/kotori-blank.png';
import ridgeCapImg from '../assets/images/home/Accessories/ridgecap.png';
import narrowCapImg from '../assets/images/home/Accessories/narrowcap17.png';
import coropitImg from '../assets/images/home/Accessories/coropit.png';
import henkanImg from '../assets/images/home/Accessories/19mm-henkan.png';

import sayuIcon from '../assets/images/home/members/sayu_icon.png';
import shakupanIcon from '../assets/images/home/members/shakupan_icon.png';
// ▲▲▲ ここまで ▲▲▲

export const navLinks = [
  { name: 'News', href: '#news', isPage: false },
  { name: 'Works', href: '#work', isPage: false },
  { name: 'Gallery', href: '#gallery', isPage: false },
  { name: 'Support&Guide', href: '#guide', isPage: false },
  { name: 'Member', href: '#member', isPage: false },
];

export const mainWorks = [
  {
      id: '01',
      name: 'moNa',
      description: '原点でありプロジェクト始まりのキーボード。左手側にトラックボールを搭載。',
      tags: ['42Key', 'Split', 'Wireless', 'TrackBall(Left)'],
      // ▼ 変更: チョンチョン（' '）を外して、上で作った変数を入れる
      image: monaImg,
      animClass: 'reveal-right',
      targetView: 'moNa',
      isPublic: true
  },
  {
      id: '02',
      name: 'moNa 2',
      description: 'より多くの人が使いやすい右手トラックボール。水平エンコーダも搭載しており一台でキーボードとマウス両方の役割を果たします。',
      tags: ['42Key', 'Split', 'Wireless', 'TrackBall(Right)'],
      image: mona2Img,
      animClass: 'reveal-left',
      targetView: 'moNa2',
      isPublic: true
  },
  {
      id: '03',
      name: 'moNa 2+',
      description: 'キー数とエンコーダの増えたmoNa2の拡張版。より幅広いキーマップの設定が可能に。',
      tags: ['48Key', 'Split', 'Wireless', 'TrackBall(Right)'],
      image: mona2plusImg,
      animClass: 'reveal-right',
      targetView: 'moNa2plus',
      isPublic: false // true: 公開, false: 非公開（準備中）
  },
];

export const accessories = [
  { name: 'Keycaps moNa標準キーキャップ', price: '¥4,500~', image: monaKeycapsImg, url:'https://sayuworks.stores.jp/items/692e4fb02200bb41580c08b6'},
  { name: 'Keycaps Kotori-Shimaenaga', price: '¥7,500~', image: kotoriShimaImg, url:'https://kotori-kcp.booth.pm/items/7468940' },
  { name: 'Keycaps Kotiri-Blank', price: '¥4,500~', image: kotoriBlankImg, url:'https://booth.pm/ja/items/6781056' },
  { name: 'Keycaps RidgeCap', price: '¥5,000~', image: ridgeCapImg, url:'https://arailab.booth.pm/items/8159022' },
  { name: 'Keycaps NarrowCap 17', price: '¥5,500~', image: narrowCapImg, url:'https://booth.pm/ja/items/7406191' },
  { name: 'Attachment COROPIT', price: '¥4,000~', image: coropitImg, url:'https://booth.pm/ja/items/6830658' },
  { name: 'Attachment 19mm変換キット', price: '¥5,000~', image: henkanImg, url:'https://sayuworks.stores.jp/items/68fb9bd112e4fd7301bcabab' }
];

export const members = [
  {
      name: '白湯_sayu',
      role: 'Develop',
      bio: '回路設計とコードを担当。見えない部分の美学を追求する。笹団子が好き。',
      id: 'sayu',
      image: sayuIcon, 
      twitter: 'https://x.com/Pooh_pol0',
      note: 'https://note.com/pooh_polo'
  },
  {
      name: 'Shakupan',
      role: 'Develop & Sell',
      bio: '筐体デザインと意匠を担当。手に触れる素材感にこだわる。パンダグッズ収集家。',
      id: 'shakupan',
      image: shakupanIcon, 
      twitter: 'https://x.com/shakupan_',
      note: 'https://note.com/shakupan'
  },
];

export const tweetUrls = [
  "https://x.com/shakupan_/status/2053339018939810298?s=20",
  "https://x.com/shakupan_/status/1979856517454348427?s=20",
  "https://x.com/Pooh_pol0/status/2018878320671387878?s=20",
  "https://x.com/Pooh_pol0/status/1992143194306589016?s=20",
];