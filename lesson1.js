fetch("https://jsonplaceholder.typicode.com/todos/1 ").then((response) => {
  console.log(response);
  response
    .json()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
