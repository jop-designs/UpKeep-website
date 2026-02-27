import { PARTS, WORKSHOPS } from "./data.js";

function renderPartPreview() {
  const grid = document.getElementById("parts-preview-grid");
  if (!grid) {
    return;
  }

  grid.innerHTML = "";
  PARTS.forEach((part) => {
    const card = document.createElement("a");
    card.className = "part-tile";
    card.href = `parts/${part.slug}.html`;

    const title = document.createElement("h3");
    title.textContent = part.name;
    const text = document.createElement("p");
    text.textContent = part.summary;
    const cta = document.createElement("span");
    cta.textContent = "Open part page";

    card.append(title, text, cta);
    grid.appendChild(card);
  });
}

function renderWorkshopPreview() {
  const grid = document.getElementById("workshop-preview-grid");
  if (!grid) {
    return;
  }

  grid.innerHTML = "";
  WORKSHOPS.slice(0, 3).forEach((workshop) => {
    const card = document.createElement("article");
    card.className = "workshop-preview-card card";

    card.innerHTML = `
      <img src="${workshop.image}" alt="${workshop.name} workshop photo">
      <div class="inner">
        <h3>${workshop.name}</h3>
        <p>${workshop.description}</p>
        <p class="city">${workshop.city}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPartPreview();
  renderWorkshopPreview();
});
