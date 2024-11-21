// Form validation for the shopping cart
document.querySelector('form').addEventListener('submit', function (event) {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    let isValid = true;
  
    quantityInputs.forEach(input => {
      if (input.value <= 0 || input.value === '') {
        isValid = false;
        alert(`Please enter a valid quantity for ${input.dataset.tag}`);
      }
    });
  
    if (!isValid) {
      event.preventDefault(); // Prevent the form from submitting
      alert('Please fix the errors in the form before proceeding to checkout.');
    } else {
      alert('Form successfully submitted!');
    }
  });
  
  // Remove product functionality
  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function () {
      const productTag = this.dataset.tag;
      const productItem = this.closest('.product-item');
      productItem.remove(); // Remove the product from the DOM
      alert(`${productTag} has been removed from the cart.`);
    });
  });
  