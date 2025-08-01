function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

console.log(countWords("saloni melkunde"));            
console.log(countWords("This is a test sentence.")); 
