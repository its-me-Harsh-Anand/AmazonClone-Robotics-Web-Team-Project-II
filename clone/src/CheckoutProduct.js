import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct(props) {
    const { id, price, image, rating, title } = props
    const [{ basket }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img
                classname="checkoutProduct__image"
                src={image}
                alt="Product image"
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p className="star">&#9733;</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
