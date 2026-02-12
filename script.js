document.addEventListener("DOMContentLoaded", function() {

    // Dropdown toggle for Facilities & Services
    const dropdowns = document.querySelectorAll(".dropdown-btn");
    dropdowns.forEach(btn => {
        btn.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    // Form submit
    const form = document.getElementById("admissionForm");
    if(form){
        form.addEventListener("submit", function(event){
            event.preventDefault();

            // Mobile number validation
            const mobile = form.querySelector('input[type="tel"]').value;
            if(mobile.length !== 10){
                alert("Please enter a valid 10-digit mobile number");
                return;
            }

            document.getElementById("message").innerText = "Thanks for submitting record";
            this.reset();
        });
    }

});
