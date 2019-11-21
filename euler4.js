function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function findLargestPalindrome() {

  let result = 0

  for (let least = 100; least < 1000; least++) {
    let array = range(least,999)
    for (let i = 0; i < array.length; i++) {
      let product = least * array[i]
      if (product.toString().length === 6 && product.toString() === product.toString().split('').reverse().join('') && product > result) {
        result = product
      }
    }
  }

  return result
}

console.log(findLargestPalindrome())
