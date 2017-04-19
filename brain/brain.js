var fs = require('fs')

// imparative

var brain = function (file, callback) {
  fs.readFile(file, 'utf8', function (e, d) {
    if (e) {
      callback(e)
    }
    return callback(null, d.toString())
  })
}

module.exports = brain
