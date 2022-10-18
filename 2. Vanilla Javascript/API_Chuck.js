fetch("https://api.chucknorris.io/jokes/categories")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    const category = data[Math.floor(Math.random() * 15)];
    return fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
  })
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data.value);
  })
  .catch((err) => {
    console.log(err);
  });
