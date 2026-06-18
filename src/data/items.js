export const navLinks = [
    { name: 'News', href: '#news' },
    { name: 'Works', href: '#work' },
    { name: 'Guide', href: '#guide' },
    { name: 'Member', href: '#member' },
];

export const newsItems = [
    { date: '2024.05.20', title: 'moNa 2+ の販売を開始しました', category: 'Product' },
    { date: '2024.04.15', title: '技術書典16 に出展します', category: 'Event' },
    { date: '2024.03.01', title: 'Webサイトをリニューアルしました', category: 'Info' },
];

export const mainWorks = [
    {
        id: '01',
        name: 'moNa',
        description: '原点となる60%レイアウト。アクリルの積層が織りなす透明感と、打鍵音の響きを計算し尽くしたエントリーモデル。',
        tags: ['60% Layout', 'Acrylic', 'Wired'],
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800',
        animClass: 'reveal-right'
    },
    {
        id: '02',
        name: 'moNa 2',
        description: '人間の骨格に寄り添う左右分離型。長時間のタイピングを「作業」から「対話」へと変えるエルゴノミクス設計。',
        tags: ['Split', 'Ergonomic', 'QMK/VIA'],
        image: 'https://images.unsplash.com/photo-1618384887929-003281dc0b69?auto=format&fit=crop&q=80&w=800',
        animClass: 'reveal-left'
    },
    {
        id: '03',
        name: 'moNa 2+',
        description: '真鍮ウェイトがもたらす静寂と安定感。ケーブルから解き放たれた、究極のタイピング体験を提供するフラッグシップ。',
        tags: ['Wireless', 'Brass Weight', 'Flagship'],
        image: 'https://images.unsplash.com/photo-1587829745563-844184a3d17e?auto=format&fit=crop&q=80&w=800',
        animClass: 'reveal-right'
    },
];

export const accessories = [
    { name: 'PBT Keycaps "Sasa"', price: '¥4,500', image: 'KEY' },
    { name: 'Coiled Cable Green', price: '¥3,200', image: 'CBL' },
    { name: 'Switch Tester', price: '¥1,500', image: 'SWT' },
    { name: 'Desk Mat "Forest"', price: '¥2,800', image: 'MAT' },
    { name: 'Carrying Case', price: '¥3,500', image: 'BAG' },
    { name: 'Lube Station', price: '¥2,200', image: 'LUB' },
];

export const members = [
    {
        name: 'Creator A',
        role: 'PCB & Firmware',
        bio: '回路設計とコードを担当。見えない部分の美学を追求する。笹団子が好き。',
        id: 'creator_a'
    },
    {
        name: 'Creator B',
        role: 'Product Design',
        bio: '筐体デザインと意匠を担当。手に触れる素材感にこだわる。パンダグッズ収集家。',
        id: 'creator_b'
    },
];