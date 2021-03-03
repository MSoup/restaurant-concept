function displayContact() {
  let container = document.createElement("div");
  let header = document.createElement("h2");
  let contents = document.createElement("div");

  header.textContent = "Contact";
  contents.className = "home-body";

  contents.textContent = "Placeholder text, hi.";
  //need to work on implementation of this
  fetch("/restaurant/src/contact.txt")
    .then((response) => response.text())
    .then((textString) => (contents.textContent = textString))
    .then(console.log(contents.textContent));

  container.appendChild(header);
  container.appendChild(contents);

  const content = document.querySelector(".content-page");
  content.appendChild(container);
}

export { displayContact };
