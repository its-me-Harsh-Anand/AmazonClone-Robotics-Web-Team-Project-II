import React from 'react'
import './Product.css'

export default function Product(props) {
const { id, title, image, price, rating } = props
    return (
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p className="star">&#9733;</p>
              ))}
          </div>
        </div>
  
        <img src={image} alt="" />
  
        <button>Add to Basket</button>
      </div>
    );
  }
  
