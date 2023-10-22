8 kyu
Exclamation marks series #1: Remove an exclamation mark from the end of string
JavaScript:

function remove (string) {
 if (string.endsWith('!')) {
    return string.slice(0, -1); 
  }
  return string; // 
}
3 days agoRefactorDiscuss
6 kyu
Replace With Alphabet Position
JavaScript:

function alphabetPosition(text) {
  
  text = text.toLowerCase();
  
  let result = '';
  
  const alphabet = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
    'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
    'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
  };

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (alphabet[char]) {
      result += alphabet[char] + ' ';
    }
  }

  return result.trim();
  
}
3 days agoRefactorDiscuss
8 kyu
Fake Binary
JavaScript:

function fakeBin(x){
     let str = "";
    for (let i = 0; i < x.length; i++) {
        if (Number(x[i]) < 5) {
            str += 0
        } else {
          str += 1
        }
    }
    return str
}
3 days agoRefactorDiscuss
8 kyu
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
JavaScript:

String.prototype.toAlternatingCase = function () {
 let str = ''
    for(let i = 0; i < this.length; i++){
        if(this[i] === this[i].toUpperCase()){
            str += this[i].toLowerCase()
        } else{
            str +=this[i].toUpperCase()
        }
    }
    return str
}
3 days agoRefactorDiscuss
8 kyu
Function 2 - squaring an argument
JavaScript:

// Write the "square"-function here
const square = (num) =>   num * num
3 days agoRefactorDiscuss
6 kyu
Write Number in Expanded Form
JavaScript:

function expandedForm(num) {
const numStr = num.toString(); // Преобразуем число в строку
  const result = []; // Создаем массив для хранения расширенной формы

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i], 10); // Получаем текущую цифру как число
    if (digit !== 0) {
      // Если цифра не равна нулю, добавляем ее в расширенную форму
      const expandedDigit = digit * Math.pow(10, numStr.length - 1 - i);
      result.push(expandedDigit);
    }
  }

  return result.join(' + '); 
}
3 days agoRefactorDiscuss
8 kyu
Name Shuffler
JavaScript:

function nameShuffler(str){
return str.split(" ").reverse().join(" ")
  
}
4 days agoRefactorDiscuss
8 kyu
Reverse List Order
JavaScript:

function reverseList(list) {
return list.reverse()
}
4 days agoRefactorDiscuss
8 kyu
Thinkful - Logic Drills: Traffic light
JavaScript:

function updateLight(current) {
  const lights = { 
  "green": "yellow",
  "yellow": "red",
  "red":"green"
   } 
  if(lights[current]) return lights[current]
}
4 days agoRefactorDiscuss
7 kyu
Find the stray number
JavaScript:

function stray(numbers) {
  return numbers.reduce((a, b)=> a ^ b )
  
//    let max = Math.max(...numbers)
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
}
4 days agoRefactorDiscuss
8 kyu
Grasshopper - Debug sayHello
JavaScript:

function sayHello(name) {
  return `Hello, ${name}`
}
4 days agoRefactorDiscuss
8 kyu
Super Duper Easy
JavaScript:

function problem(x){
  if(typeof x === "string") return "Error"
  return ((x * 50 )+ 6)
}
4 days agoRefactorDiscuss
7 kyu
Find the capitals
JavaScript:

var capitals = function (word) {
  let indexCur = []
  for(let i = 0; i < word.length; i++){
    if(word[i] !== word[i].toLowerCase()){
      indexCur.push(i)
    }
  }
  return indexCur
};
4 days agoRefactorDiscuss
8 kyu
Removing Elements
JavaScript:

function removeEveryOther(arr){
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

7 days agoRefactorDiscuss
8 kyu
Convert number to reversed array of digits
JavaScript:

function digitize(n) {
 return n.toString().split('').reverse().map(Number)
}
8 days agoRefactorDiscuss
8 kyu
You only need one - Beginner
JavaScript:

function check(a, x) {
for (let i = 0; i < a.length; i++){
    if( a[i] === x ) return true
  }
  return false
}
8 days agoRefactorDiscuss
8 kyu
Remove exclamation marks
JavaScript:

function removeExclamationMarks(s) {

  return  s.split('!').join("")
}
8 days agoRefactorDiscuss
7 kyu
String ends with?
JavaScript:

function solution(str, ending){

 
  return str.endsWith(ending)
}
9 days agoRefactorDiscuss
8 kyu
Will you make it?
JavaScript:

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if(distanceToPump <= mpg * fuelLeft ) return true
  return false
};
9 days agoRefactorDiscuss
7 kyu
Sort array by string length
JavaScript:

function sortByLength (array) {
  return array.sort((a, b)=> a.length - b.length)
};
10 days agoRefactorDiscuss
7 kyu
Regex validate PIN code
JavaScript:

function validatePIN (pin) {
//  return typeof pin === "string" && 
//   Number.isInteger(+pin) && 
//   [4, 6 ].includes(pin.length)
  const pinRegex = /^(?:\d{4}|\d{6})$/
  return pinRegex.test(pin)
}
10 days agoRefactorDiscuss
8 kyu
5 without numbers !!
JavaScript:

function unusualFive() {
  let arr = ["f", "a", "l", "f", "e"]
  return arr.length;
}
11 days agoRefactorDiscuss
8 kyu
Lario and Muigi Pipe Problem
JavaScript:

function pipeFix(numbers){
    let result = []
  
    for (let i = numbers[0]; i <= numbers[numbers.length -1]; i++){
        result.push(i)
    }
    return result
}
11 days agoRefactorDiscuss
7 kyu
Testing 1-2-3
JavaScript:

var number=function(array){
   return array.map((number, index)=> `${index + 1}: ${number}`)
}
11 days agoRefactorDiscuss
8 kyu
Sum Arrays
JavaScript:

// Sum Numbers
function sum (numbers) {
  if (numbers.length === 0) return 0
   return numbers.reduce((acc, cur)=> acc + cur, 0)
};
11 days agoRefactorDiscuss
7 kyu
Make a function that does arithmetic!
JavaScript:

function arithmetic(a, b, operator){
switch (operator) {
        case "add": return a + b
        case "subtract": return a - b
        case "multiply": return a * b
        case "divide": return a / b
    }
}
11 days agoRefactorDiscuss
8 kyu
Convert a string to an array
JavaScript:

function stringToArray(string){
	return string.split(" ")
          
}
11 days agoRefactorDiscuss
7 kyu
You're a square!
JavaScript:


var isSquare = function(n){
  return  Math.sqrt(n) % 1 === 0;
 }
15 days agoRefactorDiscuss
8 kyu
Find Maximum and Minimum Values of a List
JavaScript:

const min = function(list){
  for (let i = 0; i < list.length; i++){
    for (let j = 0; j < list.length; j++){
      if(list[j + 1] < list[j]){
        let tmp = list[j]
        list[j] = list[j+1]
        list[j+1] = tmp
      }
    }
  }
  return list[0];
}

const max = function(list){
  for (let i = 0; i < list.length; i++){
    for (let j = 0; j < list.length; j++){
      if(list[j + 1] < list[j]){
        let tmp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = tmp
      }
    }
  }
  
return list[list.length - 1]
}
15 days agoRefactorDiscuss
8 kyu
Remove String Spaces
JavaScript:

function noSpace(x){
return x.replaceAll(" ", "")
}
15 days agoRefactorDiscuss
8 kyu
I love you, a little , a lot, passionately ... not at all
JavaScript:

function howMuchILoveYou(nbPetals) {
  const petals = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"]
  return petals[nbPetals % 6]
}
15 days agoRefactorDiscuss
8 kyu
String repeat
JavaScript:

function repeatStr (n, s) {
  return s.repeat(n)
}
15 days agoRefactor
function repeatStr (n, s) {
  if (n < 0 ) return ""
  if ( n === 1 ) {
    return s
  } else {
    return s + repeatStr(n-1 , s)
  }

}
15 days agoRefactorDiscuss
8 kyu
Expressions Matter
JavaScript:

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c, 
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  )
  }
15 days agoRefactorDiscuss
8 kyu
Is it a palindrome?
JavaScript:

function isPalindrome(x) {
 if(x.toLowerCase().split('').reverse().join("") === x.toLowerCase()) return true
  return false
}
16 days agoRefactorDiscuss
8 kyu
Find the smallest integer in the array
JavaScript:

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b)=> a - b)
    return args[0]
  }
}
16 days agoRefactorDiscuss
7 kyu
Categorize New Member
JavaScript:

function openOrSenior(data){
  return data.map(([age, handicap]) => age > 54 && handicap > 7 ? "Senior" : "Open")
}
16 days agoRefactorDiscuss
8 kyu
Sentence Smash
JavaScript:

function smash (words) {
   return words.join(" ")
};
16 days agoRefactorDiscuss
8 kyu
Calculate BMI
JavaScript:

function bmi(weight, height) {
  
  let bmiSum = (weight/ height ** 2)
  
if (bmiSum <= 18.5) return "Underweight"

if (bmiSum <= 25.0) return "Normal"

if (bmiSum <= 30.0) return "Overweight"
if  (bmiSum > 30) return "Obese"

 
}
20 days agoRefactorDiscuss
7 kyu
Disemvowel Trolls
JavaScript:

function disemvowel(str) {
  
  return str.replace(/A|E|I|O|U|a|e|i|o|u/g, '')
}
20 days agoRefactorDiscuss
8 kyu
Keep up the hoop
JavaScript:

function hoopCount (n) {
   return n >=10 ?  "Great, now move on to tricks":"Keep at it until you get it" 
}
last monthRefactorDiscuss
8 kyu
Is it even?
JavaScript:

function testEven(n) {
   return n % 2 === 0
}
last monthRefactorDiscuss
7 kyu
Descending Order
JavaScript:

function descendingOrder(n){

  return parseInt((n+'').split('').sort().reverse().join(''))
}
last monthRefactorDiscuss
8 kyu
Reversed sequence
JavaScript:

const reverseSeq = n => {
  let arr = []
  for (let i = n; i > 0  ; i--){
    arr.push(i)
  
  }
  return arr
};
last monthRefactorDiscuss
8 kyu
Sum The Strings
JavaScript:

function sumStr(a,b) {
  return ((+a) + (+b)).toString()
}
last monthRefactorDiscuss
8 kyu
All Star Code Challenge #18
JavaScript:

function strCount(str, letter) {
  let count = 0;
  if (str.length === 0) return count;
  for (let i = 0; i < str.length; i++) {
    if (letter === str[i]) {
      count++;
    }
  }
  return count;
}
last monthRefactorDiscuss
8 kyu
Basic Mathematical Operations
JavaScript:

function basicOp(operation, value1, value2)
{
  if(operation=== "+") return value1+value2
  if(operation=== '-') return value1-value2
  if(operation=== '*') return value1*value2
  if(operation=== '/') return value1/value2
}
last monthRefactorDiscuss
8 kyu
Correct the mistakes of the character recognition software
JavaScript:

function correct(string)
{
return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
}
last monthRefactorDiscuss
8 kyu
Grasshopper - Messi goals function
JavaScript:

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return  (laLigaGoals + copaDelReyGoals + championsLeagueGoals)
}
last monthRefactorDiscuss
8 kyu
Sum of positive
JavaScript:

function positiveSum(arr) {
  let sum = []
  if (arr.length === 0) return 0
  for (let i = 0; i < arr.length; i ++){
    
if (arr[i] > 0 ){
sum.push(arr[i])
}
}
  return sum.reduce((acc, n)=> acc+n,0)
}
last monthRefactorDiscuss
8 kyu
Rock Paper Scissors!
JavaScript:

const rps = (p1, p2) => {
  if(p1 === p2) return "Draw!"
  if ((p1 === "scissors" && p2 === "paper" ) 
    || (p1 === "paper" && p2 === "rock" )
    || (p1 === "rock" && p2 === "scissors" )) {
return "Player 1 won!"
} else {
return  "Player 2 won!"
}
};
last monthRefactorDiscuss
7 kyu
Vowel Count
JavaScript:

function getCount(str) {
  let count = 0;
  let arrStr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    arrStr.map((letter) => {
      if (letter === str[i]) {
        count++;
      }
    });
  }
  return count;
}
last monthRefactorDiscuss
7 kyu
List Filtering
JavaScript:

function filter_list(l) {
  let arr = [];
  l.map((number) => {
    if (Number.isInteger(number)) {
      arr.push(number);
      console.log(arr)
  
    }
    
  });
  return arr
}
last monthRefactorDiscuss
7 kyu
Is this a triangle?
JavaScript:

function isTriangle(a,b,c)
{
  if(a <= 0 || b <= 0 || c <= 0 ){
return false
  }
if( a + b > c && a + c > b && b + c > a){
  return true
} else {
   return false;
}}
last monthRefactorDiscuss
8 kyu
Total amount of points
JavaScript:

function points(games) {
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      sum += 3;
    }
    if ((games[i][0] === games[i][2])) {
      sum += 1;
    }
  }
  return sum;
}
last monthRefactorDiscuss
8 kyu
Opposite number
JavaScript:

function opposite(number) {
  return -number
}
last monthRefactorDiscuss
8 kyu
Switch it Up!
JavaScript:


function switchItUp(number){
let numberStr = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: 'Nine'
  };
  for (let numb in numberStr) {
    if (+numb === number) {
      return numberStr[numb];
    }
  }
}
last monthRefactorDiscuss
7 kyu
Get the Middle Character
JavaScript:

function getMiddle(s) {
  const start = 0;
  const end = s.length;
  let middle;
  if (s.length <= 1) return s;
  if (end % 2 === 0) {
    middle = (start + end) / 2;
    return `${s[middle - 1]}${s[middle]}`;
  } else {
    middle = (start + end - 1) / 2;
    return s[middle];
  }
}
last monthRefactorDiscuss
7 kyu
Shortest Word
JavaScript:

function findShort(s){
 let sortArr =  s.split(" ").sort((a, b)=> a.length - b.length)
 return sortArr[0].length
}
last monthRefactorDiscuss
7 kyu
Remove the minimum
JavaScript:

function removeSmallest(numbers) {
 const smallest = Math.min(...numbers);
  console.log(smallest);
  const smallestIndex = numbers.indexOf(smallest);
  console.log(smallestIndex);

  const newArr = numbers
    .slice(0, smallestIndex)
    .concat(numbers.slice(smallestIndex + 1));

  return newArr;
  
}
last monthRefactorDiscuss
7 kyu
Sum of odd numbers
JavaScript:

function rowSumOddNumbers(n) {
  const firstNumberInRow = n * (n - 1) + 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const oddNumber = firstNumberInRow + 2 * i;
    sum += oddNumber;
  }
  return sum;
}
last monthRefactorDiscuss
8 kyu
Is he gonna survive?
JavaScript:

function hero(bullets, dragons){
 return bullets / 2 >= dragons ? true : false
}
last monthRefactorDiscuss
8 kyu
Will there be enough space?
JavaScript:

function enough(cap, on, wait) {
  // your code here
  let freeSpace = cap - on
 return freeSpace >= wait ? 0 : wait-freeSpace 

  
}

last monthRefactorDiscuss
8 kyu
If you can't sleep, just count sheep!!
JavaScript:

var countSheep = function (num){
let sheeps = "";
  if (num === 0) return "";
  for (let i = 1; i <= num; i++) {
    sheeps += i + " sheep...";
  }
  return sheeps;
}
last monthRefactorDiscuss
8 kyu
Beginner - Reduce but Grow
JavaScript:

function grow(x){
return x.reduce((acc, num)=> acc * num)
}
last monthRefactorDiscuss
8 kyu
MakeUpperCase
JavaScript:

function makeUpperCase(str) {
return str.toUpperCase()
}
last monthRefactorDiscuss
8 kyu
Counting sheep...
JavaScript:

function countSheeps(sheep) {
  count = 0
  sheep.map((sh)=>{
    if(sh===true){
count++
}
  })
  return count
}
last monthRefactorDiscuss
8 kyu
Third Angle of a Triangle
JavaScript:

function otherAngle(a, b) {
  return 180 - (a+b)
}
last monthRefactorDiscuss
7 kyu
Reverse words
JavaScript:

function reverseWords(str) {
  // Go for it
  const strArr = str.split(' ')
  const reversedWords = []
  for ( const word of strArr ){
const reversedWord = word.split('').reverse().join('')
reversedWords.push(reversedWord)
  }
  const reversedString = reversedWords.join(" ")
  return reversedString
}

last monthRefactorDiscuss
8 kyu
Find the first non-consecutive number
JavaScript:

function firstNonConsecutive (arr) {
 for (let i = 1; i < arr.length; i++) {
  if (arr[i] !==  arr[i - 1] + 1 ) {
    return arr[i]
    }
  }
  return null
}
last monthRefactorDiscuss
8 kyu
Grasshopper - Summation
JavaScript:

var summation = function (num) {
 return num === 1 ? 1 : num + summation(num-1)

}
last monthRefactorDiscuss
8 kyu
Quarter of the year
JavaScript:

const quarterOf = (month) =>  Math.ceil(month/3)
last monthRefactor
const quarterOf = (month) => {
  // Your code here
 
  if (month <= 3 ) return 1
  if (month <= 6 && month > 3 ) return 2
  if (month <= 9 && month > 6 ) return 3
  if (month <= 12 && month > 9 ) return 4
}
last monthRefactorDiscuss
8 kyu
Simple multiplication
JavaScript:

function simpleMultiplication(number) {
return number % 2 === 0 ? number * 8: number * 9
}
last monthRefactorDiscuss
8 kyu
How good are you really?
JavaScript:

function betterThanAverage(classPoints, yourPoints) {
  const middlePoints =
    (classPoints.reduce((acc, points) => acc + points, 0) + yourPoints) /
    (classPoints.length + 1);
  return middlePoints < yourPoints ? true : false;
}
last monthRefactorDiscuss
8 kyu
Convert a Boolean to a String
JavaScript:

function booleanToString(b){
  //your code here
  return String(b)
}
last monthRefactorDiscuss
8 kyu
Beginner Series #1 School Paperwork
JavaScript:

function paperwork(n, m) {
  if (n < 0 && m < 0) return 0
  return n * m < 0 ? 0 : n * m
}
2 months agoRefactorDiscuss
7 kyu
Beginner Series #3 Sum of Numbers
JavaScript:

function getSum(a, b)
{
   const min = a < b ? a : b
   const max = a < b ? b : a
   let sum = 0
   for (let i = min; i <= max; i++){
    sum +=i
}
   return sum
   
}
2 months agoRefactorDiscuss
7 kyu
Ones and Zeros
JavaScript:


  const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

2 months agoRefactorDiscuss
7 kyu
Friend or Foe?
JavaScript:

function friend(friends){
  //your code here
  return friends.filter(friend=>friend.length===4)
}
2 months agoRefactor
function friend(friends){
  let myFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      myFriend.push(friends[i]);
    }
  }
  return myFriend;
}
2 months agoRefactorDiscuss
8 kyu
Convert a String to a Number!
JavaScript:

const stringToNumber = function(str){
  // put your code here
  return Number(str);
}
2 months agoRefactorDiscuss
8 kyu
Calculate average
JavaScript:

function findAverage(array) {
  // your code here
  
  
  return array.length === 0 ? 0 : (array.reduce((acc, arr)=> acc + arr,0))/array.length
}
2 months agoRefactorDiscuss
8 kyu
Remove First and Last Character
JavaScript:

function removeChar(str){
 //You got this!
return str.slice(1,-1)
};



2 months agoRefactorDiscuss
7 kyu
Sum of two lowest positive integers
JavaScript:

function sumTwoSmallestNumbers(numbers) {  
  //Code here
  for(let i=0; i < numbers.length; i++){
    let indexMin = i
    for (let j= i+1 ; j < numbers.length; j++){
      if(numbers[j]<numbers[indexMin]){
        indexMin = j
}
}
    let tmp = numbers[i]
    numbers[i] = numbers[indexMin]
    numbers[indexMin] = tmp
  }
  return numbers[0]+numbers[1]
  
}
2 months agoRefactorDiscuss
8 kyu
Return Negative
JavaScript:

function makeNegative(num) {
  // Code?
    return Math.sign(num) === -1 ? num : -`${num}`;
}
2 months agoRefactorDiscuss
7 kyu
Odd or Even?
JavaScript:

function oddOrEven(array) {
   //enter code here
  
  return array.reduce((acc, ar) => acc + ar, 0) % 2 === 0 ? "even" : "odd";

   
}
2 months agoRefactorDiscuss
8 kyu
Even or Odd
JavaScript:

function evenOrOdd(number) {
  return number%2===0?"Even":"Odd"
}
2 months agoRefactorDiscuss
8 kyu
Area or Perimeter
JavaScript:

const areaOrPerimeter = function(l , w) {
  // Return your answer
   return l === w ? l * w : 2 * (l + w);
};
2 months agoRefactorDiscuss
8 kyu
A Needle in the Haystack
JavaScript:

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      const indexNeedle = i;
      return "found the needle at position " + indexNeedle;
    }
  }
  return "needle not found";
  }
2 months agoRefactorDiscuss
8 kyu
Reversed Strings
JavaScript:

function solution(str){
  return str.split("").reverse().join("")
}
2 months agoRefactorDiscuss
8 kyu
Beginner - Lost Without a Map
JavaScript:

function maps(x){
const res = x.map((n)=>n*2)
return res
}
2 months agoRefactorDiscuss
8 kyu
Sum Mixed Array
JavaScript:

function sumMix(x){
let res = x.map((n) => {
    return Number(n);
  });
  return res.reduce((acc, curVal) => acc + curVal, 0);
}
2 months agoRefactorDiscuss
8 kyu
Grasshopper - Personalized Message
JavaScript:

function greet (name, owner) {
 if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}
2 months agoRefactorDiscuss
8 kyu
Opposites Attract
JavaScript:

function lovefunc(flower1, flower2){
  // moment of truth
 const isFlower1Even = flower1 % 2 === 0;
    const isFlower2Even = flower2 % 2 === 0;
    return isFlower1Even !== isFlower2Even;
}
2 months agoRefactorDiscuss
8 kyu
Square(n) Sum
JavaScript:

function squareSum(numbers){
const squaredNumbers = numbers.map(number => number * number);
  const sum = squaredNumbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
2 months agoRefactor
8 kyu
Double Char
JavaScript:

function doubleChar(str) {
let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }

  return result;
}
2 months agoRefactorDiscuss
8 kyu
Multiply
JavaScript:

function multiply(a, b){
  return (a * b)
}
