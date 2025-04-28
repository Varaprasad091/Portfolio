// Smooth scrolling for nav links
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // ScrollReveal animations
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '40px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: false,
      interval: 100
    });
  });
  
  // 👇 Paste this BELOW that
  function toggleMore() {
    const moreSection = document.getElementById("more-section");
    const button = document.querySelector(".more-btn");
    if (moreSection.style.display === "none") {
      moreSection.style.display = "block";
      button.textContent = "Less ↑";
    } else {
      moreSection.style.display = "none";
      button.textContent = "More ↓";
    }
  }
  