// let string = "hello";
// console.log("toUpperCase", string.toUpperCase());
// console.log("string", string);

// let xObject = {
//   x: 0,
// };
// console.log("xObject - 1", xObject);
// xObject.x = 2;
// console.log("xObject - 2", xObject);
// xObject.y = 3;
// console.log("xObject - 3", xObject);

// let masiv = [1, 2, 3, 4, 5];
// console.log("masiv1", masiv);
// masiv[0] = 66;
// console.log("masiv2", masiv);
// masiv[3] = 888;
// console.log("masiv2", masiv);

// let a = [1];
// let b = [2];
// console.log(a === b);

// let x = [];
// let z = x;
// console.log("z", z);
// z[0] = 1;
// console.log("z2", z);
// console.log("x", x);
// console.log(z === x);

// let a = ["a", "b", "c"];
// let b = [];

// for (let i = 0; i < a.length; i++) {
//   b[i] = a[i];
//   console.log("b", b);
// }
// let c = Array.from(b);
// console.log("c", c);
// console.log(a === c);

// const equalArrays = (a, b) => {
//   if (a === b) return true;
//   if (a.length !== b.length) return false;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) return false;
//   }
//   return false;
// };
// console.log(10 + "string");
// console.log("7" * "4");

// var countSheep = function (num) {
//   let sheeps = "";
//   if (num === 0) return "";
//   for (let i = 1; i <= num; i++) {
//     sheeps += i + " sheep ... ";
//   }
//   return sheeps;
// };
// console.log(countSheep(3));
// // 1 sheep...2 sheep...

// function enough(cap, on, wait) {
//   // your code here
//   return cap - on - wait === 0 ? 0 : Math.abs(cap - (on + wait));
// }
// console.log(enough(10, 5, 5));
// console.log(enough(100, 60, 50));
// console.log(enough(20, 5, 5));

// function removeSmallest(numbers) {
//   const smallest = Math.min(...numbers);
//   console.log(smallest);
//   const smallestIndex = numbers.indexOf(smallest);
//   console.log(smallestIndex);

//   const newArr = numbers
//     .slice(0, smallestIndex)
//     .concat(numbers.slice(smallestIndex + 1));

//   return newArr;
// }
// console.log(removeSmallest([2, 2, 1, 2, 1]));

// function findShort(s){
//   console.log(s.split(" "));

//   let arr = s.split(" ").sort((a, b) => a.length - b.length);
//   console.log(arr[0]);
//   return arr[0].length
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// function greet(language) {
//   const dataBase = [
//     ("english", "Welcome"),
//     ("czech", "Vitejte"),
//     ("danish", "Velkomst"),
//     ("dutch", "Welkom"),
//     ("estonian", "Tere tulemast"),
//     ("finnish", "Tervetuloa"),
//     ("flemish", "Welgekomen"),
//     ("french", "Bienvenue"),
//     ("german", "Willkommen"),
//     ("irish", "Failte"),
//     ("italian", "Benvenuto"),
//     ("latvian", "Gaidits"),
//     ("lithuanian", "Laukiamas"),
//     ("polish", "Witamy"),
//     ("spanish", "Bienvenido"),
//     ("swedish", "Valkommen"),
//     ("welsh", "Croeso"),
//   ];

//   dataBase.map((lang) => {
//     console.log(lang);
//     // if (language === lang) {
//     // }
//   });
// }
// console.log(greet("english"));
// let javaScriptDescription =
//   "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";
// const middleIndex = Math.floor((javaScriptDescription.length - 1) / 2);

// javaScriptDescription = javaScriptDescription
//   .slice(0, middleIndex)
//   .replaceAll("a", "A") // латиница
//   .replaceAll("а", "А") // кириллица
//   .replaceAll(" ", "")
//   .repeat(3);
// const updatedMiddleIndex = Math.floor((javaScriptDescription.length - 1) / 2);

// console.log(javaScriptDescription[updatedMiddleIndex]);
// console.log(javaScriptDescription);

// function getMiddle(s) {
//   const start = 0;
//   const end = s.length;
//   let middle;
//   if (s.length <= 1) return s;
//   if (end % 2 === 0) {
//     middle = (start + end) / 2;
//     return `${s[middle - 1]}${s[middle]}`;
//   } else {
//     middle = (start + end - 1) / 2;
//     return s[middle];
//   }
// }

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));

// function switchItUp(number) {
//   let numberStr = {
//     1: "One",
//     2: "Two",
//     3: "Three",
//     4: "Four",
//     5: "Five",
//     6: "Six",
//     7: "Seven",
//     8: "Eight",
//   };
//   for (let numb in numberStr) {
//     if (+numb === number) {
//       return numberStr[numb];
//     }
//   }
// }
// console.log(switchItUp(5));

// function points(games) {
//   let sum = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//       sum += 3;
//     }
//     if ((games[i][0] = games[i][2])) {
//       sum += 1;
//     }
//   }
//   return sum;
// }
// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// );
// function isTriangle(a, b, c) {
//   if (a <= 0 || b <= 0 || c <= 0) {
//     return false;
//   }
//   if (a + b > c && a + c > b && b + c > a) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));
// function filter_list(l) {
//   let arr = [];
//   l.map((number) => {
//     if (Number.isInteger(number)) {
//       arr.push(number);
//       console.log(arr)

//     }

//   });
//   return arr
// }
// console.log(filter_list([1, 2, "a", "b"]));

// function getCount(str) {
//   let count = 0;
//   let arrStr = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     arrStr.map((letter) => {
//       if (letter === str[i]) {
//         count++;
//       }
//     });
//   }
//   return count;
// }
// console.log(getCount("abracadabra"));

// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;

//   for (let i = 0; i < array.length; i++) {
//     let indexMin = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[indexMin]) {
//         indexMin = j;
//       }
//     }
//     let tmp = array[i];
//     array[i] = array[indexMin];
//     array[indexMin] = tmp;
//   }
// console.log('array[array.length - 1]',array[array.length - 1]);
//   return (
//     array.reduce((acc, num) => acc + num, 0) -(array[0] + array[array.length - 1])

//   );
// }

// console.log(sumArray(null));
// console.log(sumArray([]));
// console.log(sumArray([3]));
// console.log(sumArray([3, 5]));
// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([ -6, 20, -1, 10, -12 ]));

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   if (
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock") ||
//     (p1 === "rock" && p2 === "scissors")
//   ) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };
// console.log(rps("rock", "scissors"));
// console.log(rps("scissors", "paper"));
// console.log(rps("rock", "paper"));

// function positiveSum(arr) {
//   let sum = [];
//   if (arr.length === 0) return 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       console.log;
//       sum.push(arr[i]);
//     }
//   }
//   return sum.reduce((acc, n) => acc + n, 0);
// }
// console.log(positiveSum([1, -2, 3, 4, 5]));

// console.log(strCount("Hello", "o"));
// console.log(strCount("Hello", "l"));
// console.log(strCount("", "z"));
// const reverseSeq = (n) => {
//   arr = [];
//   for (let i = n; i > 0; i--) {
//     console.log(i);
//     arr.push(i);
//   }

//   return arr;
// };

// console.log(parseInt("5"));

// function testEven(n) {
//   return (typeof n )=== "number" ? true : false
// }
// console.log(testEven(0.5));

// function firstFunc() {
//   console.log("log1");
//   console.log("log2");
// }
// function secondFunc() {
//   console.log("log3");
//   firstFunc();
// }

// secondFunc();

// const btn = document.querySelector("button");
//
// console.log("start");
//
// function someFunc() {
//   setTimeout(function callback() {
//     console.log("Внутри таймату 3сек");
//   }, 3000);
//
//   console.log("Внутри someFunc");
// }
//
// btn.addEventListener("click", someFunc);
//
// someFunc();
//
// console.log("end");

// function isPalindrome(x) {
//   console.log(x.toLowerCase().split('').reverse().join("") )
//   if(x.toLowerCase().split('').reverse().join("") === x.toLowerCase()) return true
//   return false
// }
//
// console.log(isPalindrome("ada"))

// const min = function(list){
//   for (let i = 0; i < list.length; i++){
//     for (let j = 0; j < list.length; j++){
//       if(list[j + 1] < list[j]){
//         let tmp = list[j]
//         list[j] = list[j+1]
//         list[j+1] = tmp
//       }
//     }
//   }
//   return list[0];
// }
//
// const max = function(list){
//   for (let i = 0; i < list.length; i++){
//     for (let j = 0; j < list.length; j++){
//       if(list[j + 1] < list[j]){
//         let tmp = list[j]
//         list[j] = list[j + 1]
//         list[j + 1] = tmp
//       }
//     }
//   }
//
//   return list[list.length - 1]
// }
//
//
// console.log(1, min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(2, min([42, 54, 65, 87, 0]));
// console.log(3, max([4, 6, 2, 1, 9, 63, -134, 566]));
// console.log(4, max([5]));
//
// Array.prototype.last = function() {
//   if(this.length ) return this[arr.length - 1]
//   return -1
// };
//
// const arr = [null];
// console.log( arr.last()); // 3

//
// function isPalindrome (s){
//  ;
//   console.log( 1, s = s.toLowerCase().replace(/[^a-z0-9]/g, ''))
//   console.log("split", s.split('').reverse().join(""))
//   return s.split('').reverse().join('');
// }
//
// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))
// console.log(isPalindrome("race a  "))

// const foo = [1, 2, 3];
// const [n] = foo;
// console.log(n);


// let obj = {"x":5, "y": 42}
// let emptyObj = {}
// let arr = [null, false, 0]
// let emptyArr = []
//
// const checkIsEmpty = (obj)=>{
//     if (Array.isArray(obj)) {
//         return obj.length === 0;
//     } else if (typeof obj === 'object' && obj !== null) {
//         return Object.keys(obj).length === 0;
//     }
//     return false;
// }
// console.log(checkIsEmpty(obj))
// console.log(checkIsEmpty(emptyObj))
// console.log(checkIsEmpty(arr))
// console.log(checkIsEmpty(emptyArr))
//
// const myObject = { x: 5, y: 42, z: 10 };
//
// // Создаем собственный итератор для объекта
// myObject[Symbol.iterator] = function () {
//     const keys = Object.keys(this);
//     let index = 0;
//
//     // Возвращаем объект итератора
//     return {
//         next: () => {
//             if (index < keys.length) {
//                 const key = keys[index];
//                 const value = this[key];
//                 index++;
//                 return { value: [key, value], done: false };
//             } else {
//                 return { done: true };
//             }
//         },
//     };
// };
//
// // Используем цикл for...of для обхода объекта и получения ключей и значений
// for (const [key, value] of myObject) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }
//
// function other(){
//     let count = 0
//     const inner = () => count++;
//     // console.log(count)
//     let message = `счет равен ${count}`
//     const log = ()=> console.log(message)
//     return [inner, log]
// }
// const [inner, log] = other()
// //
// inner()
// inner()
// inner()
// log()
// log()
// console.log(inner())
//
// const ane = other()
// console.log(ane)
// console.log(ane)
// console.log(ane)
// const ane1 = other()
// // console.log(ane1.inner())

// function stringToArray(string){
//     string.split(" ")
// const arr = [string]
//
//     return  arr
//
// }
// console.log( stringToArray("Robin Singh"))
// console.log(stringToArray("I love arrays they are my favorite"))

// function arithmetic(a, b, operator){
//     switch (operator) {
//         case "add": return a + b
//         case "subtract": return a - b
//         case "multiply": return a * b
//         case "divide": return a / b
//     }
//
// }
// console.log(arithmetic(1, 2, "add"))
// console.log(arithmetic(8, 2, "subtract"))
// console.log(arithmetic(5, 2, "multiply"))
// console.log(arithmetic(8, 2, "divide"))

// function addLineNumbers(textArray) {
//     return textArray.map((line, index) => `${index + 1}: ${line}`);
// }
//
// // Example usage:
// const input = ["a", "b", "c"];
// const output = addLineNumbers(input);
// console.log(output);
//
// var number=function(array){
//     return array.map((number, index)=> `${index + 1}: ${number}`)
// }
//
// console.log(number([]))
// console.log(number(["a", "b", "c"]))
//
// function pipeFix(numbers){
//     let result = []
//     console.log(numbers[numbers.length -1])
//     for (let i = 0; i < numbers[numbers.length -1]; i++){
//         result.push(i+1)
//     }
//     return result
// }
//
// console.log(pipeFix([1,2,3,5,6,8,9]))
//
// function sortStringsByLength(strings) {
//     return strings.sort((a, b) => a.length - b.length);
// }
//
// // Example usage:
// console.log(sortStringsByLength( ["Telescopes", "Glasses", "Eyes", "Monocles"]))
// const inputArray =  ["Telescopes", "Glasses", "Eyes", "Monocles"]
// const sortedArray = sortStringsByLength(inputArray);
// console.log(sortedArray);

// function solution(str, ending){
//     TODO: complete
//     console.log(str[str.length - 2])
//     console.log(ending[ending.length -1])
//     if(str[str.length - 1] ===  ending[ending.length -1]) return  true
//     return false
// }
//
// console.log(solution('abcde', 'cde'))
// console.log(solution('sumo', 'umo'))

// function removeExclamationMarks(s) {
//     let r = s.split("!")
//     // r.join('')
//     console.log(r)
//     return r
// }
//
// console.log(removeExclamationMarks("Hello World!"))
//
// function removeEveryOther(arr){
//     //your code here
//     for(let i = 1; i < arr.length; i++){
//          arr.splice(i, 1)
//     }
//     return arr
// }
// // let arr2 = arr
//
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
//
// function removeEverySecondElement(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         arr.splice(i, 1);
//     }
//     return arr;
// }
//
// const inputArray = ["Keep", "Remove", "Keep", "Remove", "Keep"];
// const resultArray = removeEverySecondElement(inputArray);
// console.log(resultArray); // ["Keep", "Keep", "Keep"]
// let add;
// // console.log(add(2, 5))
// console.log(add(2)(5))
// // add(2, 5); // 7
// // add(2)(5); // 7

// console.log("i'm a lasagna hog".split(""))
// console.log( window.foo || ( window.foo = "bar" ) )
// var foo = "Hello";
// (function() {
//     var bar = " World";
//     alert(foo + bar);
// })();
// alert(foo + bar);
//
// let foo = [];
// foo.push(1);
// foo.push(2);
// foo.push(3);
// foo.push(4);
// foo.length = 5;
// console.log(foo)
// console.log(foo.length,'length')
// console.log(foo[6])
//
// let foo = {n: 1};
// let bar = foo;
// foo.x  = {n: 2};
// console.log(foo)
//
// console.log('one');
// setTimeout(function() {
//     console.log('two');
// }, 0);
// console.log('three');
//
// let capitals = function (word) {
//     let indexUp = []
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] !== word[i].toLowerCase()) {
//             indexUp.push(i)
//         }
//     }
//     return indexUp
// };
//
// let capitals2 = function (word) {
//     let indexCur2 = []
//     for(let i = 0; i < word.length; i++){
//         if(word[i] !== word[i].toLowerCase()){
//             indexCur2.push(i)
//         }
//     }
//     return indexCur2
// };
//
// console.log(capitals('CodEWaRs'))// [0,3,4,6] )
// console.log(capitals2('CodEWaRs'))// [0,3,4,6] )


// function problem(x) {
//     if (typeof x === "string") return "Error"
//     return x * 56
// }
//
// console.log(problem("hello"))
// console.log(problem(1));
// console.log(problem(0));
// console.log(problem(1.2));
// console.log(problem(3));
// console.log(problem("RyanIsCool"));
// console.log(problem(-3))
// console.log(problem(0.03))
//
// function stray(numbers) {
//     let max = Math.max(...numbers)
//     let min = Math.min(...numbers)
//     let countMax = 0
//     let countMin = 0
//     for (let i = 0; i < numbers.length; i++){
//         // console.log(1)
//         if (numbers[i] === min ) {
//             // console.log(2)
//              countMax++
//         }
//         if (numbers[i] === max ) {
//             // console.log(3)
//             countMin++
//         }
//     }
//     if (countMax > countMin)
//     {
//         return countMax
//     } else {
//         return countMin
//     }
// }
//
// console.log(stray([1, 1, 2]))

//
// function updateLight(current) {
//     const lights = {
//         "green": "yellow",
//         "yellow": "red",
//         "red":"green"
//     }
//     if(lights[current]) return lights[current]
// }
//
// console.log(updateLight("green"))
// console.log(updateLight("yellow"))
// console.log(updateLight("red"))

// function nameShuffler(str){
//     console.log( 1, str.split(" ").reverse().join(" "))
//
//     // str.slice(" ")
//
//
// }
// console.log(nameShuffler('john McClane'))
// console.log(nameShuffler('Mary jeggins'))

//
// function fakeBin(x){
//     let str = "";
//     for (let i = 0; i < x.length; i++) {
//         if (Number(x[i]) < 5) {
//             str += 0
//         } else {}
//         str += 1
//     }
//     return str
// }
//
// console.log(1, fakeBin('45385593107843568'))
//
// function alphabetPosition(text) {
//
//     let num = "";
//     const alphabet = {
//         "a": 1,
//         "b": 2,
//         "c": 3,
//         "d": 4,
//         "e": 5,
//         "f": 6,
//         "g": 7,
//         "h": 8,
//         "i": 9,
//         "j": 10,
//         "k": 11,
//         "l": 12,
//         "m": 13,
//         "n": 14,
//         "o": 15,
//         "p": 16,
//         "q": 17,
//         "r": 18,
//         "s": 19,
//         "t": 20,
//         "u": 21,
//         "v": 22,
//         "w": 23,
//         "x": 24,
//         "y": 25,
//         "z": 26
//     };
//
//     for (let i = 0; i < text.length; i++){
//
//         if(alphabet[text[i]]) {
//             num = (num + alphabet[text[i]]) + " "
//         }
//     }
//     return num;
//
// }
//
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))


// function greet(language) {
//     const dataBase = {
//         "english": "Welcome",
//         "czech": "Vitejte",
//         "danish": "Velkomst",
//         "dutch": "Welkom",
//         "estonian": "Tere tulemast",
//         "finnish": "Tervetuloa",
//         "flemish": "Welgekomen",
//         "french": "Bienvenue",
//         "german": "Willkommen",
//         "irish": "Failte",
//         "italian": "Benvenuto",
//         "latvian": "Gaidits",
//         "lithuanian": "Laukiamas",
//         "polish": "Witamy",
//         "spanish": "Bienvenido",
//         "swedish": "Valkommen",
//         "welsh": "Croeso",
//         "IP_ADDRESS_INVALID": "Welcome",
//         "IP_ADDRESS_NOT_FOUND": "Welcome",
//         "IP_ADDRESS_REQUIRED": "Welcome",
//     }
//
//     if (dataBase[language]) {
//         let str = `${dataBase[language]}. Try again.`
//         return str
//
//     }
// }
//
// console.log(greet('dutch'))

// function remove (string) {
//     // // console.log(string[string.length -1] )
//     // let arr = [...string]
//     // if(string[string.length -1] === "!"){
//     //
//     //     console.log(1, arr.splice(string.length -1, 1).join(""))
//     //
//     //
//     //
//     // }
//     // return arr
//     string = string.split('!');
//     return string.concat('!').join('');
// }
//
// console.log(remove("hi!"))