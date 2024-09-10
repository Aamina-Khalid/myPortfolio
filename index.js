document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");
  const form = document.querySelector("#contact");

  // for menu icon
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Smooth scroll for navigation links

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });

      // Close the navbar if it's open on mobile
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
      }
    });
  });
});

// Form handling
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        formMessage.innerHTML =
          "<p class='success-message'>Thank you for your message! I will get back to you soon.</p>";
        formMessage.style.color = "green";
      } else {
        formMessage.innerHTML =
          "<p class='error-message'>Something went wrong. Please try again.</p>";
        formMessage.style.color = "red";
      }
    })
    .catch((error) => {
      formMessage.innerHTML =
        "<p class='error-message'>Something went wrong. Please try again.</p>";
      formMessage.style.color = "red";
    });
});
