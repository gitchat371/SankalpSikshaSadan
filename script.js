document.getElementById("admissionForm").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("message").innerText = "Thanks for submitting record";
    document.getElementById("admissionForm").reset();
});
