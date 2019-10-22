// main.js
{
  'use script'

  // Servece Worker 登録
  navigator.serviceWorker.register('./service-worker.js').catch(console.error.bind(console));

  // // var watchID;
  // var clientid = '404591381496-0v08ed342barrcbdfqol21hpbi8mkgj6.apps.googleusercontent.com'; // 取得したクライアントID
  // var scopes = ['https://www.googleapis.com/auth/gmail.send'].join(' '); // スコープを配列で指定して分解
  //
  // if (navigator.geolocation) {
  //
  //   // 現在の位置情報を取得
  //   // watchID = navigator.geolocation.watchPosition(
  //   navigator.geolocation.getCurrentPosition(
  //
  //     // 位置情報の取得を成功した場合
  //     function (pos) {
  //
  //       // coords.latitude 現在位置の緯度
  //       // coords.longitude　現在位置の経度。
  //       // coords.altitude 現在位置の高度。メートル単位。
  //       // coords.accuracy 取得した緯度、経度の精度。メートル単位。
  //       // coords.altitudeAccuracy 取得した高度の精度。メートル単位。
  //       // coords.heading 方角。0〜360の角度で表す。0が北、90が東、180が南、270が西。
  //       // coords.speed　速度。メートル/秒数。位置情報を追跡する場合に使用。
  //
  //       var location = "<li>" + "緯度：" + pos.coords.latitude + "</li>";
  //       location += "<li>" + "経度：" + pos.coords.longitude + "</li>";
  //       location += "<li>" + "高度：" + pos.coords.altitude + "</li>";
  //       location += "<li>" + "緯度・経度の精度：" + pos.coords.accuracy + "</li>";
  //       location += "<li>" + "高度の精度：" + pos.coords.altitudeAccuracy + "</li>";
  //       location += "<li>" + "方角：" + pos.coords.heading + "</li>";
  //       location += "<li>" + "速度：" + pos.coords.speed + "</li>";
  //
  //       //Google Mapsで住所を取得
  //       var geocoder = new google.maps.Geocoder();
  //       latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
  //       geocoder.geocode({'latLng': latlng}, function(results, status) {
  //         if (status == google.maps.GeocoderStatus.OK) {
  //           console.log(results);
  //           // document.getElementById('address').innerHTML = results[0].formatted_address;
  //           // console.log("1:" + location);
  //           location += "<li>" + "住所：" + results[0].formatted_address + "</li>";
  //           document.getElementById("location").innerHTML = location;
  //           // console.log("2:" + location);
  //         }
  //         else {
  //           alert("エラー" + status);
  //         }
  //       });
  //       // console.log("3:" + location);
  //       // document.getElementById("location").innerHTML = location;
  //
  //       console.log('Sta : 位置情報取得成功処理');
  //       // 4. Google Maps APIの位置情報オブジェクトを生成
  //       var latitude = pos.coords.latitude;   // 緯度
  //       var longitude = pos.coords.longitude; // 経度
  //       console.log('緯度：' + latitude + '／経度：' + longitude)
  //       var latlng = new google.maps.LatLng(latitude, longitude);
  //
  //       // 5. 地図を表示
  //       map = new google.maps.Map(document.getElementById("mapCanvas"), {
  //         zoom: 14,       // ズームレベル
  //         center: latlng 	// 中心地を指定
  //       });
  //
  //       // 6. マーカーを置く
  //       var marker = new google.maps.Marker({position: latlng, map: map});
  //       console.log('End : 位置情報取得成功処理');
  //
  //     },
  //     // 位置情報取得に失敗した場合
  //     function (err) {
  //       document.getElementById("location").innerHTML = "<li>位置情報取得失敗</li>";
  //     }
  //     ,
  //     // null,
  //     { enableHighAccuracy: true }
  //
  //   );
  //
  // } else {
  //   window.alert("本ブラウザではGeolocationが使えません");
  // }
  //
  // function onLoadCallbackFunction() {
  //   gapi.auth.authorize({'client_id': clientid, 'scope': scopes, 'immediate': true}, handleAuthResult);
  // }
  //
  // function handleAuthClick(event) {
  //   gapi.auth.authorize({'client_id': clientid, 'scope': scopes, 'immediate': false}, handleAuthResult);
  //   return false;
  // }
  //
  // function handleAuthResult(authResult) {
  //   if (authResult && !authResult.error) {
  //     // 認証後の処理
  //   } else {
  //     // 認証できていない時やエラーの時の処理
  //   }
  // }
  //
  // // function clearWatchPosition() {
  // //   navigator.geolocation.clearWatch(watchID);
  // // }


}
