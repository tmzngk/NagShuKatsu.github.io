'use strict';

{
    // 表題の浮かび上がり
    const headline = document.querySelector('.main-page-text');
    headline.animate({ opacity: [0, 1] }, { duration: 3300 });

    // モーダル関係
    const open = document.querySelector('#open-modal');
    const close = document.querySelector('#close');
    const detail_motivation = document.querySelector('#detail-motivation');
    const window_motivation = document.querySelector('#window-motivation');

    open.addEventListener('click', () => {
        detail_motivation.style.visibility = 'visible';
        detail_motivation.style.opacity = '1';
        window_motivation.style.visibility = 'visible';
        window_motivation.style.opacity = '1';
    });

    close.addEventListener('click', () => {
        detail_motivation.style.opacity = '0';
        window_motivation.style.opacity = '0';
        setTimeout(() => {
            detail_motivation.style.visibility = 'hidden';
            window_motivation.style.visibility = 'hidden';
        }, 500); // transition時間に合わせる
    });

    window_motivation.addEventListener('click', () => {
        close.click();
    });
}
