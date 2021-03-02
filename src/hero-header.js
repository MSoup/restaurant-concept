function getHeader() {
  // holds hero image and title
  let imgContainer = document.createElement("div");
  imgContainer.className = "image-container";

  let img = document.createElement("img");
  img.setAttribute("src", "./bg.jpg");
  img.setAttribute("class", "main-image");
  img.setAttribute("alt", "header hero image");

  let titleContainer = document.createElement("div");
  titleContainer.className = "title";
  let title = document.createElement("h1");
  title.className = "title-text";
  title.textContent = "MajesticSoup's";
  titleContainer.appendChild(title);

  // attach image and title div to img container
  imgContainer.appendChild(img);
  imgContainer.appendChild(titleContainer);

  console.log("getHeader executed");
  return imgContainer;
}

export { getHeader };
