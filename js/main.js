let carts = document.querySelectorAll('.cardBtn');
// carts[0]
let products = [
  {
    name: "Strapped-Beanie",
    tag: "Product1",
    price: 19.99,
    inCart: 0
  },
  {
    name: "Earcuff-Beanie",
    tag: "Product2",
    price: 34.99,
    inCart: 0
  },
  {
    name: "FlowerPrint-Beanie",
    tag: "Product3",
    price: 19.99,
    inCart: 0
  },
  {
    name: "FootWarmer",
    tag: "Product4",
    price: 19.99,
    inCart: 0
  },
  {
    name: "Hand-Warmer",
    tag: "Product5",
    price: 39.99,
    inCart: 0
  },
  {
    name: "Strapped-FootWarmer",
    tag: "Product6",
    price: 39.99,
    inCart: 0
  },
  {
    name: "Kids-FootWarmer",
    tag: "Product7",
    price: 19.99,
    inCart: 0
  },
  {
    name: "Earmuffs",
    tag: "Product8",
    price: 29.99,
    inCart: 0
  },
  {
    name: "Woolen Jacket",
    tag: "Product9",
    price: 29.99,
    inCart: 0
  }
]

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers; //setting here
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (action) {
    if (productNumbers > 0) {
      localStorage.setItem('cartNumbers', productNumbers - 1);
      document.querySelector('.cart span').textContent = productNumbers - 1;
    }
  } else if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  }
  else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cartCost = localStorage.getItem('totalCost');

  if (action) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem("totalCost", (cartCost - product.price).toFixed(2))
  }
  else if (cartCost != null) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem("totalCost", (cartCost + product.price).toFixed(2))
  }
  else {
    localStorage.setItem("totalCost", product.price.toFixed(2));
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector
    (".products-container");
  let cartCost = localStorage.getItem('totalCost');

  if (cartItems && productContainer) {
    productContainer.innerHTML = `
      <div class="product-header">
        <h5 class="product-title">Product</h5>
        <h5 class="cost">Price</h5>
        <h5 class="quantity">Quantity</h5>
        <h5 class="total">Total</h5>
        <h5 class="remove">Remove</h5>
      </div>
    `;

    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
        <div class="product-item">
          <div class="product-title">
            <img src="./images/${item.tag}.jpeg" class="product-image" alt="${item.name}">
            ${item.name}
          </div>
          <div class="cost">$${item.price.toFixed(2)}</div>
          <div class="quantity">
            <input type="number" value="${item.inCart}" min="1" class="quantity-input" data-tag="${item.tag}">
          </div>
          <div class="total">$${(item.inCart * item.price).toFixed(2)}</div>
          <div class="remove">
            <button type="button" class="remove-btn" data-tag="${item.tag}">Remove</button>
          </div>
        </div>
      `;
    });

    productContainer.innerHTML += `
      <div class="basket-total">
        <h5>BASKET TOTAL</h5>
        <div class="total">$${parseFloat(cartCost).toFixed(2)}</div>
      </div>
    `;

    manageQuantity();
    manageRemoveButtons();
  }
}

function manageQuantity() {
  let quantityInputs = document.querySelectorAll('.quantity-input');

  quantityInputs.forEach(input => {
    input.addEventListener('change', (event) => {
      let tag = event.target.getAttribute('data-tag');
      let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
      let cartCost = parseFloat(localStorage.getItem('totalCost'));

      if (cartItems[tag]) {
        let oldQuantity = cartItems[tag].inCart;
        let newQuantity = parseInt(event.target.value);

        cartItems[tag].inCart = newQuantity;
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));

        let newCartCost = cartCost - (oldQuantity * cartItems[tag].price) + (newQuantity * cartItems[tag].price);
        localStorage.setItem('totalCost', newCartCost.toFixed(2));

        displayCart();
      }
    });
  });
}

function manageRemoveButtons() {
  let removeButtons = document.querySelectorAll('.remove-btn');

  removeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      let tag = event.target.getAttribute('data-tag');
      let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
      let cartCost = parseFloat(localStorage.getItem('totalCost'));
      let productNumbers = parseInt(localStorage.getItem('cartNumbers'));

      if (cartItems[tag]) {
        let itemTotalCost = cartItems[tag].price * cartItems[tag].inCart;
        cartCost -= itemTotalCost;
        productNumbers -= cartItems[tag].inCart;

        if (productNumbers < 0) productNumbers = 0;

        delete cartItems[tag];

        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        localStorage.setItem('totalCost', cartCost.toFixed(2));
        localStorage.setItem('cartNumbers', productNumbers);

        displayCart();
        onLoadCartNumbers();
      }
    });
  });
}

onLoadCartNumbers();
displayCart();

