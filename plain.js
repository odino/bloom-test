let generateSet = require('./init').generateSet

originalSet = generateSet(10000)
tests = generateSet(1000)

console.time('plain')
for (test of tests) {
  if (originalSet.includes(test)) {
    // HERE BE DRAGONS!
  }
}
console.timeEnd('plain')
