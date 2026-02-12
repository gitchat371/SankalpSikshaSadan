// Form submit message
document.getElementById("admissionForm").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("message").innerText = "Thanks for submitting record";
    this.reset();
});

// Dropdown toggle
const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(btn => {
    btn.addEventListener("click", function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
