var dbName = 'sampleDB';
var dbVersion = '6';
var storeName  = 'counts';
var count = 0;
//　DB名を指定して接続
var openReq  = indexedDB.open(dbName, dbVersion);

// エラー時
openReq.onerror = function (event) {
    // 接続に失敗
    console.log('db open error');
}

//DBのバージョン更新(DBの新規作成も含む)時のみ実行
openReq.onupgradeneeded = function (event) {
    var db = event.target.result;


    // count用DB
    var deleteReq = indexedDB.deleteDatabase(storeName);
    try{
      const objectStore = db.createObjectStore(storeName, {keyPath : 'id'})
      objectStore.createIndex("id", "id", { unique: true });
      objectStore.createIndex("cnt", "cnt", { unique: false });
    }catch(e){
      console.log('DB作成エラー1');
    }

    // egawaTest用DB
    var deleteReqEg = indexedDB.deleteDatabase('egawa');
    try{
        const objectStore_2 = db.createObjectStore('egawa', {keyPath : 'eg'})
        objectStore_2.createIndex("eg", "eg", { unique: true });
        objectStore_2.createIndex("name", "name", { unique: false });
    }catch(e){
      console.log('DB作成エラー2');
    }

    console.log('db upgrade');
}

//onupgradeneededの後に実行。更新がない場合はこれだけ実行
openReq.onsuccess = function (event) {
    var db = event.target.result;
    var trans = db.transaction(storeName, 'readonly');
    var store = trans.objectStore(storeName);
    var getReq = store.get(1);

    getReq.onerror = function (event) {
        count = 0;
        console.log('取得失敗');
    }
    getReq.onsuccess = function (event) {
        console.log('取得成功');
        if (typeof event.target.result === 'undefined') {
            count = 0;
        } else {
            count = event.target.result.cnt;
            console.log(count);
        }
        document.getElementById('countDisplay').innerHTML = count;
    }


    document.getElementById('countUp').addEventListener('click', function () {
        count++;
        var putReq = updateDb(db, storeName, count);

        putReq.onsuccess = function (event) {
            console.log('更新成功');
            document.getElementById('countDisplay').innerHTML = count;

            // egawa DB 更新
            var name = '';
            switch (count % 3){
              case 0:
                name = 'hajime';
                break;
              case 1:
                name = 'kyoko';
                break;
              case 2:
                name = 'kurumi';
                break;
              default:
                name = 'hiroshi';
                break;
            }
            var putReqEg = updateEg(db, 'egawa', name);
            putReqEg.onsuccess = function (event){
                console.log('更新成功（egawa）');
            }
            putReqEg.onerror = function (event){
                console.log('更新失敗（egawa）');
            }
        }
        putReq.onerror = function (event) {
            console.log('更新失敗');
        }
    });

    document.getElementById('countDown').addEventListener('click', function () {
        count--;
        var putReq = updateDb(db, storeName, count);

        putReq.onsuccess = function (event) {
            console.log('更新成功');
            document.getElementById('countDisplay').innerHTML = count;

            // egawa DB 更新
            var name = '';
            switch (count % 3){
              case 0:
                name = 'hajime';
                break;
              case 1:
                name = 'kyoko';
                break;
              case 2:
                name = 'kurumi';
                break;
              default:
                name = 'hiroshi';
                break;
            }
            var putReqEg = updateEg(db, 'egawa', name);
            putReqEg.onsuccess = function (event){
                console.log('更新成功（egawa）');
            }
            putReqEg.onerror = function (event){
                console.log('更新失敗（egawa）');
            }
        }
        putReq.onerror = function (event) {
            console.log('更新失敗');
        }
    });

    document.getElementById('countReset').addEventListener('click', function () {
        count = 0;
        var putReq = updateDb(db, storeName, count);

        putReq.onsuccess = function (event) {
            console.log('更新成功');
            document.getElementById('countDisplay').innerHTML = count;
        }
        putReq.onerror = function (event) {
            console.log('更新失敗');
        }
    });
}

function updateDb (db, store_name, cnt) {
    var trans = db.transaction(store_name, "readwrite");
    var store = trans.objectStore(store_name);
    return store.put({
        id: 1,
        cnt: cnt
    });
}

function updateEg (db, store_name, name) {
    var trans = db.transaction(store_name, "readwrite");
    var store = trans.objectStore(store_name);
    return store.put({
        eg: 1,
        name: name
    });
}
