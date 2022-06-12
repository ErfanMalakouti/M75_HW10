let promise = new Promise(function (resolve, reject) {
  throw new Error("Timeout");
}).catch("alert");
///////////////////////////////////////////////////////////////////////
// there is an invisible try and catch in every promises and it handel all synchronous errors but this error will
//generated after 1 sec so it can't handel it
