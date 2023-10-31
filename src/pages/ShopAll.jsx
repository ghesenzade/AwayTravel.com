
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useTranslation } from 'react-i18next';

import { ProductCard } from '../components/ProductCard';
import { formatImageUrl } from '../utils/utils';

const ShopAll = () => {
  const [products, setProducts] = useState([]);

// --------------------------------------GETTING DATA FROM API-------------------------------------------
  useEffect(() => {
    axios.get(process.env.REACT_APP_ALL_PRODUCTS) 
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  }, []);


  const { t } = useTranslation();
  return (
    <section>
      <div className="shopAll">
        <div className="container">
          <div className="shopTexts">
            <div className="shopHeaderText">
              <h1>{t("shop_all.title")}</h1>
            </div>
            <div className="shopInfo">
              <p>{t("shop_all.info")}</p>
            </div>
          </div>
          <div className="allProducts">
            <div className='productCount'><p>{products.length} {t("shop_all.product_count")}</p></div>
            <div className="products">
{/* -------------------------------------PRODUCTCARD--------------------------------------------------------  */}
              {products.map((product) => (
                <ProductCard
                  className="product"
                  key={product.id}
                  id={product.id}
                  price={product.price}
                  name={product.name}
                  productImage={formatImageUrl(product.productImage)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopAll;
