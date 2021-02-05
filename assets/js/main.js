function anchorSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const elem = document.getElementById(
        this.getAttribute("href").substring(1)
      );
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

anchorSmoothScroll();
