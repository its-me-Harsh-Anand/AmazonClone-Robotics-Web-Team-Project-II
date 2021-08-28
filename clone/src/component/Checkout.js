import React from 'react'
import "../css/Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"

export default function Checkout() {

    const [{basket, user}, dispatch]= useStateValue()
    return (
        <div className="Checkout">
            <div className="Checkout__left">
                <img
                    className="Checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="advertisement"
                />
                <div>
                    <h3>Hello, {user? user?.email : "Guest"}</h3>
                    <h2 className="Checkout__title">Your Shopping Basket</h2>
                    {
                        basket.map((basketItem)=> {
                            
                            return <CheckoutProduct 
                                key={`${basketItem.id}-${basketItem.length}`} 
                                {...basketItem}
                            />
                        })
                    }
                </div>
            </div>


            <div className="Checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}
