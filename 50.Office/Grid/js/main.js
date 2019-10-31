'use strict';

{

  // memberクラス
  class Member {
    constructor() {
      // メンバーカード
      const section = document.createElement('section');
      section.classList.add('memberitem');

      // 画像
      const div = document.createElement('div');
      div.classList.add('img-box');
      this.img_1 = document.createElement('img');
      this.img_1.src = "img/member2.png";

      this.img_2 = document.createElement('img');
      this.img_2.src = "img/member3.png";
      this.img_2.classList.add('active');

      div.appendChild(this.img_1);
      div.appendChild(this.img_2);
      section.appendChild(div);

      // ニックネーム
      const h1 = document.createElement('h1');
      h1.innerText = "ＫＢ";
      section.appendChild(h1);

      // 名前
      const h2 = document.createElement('h2');
      h2.innerHTML = "久保　直隆<span> - kubo naotaka - </span>";
      section.appendChild(h2);

      // 自己紹介
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      li1.innerText = "ベスト：04:40:07";
      const li2 = document.createElement('li');
      li2.innerText = "大会：富山マラソン2019";
      const li3 = document.createElement('li');
      li3.innerText = "好きなお酒：ハイボール";
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      section.appendChild(ul);

      const membergrid = document.querySelector('.membergrid');
      membergrid.appendChild(section);

    }
    
  }

  // Memberクラスを新規生成する
  const members = [
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
    new Member(),
  ];

}