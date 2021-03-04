function genFooter() {
  const container = document.querySelector("#content");
  const footer = document.createElement("div");
  const divider = document.createElement("div");
  const footerText = document.createElement("p");

  footer.className = "footer";
  divider.className = "divider";
  footerText.textContent = "All rights reserved";

  footer.appendChild(footerText);
  container.appendChild(divider);

  container.appendChild(footer);
}

export { genFooter };
