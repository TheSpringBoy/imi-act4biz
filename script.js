document.addEventListener("DOMContentLoaded", function () {
    const showFormButton = document.getElementById("showForm");
    const iframeForm = document.getElementById("iframeForm");

    showFormButton.addEventListener("click", function () {
        iframeForm.src = "https://www.superform.spot-nik.com/form/64e631c4b0bcbd51295181bc";
        iframeForm.style.display = "block"; // This should make the iframe visible
    });
});
