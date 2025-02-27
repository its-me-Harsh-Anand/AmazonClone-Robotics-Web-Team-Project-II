import React from 'react'
import '../css/Product.css'
import { useStateValue } from "./StateProvider"

export default function Product(props) {
  const { id, title, image, price, rating } = props
  const [{basket}, dispatch]= useStateValue()

  const addToBasket = ()=>{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id, 
        title:title,
        image:image, 
        price:price, 
        rating:rating
      }
    })
  }
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
  
        <button onClick = {addToBasket}>Add to Basket</button>
      </div>
    );
  }
  
