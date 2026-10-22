(() => {
  const storageKey = "brabo-cv-theme";
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeLabel = document.querySelector("[data-theme-label]");
  const savedTheme = localStorage.getItem(storageKey);
  const isPortuguese = window.location.pathname.includes("/pt-br/");
  document.documentElement.lang = isPortuguese ? "pt-BR" : "en";
  document.title = isPortuguese ? "Diego Brabo | Currículo" : "Diego Brabo | CV";

  const setTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";

    if (themeToggle && themeLabel) {
      themeLabel.textContent = isPortuguese
        ? (isDark ? "Claro" : "Escuro")
        : (isDark ? "Light" : "Dark");
      const nextTheme = isDark ? "light" : "dark";
      const themeName = isPortuguese
        ? (isDark ? "claro" : "escuro")
        : nextTheme;
      themeToggle.setAttribute(
        "aria-label",
        isPortuguese ? `Mudar para tema ${themeName}` : `Switch to ${themeName} theme`
      );
      themeToggle.setAttribute("aria-pressed", String(isDark));
    }
  };

  setTheme(savedTheme === "dark" ? "dark" : "light");

  themeToggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  });
})();
