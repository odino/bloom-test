function generateRandomString() {
  return Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
}

function generateSet(size) {
  let set = []

  for (let x = 0; x < size; x++) {
    set.push(generateRandomString())
  }

  return set
}

module.exports = {
  generateSet
}
