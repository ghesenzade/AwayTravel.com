import React from 'react'
import bag from "../assets/images/bagOne.webp";



export const CheckOutCard = () => {
  return (
    <div className='product row'>
        <div className="productImg">
            <img src={bag} alt="bag" />
        </div>
        <div className="productDetails justifyBetween">
            <div className="productDetail column">
                <h3>Product Name</h3>
                <p className='quantity'>Quantity: 2</p>
            </div>
            <div className="productPrice">
                <p>$130</p>
            </div>
        </div>
    </div>
  )
}
