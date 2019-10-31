'use strict';

{

  // 登録メンバーリスト
  const MemberDatas =
  [
    {
      "img1": "img/member2.png",
      "img2": "img/member3.png",
      "nickname": "ＫＢ",
      "name": "久保　直隆<span> - kubo naotaka - </span>",
      "qa1": "ベスト：04:40:07",
      "qa2": "大会：富山マラソン2019",
      "qa3": "好きなお酒：ハイボール！！",
    },
    {
      "img1": "img/member2.png",
      "img2": "img/member3.png",
      "nickname": "こみやくん",
      "name": "小宮　ＸＸ<span> - komiya xxxx - </span>",
      "qa1": "ベスト：03:52:07",
      "qa2": "大会：板橋マラソン2019",
      "qa3": "好きなお酒：日本酒！！",
    },
  ]

  let member_no = 0;

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
      this.img_1.src = MemberDatas[member_no]['img1'];

      this.img_2 = document.createElement('img');
      this.img_2.src = MemberDatas[member_no]['img2'];
      this.img_2.classList.add('active');

      div.appendChild(this.img_1);
      div.appendChild(this.img_2);
      section.appendChild(div);

      // ニックネーム
      const h1 = document.createElement('h1');
      h1.innerText = MemberDatas[member_no]['nickname'];
      section.appendChild(h1);

      // 名前
      const h2 = document.createElement('h2');
      h2.innerHTML = MemberDatas[member_no]['name'];
      section.appendChild(h2);

      // 自己紹介
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      li1.innerText = MemberDatas[member_no]['qa1'];
      const li2 = document.createElement('li');
      li2.innerText = MemberDatas[member_no]['qa2'];
      const li3 = document.createElement('li');
      li3.innerText = MemberDatas[member_no]['qa3'];
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      section.appendChild(ul);

      const membergrid = document.querySelector('.membergrid');
      membergrid.appendChild(section);

    }
    
  }

  // Memberクラスを新規生成する
  const members = [];

  for (  var i = 0;  i < MemberDatas.length;  i++  ) {
    member_no = i;
    members.push(new Member());
   }

}