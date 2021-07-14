import React from 'react'
import "./Product.css"

function Product() {
return (
<div className="product">
    <div className="product__details">
        <p className="product__title">The Lean Startup: How Constant Innovation Creates Radically Successful Businesses
            Paperback</p>
        <p className="product__price">
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <p className="product__rating">★★★★★</p>
    </div>
    <img className="product__image" src="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        alt="book-image" />
    <button>Add to Basket</button>
</div>
)
}

export default Product