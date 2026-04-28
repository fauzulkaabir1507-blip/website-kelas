// Smooth scroll untuk navbar
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// Animasi muncul saat scroll
const sections = document.querySelectorAll(".section, .hero");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Set awal animasi
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(20px)";
  sec.style.transition = "0.6s ease";
});