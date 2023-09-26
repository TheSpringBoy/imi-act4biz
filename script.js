document.addEventListener("DOMContentLoaded", function() {
    const iframeSections = document.querySelectorAll('.iframe-section');
    const linksAndButtons = document.querySelectorAll('[data-target]');
    const landingSection = document.querySelector('.landing');
    const defaultViewSection = document.getElementById('default-view');
    
    linksAndButtons.forEach(element => {
        element.addEventListener('click', function(e) {
            const targetId = this.getAttribute('data-target');
            
            if (targetId === 'request-form') {
                e.preventDefault();
                
                // Hide all iframe sections
                iframeSections.forEach(section => section.style.display = 'none');
                
                // Hide the landing section
                landingSection.style.display = 'none';
                
                // Hide the default view section
                defaultViewSection.style.display = 'none';
                
                // Show target iframe section
                const target = document.getElementById(targetId);
                target.style.display = 'block';
                target.querySelector('iframe').src = '';
            }
        });
    });
});
