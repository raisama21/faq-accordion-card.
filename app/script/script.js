const accordionButton = document
  .querySelectorAll(".accordion-button")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      const arrow = item.firstElementChild;
      arrow.classList.toggle("transform");

      let accordionCollapse = item.nextElementSibling;

      item.classList.toggle("open");

      if (accordionCollapse.style.display == "block") {
        accordionCollapse.style.display = "none";
      } else {
        accordionCollapse.style.display = "block";
      }

      if (accordionCollapse.style.maxHeight) {
        accordionCollapse.style.maxHeight = null;
      } else {
        accordionCollapse.style.maxHeight =
          accordionCollapse.scrollHeight + "px";
      }
    });
  });
