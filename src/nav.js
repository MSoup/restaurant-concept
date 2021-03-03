import { displayHome } from "./home-about";
import { displayMenu } from "./menu.js";
import { displayContact } from "./contact";

function getNav() {
  let nav = document.createElement("nav");
  let navOptions = ["home", "menu", "contact"];
  let option;
  let text;
  let textNode;
  for (let i = 0; i < navOptions.length; i++) {
    option = document.createElement("div");
    option.className = navOptions[i];
    textNode = document.createElement("p");
    text = document.createTextNode(navOptions[i].toUpperCase());
    textNode.className = "navText";
    // option.textContent = ;
    textNode.appendChild(text);
    option.appendChild(textNode);
    option.addEventListener("click", handleClick);
    nav.appendChild(option);
  }

  return nav;
}

function handleClick(event) {
  // clear all selected first, then toggle current selected
  let navOptions = event.currentTarget.parentElement.children;

  for (let i = 0; i < navOptions.length; i++) {
    navOptions[i].classList.remove("selected");
  }

  let selectedOption = event.currentTarget.className;
  let pageContainer = document.querySelector(".page-container");

  // change bg color of page container
  pageContainer.className = `page-container ${selectedOption}-bg`;
  event.currentTarget.classList.add("selected");

  if (selectedOption === "home") {
    // stuff
    clearPage();
    displayHome();
  } else if (selectedOption === "menu") {
    // stuff
    clearPage();
    displayMenu();
  }
  // contact was clicked
  else {
    clearPage();
    displayContact();
  }
}

function clearPage() {
  const contentDiv = document.querySelector(".content-page");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
}

export { getNav };
