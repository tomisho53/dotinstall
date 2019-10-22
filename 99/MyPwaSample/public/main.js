const messaging = firebase.messaging();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(registration => {
    console.log(registration);
    document.querySelector("#log").innerTEXT = registration;
    messaging.useServiceWorker(registration);
  }).catch(error => {
    console.error(error);
    document.querySelector("#log").innerTEXT = error;
  });
}

window.addEventListener('online', e => {
    console.log('online');
    document.querySelector("#log").innerTEXT = 'online';
}, false);

window.addEventListener('offline', e => {
    console.log('offline');
    document.querySelector("#log").innerTEXT = 'offline';
}, false);

// アプリがフォアグラウンドにある場合にプッシュ通知が届いた場合にログ出力
// https://firebase.google.com/docs/cloud-messaging/js/receive?hl=ja
messaging.onMessage(payload => {
    console.log(payload);
    document.querySelector("#log").innerTEXT = payload;
});

// ボタン押下のタイミングでユーザに通知権限を求める
function requestPermission() {
    messaging.requestPermission().then(() => {
        messaging.getToken().then(token => {
            console.log(token);
            document.querySelector("#log").innerTEXT = token;
        }).catch(error => {
            console.error(error);
            document.querySelector("#log").innerTEXT = error;
        });
    }).catch(error => {
      console.error(error);
      document.querySelector("#log").innerTEXT = error;
    });
}
