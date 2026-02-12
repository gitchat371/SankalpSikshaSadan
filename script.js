document.getElementById("admissionForm").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("message").innerText = "Form Submitted Successfully!";
});
