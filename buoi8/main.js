// // video 18
// var a = 1
// var b = 1
// console.log(a == b); // 1  > 1

// video 19
// var a = NaN
// var b = 1213
// var result = a || b
// console.log(result);

// video 20
// var schoolName = "THCS Đức Tri"
// var lengthSCN = schoolName.length
// console.log(lengthSCN);

// var firstName = 'Mai'
// var lastName = 'Khang'
// var fullName = `My name is: ${firstName} Gia ${lastName}`
// console.log(fullName);

// video 21
var string = "      Mai Gia Khang va JS va  JS va JS!        ";
// 1. length
// console.log(string.length);

// 2.find index
// tim dc
// console.log(string.indexOf('Khang'));

// ko tim dc
// console.log(string.indexOf('Python')); // -1

// truong hop khac
// console.log(string.indexOf("JS", 20));

// truong hop cuoi string
// console.log(string.lastIndexOf('JS'));

// 3. cut string
// console.log(string.slice(0, 13));

// tu phai sang trai
// console.log(string.slice(-4, -1));

// 4. replace
// console.log(string.replace('JS', 'Java'));

// tat ca chu JS
// console.log(string.replace(/JS/g, 'Java'));

// 5. upper case
// console.log(string.toUpperCase());

// 6. lower case
// console.log(string.toLowerCase());

// 7. trim
// console.log(string.trim());

// length
// console.log(string.trim().length)

// 8.split
// var codeList = 'Java, PHP,      Python,    JS';
// var codeListRp = codeList.replace(/ /g, '');
// console.log(codeListRp.split(','));

// luu y!
// var languages = 'Javascript'
// console.log(languages.split(''));

// 9. get a character by index
// const myName = 'Mai Khang';
// console.log(myName.charAt(10));

// []
// console.log(myName[10]);