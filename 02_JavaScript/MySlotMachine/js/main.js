'use strict';

{

  // Panel class
  class Panel {
    // コンストラクタ
    constructor () {
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', () => {

        // クラスに inactive がある場合は 処理を実施しない
        if (this.stop.classList.contains('inactive')){
          return;
        }
        // ボタン押下後に inactiveのクラスを追加
        this.stop.classList.add('inactive');

        clearTimeout(this.timeoutId);

        // 動いているパネルの数をデクリメント
        panelsLeft--;

        // 動いているパネルがなくなった場合にチェックする
        if (panelsLeft === 0){
          checkResult();

          // リセット処理
          spin.classList.remove('inactive');
          panelsLeft = 3;
        }
      })

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

    // ランダムな画像を取得する
    getRandomImage() {
      // 選択される画像を設定する
      const images = [
        'img/seven.png',
        'img/bell.png',
        'img/cherry.png',
      ];

      // 0 - 2 の数値をランダムに添字として設定する。
      // Math.floor(Math.rondom() * 3) -> 3を設定することで 0 - 2 のランダムな数値となる
      return images[Math.floor(Math.random() * images.length)];
    }

    // 画像をランダムに設定する
    spin() {
      this.img.src = this.getRandomImage();
      // タイマーで実行されるように設定
      this.timeoutId = setTimeout(() => {
        this.spin();
      },50);
    }

    // 自身の画像と他の２つ画像を比較
    // 他の２つの画像がどちらも異なる場合のみアンマッチ
    isUnmatched(p1, p2){
      // if (this.img.src !== p1.img.src && this.img.src !== p2.img.src){
      //   return true;
      // }else{
      //   return false;
      // }
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    // アンマッチの場合の処理
    unmatch() {
      this.img.classList.add('unmatched');
    }

    // 初期状態に戻す
    activate() {
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
    }
  }




  // パネルチェック
  function checkResult() {
    if(panels[0].isUnmatched(panels[1],panels[2])) {
      panels[0].unmatch();
    }
    if(panels[1].isUnmatched(panels[0],panels[2])) {
      panels[1].unmatch();
    }
    if(panels[2].isUnmatched(panels[0],panels[1])) {
      panels[2].unmatch();
    }
  }

  // Panelクラスを新規生成する
  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

  let panelsLeft = 3;

  // SPINボタンのクリックイベント追加
  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {

    // クラスに inactive がある場合は 処理を実施しない
    if (spin.classList.contains('inactive')){
      return;
    }
    // ボタン押下後に inactiveのクラスを追加
    spin.classList.add('inactive');

    // panels 内のクラス分のspinを実行する
    panels.forEach(panel => {
      panel.activate();
      panel.spin();
    });
  });

}
