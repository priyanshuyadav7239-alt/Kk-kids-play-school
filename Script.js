
// KK KIDS PLAY SCHOOL

document.addEventListener("DOMContentLoaded", function () {

  // Mobile Menu
  const menuBtn = document.querySelector(
    "#menuToggle, .menu-toggle, .hamburger"
  );

  const nav = document.querySelector(
    "#navLinks, .nav-links, nav ul"
  );

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        if (nav) nav.classList.remove("active");
      }
    });
  });

  // WhatsApp Number
  const SCHOOL_WHATSAPP = "91XXXXXXXXXX";

  // WhatsApp Buttons
  document.querySelectorAll(
    ".whatsapp-btn, #whatsappBtn, [data-whatsapp]"
  ).forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      window.open(
        "https://wa.me/" + SCHOOL_WHATSAPP,
        "_blank"
      );
    });
  });

  // Admission Form
  const form = document.querySelector(
    "#admissionForm, .admission-form"
  );

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = new FormData(form);
      let message = "KK KIDS PLAY SCHOOL - Admission Enquiry\n\n";

      data.forEach(function (value, key) {
        message += key + ": " + value + "\n";
      });

      const url =
        "https://wa.me/" +
        SCHOOL_WHATSAPP +
        "?text=" +
        encodeURIComponent(message);

      window.open(url, "_blank");
    });
  }

  // Gallery Image Click
  document.querySelectorAll(".gallery img").forEach(function (img) {
    img.style.cursor = "pointer";

    img.addEventListener("click", function () {
      window.open(img.src, "_blank");
    });
  });

});
      
