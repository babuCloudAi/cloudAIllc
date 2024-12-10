// JavaScript for accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      // Close all other accordions
      accordions.forEach((item) => {
        if (item !== this) {
          item.classList.remove("active");
          item.nextElementSibling.style.display = "none";
        }
      });

      // Toggle the clicked accordion
      const panel = this.nextElementSibling;
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        panel.style.display = "none";
      } else {
        this.classList.add("active");
        panel.style.display = "block";
        panel.style.maxHeight = "fit-content";
      }
    });
  });

  // Ensure only the default open accordion is visible on load
  const defaultOpenAccordion = document.querySelector(".accordion .active");
  if (defaultOpenAccordion) {
    defaultOpenAccordion.nextElementSibling.style.display = "block";
  }
});
