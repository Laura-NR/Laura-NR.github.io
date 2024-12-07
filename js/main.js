//Import the translations object from the translations.js file
import translations from './translations.js';

//Functionning of the menu/sidebar
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  // Get the elements
  const hideSidebarButton = document.querySelector("#hideSideBarButton");
  const showSidebarButton = document.querySelector("#showSideBarButton");

  // Attach event listeners
  hideSidebarButton.addEventListener("click", hideSidebar);
  showSidebarButton.addEventListener("click", showSidebar);
});

//Function to display stars in the background
function stars() {
  let count = 600;
  let scene = document.querySelector(".scene");
  let i = 0;

  let docHeight = document.documentElement.scrollHeight;

  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * docHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 2;

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    star.style.animationDuration = 5 + duration + "s";
    star.style.animationDelay = duration + "s";

    scene.appendChild(star);
    i++;
  }
}
stars();

const languageData = {
  en: {
    name: "English",
    flagSVG: `<svg
                    style="margin-left: 6px"
                    width="16px"
                    height="16px"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--twemoji"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fill="#EEE"
                      d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
                    ></path>
                    <path
                      fill="#CE1124"
                      d="M21 5h-6v10H0v6h15v10h6V21h15v-6H21z"
                    ></path>
                  </svg>`
  },
  es: {
    name: "Español",
    flagSVG: `<svg
                      style="margin-left: 6px"
                      width="16px"
                      height="16px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--twemoji"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        fill="#C60A1D"
                        d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
                      ></path>
                      <path fill="#FFC400" d="M0 12h36v12H0z"></path>
                      <path
                        fill="#EA596E"
                        d="M9 17v3a3 3 0 1 0 6 0v-3H9z"
                      ></path>
                      <path fill="#F4A2B2" d="M12 16h3v3h-3z"></path>
                      <path fill="#DD2E44" d="M9 16h3v3H9z"></path>
                      <ellipse
                        fill="#EA596E"
                        cx="12"
                        cy="14.5"
                        rx="3"
                        ry="1.5"
                      ></ellipse>
                      <ellipse
                        fill="#FFAC33"
                        cx="12"
                        cy="13.75"
                        rx="3"
                        ry=".75"
                      ></ellipse>
                      <path fill="#99AAB5" d="M7 16h1v7H7zm9 0h1v7h-1z"></path>
                      <path
                        fill="#66757F"
                        d="M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z"
                      ></path>
                    </svg>`
  },
  de: {
    name: "Deutsch",
    flagSVG: `<svg
                      style="margin-left: 6px"
                      width="16px"
                      height="16px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--twemoji"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        fill="#FFCD05"
                        d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"
                      ></path>
                      <path fill="#ED1F24" d="M0 14h36v9H0z"></path>
                      <path
                        fill="#141414"
                        d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4z"
                      ></path>
                    </svg>`
  },
  fr: {
    name: "Français",
    flagSVG: `<svg
                      style="margin-left: 6px"
                      width="16px"
                      height="16px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--twemoji"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        fill="#ED2939"
                        d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"
                      ></path>
                      <path
                        fill="#002495"
                        d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"
                      ></path>
                      <path fill="#EEE" d="M12 5h12v26H12z"></path>
                    </svg>`
  },
};


let currentLang = 'en'; // Default language

// Function to change language
function setLanguage(lang) {
  if (!translations[lang]) return; // Check if the language exists
  currentLang = lang;

  // Select all elements with `data-i18n`
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keys = el.getAttribute("data-i18n").split(".");
    let translation = translations[lang];

    // Navigate through the translation object
    keys.forEach((key) => {
      if (translation) translation = translation[key];
    });

    // Update the element's text content if translation exists
    if (translation) {
      // Check if the element is an INPUT or TEXTAREA
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translation; // Set placeholder
      } else {
        el.textContent = translation; // Set text content for other elements
      }
    } 
  });
}

// Function to swap language name and flag (used for both navbar and sidebar)
function swapLanguageAndFlag(targetElement, selectedLangText, selectedLangSVG) {
  const currentLangText = targetElement.textContent.trim(); // Get the current text (language name)
  const currentLangSVG = targetElement.querySelector("svg") ? targetElement.querySelector("svg").outerHTML : ''; // Get the current flag SVG

  // Swap the text and flag between the target element (navbar or sidebar) and the selected language
  targetElement.innerHTML = `${selectedLangText} ${selectedLangSVG}`;
  
  return { currentLangText, currentLangSVG }; // Return current language details (text and flag) for the swap in the dropdown
}

// Function to handle language selection and updates
document.querySelectorAll(".dropdown li").forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Clicked item:", item);  // Log clicked item to check if it's working
    const lang = item.getAttribute("data-lang");
    console.log("Selected language:", lang);  // Check if the lang is being correctly picked

    // Save the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);

    const selectedLangText = item.textContent; // Text of the selected language from dropdown
    const selectedLangSVG = languageData[lang].flagSVG; // SVG of the selected language's flag

    // Get the navbar language and flag, and swap them
    const navbarLangElement = document.querySelector(".current-language-desktop");
    const { currentLangText: navbarLangText, currentLangSVG: navbarFlagSVG } = swapLanguageAndFlag(navbarLangElement, selectedLangText, selectedLangSVG);

    // Get the sidebar language and flag, and swap them
    const sidebarLangElement = document.querySelector(".current-language-sidebar");
    const { currentLangText: sidebarLangText, currentLangSVG: sidebarFlagSVG } = swapLanguageAndFlag(sidebarLangElement, selectedLangText, selectedLangSVG);

    // Swap the language and flag in the dropdown item with the current ones
    item.innerHTML = `${navbarLangText} ${navbarFlagSVG}`;

    // Update the language on the page content
    setLanguage(lang);
  });
});

// Set default language or language from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  
  if (savedLanguage) {
    // If a saved language exists, apply it
    setLanguage(savedLanguage);

    // Optionally, update the language in the navbar and sidebar based on the saved language
    /* const savedLangText = document.querySelector(`.dropdown li[data-lang="${savedLanguage}"]`).textContent;
    const savedLangSVG = languageData[savedLanguage].flagSVG;
    
    const navbarLangElement = document.querySelector(".current-language-desktop");
    const sidebarLangElement = document.querySelector(".current-language-sidebar");

    swapLanguageAndFlag(navbarLangElement, savedLangText, savedLangSVG);
    swapLanguageAndFlag(sidebarLangElement, savedLangText, savedLangSVG); */
  } else {
    // If no language is saved, set to default language (e.g., 'en')
    setLanguage('en');
  }
});

// Initialize EmailJS
emailjs.init("GhjKA_0F-EliFpdSc"); // Replace with your actual Public Key from EmailJS

// Contact form submission event
document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!firstName || !lastName || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    // Send the email using EmailJS
    emailjs.send("service_psmj8un", "template_x3t1dtk", formData).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you! Your message has been sent.");
        document.getElementById("contact_form").reset(); // Clears the form after submission
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Oops! There was a problem sending your message.");
      }
    );
  });
