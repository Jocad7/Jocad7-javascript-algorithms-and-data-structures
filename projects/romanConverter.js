function convertToRoman(num) {
  let numStr = num.toString();
  let result = [];
  let oneCharacter = '';
  let twoCharacter;
  let trheeCharacter;
  let fourCharacter;
 if(numStr.length>0){
   //1 DIGIT
   switch(numStr[numStr.length-1]){
     case('1'):
       oneCharacter = 'i';
       break;
     case('2'):
       oneCharacter = 'ii';
       break;
     case('3'):
       oneCharacter = 'iii';
       break;
     case('4'):
       oneCharacter = 'iv';
       break;
     case('5'):
       oneCharacter = 'v';
       break;
     case('6'):
       oneCharacter = 'vi';
       break;
     case('7'):
       oneCharacter = 'vii';
       break;
     case('8'):
       oneCharacter = 'viii';
       break;
     case('9'):
       oneCharacter = 'ix';
       break;
   }
  //2 DIGITS
  switch(numStr[numStr.length-2]){
     case('1'):
       twoCharacter = 'x';
       break;
     case('2'):
       twoCharacter = 'xx';
       break;
     case('3'):
       twoCharacter = 'xxx';
       break;
     case('4'):
       twoCharacter = 'xl';
       break;
     case('5'):
       twoCharacter = 'l';
       break;
     case('6'):
       twoCharacter = 'lx';
       break;
     case('7'):
       twoCharacter = 'lxx';
       break;
     case('8'):
       twoCharacter = 'lxxx';
       break;
     case('9'):
       twoCharacter = 'xc';
       break;
   }
  //3 DIGITS
    switch(numStr[numStr.length-3]){
     case('1'):
       trheeCharacter = 'c';
       break;
     case('2'):
       trheeCharacter = 'cc';
       break;
     case('3'):
       trheeCharacter = 'ccc';
       break;
     case('4'):
       trheeCharacter = 'cd';
       break;
     case('5'):
       trheeCharacter = 'd';
       break;
     case('6'):
       trheeCharacter = 'dc';
       break;
     case('7'):
       trheeCharacter = 'dcc';
       break;
     case('8'):
       trheeCharacter = 'dccc';
       break;
     case('9'):
       trheeCharacter = 'cm';
       break;
   }
  //4 DIGITS
  switch(numStr[numStr.length-4]){
    case('1'):
    fourCharacter = 'm';
    break;
    case('2'):
    fourCharacter = 'mm';
    break;
    case('3'):
    fourCharacter = 'mmm';
    break;
    case('4'):
    fourCharacter = 'mmmm';
    break;
    case('5'):
    fourCharacter = 'V̅';
    break;
    case('6'):
    fourCharacter = 'V̅I̅';
    break;
    case('7'):
    fourCharacter = 'V̅I̅I̅';
    break;
    case('8'):
    fourCharacter = 'V̅I̅I̅I̅';
    break;
    case('9'):
    fourCharacter = 'I̅X̅';
    break;
  }
 } else {
   return 'Put a number to covert to roman';
 }
result.push(
  fourCharacter,
  trheeCharacter,
  twoCharacter,
  oneCharacter)

  return result.join('').toUpperCase();
}