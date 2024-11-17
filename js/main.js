function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

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
