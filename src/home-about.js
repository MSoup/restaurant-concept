function displayHome() {
  let container = document.createElement("div");
  let header = document.createElement("h2");
  let subHeader = document.createElement("h2");
  let contents = document.createElement("div");

  header.textContent = "Welcome to MajesticSoup's";
  subHeader.textContent = "Home of dem chickens";
  contents.className = "home-body";

  contents.textContent = "Placeholder text, hi.";
  //need to work on implementation of this
  fetch("/restaurant/src/contents.txt")
    .then((response) => response.text())
    .then((textString) => (contents.textContent = textString))
    .then(console.log(contents.textContent));

  container.appendChild(header);
  container.appendChild(subHeader);
  container.appendChild(contents);

  const content = document.querySelector(".content-page");
  content.appendChild(container);
}

export { displayHome };
