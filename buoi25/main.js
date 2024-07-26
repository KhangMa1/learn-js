// video 62
// var string = ["a", "b", "c", "a", "b", "c", "a", "b", "c"];
// var stringDistinct = new Set(string);
// console.log(...stringDistinct);

// function countDown(num) {
//   for(var i = num; i > 0; i--)
//   {console.log(i);}
// }
// countDown(100)

// function countDown2(num) {
//   if (num >= 0) {
//     console.log(num);
//     return countDown2(num - 1);
//   }
//   return;
// }

// countDown2(3);

// video 63
var course = [
  {
    food: "Pho",
    dong: 340,
    eatBefore: true,
  },
  {
    food: "com tam",
    dong: 350,
    eatBefore: true,
  },
  {
    food: "banh mi",
    dong: 730,
    eatBefore: true,
  },
  {
    food: "bun bo",
    dong: 890,
    eatBefore: true,
  },
];

// filter
// Array.prototype.filter2 = function(callback){
//   var output = []
//   for(var index in this){
//     if(this.hasOwnProperty(index)){
//       var result = callback(this[index], index, this);
//       if(result){
//         output.push(this[index])
//       }
//     }
//   }
//   return output
// }

// var filterCourse = course.filter2(function(course, index, array){
//   // console.log(course);
//   return course.dong > 700
// })
// console.log(filterCourse);

// video 64
// some
// Array.prototype.some2 = function(callback){
//   for(var index in this){
//     if(this.hasOwnProperty(index)) {
//         if(callback(this[index], index, this)){
//           return true
//         }
//     }
//   }
//   return false
// }

// var someCourse = course.some2(function(course, index, array){
//   return course.eatBefore
// })
// console.log(someCourse);

// video 65

// every
// Array.prototype.every2 = function(callback){
//   var output = true
//   for(var index in this){
//     if(this.hasOwnProperty(index)){
//         var result = callback(this[index], index, this)
//         if(!result){
//           output = false
//           break
//       }
//     }
//   }
//   return output
// }

// var someCourse = course.every2(function(course, index, array){
//   return course.eatBefore
// })
// console.log(someCourse);

// giai thuw (de quy)

function giaiThua(number) {
  // var output = 1;
  // for (var i = number; i > 0; i--) {
  //   output = output * i;
  // }
  // return output;
  // 1. Đến điều kiện dừng thì dừng
  // nếu number <= 1 thì dừng, trả về gì đó. Ở đây chúng ta trả về 1
  // if (number <= 1) return 1;
  // return number * giaiThua(number-1);


  // 2. Chỉ gọi lại khi đúng điều kiện
  // Nếu number >1 thì mình sẽ gọi lại hàm.
  if (number > 1) return number * giaiThua(number-1);
  return 1;
}
console.log(giaiThua(6));
