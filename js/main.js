if ('classList' in Element.prototype) {
  var schemeCount = 6
  var num = Math.floor(Math.random() * schemeCount) + 1
  if (num !== 1) document.querySelector('html').classList.add('scheme--' + num)
}