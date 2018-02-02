let generateSet = require('./init').generateSet
let BloomFilter = require('bloomfilter').BloomFilter

originalSet = generateSet(10000)
tests = generateSet(1000)


var bloom = new BloomFilter(
  14427, // number of bits to allocate.
  1        // number of hash functions.
);

for (elem of originalSet) {
  bloom.add(elem)
}
console.time('bloom-yolo') // m=10k,p=0.5
for (test of tests) {
  if (bloom.test(test)) {
    // HERE BE DRAGONS!
  }
}
console.timeEnd('bloom-yolo')
