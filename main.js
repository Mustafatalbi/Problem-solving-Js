// function findMissingLetterIn(givenLetters) {
//     let alpha = "abcdefghijklmnopqrstuvwxyz";
//     let start = alpha.indexOf(givenLetters[0]);
  
//     for (let i = 0; i < givenLetters.length; i++) {
//       // console.log(alpha[start + i]); // Loop On Alpha
//       // console.log(givenLetters[i]); // Loop On Given Letters
//       // console.log("#####");
//      if (givenLetters[i] !== alpha[start + i]) {
//         return alpha[start + i];
//       }
//     }
  
//     return "No Missing Letter In Sequence";
//   }
  
//   console.log(findMissingLetterIn("defgi")); // h
//   console.log(findMissingLetterIn("abcdeghi")); // f
//   console.log(findMissingLetterIn("xyz")); // No Missing Letter In Sequence

  //
  
  // function convert(nums) {
  //   let array = nums.toString().split("").map((x) => +x).reverse();
  // return array;
  // };
  
  // console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
  // console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]
  // console.log(convert(987654321)); // [2, 3, 1, 9, 2, 5]

//

// function longestWordIn(sentence) {
//   let sen = sentence.split(" ").reduce(function(longest, current) {
//     return current.length > longest.length ? current : longest;
//   })
//   return sen;
// }
// console.log(longestWordIn("in programing we love academy tooooooooooo much"));


  // function longestWordIn(sentence) {
  //   let sen = sentence.split(" ").reduce(function(longest, current) {
  //     return current.length > longest.length ? current : longest;
  //   });
    
  //   return sen;
  // }
  // console.log(longestWordIn("in programing we love academy tooooooooooo much"));

//   //

  // function RemoveTheSame(String) {
    
  //   // let string = String.split(" ");
  //   // let uniqueString = new Set(string);
  //   //   let array = Array.from(uniqueString);
  //   return [...new Set(String.split(" "))] ;
  // }
  
  // console.log(RemoveTheSame("Hello Elzero Web Web Hello School"))
  
  
//   //

  // function removeDuplicateWordsFrom(sentence) {
  //   let wordsList = sentence.split(" ");
  //   let result = [];
  //   for (let i = 0; i < wordsList.length; i++) {
  //     if (result.indexOf(wordsList[i]) === -1) {
  //       result.push(wordsList[i]);
  //     }
  //   }
  //   return result.join(" ");
  // }
  // console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School"));
//   // Hello Elzero Web School
  
  
//   function removeDuplicateWordsFrom(sentence) {
//     let wordsList = sentence.split(" ");
//     console.log(wordsList);
//     let newSet = new Set(wordsList);
//     console.log(newSet);
//     // let arrayFromSet = [...newSet];
//     let arrayFromSet = Array.from(newSet);
//     console.log(arrayFromSet);
//     let joinWords = arrayFromSet.join(" ");
//     console.log(joinWords);
//     return joinWords;
  // }
  
  // console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School"));
  // Hello Elzero Web School

  // function removeDuplicateWordsFrom(sentence) { 
  //   return [...new Set(sentence.split(" "))].join(" ");
  // }
  
  // console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School"));
//   // Hello Elzero Web School



// function removeCharFrom(word, c) {
//    return word
//    .split("")
//    .filter(function(char) {
//      return char !== c.toLowerCase() && char !==c.toUpperCase(); 
//   })
//   .join("");
// }
// console.log(removeCharFrom("ElddzeroD webDd Schooddl", "d"));
// console.log(removeCharFrom("ElxxzeroX webxx SchooXxl", "x"));
// console.log(removeCharFrom("El@zero@ web@@ Schoo@l", "@"));

// function removeCharFrom(word, c) {
//    return word.split("").filter((x) =>  x !== c.toLowerCase() && x !==c.toUpperCase()).join("");
// }
// console.log(removeCharFrom("ElddzeroD webDd Schooddl", "d"));
// console.log(removeCharFrom("ElxxzeroX webxx SchooXxl", "x"));
// console.log(removeCharFrom("El@zero@ web@@ Schoo@l", "@")); 




  document.body.style.backgroundColor = "grey";


//   function GetNames(name) {
//     let arr = name.split(" ");

//     return arr[0][0] + "" + arr[1][0];
//   }
  
//   console.log(GetNames("Mustafa Talbi", "M.S"));
//   console.log(GetNames("Hamza Zarroqi", "H.Z"));
//   console.log(GetNames("Zakaria Arabi", "Z.A"));
//   console.log(GetNames("Manal Assouini", "M.A"));


  // function PositiveSum(arr) {
    
  //   let num = 0;
  //   for(let i = 0; i < arr.length; i++) {
  //     if(arr[i] > 0) {
  //       num += arr[i];
  //     }
  //   } 
  //   return num;
  // }

  // console.log(PositiveSum([1,2,3,4,5,]), 15);
  // console.log(PositiveSum([1,-2,3,4,5,]), 13);
  // console.log(PositiveSum([]), 0);


  // function points(l) { 
  //   let x = 0;
  //   for( i = 0; i < l.length; i++) {
  //       let a = l[i].split(":");
  //     a[0] > a[1] ? x += 3 : x += 0; a[1] === a[0] ? x += 1 : x += 0;
  //   };
  //   return x;
  //   };
  //   console.log(points(["1:0", "0:3", "1:1", "3:0"])); // 7
    

// function deffAges(a) { 
//   let m = Math.max(...a)
//    let   i =  Math.min(...a);
//    return [i, m, m - i]; 
// }

// console.log(deffAges([32,4,55,67,2]));
// console.log(deffAges([44,9,55,88,66])); 


// function strCount(s, l) {
//   return s.split('').filter(x => x === l).length; 
// }
// console.log(strCount('Hello World', 'o')); // 2


// function enevoradd(number) {
//   return number % 2 === 0 ? `${number} Even` : `${number} Odd`;
// };
// console.log(enevoradd(2))
// console.log(enevoradd(7))


// function smash(words) { 
//   return words.reduce(function(now, late) {
//     return `${now} ${late}`; 
//         // return words.join(" ");
//   });
// }
// console.log(smash(["hello"]));
// console.log(smash(["hello","world","i am","Talbi"]));


// function longestWord(str) {
//   let Arr = str.split(" ");
//   let reArr = Arr.reduce((now, late) => now.length > late.length ? now : late);
//   return reArr;
// }
// console.log(longestWord("I Woke Up Earlyer Today")); // Earlyer
// console.log(longestWord("I Went Straight To The Market")); // Straight


// function sumArray(a) {
//   if(a === null) return 0;
//   let max = Math.max(...a);
//   let min = Math.min(...a);

//   let f = a.filter((z) => z !== max && z !== min).reduce((n, l) => n + l); 

// return f; 
// // return a.sort((c, k) => c - k).slice(1, -1).reduce((n,l) => n + l); 
// }; 

// console.log(sumArray([6,2,2,8,10])); // 16
// console.log(sumArray([1,1,11,2,3])); // 9 

// function reapetStr(n, s) {
//   return s.repeat(n);
// }

// console.log(reapetStr(10, " I love You "));
// console.log(reapetStr(5, " Mustafa Talbi "));


// function digitaliz(num) {
// return num.toString().split("").reverse().map((x) => +x);
// };

// console.log(digitaliz(123456789)); 
// console.log(digitaliz(987654321));

// JavaScript split method can be used to split number into array.
// But split method only splits string, so first you need to convert Number to String.
// Then you can use the split method with a combination of map method to transform each letter to Number.
// Let's have a look at how to achieve i. 


// function countSheep(arr) {
//   let count = 0;
//   // for(let i = 0; i < arr.length; i++ ) {
//   //   arr[i] == true ? count++ : count;
//   // }

//     arr.map((x) => {
//       x == true ? count++ : count;
//     })
//   return count;  
// };

// console.log(countSheep([true, false,true,false,true,true,true,false,false,true,
//   true,false,true,true,false,true,true,true])); 

// function opposite(n) {
//   return -n
// }

// console.log(opposite(6))
// console.log(opposite(-8))
// console.log(opposite(24))


// function returnNegative(n) {
//   return n > 0 ? -n : n;  
// }; 

// console.log(returnNegative(5))
// console.log(returnNegative(8))
// console.log(returnNegative(-4))
// console.log(returnNegative(-9))


// function hayStack(arr) {

//     let find = arr.indexOf("zakaria");
//     return `Found Zakaria At Position : ${find}`;
// //     return `Found Zakaria At Position : arr.indexOf("zakaria")`;
// }
// console.log(hayStack(["jawad","manal","mustafa","zakaria","youssra","zineb"])); // Zakaria index 3


// function countPositiveNumAndReturnMajmo3LnumNegative(arr) {
//     let Count = 0;
//     let NegativeCount = 0;
//         for(let i = 0; i < arr.length; i++) {
//           // if(arr[i] > 0) {
//           //     Count++
//           // } else if (arr[i] < 0) {
//           //   NegativeCount += arr[i];
//           // }
//           arr[i] > 0 ? Count++ : Count; arr[i] < 0 ? NegativeCount += arr[i] : NegativeCount;
//         }
//         return `[${Count}, ${NegativeCount}]`; // [10, -65] 
// };
// console.log(countPositiveNumAndReturnMajmo3LnumNegative([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]));


// function doublestr(str) {
// let re = str[0].repeat(3); 
// let re1 = str[1].repeat(3); 
// let re2 = str[2].repeat(3); 
// let re3 = str[3].repeat(3); 
// let re4 = str[4].repeat(3); 
// let re5 = str[5].repeat(3); 
// let re6 = str[6].repeat(3); 
// return re + re1 + re2 + re3 + re4 + re5 + re6;
// }
// console.log(doublestr("Mustafa"));
// console.log(doublestr("Talbi"));

// function doublestr(str) {
//   return str.split("").map((s) => s.repeat(3)).join(""); 
// }
// console.log(doublestr("Mustafa"));


// function basicOp(arg,val1,val2) {
//     if(arg === "+") {
//       return +val1 + +val2;
//     } else if (arg === "-"){
//       return val1 - val2;
//     } else if (arg === "*") {
//       return val1 * val2;
//     } else {
//       return val1 / val2;
//     };
// };

// console.log(basicOp("+","4","7"));
// console.log(basicOp("-","15","18"));
// console.log(basicOp("*","5","5"));
// console.log(basicOp("/","49","7"));


// function SqureNum(arr) {
//   return arr.map((a) => Number.isInteger(Math.sqrt(a)) === true ? Math.sqrt(a) : Math.sqrt(a) * Math.sqrt(a));
// }

// console.log(SqureNum([4,3,9,7,2,1]));


// function countBy(x, n) {
//   // let z = [];
//   // for(let i = 1; i <= n; i++) {
//   //   z.push(x * i);
//   // };
//   // return z;
//     return Array.from(Array(n + 1).keys()).slice(1).map((v) => v* x);
// };
// console.log(countBy(1, 10)); //  12345678910 as array
// console.log(countBy(2, 5)); //   246810 as array 

// function removeSpaces(v) {
//   // return str.split('').filter(e => e.trim()).join('');  
//   // return v.split('').filter((e) => e === " " ? "" : e).join("");
//   return v.match(/\S/ig).join("")
// }
// console.log(removeSpaces("Mu  st a    f a-- T  al  bi"));

// function invertedValue(arr) {
//   return arr.map((q) => -q);
// }
// console.log(invertedValue([1,2,3,4,5]));
// console.log(invertedValue([1,-2,3,-4,-5]));
// console.log(invertedValue([]));


// function trueOrfalse(b) {
//   return b === true ? "Yes" : "No";
// }
// console.log(trueOrfalse(true));
// console.log(trueOrfalse(false));

// function reverse(str) {
//   return str.split(" ").reverse().reduce((z,y) => z + " " + y);
// }
// console.log(reverse("Hello World"));
// console.log(reverse("Mustafa Talbi"));

// function liters(time) {
// return Math.round(time * 0.5);
// }
// console.log(liters(3));
// console.log(liters(4));
// console.log(liters(1));

// function tahwil(str) {
//     return `${str}`;
// }
// console.log(tahwil(123));
// console.log(tahwil(999));


// function Motawasit(n) {
//   return n.reduce((o,y) => o + y) / n.length;
// }; 
// console.log(Motawasit([1,2,3,4]));
// console.log(Motawasit([2,4,6,8])); 


// function returnumnber(str) {
//   return str.split("").map((v) => +v).reduce((e,i) => `${e}${i}`); 
//   return +str;
// }
// console.log(returnumnber("1234"));


// function monkeyCount(num) {
//   let arrNum = [];
//   for(let i = 1; i <= num; i++) {
//     arrNum.push(i);
//   }
//   return arrNum;

// };
// console.log(monkeyCount(10));
// console.log(monkeyCount(1));

// function languages(languagesTakes) {
//   let languages = {
//     french: "Bienvenu",
//     arabic: "Marhaban",
//     germany: "Guten",
//     spain: "Hola",
//     english: "Welcome",
//   };
//   // if(lang === "french") {
//   //   return languages.french;
//   // } else if (lang === "arabic") {
//   //   return languages.arabic;
//   // } else if (lang === "germany") {
//   //   return languages.germany;
//   // } else if (lang === "spain") {
//   //   return languages.spain;
//   // } else {
//   //   return "Welcome";
//   // };

//   if(languages.hasOwnProperty(languagesTakes)) {
//     return languages[languagesTakes];
//   } else {
//     return languages["english"];
//   }
// };

// console.log(languages("french"));
// console.log(languages("arabic"));
// console.log(languages("germany"));
// console.log(languages("spain"));


// function getfromarr(arr) {
//   // return arr.join(" ");
//      return arr.reduce((a,b) => a + " " + b);
// }
// console.log(getfromarr(['hello',"i am","from","ur","town"]));

// function getNum(num) {
//   if(num === 1) return "One";
// }
// console.log(getNum(1))


// function bones(salary, bonus) {
//  return bonus == true ?  `$${salary * 10}` :  `$${salary}`;
// }
// console.log(bones(5000, true));
// console.log(bones(5000, false));
// console.log(bones(1000, true));


// function remove(str) {
//   return str.replace(/!$/, "");
// };
// console.log(remove("hi!"));
// console.log(remove("hi!!!"));
// console.log(remove("!hi"));

// function areYouPlayingBango(name) {
//   // return name[0] === "R" || name[0] === "r" ? `${name} Playing Bango` : `${name} Does Not Playing Bango`; 
//   return name.charAt(0) === "R" || name.charAt(0) === "r" ? `${name} Playing Bango` : `${name} Does Not Playing Bango`;
// };

// console.log(areYouPlayingBango("Mustafa"));
// console.log(areYouPlayingBango("Zakaria"));
// console.log(areYouPlayingBango("Reda"));
// console.log(areYouPlayingBango("Mohammed"));


// function removeSecond(arr) {
//   let newArr = [];
//   for(let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   //   if( i % 2 === 0) {
//   //     newArr.push(arr[i])
//   //   };
//   };
//   return newArr;
// };
// console.log(removeSecond(["keep","remove","keep","remove","keep","remove","keep"]));


// function DaysCount(Days) {
//   let carCost = 40;
//  return Days >= 7 ? carCost * 0.50 : carCost && Days >= 3 ? carCost * 0.80 : carCost;
// }
// console.log(DaysCount(7));
// console.log(DaysCount(3));
// console.log(DaysCount(10));
// console.log(DaysCount(1));

// function trueFalse(a,b) {
//   // if(a === false && b === false) return false;
//   // if(a === true && b === false) {
//   //   return true;
//   // } else if(a === false && b === true) return true;
//   // if(a === true && b === true) return false;
//   return a === b ? false : true;
// }
// console.log(trueFalse(false,false))
// console.log(trueFalse(true,false))
// console.log(trueFalse(false,true))
// console.log(trueFalse(true,true))


// function firstCons(arr) {
//   // for(let i = 1; i < arr.length; i++) {
//   //   if(arr[i] - 1 !== arr[i - 1]) return arr[i];
//   // };   
// };
// console.log(firstCons([1,2,3,4,6,7,8,9,10]));


// class kata {
//   static volumOfCloud(length, width, height) {
//     return length * width * height;
// }
// };
// console.log(kata.volumOfCloud(10,10,10));

function toFixed(Num) {
  return Num.toFixed(2);
};
console.log(toFixed(5.5889));
console.log(toFixed(3.3421));