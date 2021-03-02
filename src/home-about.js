function displayHome() {
  let container = document.createElement("div");
  let header = document.createElement("h1");
  let subHeader = document.createElement("h1");
  let contents = document.createElement("div");

  header.textContent = "Welcome to MajesticSoup's";
  subHeader.textContent = "Please enjoy your stay";
  contents.className = "home-body";

  contents.textContent = "Placeholder text, hi.";
  //need to work on implementation of this
  //   fetch("/restaurant/src/contents.txt")
  //     .then((response) => response.text())
  //     .then(
  //       (textString) =>
  //         (document.querySelector(".home-body").textContent = textString)
  //     );

  container.appendChild(header);
  container.appendChild(subHeader);
  container.appendChild(contents);

  return container;
}

export { displayHome };
