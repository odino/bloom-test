let generateSet = require('./init').generateSet
let BloomFilter = require('bloomfilter').BloomFilter

originalSet = generateSet(10000)
tests = generateSet(1000)


var bloom = new BloomFilter(
  95851, // number of bits to allocate.
  7        // number of hash functions.
);

for (elem of originalSet) {
  bloom.add(elem)
}

console.time('bloom-high-precision') // m=10k,p=0.01
for (test of tests) {
  if (bloom.test(test)) {
    // HERE BE DRAGONS!
  }
}
console.timeEnd('bloom-high-precision')
