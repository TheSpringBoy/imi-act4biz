document.addEventListener("DOMContentLoaded", function () {
    const showFormButton = document.getElementById("showForm");
    const iframeForm = document.getElementById("iframeForm");
    const iframeDashboard = document.getElementById("iframeDashboard");
    const menuLinks = document.querySelectorAll(".menu a");

    showFormButton.addEventListener("click", function () {
        iframeForm.src = "https://www.superform.spot-nik.com/form/64e631c4b0bcbd51295181bc";
        iframeForm.style.display = "block";
        iframeDashboard.style.display = "none"; // Hide dashboard iframe
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("href");
            if (target === "#dashboard") {
                iframeDashboard.style.display = "block";
                iframeForm.style.display = "none"; // Hide form iframe
            } else {
                iframeDashboard.style.display = "none"; // Hide dashboard iframe
                iframeForm.style.display = "block";
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
