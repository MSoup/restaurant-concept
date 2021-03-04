function genFooter() {
  const container = document.querySelector("#content");
  const footer = document.createElement("div");
  const footerText = document.createElement("p");

  footer.className = "beautiful-footer";
  footerText.textContent = "All rights reserved";

  footer.appendChild(footerText);

  container.appendChild(footer);
}

export { genFooter };
