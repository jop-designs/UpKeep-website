import { PARTS, PART_HOTSPOTS, WORKSHOPS } from "./data.js";
import { initWorkshopMap } from "./map.js";

function renderPartDiagram() {
  const diagram = document.querySelector("[data-part-diagram]");
  if (!diagram) {
    return;
  }

  const labelsContainer = diagram.querySelector(".part-labels");
  const connectorsSvg = diagram.querySelector(".connector-layer");
  const connectorBySlug = new Map();

  PARTS.forEach((part) => {
    const hotspot = PART_HOTSPOTS[part.slug];
    if (!hotspot) {
      return;
    }

    const point = document.createElement("div");
    point.className = "part-hotspot";
    point.style.left = `${hotspot.label.x}%`;
    point.style.top = `${hotspot.label.y}%`;

    const link = document.createElement("a");
    link.className = "part-chip";
    link.href = `parts/${part.slug}.html`;
    link.textContent = part.name;
    link.setAttribute("data-part-chip", part.slug);
    point.appendChild(link);
    labelsContainer.appendChild(point);
  });

  const drawConnectors = () => {
    const bounds = diagram.getBoundingClientRect();
    const width = Math.max(bounds.width, 1);
    const height = Math.max(bounds.height, 1);
    connectorsSvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    connectorsSvg.innerHTML = "";
    connectorBySlug.clear();

    PARTS.forEach((part) => {
      const hotspot = PART_HOTSPOTS[part.slug];
      if (!hotspot) {
        return;
      }

      const sx = (hotspot.anchor.x / 100) * width;
      const sy = (hotspot.anchor.y / 100) * height;
      const ex = (hotspot.label.x / 100) * width;
      const ey = (hotspot.label.y / 100) * height;
      const cx = (sx + ex) / 2;
      const cy = Math.min(sy, ey) - Math.max(26, Math.abs(sx - ex) * 0.05);

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("class", "connector-path");
      path.setAttribute("d", `M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`);
      connectorsSvg.appendChild(path);

      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("class", "connector-dot");
      dot.setAttribute("cx", `${ex}`);
      dot.setAttribute("cy", `${ey}`);
      dot.setAttribute("r", "4.2");
      connectorsSvg.appendChild(dot);

      connectorBySlug.set(part.slug, path);
    });
  };

  drawConnectors();
  window.addEventListener("resize", drawConnectors);

  labelsContainer.querySelectorAll("[data-part-chip]").forEach((chip) => {
    const slug = chip.getAttribute("data-part-chip");
    chip.addEventListener("mouseenter", () => {
      chip.classList.add("is-active");
      connectorBySlug.get(slug)?.classList.add("is-highlighted");
    });
    chip.addEventListener("mouseleave", () => {
      chip.classList.remove("is-active");
      connectorBySlug.get(slug)?.classList.remove("is-highlighted");
    });
    chip.addEventListener("focus", () => {
      chip.classList.add("is-active");
      connectorBySlug.get(slug)?.classList.add("is-highlighted");
    });
    chip.addEventListener("blur", () => {
      chip.classList.remove("is-active");
      connectorBySlug.get(slug)?.classList.remove("is-highlighted");
    });
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
  renderPartDiagram();
  initWorkshopPreviewMap();
});
