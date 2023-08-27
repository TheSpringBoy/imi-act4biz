document.addEventListener("DOMContentLoaded", function () {
  const iframeContent = document.getElementById("iframeContent");
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = this.getAttribute("href");
      iframeContent.src = target;
    });
  });
});
