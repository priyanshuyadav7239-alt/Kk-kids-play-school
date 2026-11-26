alert("JavaScript चालू है");
document.addEventListener("DOMContentLoaded", function () {

  // स्कूल का WhatsApp नंबर
  // यहाँ 91 के साथ 10 अंकों का सही नंबर डालना है
  const SCHOOL_WHATSAPP = "917239010298";

  // साल
  document.getElementById("year").textContent =
    new Date().getFullYear();

  // Mobile Menu
  const menuBtn = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        if (nav) nav.classList.remove("active");
      }
    });
  });

  // WhatsApp Floating Button
  const whatsappFloat = document.getElementById("whatsappFloat");

  if (whatsappFloat) {
    whatsappFloat.href =
      "https://wa.me/" + SCHOOL_WHATSAPP;
  }

  // Admission Form
  const form = document.getElementById("admissionForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = new FormData(form);

      const message =
        "KK KIDS PLAY SCHOOL - Admission Enquiry\n\n" +
        "Parent Name: " + data.get("parent") + "\n" +
        "Mobile: " + data.get("phone") + "\n" +
        "Child Name: " + data.get("child") + "\n" +
        "Class: " + data.get("class");

      const url = "https://wa.me/" +
        SCHOOL_WHATSAPP +
        "?text=" + encodeURIComponent(message);

      window.location.href = url;

      document.getElementById("formMessage").textContent =
        "WhatsApp खुल रहा है। कृपया संदेश भेजें।";
    });
  }

  // Gallery Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.getElementById("closeLightbox");

  document.querySelectorAll(".gallery-grid img").forEach(img => {
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

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

});
    
      
