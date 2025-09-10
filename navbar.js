// navbar.js

// ========== HAMBURGER MENU ==========
document.addEventListener("click", (e) => {
  const btn = document.getElementById("hamburgerBtn");
  const sidebar = document.getElementById("siteSidebar");

  if (!btn || !sidebar) return;

  if (e.target.closest("#hamburgerBtn")) {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    sidebar.setAttribute("aria-hidden", String(expanded));
    sidebar.classList.toggle("open", !expanded);
  }
});

// ========== THEME TOGGLE (dark / light) ==========
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    themeToggle.setAttribute("aria-pressed", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
    themeToggle.setAttribute("aria-pressed", savedTheme === "dark");
  }
}

// ========== CLOCK ==========
function updateClock() {
  const clock = document.getElementById("clock");
  const dateText = document.getElementById("dateText");

  if (!clock || !dateText) return;

  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
  dateText.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

setInterval(updateClock, 1000);
updateClock();
