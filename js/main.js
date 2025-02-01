//Import the translations object from the translations.js file
import translations from "./translations.js";

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
  // Set number of stars based on screen width
  let count;
  let screenWidth = window.innerWidth;

  // For mobile (small screens), set count to around 200, for desktop leave it at 600
  if (screenWidth <= 768) {
    // Adjust this value based on the width threshold for mobile
    count = 200; // Or any number suitable for mobile
  } else {
    count = 600; // For larger screens (desktop)
  }

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
  en: `<li class="dropbtn current-language-desktop dropdown-item" id="current-language-desktop" data-lang="en">
        English
        <svg
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
        </svg>
      </li>`,
  es: `<li data-lang="es" class="dropdown-item">
        Español
        <svg
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
        </svg>
      </li>`,
  de: `<li data-lang="de" class="dropdown-item">
        Deutsch
        <svg
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
        </svg>
      </li>`,
  fr: `<li data-lang="fr" class="dropdown-item">
        Français
        <svg
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
        </svg>
      </li>`,
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

// Function to populate language dropdowns
function populateLanguageDropdown(currentLang) {
  console.log(`Populating language dropdowns with ${currentLang} as the current language.`);

  // Select all dropdowns and dropdown-content elements
  const dropdowns = document.querySelectorAll('.dropdown');
  const dropdownContents = document.querySelectorAll('.dropdown-content');

  // Loop through each dropdown
  dropdowns.forEach((dropdown, index) => {
    const dropdownContent = dropdownContents[index];

    // Clear existing content from dropdownContent
    dropdownContent.innerHTML = '';

    // Find the current language `<li>` (the one before the dropdownContent)
    const currentLangLi = dropdown.firstElementChild;

    // If there is a current language `<li>`, remove it
    if (currentLangLi && currentLangLi !== dropdown.querySelector('.dropdown-content')) {
      currentLangLi.remove();
    }

    // Create and append the current language element at the top
    const currentLangElement = document.createElement('div');
    currentLangElement.innerHTML = languageData[currentLang];
    const currentLangLiElement = currentLangElement.firstElementChild;

    // Insert current language element before the dropdownContent
    dropdown.insertBefore(currentLangLiElement, dropdownContent);

    // Add remaining languages to dropdownContent
    Object.keys(languageData).forEach((lang) => {
      if (lang !== currentLang) {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = languageData[lang];
        const liElement = tempElement.firstElementChild;
        liElement.addEventListener("click", () => changeLanguage(lang));
        dropdownContent.appendChild(liElement);
      }
    });
  });

  console.log('Dropdowns populated');
}

// Function to change the language
function changeLanguage(lang) {
  // Save selected language to localStorage
  localStorage.setItem("selectedLanguage", lang);

  // Update the language dropdowns in navbar and sidebar
  populateLanguageDropdown(lang);

  // Apply translations to the page
  setLanguage(lang);

  console.log(`Language changed to: ${lang}`);
}

// Initialize the dropdown with the default language or the one saved in localStorage
document.addEventListener("DOMContentLoaded", () => {
  // Get the language from localStorage or default to 'en' (English)
  const defaultLanguage = localStorage.getItem("selectedLanguage") || "en";
  console.log(`Default language: ${defaultLanguage}`);

  // Populate the language dropdowns
  populateLanguageDropdown(defaultLanguage);

  // Set the language
  setLanguage(defaultLanguage);
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


  const toggleIcon = document.getElementById("toggleIcon");
const cord = document.getElementById("cord");
const body = document.body;
let isDragging = false;

// Set initial icon based on stored theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleIcon.textContent = "🌙"; // Moon for light mode
} else {
  toggleIcon.textContent = "🌞"; // Sun for dark mode
}

toggleIcon.addEventListener("mousedown", startDrag);
toggleIcon.addEventListener("touchstart", startDrag);

function startDrag(event) {
  isDragging = true;
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchend", stopDrag);
}

function drag(event) {
  if (!isDragging) return;

  let moveY = event.touches ? event.touches[0].clientY : event.clientY;
  let maxPull = 80; // Max pull distance
  let pullDistance = Math.min(moveY - 50, maxPull);

  // Move icon
  toggleIcon.style.transform = `translateY(${pullDistance}px)`;

  // Slightly stretch the cord
  cord.style.height = `${80 + pullDistance}px`;
}

function stopDrag() {
  if (!isDragging) return;

  isDragging = false;
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("touchmove", drag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchend", stopDrag);

  // Toggle light mode
  body.classList.toggle("light-mode");

  // Change icon
  if (body.classList.contains("light-mode")) {
    toggleIcon.textContent = "🌙"; // Moon for light mode
    localStorage.setItem("theme", "light");
  } else {
    toggleIcon.textContent = "🌞"; // Sun for dark mode
    localStorage.setItem("theme", "dark");
  }

  // Snap the icon back up
  toggleIcon.style.transition = "transform 0.3s ease-out";
  toggleIcon.style.transform = "translateY(0)";
  
  // Reset cord height
  cord.style.transition = "height 0.3s ease-out";
  cord.style.height = "80px";

  // Add glow effect
  toggleIcon.classList.add("glow");
  setTimeout(() => {
    toggleIcon.classList.remove("glow");
  }, 500);

  // Add wobble effect
  toggleIcon.classList.add("wobble");
  setTimeout(() => {
    toggleIcon.classList.remove("wobble");
  }, 400);
}

