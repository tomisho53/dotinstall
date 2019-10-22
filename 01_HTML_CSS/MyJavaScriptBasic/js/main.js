'use strict';

{
  const a = document.querySelector('a');
  const span = document.querySelector('span');

  a.addEventListener('click', e => {
    e.preventDefault();
    a.classList.add('hidden');
    span.classList.remove('hidden');
  });

  // const div = document.querySelector('div');
  //
  // document.addEventListener('mousemove', e => {
  //   div.textContent = `${e.clientX}:${e.clientY}`
  // });
  // const button = document.querySelector('button');
  //
  // button.addEventListener('dblclick', () => {
  //   console.log('click');
  // });

  // console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
  // console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);
  // document.querySelectorAll('input[type="checkbox"]')[0].checked = true;
  //
  //
  // console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
  // console.log(document.querySelectorAll('input[type="radio"]')[1].checked);
  //
  // console.log(document.querySelectorAll('select > option')[0].selected);
  // console.log(document.querySelectorAll('select > option')[1].selected);
  // console.log(document.querySelectorAll('select > option')[2].selected);
  // document.querySelectorAll('select > option')[2].selected = true;


  // const text = document.querySelector('input[type="text"]');
  // const textarea = document.querySelector('textarea');
  //
  // console.log(text.value);
  // console.log(textarea.value);
  //
  // // text.focus();
  // text.disabled = true;

  // const h1 = document.createElement('h1');
  // h1.textContent = 'Title';
  // document.body.appendChild(h1);
  //
  // const p = document.createElement('p');
  // p.textContent = 'Hello!! .....';
  // document.body.appendChild(p);
  //
  //   const h2 = document.createElement('h2');
  //   h2.textContent = 'Sub Title';
  //   document.body.insertBefore(h2, p);
  //
  //   const copy = p.cloneNode(true);
  //   document.body.insertBefore(copy, h2)
  //
  //   document.body.removeChild(h2);

  // const div = document.querySelector('div');
  //
  // div.classList.add('border-pink');
  // div.classList.remove('box');
  // HTML の カスタムデータ属性
  // HTML の 属性に[data-]始まりで指定する
  // JavaScript の方はdataset.で取得する

  // const h1 = document.querySelector('h1');
  // console.log(h1.dataset.appId)

  // const h1 = document.querySelector('h1');
  // // console.log(h1.title);
  // // h1.title = 'Change!!';
  // // console.log(h1.title);
  //
  // h1.style.color = 'gray';
  // h1.style.backgroundColor = 'tomato';

  // const ul = document.querySelector('ul');
  //
  // console.log(ul.parentNode); // body
  // console.log(ul.children); // li
  // console.log(ul.children[0]); // li
  //
  // for (let i = 0; i < ul.children.length; i++){
  //   console.log(ul.children[i].textContent);
  // }

  // document.querySelector('h1').textContent = 'H1!!';
  //
  // document.querySelectorAll('li:nth-child(odd)').forEach(li => {
  //   li.textContent = 'li!';
  // })


  // document.getElementById('target').textContent = 'Changed!!';

  // document.body.textContent = 'Hello!!';
  //
  // document.title = 'Change!!';

  // let i = 0;
  //
  // const showTime = () => {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2){
  //     clearInterval(timerid);
  //     console.log('Stop!!');
  //   }
  // };
  //
  // let timerid = setInterval(showTime, 1000);
  //
  // window.alert('Hello Hajime!');

  // const answer = confirm('Are you sure?');
  // console.log(answer);

  // スプレッド演算子
  // const a = [10, 20];
  // const b = [1, 2, ...a];
  //
  // console.log(b);

  // const a = [10, 20];
  // const sum = (a, b) => a + b;
  // console.log(sum(...a));


// // Object
//
// const o = {
//   a: 1,
//   b: 2,
// };
//
// console.log(Object.keys(o));
// console.log(Object.values(o));
// console.log(Object.entries(o));

// 配列

// const a = [1, 2, 5, 10];

// const b = [];
// a.forEach(item => {
//   b.push(item * 2);
// });
// console.log(b);

// const b = a.map(item => item * 2);
// console.log(b);

// const b = a.filter(item => item % 2 === 0);
// console.log(b);

// // forEach アロー関数
// a.forEach((item, index) => {
//   console.log(`${index} : ${item}`);
// });

// // splice
// a.splice(2, 0, 6, 7);
// console.log(a);
//
// const removed = a.splice(1, 2);
// console.log(a);
// console.log(removed);

// add
// a.unshift(100);
// a.push(200, 300);
//
// console.log(a);

// // delete
// a.shift();
// a.pop();
// console.log(a);

  // const player = {
  //   name: 'egawa',
  //   score: 32,
  // };

  // class Player { // 親クラス
  //   constructor(name, score) { //メソッド
  //     this.name = name;
  //     this.score = score;
  //   }
  //
  //   showInfo() {
  //     console.log(`name : ${this.name} / score : ${this.score}` );
  //   }
  //
  //   static showVersion(){
  //     console.log('Player Class ver. 1.0');
  //   }
  //
  // }
  //
  // class SoccerPlayer extends Player { // 子クラス
  //   constructor(name, score, number) { //メソッド
  //     super(name, score);
  //     this.number = number;
  //   }
  //
  //   kick() {
  //     console.log('Goooooaaall!!');
  //   }
  //
  // }
  //
  // const tsubasa = new SoccerPlayer('tsubasa', 99, 10);
  //
  // tsubasa.kick();
  // console.log(tsubasa.number);
  // tsubasa.showInfo();

  // const eg = new Player('egawa',32);
  // const kb = new Player('kubo',43);
  //
  // eg.showInfo();
  // kb.showInfo();
  //
  // Player.showVersion();

}
