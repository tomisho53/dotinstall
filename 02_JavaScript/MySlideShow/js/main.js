'use strict';

{
  // 画像一覧を配列として保持
  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];

  // 指定画層の添字を取得
  let currentIndex = 0;

  // メイン画像に添字の画像を設定
  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  // 画像一覧（images）の数だけ繰り返す
  // 画像（image）に１ファイルずつ設定して処理する
  images.forEach( (image,index) => {
    // img をマークアップ
    const img = document.createElement('img');
    img.src = image;

    // li をマークアップ
    const li = document.createElement('li');
    // カレントインデックスのliにクラスを追加
    if (index === currentIndex) {
      li.classList.add('current');
    };
    // クリックイベント追加
    li.addEventListener('click', () => {
      mainImage.src = image;
      // 対象クラスの要素をすべて取得する
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      // current クラスの置き換えを実施する
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });
    li.appendChild(img);

    // クラスの thumbnails （ul要素）に li 要素を追加
    document.querySelector('.thumbnails').appendChild(li);
  });

  // 次へボタン
  const next = document.getElementById('next');
  next.addEventListener('click',() => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  // 前へボタン
  const prev = document.getElementById('prev');
  prev.addEventListener('click',() => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  let timeoutId;

  function playSlideshow(){
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    },1000);
  }

  let isPlaying = false;

  // プレイボタン
  const play = document.getElementById('play');
  play.addEventListener('click',() => {
    if (isPlaying === false){
      playSlideshow();
      play.textContent = 'Pause';
    } else {
      clearTimeout(timeoutId);
      play.textContent = 'Play';
    };
    isPlaying = !isPlaying;

  });

}
