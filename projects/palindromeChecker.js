function palindrome(str) {
    let strReduced = str.replace(/[\W_]/g, '').toLowerCase();
    let strReverse = strReduced.split('').reverse().join('');
  
    for(let i=0; i < strReduced.length; i++){
      if(strReduced[i] != strReverse[i]) return false;
    }
    return true;
  }
  
  palindrome("eye");