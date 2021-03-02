function generateCard(title, subtitle, img) {
  let cardContainer = document.createElement("div");

  let cardTitle = document.createElement("h2");
  let cardSubtitle = document.createElement("p");
  let imgContainer = document.createElement("div");
  let cardimg = document.createElement("img");

  cardTitle.textContent = title;
  cardSubtitle.textContent = subtitle;

  cardContainer.className = "card-container";
  cardTitle.className = "menu-item-title";
  cardSubtitle.className = "menu-item-description";
  imgContainer.className = "img-container";
  cardimg.className = "menu-image";
  cardimg.src = img;
  cardContainer.appendChild(cardTitle);
  imgContainer.appendChild(cardimg);
  imgContainer.appendChild(cardSubtitle);
  cardContainer.appendChild(imgContainer);

  const content = document.querySelector(".content-page");
  content.appendChild(cardContainer);
}

function displayMenu() {
  // make heading then display cards
  const content = document.querySelector(".content-page");

  let heading = document.createElement("h1");
  let heading2 = document.createElement("h2");
  heading.textContent = "Welcome to MajesticSoup's Kitchen";
  heading2.textContent = "Menu";

  content.appendChild(heading);
  content.appendChild(heading2);

  generateCard(
    "Pizza",
    "Tomatoes, Cheese, Pepperoni",
    "https://d1ralsognjng37.cloudfront.net/a40b7e44-7dd7-4ab9-bc40-9e530e0bbfda.jpeg"
  );

  generateCard(
    "Fries",
    "Delicately crafted french fries from Amsterdam",
    "https://d1ralsognjng37.cloudfront.net/a40b7e44-7dd7-4ab9-bc40-9e530e0bbfda.jpeg"
  );
}

export { displayMenu };
