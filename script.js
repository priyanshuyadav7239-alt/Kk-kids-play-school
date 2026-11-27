
document.addEventListener("DOMContentLoaded", function () {

  // SCHOOL WHATSAPP NUMBER
  const SCHOOL_WHATSAPP = "917239010298";

  // CURRENT YEAR
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // MOBILE MENU
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();

      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "मेन्यू बंद करें" : "मेन्यू खोलें"
      );
    });

    // CLOSE MENU ON LINK CLICK
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "मेन्यू खोलें");
      });
    });

    // CLOSE MENU ON OUTSIDE CLICK
    document.addEventListener("click", function (event) {
      if (
        !nav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "मेन्यू खोलें");
      }
    });

    // ESCAPE KEY
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "मेन्यू खोलें");
      }
    });
  }

  // SMOOTH SCROLLING
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // WHATSAPP FLOATING BUTTON
  const whatsappFloat = document.getElementById("whatsappFloat");

  if (whatsappFloat) {
    whatsappFloat.href =
      "https://wa.me/" + SCHOOL_WHATSAPP;
  }

  // ADMISSION FORM
  const form = document.getElementById("admissionForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);

      const message =
        "KK KIDS PLAY SCHOOL - Admission Enquiry\n\n" +
        "Parent Name: " + data.get("parent") + "\n" +
        "Mobile: " + data.get("phone") + "\n" +
        "Child Name: " + data.get("child") + "\n" +
        "Class: " + data.get("class");

      const url =
        "https://wa.me/" + SCHOOL_WHATSAPP +
        "?text=" + encodeURIComponent(message);

      if (formMessage) {
        formMessage.textContent =
          "WhatsApp खुल रहा है। कृपया संदेश भेजें।";
      }

      window.open(url, "_blank");
    });
  }

  // GALLERY LIGHTBOX
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.getElementById("closeLightbox");

  if (lightbox && lightboxImage) {

    document.querySelectorAll(".gallery-grid img").forEach(function (img) {
      img.addEventListener("click", function () {
        lightboxImage.src = img.src;
        lightbox.classList.add("active");
      });
    });

    if (closeButton) {
      closeButton.addEventListener("click", function () {
        lightbox.classList.remove("active");
      });
    }

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

});
  
    
      
