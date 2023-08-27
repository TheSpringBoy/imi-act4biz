document.addEventListener("DOMContentLoaded", function () {
  const showFormButton = document.getElementById("showForm");
  const iframeForm = document.getElementById("iframeForm");
  const iframeDashboard = document.getElementById("iframeDashboard");
  const menuLinks = document.querySelectorAll(".menu a");

  showFormButton.addEventListener("click", function () {
    iframeForm.style.display = "block";
    iframeForm.src = "https://www.superform.spot-nik.com/form/64e631c4b0bcbd51295181bc";
    iframeDashboard.style.display = "none"; // Hide dashboard iframe
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = this.getAttribute("href");
      if (target === "#dashboard") {
        iframeDashboard.style.display = "block";
        iframeDashboard.src = "https://actnews.monday.com/boards/1253459064/views/5983866";
        iframeForm.style.display = "none"; // Hide form iframe
      } else {
        iframeForm.style.display = "none"; // Hide form iframe
        iframeDashboard.style.display = "none"; // Hide dashboard iframe
      }
      scrollToSection(target);
    });
  });

  function scrollToSection(target) {
    const section = document.querySelector(target);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
});
