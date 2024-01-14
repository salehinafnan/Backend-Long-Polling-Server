// JavaScript
let dataQueue = {};

export async function blockingGet(key) {
  return new Promise((resolve, reject) => {
    let checkData = setInterval(() => {
      if (dataQueue[key] && dataQueue[key].length > 0) {
        resolve(dataQueue[key].shift());
        clearInterval(checkData);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(checkData);
      resolve(null);
    }, 30000);
  });
}

export async function push(key, data) {
  if (!dataQueue[key]) {
    dataQueue[key] = [];
  }
  dataQueue[key].push(data);
}
