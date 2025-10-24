$(document).ready(function () {
    // Initialize intlTelInput
    const phoneInput = document.querySelector("#phone-number");
    const iti = window.intlTelInput(phoneInput, {
        initialCountry: "auto",
        nationalMode: false,
        formatOnDisplay: true,
        separateDialCode: true,
        geoIpLookup: function (callback) {
            fetch('https://ipapi.co/json')
                .then(res => res.json())
                .then(data => callback(data.country_code))
                .catch(() => callback("us"));
        },
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.17/build/js/utils.js"
    });
    $("#signup-form").validate({
        rules: {
            firstName: {
                required: true,
                minlength: 2
            },
            lastName: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                equalTo: "#exampleInputPassword1"
            },
            terms: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: "Please enter your first name",
                minlength: "First name must be at least 2 characters long"
            },
            lastName: {
                required: "Please enter your last name",
                minlength: "Last name must be at least 2 characters long"
            },
            phone: {
                required: "Please enter your phone number",
                minlength: "Phone number must be at least 10 digits"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter a password",
                minlength: "Password must be at least 6 characters long"
            },
            confirmPassword: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            },
            terms: {
                required: "You must agree to the terms"
            }
        },
        errorClass: "text-danger",

        submitHandler: function (form) {
            const phoneNumber = iti.getNumber(); 
            $("#phone-number").val(phoneNumber); 

            $("#success-alert").removeClass("d-none");
            setTimeout(function () {
                $("#success-alert").addClass("d-none");
            }, 3000);

            return false; 
        }
    });
});
 