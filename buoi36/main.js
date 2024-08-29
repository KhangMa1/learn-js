// https://newsapi.org/v2/everything?q=apple&from=2024-08-28&to=2024-08-28&sortBy=popularity&apiKey=843f64552a4d42368e00090bec361c46

var ApiNews =
  "https://newsapi.org/v2/everything?q=apple&from=2024-08-28&to=2024-08-28&sortBy=popularity&apiKey=843f64552a4d42368e00090bec361c46";

fetch(ApiNews)
  .then((data) => {
    return data.json();
  })
  .then(function(data){
    console.log(data);
    
  })
  .catch(() => {
    alert("Lỗi kìa ba");
  });
