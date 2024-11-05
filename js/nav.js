const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
		<a href="index.html">
		<img src="images/logo.png" class="brand-logo" alt="">
		</a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
        
                <a href="Log-in.html">
                <img src="images/Account.png" alt="" style="border-radius: 5px;border: solid black 1px;">
                </a>

                <div class= "cart">
                                <a href="cart.html">
                                <button class="cart-Btn">
                                <img src="images/cart.png">
                                <span>0</span>
                                </button></a>
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="Beanies.html" class="link">Beanies</a></li>
            <li class="link-item"><a href="Gloves.html" class="link">Gloves</a></li>
			<li class="link-item"><a href="Jackets.html" class="link">Jackets</a></li>
            <li class="link-item"><a href="Socks.html" class="link">Socks</a></li>
            <li class="link-item"><a href="Accessories.html" class="link">Accessories</a></li>
        </ul>
    `;
}

createNav();
