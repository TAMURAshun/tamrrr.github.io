// ブログ投稿データ
const blogPosts = [
    {
        id: 'post-1',
        title: 'ブログページを開設しました',
        date: '2025年8月19日',
        dateObj: new Date('2025-08-19'),
        content: `
            <p>ブログページを開設しました。</p>

        `
    },
    {
        id: 'post-2',
        title: 'JpGU 2025 学生優秀発表賞',
        date: '2025年8月20日',
        dateObj: new Date('2025-08-20'),
        content: `
            <p><a href="profile.html#achievements" target="_blank" rel="noopener noreferrer">
            JpGU 2025の大気水圏科学セクションで学生優秀発表賞</a>を受賞しました。</p>
        `
    },
    {
        id: 'post-3',
        title: '映画タローマン エキストラ出演',
        date: '2025年8月22日',
        dateObj: new Date('2025-08-22'),
        content: `
            <p>8月22日全国公開の映画「タローマン 万博大爆発」にエキストラ出演しました。</p>
            <p>数秒間ですが、大写しでしっかり登場します。ぜひご覧ください。</p>
        `
    },
    {
        id: 'post-4',
        title: '秋季気象学会で発表しました',
        date: '2025年11月14日',
        dateObj: new Date('2025-11-14'),
        content: `
            <p>秋季気象学会で口頭発表しました。</p>
        `
    }
];

// 全投稿を日付順で取得する関数
function getAllPosts() {
    return blogPosts.sort((a, b) => b.dateObj - a.dateObj);
}