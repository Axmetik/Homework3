/* ----- 1 task -----*/
// function maxMinDiff(arr){
//     if(arr.length <= 1){
//         return 0;
//     }
//     return Math.max(...arr) - Math.min(...arr);
// }

// const arr = [1, 2, 3, -4];
// console.log(maxMinDiff(arr));

/* ----- 2 task -----*/
// function biggerThanNum(string, number){
//     if(string.length < 1){
//        return 0;
//     }
//     let arr = string.split(' ')
//     .map(elem => elem.replace(/[.!?,]/g, ''))
//     .filter(elem => elem.length > number);

//     return arr;
// }

// const string = 'Lorem ipsum dolor sit amet';
// console.log(biggerThanNum(string, 4));

/* ----- 3 task -----*/
// function ending(string, end){
//     const arr = string.split(end)
//     if(arr[arr.length-1] === ''){
//         return true;
//     }
//     return false;
// }

// const string = 'this is string';
// console.log(ending(string, 's string'));

/* ----- 4 task -----*/
// function averages(arr){
//     const result = [];

//     for(let i = 0; i < arr.length-1; i++){
//         result.push((arr[i] + (arr[i+1]))/2);
//     }
//     return result;
// }

// const arr = [3, 6, 8, 2, 1, 9];
// console.log(averages(arr));

/* ----- 5 task -----*/
// function countVowels(string){
//     const vowels = 'aoueyi';
//     let count = 0;
//     for(let i = 0; i < string.length; i++){
//         if(vowels.includes(string[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("Hello world!"))

/* ----- 5.2 task -----*/
// function removeABC(string){
//     const abc = 'abc';
//     let count = 0, result = '';

//     for(let i = 0; i < string.length; i++){
//         if(!abc.includes(string[i].toLowerCase())){
//             result += string[i];
//         }else{
//             count++;
//         }
//     }

//     if(count === 0){
//         return null;
//     }
//     return result;
// }

// console.log(removeABC("This might be a bit hard"));

/* ----- 6 task -----*/
// function unique(arr1, arr2){
//     let result = [];
//     const maxLength = Math.max(arr1.length, arr2.length);

//     for(let i = 0; i < maxLength; i++){
//         if(arr1[i] !== undefined){
//             if(!result.includes(String(arr1[i]))){
//                 result.push(String(arr1[i]));
//             }
//         }
//         if(arr2[i] !== undefined){
//             if(!result.includes(String(arr2[i]))){
//                 result.push(String(arr2[i]));
//             }
//         }
//     }

//     return result.sort((a, b) => a-b);
// }

// const arr1 = [1, 2, 3];
// const arr2 = [100, 2, 1, 10];

// console.log(arr1, 'and', arr2);
// console.log(unique(arr1, arr2));

/* ----- 7 task -----*/
// function reverseObject(object){
//     const newObj = {};

//     for(let key in object){
//         const value = object[key];
//         newObj[value] = key;
//     }

//     return newObj;
// }

// const obj = {
//     red: "#FF0000", 
//     green: "#00FF00", 
//     white: "#FFFFFF"
// };

// console.log(reverseObject(obj))

/* ----- 8 task -----*/
// function calculateDifference(object, cost){
//     if(Object.keys(object).length === 0){
//         return 'Your object is empty!'
//     }
//     let sum = 0;
//     for(let key in object){
//         sum+=object[key];
//     }

//     if(sum < cost){
//         return 'Your number is bigger than summa of goods'
//     }

//     return sum - cost;
// }

// const goods = {
//     skate: 200, 
//     painting: 200, 
//     shoes: 1,
// }

// console.log(calculateDifference(goods, 400));

/* ----- 9 task -----*/
// function doesBrickFit(a, b, c, w, h){
//     if(a <= 0 || b <= 0 || c <= 0 || w <= 0 || h <= 0){
//         return 'One of your parameters is equal 0';
//     }

//     if((a <= w && b <= h) || ((b <= w && a <= h))){
//         return true;
//     }
//     if((b <= w && c <= h) || ((c <= w && b <= h))){
//         return true;
//     }
//     if((c <= w && a <= h) || ((a <= w && c <= h))){
//         return true;
//     }

//     return false;
// }
// const a = 1, b = 2, c = 2, w = 1, h = 2;

// console.log(doesBrickFit(a, b, c, w, h))

/* ----- 10 task ? -----*/ 
// function fileName(string){
//     const arr = string.split('\\');
//     console.log(arr)

//     const name = arr[arr.length-1].split('.')[0]
   
//     return name;
// }

// let src = String.raw`c:\WebServers\home\testsite\www\myfile.txt`;
// console.log(fileName(src))

/* ----- 11 task -----*/
// function cycleShift(str1, str2){
//     if(str1.length !== str2.length) return false;
//     return str2.concat(str2).includes(str1);
// }

// const str1 = 'slavych';
// const str2 = 'vychsla';

// console.log(cycleShift(str1, str2));

/* ----- 12 task -----*/
// function closestElements(array){
//     const arr = array.sort((current, next) => current - next)

//     const b = [], c = [];
//     let minimal = Number.MAX_VALUE;
//     let minimalPair = [];

//     while(arr.length > 0){
//         for(let i = 0; i < arr.length - 1; i++){
//             let difference = Math.abs(arr[i] - array[i+1]);
//             if(minimal > difference){
//                 minimal = difference;
//                 minimalPair[0] = arr[i];
//                 minimalPair[1] = arr[i+1]
//             }
//         }
//         b.push(minimalPair[0]);
//         c.push(minimalPair[1]);
//         arr.splice(arr.indexOf(minimalPair[0]), 1);
//         arr.splice(arr.indexOf(minimalPair[1]), 1);
//         minimal = Number.MAX_VALUE;
//     }

//     return [b, c];
// }

// const a = [1, 5, 6, 2, 3, 7, 10, 15, 17, 18];
// const string = String(a);
// const result = closestElements(a)
// console.log(`array a: [${string}]\n
// array b: [${result[0]}]\n 
// array c: [${result[1]}]`);

/* ----- 13 task -----*/
// function replacement(string){
//     string = string.toLowerCase();
//     let arr = string.split(' ');
//     let numbers = '1234567890';

//     arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].substring(1).toLowerCase();

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].includes('http')){
//             arr[i] = '[посилання заборонено]';
//         }else if(arr[i].includes('@')){
//             arr[i] = '[контакти заборонені]';
//         }else{
//             let count = 0;
//             for(let j = 0; j < arr[i].length; j++){
//                 if(numbers.includes(arr[i][j])){
//                     count++;
//                 }
//             }
//             if(count === arr[i].length && arr[i].length > 3){
//                 arr.splice(i, 1);
//             }
//         }
//         //console.log(arr[i])
//     }

//     return arr.join(' ');
// }

// const string = "thi1111s is Testing Str3ing with email slavych@gmail.com link https://youtube.com and a number 09634523999 321";
// const newStr = replacement(string);
// console.log(string);
// console.log(newStr);

// if(newStr.length > string.length){
//     function askForHelp() {
//         alert('Do you need some help');
//     }
//     setInterval(askForHelp, 5000);
// }

/* ----- 14 task -----*/
// function isValid(string){
//     let stack = [];
//     const brackets = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     }

//     for(let i = 0; i < string.length; i++){
//         const current = string[i];
//         if(current === ')' || current === ']' || current === '}'){
//             if(brackets[current] !== stack.pop()){
//                 return false;
//             }
//         }else if(current === '(' || current === '[' || current === '{'){
//             stack.push(current);
//         }else{
//             continue;
//         }
//     }

//     if(stack.length === 0){

//         document.addEventListener('contextmenu', function(e) {
//             e.preventDefault();
//         });

//         document.write(string)
          
//         return true; 
//     } 

//     return false;
// }

// const string = '(This is testing() st[rin]g {with brackets})';

// console.log(isValid(string));

/* ----- 15 task -----*/
// function generatePassword() {
//     const minLength = 6;
//     const maxLength = 20;
//     let numberCount = 0;
//     let UpperCount = 0;
//     let underline = 0;
//     const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';

//     let password = '';
  
//     const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  
//     for(let i = 0; i < passwordLength; i++){
//         let tmpChar = chars[Math.floor(Math.random() * chars.length)]
//         password+=tmpChar;
//     }

//     for(let i = 0; i < passwordLength; i++){
//         if(/[0-9]/.test(password[i])){
//             numberCount++;
//         }
//         if(/[A-Z]/.test(password[i])){
//             UpperCount++;
//         }
//         if(password[i] === '_'){
//             underline++;
//         }
//         if(/[0-9]/.test(password[i]) && /[0-9]/.test(password[i+1])){
//             return generatePassword();
//         }
//     }

//     if(numberCount <= 5 && UpperCount >= 2 && underline === 1){
//         return password;
//     }else{
//         return generatePassword();
//     }
// }
  
// const password = generatePassword();
// console.log(password);

/* ----- 16 task -----*/
// function minElemConfiguration(arr){
//     if(arr.length === 0){
//         return 'Your array is empty!';
//     }
    
//     let start = [];
//     let end = [];
//     let flag = true;

//     while(arr.length !== 0){
//         if(flag){
//             start.push(Math.min(...arr));
//             arr.splice(arr.indexOf(Math.min(...arr)), 1)
//             flag = false;
//         }else{
//             end.unshift(Math.min(...arr));
//             arr.splice(arr.indexOf(Math.min(...arr)), 1)
//             flag = true;
//         }
//     }
    
//     return start.concat(end);
// }

// const array = [4, 5, 1, 2, 9, 0, 6];

// console.log('input:', array);
// console.log(minElemConfiguration(array));

/* ----- 17 task -----*/
// function frequency(string){
//     let object = {};

//     for(let i = 0; i < string.length; i++){
//         if(string[i] === ' ') continue;
//         if(object.hasOwnProperty(string[i])){
//             object[string[i]]++;
//         }else{
//             object[string[i]] = 1;
//         }
//     }

//     const sortedObj = Object.fromEntries(
//         Object.entries(object).sort(([, valA], [, valB]) => valB - valA)
//     );

//     //console.log(sortedObj)

//     let newString = '';
//     for(let key in sortedObj){
//         for(let i = 0; i < sortedObj[key]; i++){
//             newString+=key;
//         }
//     }
//     return newString;
// }

// const string = 'This is testing string';

// console.log('Input:', string);
// console.log(frequency(string));

/* ----- 18 task -----*/  //(Алгоритм LCS - Longest Сommon Substring, шукав інформацію, є у відкритому доступі)
// function longestSubstring(str1, str2) {
//     const m = str1.length;
//     const n = str2.length;
//     let maxLength = 0; 
//     let endIndex = 0; 

//     const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
//     console.log(dp)

//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (str1[i - 1] === str2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1] + 1;

//                 if (dp[i][j] > maxLength) {
//                 maxLength = dp[i][j];
//                 endIndex = i - 1;
//                 }
//             }
//         }
//     }

//     return str1.slice(endIndex - maxLength + 1, maxLength);
// }

// const str1 = 'This is the most common string ever';
// const str2 = 'This is a string';

// const longestCommonSubstring = longestSubstring(str1, str2);
// console.log(longestCommonSubstring);

/* ----- 19 task -----*/
// function caesarEncryption(string, number){
//     if(string.length < 1){
//         return 'Your string is empty';
//     }

//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     alphabet = alphabet.concat(alphabet);
//     const upperAlphabet = alphabet.toUpperCase();
//     let newStr = '';

//     for(let word of string){
//         if(alphabet.includes(word)){
//             newStr+=alphabet[alphabet.indexOf(word)+number];
//         }else if(upperAlphabet.includes(word)){
//             newStr+=upperAlphabet[upperAlphabet.indexOf(word)+number];
//         }else{
//             newStr+=word;
//         }
//     }

//     return newStr;
// }

// const string = 'This is a String for encryPtion!';
// const num = 3;
// console.log(`Input:  ${string}
// Output: ${caesarEncryption(string, num)}`);

/* ----- 20 task -----*/
// function anagram(string1, string2){
//     string1 = string1.toLowerCase();
//     string2 = string2.toLowerCase();
//     let counter = 0;

//     for(let i = 0; i < string2.length; i++){
//         if(string1.includes(string2[i])){
//             counter++;
//         }
//     }

//     if(counter !== string2.length) return false;

//     return true;
// }

// const string1 = 'Kozak';
// const string2 = 'kaz'
// console.log('Рядок 2 відносно рядка 1:', anagram(string1, string2));
// console.log('Рядок 1 відносно рядка 2:', anagram(string2, string1));

/* ----- 21 task -----*/
// const University = {
//     students: [],

//     addStudent: function(name, faculty, grade, id = this.students.length+1){
//         let student = {
//             id: id,
//             name: name,
//             faculty: faculty, 
//             grade: grade,
//         }
//         this.students.push(student);
//     },

//     removeStudent: function(id){
//         const student = this.students.filter(elem => elem.id === id);
//         this.students.splice(this.students.indexOf(student[0]), 1);
//     },

//     getInfo: function(){
//         console.log("All the students:", this.students);
//     },

//     getInfoById: function(id){
//         let student = this.students.filter(elem => elem.id === id);
//         return student;
//     },

//     getInfoOfFaculty: function(faculty){
//         let list = this.students.filter(elem => elem.faculty === faculty);
//         return list;
//     },

//     getInfoOfGrade: function(grade){
//         let list = this.students.filter(elem => elem.grade === grade);
//         return list;
//     }
// }

// University.addStudent('Oleksandr', 'CS', 3, 1);
// University.addStudent('Ksenia', 'Psychology', 4);
// University.addStudent('Kateryna', 'CS', 4, 3)

// University.getInfo();

// let showId = 2;
// let showFaculty = 'CS';
// let showGrade = 4;
// let deleteId = 1;

// console.log(`Element with id: ${showId}`, University.getInfoById(showId));

// console.log(`Elements with ${showFaculty} faculty:`, University.getInfoOfFaculty(showFaculty));

// console.log(`Elements of ${showGrade} grade`, University.getInfoOfGrade(showGrade));

// // ДЛЯ ПЕРЕВІРКИ ВИДАЛЕННЯ РОЗКОМЕНТУВАТИ
// /*University.removeStudent(deleteId);
// University.getInfo();*/

/* ----- 22 task -----*/
// function statistics(text){
//     const words = text.toLowerCase().split(' ').map(word => word.replace(/[.!?,]/g, ''));
//     const symbols = text.split('').filter(elem => elem !== ' ');
//     const separators = '.!?';
//     let sentenceCount = 0;
//     let wordsCount = words.length;
//     let symbolsCount = symbols.length
//     const frequency = {}

//     for(let sym of symbols){
//         if(separators.includes(sym)){
//             sentenceCount++;
//         }
//     }

//     for(let word of words){
//         if(frequency.hasOwnProperty(word)){
//             frequency[word]++;
//         }else{
//             frequency[word] = 1;
//         }
//     }

//     const mostFrequenceValue = Math.max(...Object.values(frequency));
//     const entries = Object.entries(frequency)
//     const mostFrequenceKey = entries.filter(elem => elem[1]===mostFrequenceValue)

//     const result = [sentenceCount, wordsCount, symbolsCount, mostFrequenceKey[0]];
//     return result;
// }

// //const text = `This is testing sentence with testing symbols. Also there are a few sentences, testing words. That's all? Yes!` 
// const text = 'The sun slowly set behind the mountains, casting a golden glow across the landscape? She took a deep breath and leapt into the unknown, ready to embrace whatever challenges lay ahead. The scent of freshly brewed coffee filled the air, awakening my senses and bringing a smile to my face!'
// const result = statistics(text)

// console.log(`Our text: 
// ${text}\n
// Count of sentences: ${result[0]}
// count of words: ${result[1]}
// Count of symbols: ${result[2]}
// Most frequence word: ${result[3][0]} (${result[3][1]} times)`);
