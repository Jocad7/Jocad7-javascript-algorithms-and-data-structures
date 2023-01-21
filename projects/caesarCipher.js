function rot13(str) {
  let alphabet = [
     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  let descipher = [];
  
  
  str.split('').forEach(e => {
    if(alphabet.includes(e)){
      descipher.push(
        alphabet[
          alphabet.indexOf(
          alphabet.at(
          alphabet.indexOf(e) - 13
        ))
        ]
       )
    } else {
      descipher.push(e)
    }
})
return descipher.join('')

}

console.log(rot13("SERR PBQR PNZC"));