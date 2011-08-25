var fs = require('fs')

function refs () {
  var refList = []
    , refFiles = fs.readdirSync('../ref')

  for (var i = 0; i < refFiles.length; i++) {
    refList.push(require('../ref/' + refFiles[i]))
  }
  return refList
}

module.exports = refs
