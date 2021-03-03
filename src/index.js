import { getHeader } from "./hero-header";
import { getNav } from "./nav";
import { displayHome } from "./home-about";
import { displayContact } from "./contact";

const container = document.createElement("div");
const contentDiv = document.createElement("div");

function loadContainer() {
  // home-bg selected by default
  container.className = "page-container home-bg";
  contentDiv.className = "content-page";
  container.appendChild(contentDiv);
  return container;
}

const content = document.querySelector("#content");
content.appendChild(getHeader());
content.appendChild(getNav());
content.appendChild(loadContainer());
displayHome();
// select home by default
document.querySelector(".home").classList.add("selected");
