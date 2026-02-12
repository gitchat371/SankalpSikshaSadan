document.addEventListener("DOMContentLoaded", function() {

    // Dropdown toggle
    const dropdowns = document.querySelectorAll(".dropdown-btn");

    dropdowns.forEach(btn => {
        btn.addEventListener("click", function() {
            const content = this.nextElementSibling;

            // Smooth slide effect
            if(content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // Form submit
    const form = document.getElementById("admissionForm");

    if(form){
        form.addEventListener("submit", function(event){
            event.preventDefault();
            document.getElementById("message").innerText = "Thanks for submitting record";
            this.reset();
        });
    }

});
