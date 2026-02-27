import { PARTS, WORKSHOPS } from "./data.js";
import { initWorkshopMap } from "./map.js";

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

function renderSteps(part) {
  const list = document.getElementById("part-steps");
  if (!list) {
    return;
  }

  list.innerHTML = "";
  part.makeSteps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    list.appendChild(item);
  });
}

function renderFileLinks(part) {
  const list = document.getElementById("part-files");
  if (!list) {
    return;
  }

  list.innerHTML = "";
  part.fileDownloads.forEach((file) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = file.href;
    link.textContent = file.title;
    link.setAttribute("aria-disabled", "true");
    link.addEventListener("click", (event) => event.preventDefault());
    item.appendChild(link);
    list.appendChild(item);
  });
}

function updateWorkshopCard(workshop) {
  if (!workshop) {
    return;
  }

  setText("workshop-name", workshop.name);
  setText("workshop-city", workshop.city);
  setText("workshop-address", workshop.address);
  setText("workshop-description", workshop.description);

  const image = document.getElementById("workshop-image");
  if (image) {
    image.src = `../${workshop.image}`;
    image.alt = `${workshop.name} workspace photo`;
  }

  const link = document.getElementById("workshop-link");
  if (link) {
    link.href = workshop.website;
  }

  const chipList = document.getElementById("workshop-specialties");
  if (chipList) {
    chipList.innerHTML = "";
    workshop.specialties.forEach((specialty) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = specialty.replace("-", " ");
      chipList.appendChild(chip);
    });
  }
}

function markActiveSelector(id) {
  document.querySelectorAll("#part-workshop-list button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.workshopId === id);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const slug = document.body.dataset.partSlug;
  const part = PARTS.find((entry) => entry.slug === slug);

  if (!part) {
    setText("part-name", "Part not found");
    return;
  }

  setText("part-name", part.name);
  setText("part-title", part.heroTitle);
  setText("part-summary", part.summary);
  setText("part-why", part.whyItMatters);
  renderSteps(part);
  renderFileLinks(part);

  const relatedWorkshops = WORKSHOPS.filter((workshop) => part.workshops.includes(workshop.id));
  const selector = document.getElementById("part-workshop-list");
  let mapControls;

  if (selector) {
    selector.innerHTML = "";
    relatedWorkshops.forEach((workshop) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.workshopId = workshop.id;
      button.textContent = `${workshop.city} workshop`;
      button.addEventListener("click", () => {
        if (mapControls) {
          mapControls.selectWorkshop(workshop.id, true);
        }
      });
      selector.appendChild(button);
    });
  }

  mapControls = initWorkshopMap({
    mapElementId: "part-map",
    workshops: relatedWorkshops,
    initialId: relatedWorkshops[0]?.id,
    onSelect: (workshop) => {
      markActiveSelector(workshop.id);
      updateWorkshopCard(workshop);
    }
  });
});
