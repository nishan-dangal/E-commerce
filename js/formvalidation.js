// Sign up page form validation
function onsubmitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var atEmail = email.indexOf("@");
    var dotEmail = email.indexOf(".");
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;

    // Name validation
    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    // Validate email
    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (atEmail == -1) {
        alert("Email is missing '@'. Please enter a valid email");
        return false;
    } else if (dotEmail == email.length - 1 || dotEmail == -1 || dotEmail < atEmail) {
        alert("Please enter a valid email address");
        return false;
    }
    

    // Password validation
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }

    if (confirmPassword == "") {
        alert("Confirm password must be filled out");
        return false;
    } else if (password != confirmPassword) {
        alert("Password and confirm password must be the same");
        return false;
    }

    // Phone number validation
    if (phone == "") {
        alert("Please enter your phone number");
        return false;
    } else if (phone.length != 10 || isNaN(phone) || phone.charAt(0) != "0") {
        alert("Please enter a valid phone number starting with '0' and containing 10 digits");
        return false;
    }

    // Address validation
    if (address == "") {
        alert("Please enter your address");
        return false;
    } else if (address.length > 50) {
        alert("Address must be less than 50 characters");
        return false;
    }

    // Country validation
    if (country == "") {
        alert("Country must be filled out");
        return false;
    } else if (country.length > 30) {
        alert("Country name must be less than 30 characters");
        return false;
    }

    alert("Form submitted successfully");
}