document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("admissionForm");
    if(form){
        form.addEventListener("submit", function(event){
            event.preventDefault();

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
