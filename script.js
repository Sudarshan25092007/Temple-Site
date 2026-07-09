const langSelect = document.getElementById("langSelect");
const printInviteBtn = document.getElementById("printInviteBtn");

function setLanguage(lang) {
  const kannadaTexts = document.querySelectorAll(".lang-kn");
  const englishTexts = document.querySelectorAll(".lang-en");

  if (lang === "en") {
    kannadaTexts.forEach((el) => el.classList.add("hidden"));
    englishTexts.forEach((el) => el.classList.remove("hidden"));
    document.documentElement.lang = "en";
    document.title = "Guru Purnima | Sri Shirdi Sai Baba Mandira Trust, Shivamogga";
  } else {
    kannadaTexts.forEach((el) => el.classList.remove("hidden"));
    englishTexts.forEach((el) => el.classList.add("hidden"));
    document.documentElement.lang = "kn";
    document.title = "ಗುರುಪೂರ್ಣಿಮೆ | ಶ್ರೀ ಶಿರಡಿ ಸಾಯಿಬಾಬಾ ಮಂದಿರ ಟ್ರಸ್ಟ್, ಶಿವಮೊಗ್ಗ";
  }

  localStorage.setItem("templeInviteLanguage", lang);
}

if (langSelect) {
  const savedLanguage = localStorage.getItem("templeInviteLanguage") || "en";
  langSelect.value = savedLanguage;
  setLanguage(savedLanguage);

  langSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}

if (printInviteBtn) {
  printInviteBtn.addEventListener("click", () => {
    window.print();
  });
}