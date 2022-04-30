function pairs(letters) {
  const result = [];

  for(let i = 0; i < letters.length; i += 1) {
    for(let j = 0; j < letters.length; j += 1) {
      result.push(`${letters[i]}${letters[j]}`)
    }
  }

  return result;
}

console.log(pairs(['a','b','c']));
