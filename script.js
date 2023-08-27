document.addEventListener("DOMContentLoaded", function () {
  const showFormButton = document.getElementById("showForm");
  const iframeForm = document.getElementById("iframeForm");
  const iframeDashboard = document.getElementById("iframeDashboard");
  const menuLinks = document.querySelectorAll(".menu a");

  // Handler for the "Request New Article" button
  showFormButton.addEventListener("click", function () {
    iframeForm.src = "https://www.superform.spot-nik.com/form/64e631c4b0bcbd51295181bc";
    displayIframe(iframeForm);
  });

  // Handler for the navigation menu
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = this.getAttribute("href");
      
      if (target === "#dashboard") {
        iframeDashboard.src = "https://actnews.monday.com/boards/1253459064/views/5983866";
        displayIframe(iframeDashboard);
      } else if (target === "#request-form") {
        iframeForm.src = "https://www.superform.spot-nik.com/form/64e631c4b0bcbd51295181bc";
        displayIframe(iframeForm);
      } else {
        hideAllIframes();
      }
      scrollToSection(target);
    });
  });

  function displayIframe(iframeToShow) {
    // Hide both iframes first
    iframeForm.style.display = "none";
    iframeDashboard.style.display = "none";

    // Display the selected iframe
    iframeToShow.style.display = "block";
  }

  function hideAllIframes() {
    iframeForm.style.display = "none";
    iframeDashboard.style.display = "none";
  }

  function scrollToSection(target) {
    const section = document.querySelector(target);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
});
