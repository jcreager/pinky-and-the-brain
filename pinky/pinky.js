'use strict'
let fs = require('fs')

let toString = (x) => { return x.toString() }

// declairitive
// narf is an event
let narf = (f) => {
  let p = new Promise((resolve, reject) => {
    fs.readFile(f, 'utf8', (e, d) => {
      let result = e ? reject(e) : resolve(d)
      return result
    })
  })
  p = p.then(toString)
  return p
}

module.exports = narf
