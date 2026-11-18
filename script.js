
document.addEventListener("DOMContentLoaded", function () {

  // Mobile Menu
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("show");
      });
    });
  }

  // Navbar Scroll
  const header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Reveal Animation
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(element => observer.observe(element));

  // Back To Top
  const backTop = document.getElementById("back-top");

  window.addEventListener("scroll", function () {
    backTop.classList.toggle("show", window.scrollY > 400);
  });

  backTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
