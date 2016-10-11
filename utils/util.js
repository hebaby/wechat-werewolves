function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function sortArray(num) {
  var aLuanXu=[];
  for (var i = 0; i < num; i++) {
    aLuanXu[i] = i;
  }
  for (var i = 0; i < num; i++) {
    var iRand = parseInt(num * Math.random());
    var temp = aLuanXu[i];
    aLuanXu[i] = aLuanXu[iRand];
    aLuanXu[iRand] = temp;
  }
  return aLuanXu;
}
module.exports = {
  formatTime: formatTime,
  sortArray: sortArray
}
