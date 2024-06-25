import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';


function ProductSlider({ products, count, handleLeft, handleRight, addToCart }) {
  const itemsPerScreen = 3;

  return (
    <div className='NewSlider'>
      <div className='NewProductWrapper'
        style={{ transform: `translateX(-${count * 100 / itemsPerScreen}%)`, transition: 'transform 0.5s ease' }}>
        {products.map((product, index) => (
          <div key={index} className='NewProduct'>
            <div className='ProductImg'>
              <img src={product.imgSrc} alt={product.title} />
            </div>
            <div className='ProductInfo'>
              <div className='ProductTitle'>{product.title}</div>
              <div className='ProductPrice'>{product.price}</div>
              <button className='buybutton'>Buy</button>
              <button  className='addcart' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className='Arrow'>
        <button className='left' onClick={handleLeft}>
          <MdKeyboardArrowLeft size='25px' />
        </button>
        <button className='right' onClick={handleRight}>
          <MdKeyboardArrowRight size='25px' />
        </button>
      </div>
    </div>
  );
}

function Home({ products, count, handleLeft, handleRight, addToCart }) {
  const itemsPerScreen = 3;

  return (
    <>
      <div className='bgimage'>
        <nav id="nav">
          <div className="navTop">
            <img id="logo" src="./images/logo.png" alt="Logo" />
            <div className="navItems">
              <h3 className="menuItem">HOME</h3>
              <h3 className="menuItem">SHOP</h3>
              <h3 className="menuItem">LOCATION</h3>
              <h3 className="menuItem">ABOUT US</h3>
            </div>
            <div className="navItem">
              <div className="search">
                <input type="text" placeholder="Search..." className="searchInput" />
                <img src="./images/search.png" width="20" height="20" alt="Search" className="searchIcon" />
              </div>
            </div>
             <Link to="/cart" className='Cartbtn'><BsCart3 size='25px' /></Link>
          </div>
        </nav>

        <div className="slider">
          <div className="sliderWrapper">
            <div className="sliderItem">
              <img src="./images/air.png" alt="" className="sliderImg" />
              <div className="sliderBg"></div>
              <h1 className="sliderTitle">AIR<br />FORCE<br />NEW SEASON</h1>
              <a href="#product">
                <button className="buyButton">BUY NOW!</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='title1'><h2>New Items!</h2></div>
      <ProductSlider products={products} count={count} handleLeft={handleLeft} handleRight={handleRight} addToCart={addToCart} />

      <div className='title1'><h2>Top selling products</h2></div>
      <ProductSlider products={products} count={count} handleLeft={handleLeft} handleRight={handleRight} addToCart={addToCart} />


      <div className="features">
        <div className="feature">
          <img src="./images/shipping.png" className="featureIcon" alt="Shipping" />
          <span className="featureTitle">FREE SHIPPING</span>
          <span className="featureDesc">Free worldwide shipping on all orders.</span>
        </div>
        <div className="feature">
          <img src="./images/return.png" className="featureIcon" alt="Return" />
          <span className="featureTitle">30 DAYS RETURN</span>
          <span className="featureDesc">No question return and refund in 14 days</span>
        </div>
        <div className="feature">
          <img src="./images/gift.png" className="featureIcon" alt="Gift" />
          <span className="featureTitle">GIFT CARDS</span>
          <span className="featureDesc">Buy gift cards and use coupon codes easily.</span>
        </div>
        <div className="feature">
          <img src="./images/contact.png" className="featureIcon" alt="Contact" />
        <span className="featureTitle">CONTACT US!</span>
        <span className="featureDesc">Keep in touch via email and support system</span>
        </div>
        </div>
        <div className="product" id="product">
            <img src="./images/air.png" alt="Product" className="productImg" />
            <div className="productDetails">
            <h1 className="productTitle">AIR FORCE</h1>
            <h2 className="productPrice">$199</h2>
            <p className="productDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda dolorum doloremque sapiente aliquid aperiam.</p>
            <div className="colors">
                <div className="color"></div>
                <div className="color"></div>
            </div>
            <div className="sizes">
                <div className="size">42</div>
                <div className="size">43</div>
                <div className="size">44</div>
            </div>
            <button className="productButton">BUY NOW !</button>
            </div>
            <div className="payment">
            <h1 className="payTitle">Personal Information</h1>
            <label>Name and Surname</label>
            <input type="text" placeholder="John Doe" className="payInput" />
            <label>Phone Number</label>
            <input type="text" placeholder="+1 234 5678" className="payInput" />
            <label>Address</label>
            <input type="text" placeholder="Elton St 21 22-145" className="payInput" />
            <h1 className="payTitle">Card Information</h1>
            <div className="cardIcons">
                <img src="./images/visa.png" width="40" alt="Visa" className="cardIcon" />
                <img src="./images/master.png" width="40" alt="MasterCard" className="cardIcon" />
            </div>
            <input type="password" className="payInput" placeholder="Card Number" />
            <div className="cardInfo">
                <input type="text" placeholder="mm" className="payInput sm" />
                <input type="text" placeholder="yyyy" className="payInput sm" />
                <input type="text" placeholder="cvv" className="payInput sm" />
            </div>
            <button className="payButton">Checkout !</button>
            <span className="close">X</span>
            </div>
        </div>

        <div className="gallery">
            <div className="galleryItem">
            <h1 className="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Gallery" className="galleryImg" />
            </div>
            <div className="galleryItem">
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Gallery" className="galleryImg" />
            <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
            </div>
            <div className="galleryItem">
            <h1 className="galleryTitle">Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Gallery" className="galleryImg" />
            </div>
        </div>

        <div className="newSeason">
            <div className="nsItem">
            <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="New Season" className="nsImg" />
            </div>
            <div className="nsItem">
            <h3 className="nsTitleSm">SUMMER NEW ARRIVALS</h3>
            <h1 className="nsTitle">New Season</h1>
            <h1 className="nsTitle">New Collection</h1>
            <a href="#nav">
                <button className="nsButton">CHOOSE YOUR STYLE</button>
            </a>
            </div>
            <div className="nsItem">
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="New Season" className="nsImg" />
            </div>
        </div>

        <footer>
            <div className="footerLeft">
            <div className="footerMenu">
                <h1 className="fMenuTitle">About Us</h1>
                <ul className="fList">
                <li className="fListItem">Company</li>
                <li className="fListItem">Contact</li>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Affiliates</li>
                <li className="fListItem">Stores</li>
                </ul>
            </div>
            <div className="footerMenu">
                <h1 className="fMenuTitle">Useful Links</h1>
                <ul className="fList">
                <li className="fListItem">Support</li>
                <li className="fListItem">Refund</li>
                <li className="fListItem">FAQ</li>
                <li className="fListItem">Feedback</li>
                <li className="fListItem">Stores</li>
                </ul>
            </div>
            <div className="footerMenu">
                <h1 className="fMenuTitle">Products</h1>
                <ul className="fList">
                <li className="fListItem">Air Force</li>
                <li className="fListItem">Air Jordan</li>
                <li className="fListItem">Blazer</li>
                <li className="fListItem">Craters</li>
                <li className="fListItem">Hippie</li>
                </ul>
            </div>
            </div>
            <div className="footerRight">
            <div className="footerRightMenu">
                <h1 className="fMenuTitle">Subscribe to our Newsletter</h1>
                <div className="fMail">
                <input type="text" placeholder="your@email.com" className="fInput" />
                <button className="fButton">Join!</button>
                </div>
            </div>
            <div className="footerRightMenu">
                <h1 className="fMenuTitle">Follow Us</h1>
                <div className="fIcons">
                <img src="./images/facebook.png" alt="Facebook" className="fIcon" />
                <img src="./images/twitter.png" alt="Twitter" className="fIcon" />
                <img src="./images/instagram.png" alt="Instagram" className="fIcon" />
                <img src="./images/whatsapp.png" alt="WhatsApp" className="fIcon" />
                </div>
            </div>
            </div>
        </footer>
    </>
  );
}

export default Home;
