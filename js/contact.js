document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get form field values
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const country = document.getElementById('country').value;
    const subject = document.getElementById('subject').value.trim();

    const message = document.getElementById('message');

    // Validation logic
    if (!fname || !lname || !country || !subject) {
      message.style.color = 'red';
      message.textContent = 'All fields must be filled in to submit the form.';
      return;
    }

    // If all fields are valid
    message.style.color = 'green';
    message.textContent = 'Form successfully sent!';

    // Reset the form values
     this.reset();

    // Simulate form processing (e.g., send data via API)
    setTimeout(() => {
        message.textContent = ''; // Clear the message after a few seconds
      }, 3000);

    
  });