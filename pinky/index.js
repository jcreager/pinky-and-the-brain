'use strict'
// narf is an event
let narf = require('./pinky.js')
let file = process.argv[2]

// point is a curry
// point is an action that responds to the narf
let poit = (f) => {
  return (p) => {
    let r = p.then(f)
    return r
  }
}

let toUpper = (x) => { return x.toUpperCase() }

// the 'curry' function lets us write regular
// functional js with async IO
file = narf(file)
let upper = poit(toUpper)
file = upper(file)
console.log('Pinky says:')
poit(console.log)(file)

module.exports = poit
