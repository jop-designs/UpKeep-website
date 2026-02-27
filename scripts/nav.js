function resolveCurrentPage() {
  const path = window.location.pathname;
  const file = path.split("/").filter(Boolean).pop();
  return {
    file: file || "index.html",
    inPartsPage: path.includes("/parts/")
  };
}

function initActiveLink() {
  const current = resolveCurrentPage();
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const target = link.getAttribute("href")?.split("/").filter(Boolean).pop();
    if (!target) {
      return;
    }

    const isDirectMatch = current.file === target;
    const isPartToMakeMatch = current.inPartsPage && target === "make-a-part.html";

    if (isDirectMatch || isPartToMakeMatch) {
      link.classList.add("is-active");
    }
  });
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    menu.classList.toggle("is-open", !expanded);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initActiveLink();
  initMobileMenu();
});
