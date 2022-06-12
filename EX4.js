let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(function () {
    resolve(2);
  }, 1000);
});
promise.then(alert);
////////////////////////////////////////////////////////////////
//it shows 1 because execute resolve(1) immediately and only the first resolve will be shown
//and further calls will be ignored
