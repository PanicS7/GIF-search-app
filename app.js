import key from "./apiKey.js";

// select elements
// select input
const input = document.getElementById("searchInput");
// select button
const btn = document.getElementById("searchBtn");
// select container
const container = document.getElementById("container");

// fetch data on btn click
btn.addEventListener("click", fetchData);

// fetch data if user click enter
input.addEventListener("keyup", (event) => {
  // if enter is pressed
  if (event.keyCode === 13) {
    fetchData();
  }
})

// fetch logic
function fetchData() {
  // take input value
  const searchQuery = input.value;

  // fetch data
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchQuery}&limit=20`, {
    mode: "cors"
  })
    .then((response) => {
      // check response status
      if (!response.ok) {
        throw Error(response.status);
      }

      return response.json();
    })
    .then((values) => {
      // when data fetch

      // clear prev results if exist
      container.innerHTML = "";

      // add title with searched data
      let title = document.createElement("h2");
      title.innerHTML = `Searched query: <span>${input.value}</span>`;
      title.className = "title";
      // append title to screen
      container.appendChild(title);

      // reset input to blank
      input.value = "";

      // create img elements and append it to container
      values.data.forEach(data => {
        // create img element
        let imgElem = document.createElement("img");
        imgElem.src = data.images.original.url;
        // add class for styling
        imgElem.className = "gifImg";

        // append img element to screen
        container.appendChild(imgElem);
      });
    })
    .catch((error) => {
      if(error) {
        // select container
        const container = document.getElementById("container");

        // add error text
        container.innerText = `${error} Something went wrong try again later, or reset page!`;
      }
    });
}


