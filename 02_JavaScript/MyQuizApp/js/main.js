'use strict';
{

  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  // クイズ用配列
  // q : 問題文
  // c : 選択肢 / 1番目の値が正解になるようにする
  const quizSet = shuffle([
    {q: '世界で一番大きな湖は？', c: ['カスピ海', 'カリブ海', '琵琶湖']},
    {q: '2の8乗は？', c: ['256', '64', '1024']},
    {q: '次のうち、最初にリリースされた言語は？', c: ['Python', 'JavaScript', 'HTML']},
  ]);

  let currentNum = 0;
  let isAnswerd;
  let score = 0;

  // シャッフル関数
  function shuffle(arr) {
    // フィッシャー・イェーツのシャッフル アルゴリズム
    for (let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j],arr[i]] = [arr[i],arr[j]];
    }
    return arr;
  }

  // 正誤判定 ファンクション
  function checkAnswer(li){
    // 回答済みの場合は何もしない
    if (isAnswerd){
      return;
    }

    // 回答済みにする
    isAnswerd = true;

    // 正誤判定する
    if (li.textContent === quizSet[currentNum].c[0]){
      // console.log('currect');
      li.classList.add('correct');
      score++;
    }else{
      // console.log('wrong');
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  // 問題文・選択肢 設定 ファンクション
  function setQuiz() {
    isAnswerd = false;
    // 問題文描画
    question.textContent = quizSet[currentNum].q;

    // 選択肢がある場合は削除する
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    // 選択肢描画
    // const shuffledChoices = shuffle(quizSet[currentNum].c);
    // 配列をスプレッド演算子 -> [...配列]とすることで配列のコピーを渡す
    // 配列をコピーしてシャッフルする
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    // console.log(quizSet[currentNum].c);
    // シャッフルした配列を選択して描画する
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;

      // 選択肢クリックイベント追加
      li.addEventListener('click',() => {
        checkAnswer(li);
      });

      choices.appendChild(li);
    });

    // 最終問題の場合
    if (currentNum === quizSet.length - 1){
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  // 次へボタン クリックイベント
  btn.addEventListener('click',() => {
    if (btn.classList.contains('disabled')){
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1){
      // console.log(`Score: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    }else{
      currentNum++;
      setQuiz();
    }
  });

}
