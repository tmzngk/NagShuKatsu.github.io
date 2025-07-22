'use strict';

{
  document.addEventListener('DOMContentLoaded', () => {
    const imgs = [
      './images/hoby/agri/hanamomo.png',
      './images/hoby/agri/nobiru.png',
      './images/hoby/agri/ryokuhi.png',
      './images/hoby/agri/senzoku.png',
      './images/hoby/agri/soramame.png',
      './images/hoby/agri/tomato.png',
      './images/hoby/mt/goshikigahara.png',
      './images/hoby/mt/hakusan.png',
      './images/hoby/mt/tsurugi.png',
      './images/hoby/tradition/eiheiji.png',
      './images/hoby/tradition/oshima.png',
      './images/hoby/tradition/oyatani.png',
      './images/hoby/tradition/shirayamahime.png',
    ];

    let currentNum = 0;

    const mainImage = document.querySelector('.show img');
    const thumbnails = document.querySelector('.thumbnails');
    const play = document.getElementById('play');
    const pause = document.getElementById('pause');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    function setMainImage(image) {
      mainImage.classList.add('fade-out');

      setTimeout(() => {
        mainImage.src = image;
        mainImage.classList.remove('fade-out');
      }, 300); // 画像を変えるタイミング - CSSのtransitionと合わせる
    }

    function removeCurrentClass() {
      document.querySelectorAll('.thumbnails li')[currentNum]
        .classList.remove('current');
    }

    function addCurrentClass() {
      document.querySelectorAll('.thumbnails li')[currentNum]
        .classList.add('current');
    }

    // 最初の画像表示
    setMainImage(imgs[currentNum]);

    // サムネイル作成
    imgs.forEach((image, index) => {
      const li = document.createElement('li');
      if (index === currentNum) {
        li.classList.add('current');
      }
      li.addEventListener('click', () => {
        removeCurrentClass();
        currentNum = index;
        addCurrentClass();
        setMainImage(image);
      });
      const img = document.createElement('img');
      img.src = image;
      li.appendChild(img);
      thumbnails.appendChild(li);
    });

    // 次へボタン
    next.addEventListener('click', () => {
      removeCurrentClass();
      currentNum = (currentNum + 1) % imgs.length;
      addCurrentClass();
      setMainImage(imgs[currentNum]);
    });

    // 戻るボタン
    prev.addEventListener('click', () => {
      removeCurrentClass();
      currentNum = (currentNum - 1 + imgs.length) % imgs.length;
      addCurrentClass();
      setMainImage(imgs[currentNum]);
    });

    // スライドショー
    let intervalId;

    function playSlideshow() {
      intervalId = setInterval(() => {
        next.click();
      }, 3000);
    }

    play.addEventListener('click', () => {
      play.classList.add('hidden');
      pause.classList.remove('hidden');
      playSlideshow();
    });

    pause.addEventListener('click', () => {
      play.classList.remove('hidden');
      pause.classList.add('hidden');
      clearInterval(intervalId);
    });
  });
}
