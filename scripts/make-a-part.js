import { PARTS, PART_HOTSPOTS, WORKSHOPS } from "./data.js";
import { initWorkshopMap } from "./map.js";

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

function updatePreviewWorkshop(workshop) {
  const name = document.getElementById("preview-workshop-name");
  const city = document.getElementById("preview-workshop-city");
  const address = document.getElementById("preview-workshop-address");
  const description = document.getElementById("preview-workshop-description");
  const image = document.getElementById("preview-workshop-image");
  const link = document.getElementById("preview-workshop-link");
  const tags = document.getElementById("preview-workshop-tags");

  if (name) name.textContent = workshop.name;
  if (city) city.textContent = workshop.city;
  if (address) address.textContent = workshop.address;
  if (description) description.textContent = workshop.description;
  if (image) {
    image.src = workshop.image;
    image.alt = `${workshop.name} workspace photo`;
  }
  if (link) link.href = workshop.website;
  if (tags) {
    tags.innerHTML = "";
    workshop.specialties.forEach((specialty) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = specialty.replace("-", " ");
      tags.appendChild(chip);
    });
  }
}

function initWorkshopPreviewMap() {
  const workshops = WORKSHOPS;
  if (!document.getElementById("make-part-map")) {
    return;
  }

  const selector = document.getElementById("make-part-workshop-list");
  let mapControls;

  if (selector) {
    workshops.forEach((workshop) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.workshopId = workshop.id;
      button.textContent = workshop.city;
      button.addEventListener("click", () => mapControls?.selectWorkshop(workshop.id, true));
      selector.appendChild(button);
    });
  }

  mapControls = initWorkshopMap({
    mapElementId: "make-part-map",
    workshops,
    initialId: workshops[0].id,
    onSelect: (workshop) => {
      document.querySelectorAll("#make-part-workshop-list button").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.workshopId === workshop.id);
      });
      updatePreviewWorkshop(workshop);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPartPreview();
  initWorkshopPreviewMap();
});
