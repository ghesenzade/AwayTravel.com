import React from 'react'
import { Link } from 'react-router-dom';


export const ProductCard = ({
    id,
    name,
    price,
    productImage,
    }) => {
    return (
    <div className={`productCard ${id}`}>
        
        <Link to={`/product-detail/${id}`} className='productImgLink'>
            <div className="productImg">
                <img
                    src={productImage}
                    alt={name}
                    className="productImage"
                />
            </div>
        </Link>

        <div className="productInfo">
            <Link to={`/product/${id}`} className='productLink'>
                <p>{name}</p>
            </Link>
            <div className="product-detail">
                <p className='price'>${price}</p>
            </div>
        </div>
    </div>
  )
}
