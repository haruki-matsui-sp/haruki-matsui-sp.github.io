// 画面のスクロールを監視するセンサー（IntersectionObserver）を作成
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // 見出しが画面内に入ってくる時
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active'); // クラスを付与
        }
    });
}, {
    rootMargin: "-10% 0px" // 画面の下から10%上がった位置で反応させる（微調整用）
});

// すべての .section-title を見つけて、監視対象にする
document.querySelectorAll('.section-title').forEach(title => {
    observer.observe(title);
});

const hamburger = document.getElementById('js-hamburger');
const navLinks = document.querySelector('.nav-links');

// ボタンをクリックしたとき、クラスをトグル（付け外し）する
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// メニュー内のリンクをクリックしたら、自動でメニューを閉じる（ページ内リンク用）
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});