// video 55 - callback
// function hienThiTinhTong(func) {
//   console.log(func());
// }

// function tinhTong(a, b) {
//   return a + b;
// }

// hienThiTinhTong(tinhTong);

// () là dấu gọi hàm

// Video 56 - Callback (tt)

// Array.prototype.map2 = function (callback) {
//   var resultArr = [];
//   var arrLength = this.length;
//   for (var i = 0; i < arrLength; i++) {
//     var result = callback(this[i], i, this);
//     resultArr.push(result);

//   }

//   return resultArr;
// };



// var courses = ["a", "b", "c"];

// var arrMap = courses.map2(function (item) {
// return(item + "1" )
// });
// console.log(arrMap);
Array.prototype.forEach2 = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
}

var courses = ["a", "b", "c"];

courses.forEach2 (function (course) {
  console.log(course)
})

courses.forEach (function (course) {
  console.log(course);
});




