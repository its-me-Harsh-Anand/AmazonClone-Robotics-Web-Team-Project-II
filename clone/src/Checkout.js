import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"

export default function Checkout() {
    return (
        <div className="Checkout">
            <div className="Checkout__left">
                <img
                    className="Checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="advertisement"
                />
                <div>
                    <h2 className="Checkout__title">Your Shopping Basket</h2>
                    {/* Basket item or cart item */}
                    {/* Basket item or cart item */}
                    {/* Basket item or cart item */}
                    {/* Basket item or cart item */}
                </div>
            </div>


            <div className="Checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}
