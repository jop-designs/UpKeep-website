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

function resolvePathPrefix() {
  const path = window.location.pathname;
  return path.includes("/parts/") ? "../" : "";
}

function initFooter() {
  const footer = document.querySelector("footer.footer-note");
  if (!footer) {
    return;
  }

  const prefix = resolvePathPrefix();
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-inner">
      <section class="footer-brand">
        <img src="${prefix}Assets/Logo wit.png" alt="UpKeep bicycles logo">
        <p>
          UpKeep bicycles is an open source community helping people make practical bike parts and keep bikes in use
          longer.
        </p>
      </section>
      <nav class="footer-links" aria-label="Footer links">
        <h3>Explore</h3>
        <ul>
          <li><a href="${prefix}index.html">Home</a></li>
          <li><a href="${prefix}make-a-part.html">Make a Part</a></li>
          <li><a href="${prefix}host-a-workshop.html">Host a Workshop</a></li>
          <li><a href="${prefix}about.html">About</a></li>
          <li><a href="${prefix}parts/saddle.html">Parts Library</a></li>
        </ul>
      </nav>
      <section class="footer-meta">
        <h3>Project Info</h3>
        <p>Community-led, open-source, and workshop-friendly.</p>
        <p>Email: jop.alofs@gmail.com</p>
        <p>Image credits: Unsplash + project assets</p>
      </section>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${year} UpKeep bicycles</span>
      <span>Built for preventive bike care and local making culture</span>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  initActiveLink();
  initMobileMenu();
  initFooter();
});
