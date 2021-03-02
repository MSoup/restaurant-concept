import { getHeader } from "./hero-header";
import { getNav } from "./nav";
import { displayHome } from "./home-about";
import { displayContact } from "./contact";

const container = document.createElement("div");
const contentDiv = document.createElement("div");

function loadContainer() {
  container.className = "page-container";
  contentDiv.className = "content-page";
  container.appendChild(contentDiv);
  return container;
}

const content = document.querySelector("#content");
content.appendChild(getHeader());
content.appendChild(getNav());
content.appendChild(loadContainer());
contentDiv.appendChild(displayHome());
