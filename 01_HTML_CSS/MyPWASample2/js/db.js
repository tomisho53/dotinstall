// DB名、バージョン設定
var dbName = 'egDb';
var dbVersion = '1'

// 1.indexedDBを開く
var idbReq = indexedDB.open(dbName, dbVersion);

// 2.DB新規作成時、またはバージョン変更時に実行
idbReq.onupgradeneeded = function(event) {
  // データストア作成
  var db = event.target.result;

  // オブジェクトストア削除
  // db.deleteObjectStore('egawa');

  // オブジェクトストア作成
  var egawaStore = db.createObjectStore('egawa',{ keyPath: 'id' });
}

// 3-1.DBオープン失敗時
idbReq.onerror = function (event) {
  console.log('error');
};

// 3-2.DBオープン成功時
var db;
idbReq.onsuccess = function (event) {
  db = idbReq.result;

  // オブジェクトストアを読み書き権限付きで使用することを宣言
  var transaction = db.transaction(['egawa'],'readwrite');

  // オブジェクトストアの取り出し
  var egawaStore = transaction.objectStore('egawa');

  var putReq = egawaStore.put({
      id: 1,
      name: 'kyoko'
  });
  putReq.onsuccess = function() {
    console.log('書き込み成功！！');
  };
  putReq.onerror = function(event) {
    console.log('書き込み失敗！！');
  };

  // '増やす'ボタン押下時にデータを追加してみる
  // 無名関数
  // document.getElementById('countUp').addEventListener('click', function () {
  // アロー関数
  // document.getElementById('countUp').addEventListener('click', () => {
  //   // オブジェクトストアを読み書き権限付きで使用することを宣言
  //   var transaction = db.transaction(['egawa'],'readwrite');
  //   // オブジェクトストアの取り出し
  //   var egawaStore = transaction.objectStore('egawa');
  //   var putReq = egawaStore.put({
  //       id: 1,
  //       name: 'kurumi'
  //   });
  //   putReq.onsuccess = function() {
  //     console.log('書き込み成功！！！！');
  //   };
  //   putReq.onerror = function(event) {
  //     console.log('書き込み失敗！！！！');
  //   };
  // });

  // '減らす'ボタン押下時にデータを追加してみる
  // 無名関数
  // document.getElementById('countDown').addEventListener('click', function () {
  // アロー関数
  // document.getElementById('countDown').addEventListener('click', () => {
  //   // オブジェクトストアを読み書き権限付きで使用することを宣言
  //   var transaction = db.transaction(['egawa'],'readwrite');
  //   // オブジェクトストアの取り出し
  //   var egawaStore = transaction.objectStore('egawa');
  //   var putReq = egawaStore.put({
  //       id: 1,
  //       name: 'hajime'
  //   });
  //   putReq.onsuccess = function() {
  //     console.log('書き込み成功！！！！');
  //   };
  //   putReq.onerror = function(event) {
  //     console.log('書き込み失敗！！！！');
  //   };
  // });
}
