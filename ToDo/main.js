// Khai báo các đối tượng
var listTodoElement = $("#list-todo");
var inputTextElement = $("#input-text");
var additionElement = $(".addition");
var deleteElement = $(".delete");
var searchElement = $(".search");
var resetButton = $(".reset");
var listTodoArray = [
  {
    name: "Math",
    status: 1,
  },
  {
    name: "Science",
    status: 1,
  },
  {
    name: "History",
    status: 0,
  },
  {
    name: "Geography",
    status: 0,
  },
];

// Cài đặt ban đầu
renderTodoList(listTodoArray);

// Hàm này dùng để thêm 1 phần tử vào cuối danh sách
additionElement.on("click", function () {
  var valueInput = inputTextElement.val();

  var isExits = listTodoArray.some(function (sub, index) {
    return sub.name === valueInput;
  });

  if (isExits) {
    alert("Môn học đã tồn tại!");
    return;
  }
  var addObject = {
    name: valueInput,
    status: 0,
  };
  listTodoArray.push(addObject);
  renderTodoList(listTodoArray);
});

// Hàm này dùng để xoá 1 phần tử trong mảng
deleteElement.on("click", function () {
  listTodoArray.pop();
  renderTodoList(listTodoArray);
});

// Hàm này dùng để tìm kiếm các phần tử có liên quan
searchElement.on("click", function () {
  var valueInput = inputTextElement.val();
  var htmlListTodoSearch = "";

  var listFilter = listTodoArray.filter((element) => {
    return element.name.indexOf(valueInput) != -1 
  });
listFilter.forEach((element) => {

  htmlListTodoSearch += `<li>${element.name} - <span> ${
          element.status ? "Finished" : "Not Finished"
        }</span></li>`;
})

// Array function
// (parameter) => {}

  // var list = listTodoArray.filter(function(name, status) {

  // })
  // for (let item of listTodoArray) {
  //   if (item.name.indexOf(valueInput) != -1)  {
  //     htmlListTodoSearch += `<li>${item.name} - <span> ${
  //       item.status ? "Finished" : "Not Finished"
  //     }</span></li>`;
  //   }
  // }

  // listTodoArray.forEach((item) => {
  //   if (item.name.indexOf(valueInput) != -1) {
  //     htmlListTodoSearch += `<li>${item.name} - <span> ${
  //       item.status ? "Finished" : "Not Finished"
  //     }</span></li>`;
  //   }
  // });

  listTodoElement.html(htmlListTodoSearch);
});

// Hàm này dùng để render ra danh sách
function renderTodoList(ListTodoArray) {
  var htmlListToDo = "";
  //   for (let item of ListTodoArray) {
  //     htmlListToDo += `<li>${item} </li>`;
  //   }
  listTodoArray.forEach(function (sub, index) {
    htmlListToDo += `<li>${sub.name} - <span> ${
      sub.status ? "Finished" : "Not Finished"
    }</span></li>`;
  });
  listTodoElement.html(htmlListToDo);
}

// Hamf nayf dungf de reset
resetButton.on("click", function(){
  renderTodoList(listTodoArray);
  inputTextElement.val('');
}
)

// function showAlert(message){
//   alert(message)
// }
// showAlert("Chao ban")

