let searchBar = document.getElementById("searchBar");
let searchBtn = document.getElementById("searchBtn");
let box = document.getElementById("box");
let nextBtn = document.getElementById("nextBtn");
let query = "ocean"; //input search value
let pageNumber = null;
const auth = "563492ad6f917000010000010eca883fc3f4401a883eaf16d11d4662";

async function getPhotos(query, pageNumber) {
  const data = await fetch(
    `https://api.pexels.com/v1/search?query=nature&per_page=20&page=${pageNumber}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    }
  );
  const photos = await data.json();
  console.log(photos);
  console.log("doc:", document);
  console.log(box.document);
  for (let item of photos.photos) {
    console.log(item);
    let card = document.createElement("div");
    card.innerHTML = `<img src=${item.src.small}>
              <figcaption> Photo By: ${item.photographer}📸</figcaption>
              <a href="">Download</a>`;
    box.append(card);
  }
}
getPhotos();

searchBar.addEventListener("keyup", function (e) {
  query = e.target.value;
});
searchBtn.addEventListener("click", function (e) {});
