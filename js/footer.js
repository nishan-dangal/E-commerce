const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = ` <div class="footer-content">
	
	<a href="index.html">
		<img src="images/logo.png" class="logo" alt="">
		</a>
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Quick Links</li>
                <li><a href="#" class="footer-link">Beanie</a></li>
                <li><a href="#" class="footer-link">Gloves</a></li>
                <li><a href="#" class="footer-link">Socks</a></li>
                <li><a href="#" class="footer-link">kids</a></li>
                <li><a href="#" class="footer-link">Accessories</a></li>
                <li><a href="contactUs.html" class="footer-link">Contact    Us</a></li>

            </ul>
			</div>
		<div>
			<ul>
				<a href="https://www.facebook.com/" class="fa fa-facebook"></a>
				<a href="https://www.instagram.com/?hl=en" class="fa fa-instagram"></a>
				<a href="https://twitter.com/?lang=en" class="fa fa-twitter"></a>
            </ul>
		</div>
		</div>
		
		
			<div class="credit">© 2022 Serene Handicraft | All rights reserved </div>
        
    </div>
    `;
}

createFooter();