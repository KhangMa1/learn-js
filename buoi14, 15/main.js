// // video 47
// var myArray =[
//     [1, 2, 3],
//     [4, 5, 6, 7],
//     [8, 9, 10, 11, 12]
// ]

// for(var i = 0; i < myArray.length; i++ ){
//     // console.log(myArray[i]);
//     // var arrayCurrent = myArray[i];
//     for(var j = 0; j< myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }

// }

// video 49
//  var myCourses =[
//     {
//         id: 1,
//         name: 'Java',
//         cost: 2500
//     },
//     {
//         id: 2,
//         name: 'Python',
//         cost: 1500
//     },
//     {
//         id: 3,
//         name: 'PHP',
//         cost: 1000
//     },  {
//         id: 4,
//         name: 'Ruby',
//         cost: 600
//     }
//  ]

//  myCourses.forEach(function(course, index){
// console.log(index, course);
//  })

 // video 50
// function courseHandler(myCourses, index, originArray) {
//     return {
//         id: myCourses.id,
//         name: `Khoa hoc: ${myCourses.name}`,
//         index:index,
//         originArray:originArray
//     };
// }
// var newCourse = myCourses.map(courseHandler)
// console.log(newCourse);

// video 51
// var totalCost = 0 
// for (var course of myCourses) {
//     totalCost += course.cost;
// }
// console.log(totalCost);