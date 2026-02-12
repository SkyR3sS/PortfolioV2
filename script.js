// Progressive enhancement
document.documentElement.classList.remove("no-js");

// Mobile nav
const navBtn = document.querySelector(".nav__toggle");
const navMenu = document.querySelector("#navMenu");

if (navBtn && navMenu) {
  navBtn.addEventListener("click", () => {
    const open = navMenu.classList.toggle("is-open");
    navBtn.setAttribute("aria-expanded", String(open));
  });

  navMenu.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "A") {
      navMenu.classList.remove("is-open");
      navBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// Footer year
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Contact form -> mailto (no backend)
const form = document.querySelector("#contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const subject = encodeURIComponent(`Website contact from ${data.get("name") || ""}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}\n\nMessage:\n${data.get("message") || ""}`
    );

    window.location.href = `mailto:dholeyritam@gmail.com?subject=${subject}&body=${body}`;
  });
}

// Theme toggle (persisted)
const themeBtn = document.querySelector("#themeBtn");
const themeLabel = document.querySelector("#themeLabel");

function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem("theme", mode);
  if (themeLabel) themeLabel.textContent = mode === "light" ? "Light" : "Dark";
}

// Default to dark unless saved
const saved = localStorage.getItem("theme");
if (saved === "light" || saved === "dark") {
  setTheme(saved);
} else {
  setTheme("dark");
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });
}
