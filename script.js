document.addEventListener("DOMContentLoaded", function() {
    const iframeSections = document.querySelectorAll('.iframe-section');
    const linksAndButtons = document.querySelectorAll('[data-target]');
    const landingSection = document.querySelector('.landing');
    
    linksAndButtons.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all iframe sections
            iframeSections.forEach(section => section.style.display = 'none');
            
            // Hide the landing section
            landingSection.style.display = 'none';
            
            // Show target iframe section
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            target.style.display = 'block';
            
            if (targetId === 'request-form') {
                target.querySelector('iframe').src = 'https://www.superform.spot-nik.com/form/64e631c4b0bcbd51295181bc';
            } else if (targetId === 'dashboard') {
                target.querySelector('iframe').src = 'https://actnews.monday.com/boards/1253459064/views/5983866';
            }
        });
    });
});
