import key from "./apiKey.js";

const img = document.getElementById("container");
fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=cats&limit=20`, {mode: "cors"})
.then((response) => {
   return response.json();
})
.then((values) => {
  // let imgUrl = values.data.images.original.url;
  // console.log(imgUrl);
  // img.src = imgUrl;
  console.log(values.data)
})