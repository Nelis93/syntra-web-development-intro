function App() {
  const ts = 1;
  const publicKey = "6650d34472bf337cf4b9ef6e5f730502";
  const hash = "a3ef5cc237ddbef133ddaf893596446c";
  //   const newId = window.location.search.toString().slice(4);
  //   const details = document.getElementById("details");
  fetch(
    `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    });
  return (
  <div>something</div>
  <p>another thing</p>
  );
}

export default App;
