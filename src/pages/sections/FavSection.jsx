import React from 'react';
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';


import { formatImageUrl } from '../../utils/utils';
import { ProductCard } from '../../components/ProductCard';


const FavSection = () => {

// -------------------------------GETTING FOUR CART FROM API-------------------------------------------------
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const totalFeaturedProducts = 4;
  const { id } = useParams(); 

  useEffect(() => {
    axios
      .get("http://localhost:5000/away/products")
      .then((res) => {
        const filteredProducts = res.data.slice(0, totalFeaturedProducts);
        setFeaturedProducts(filteredProducts);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const { t }= useTranslation();

  return (
    <section className='favSection'>
      <div className="container">
        <div className="column">
          <div className="favHeader">
            <h2>
              <span className='fawSpan'>{t("home_sections.favourite.title_span_first")}</span>
              <br />
              <span className='favouriteSpan'>{t("home_sections.favourite.title_span_second")}</span>
            </h2>
          </div>
          <div className="favProducts">
            <div className="row">
{/* -----------------------------------PRODUCT CART-------------------------------------------- */}
              {featuredProducts.map((product) => (
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
  )
}

export default FavSection;
