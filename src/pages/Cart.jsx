import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { useTranslation } from "react-i18next";

//----- icons---------------
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaX} from "react-icons/fa6";


import { CartContext } from "../utils/CartContext";
import { formatImageUrl } from "../utils/utils";

const Cart = () => {
  const { t }= useTranslation();

  const { cart, removeFromCart, addToCart, decrement, increment, totalPrice } = useContext(CartContext);

  
// ----------------------------------CART--------------------------------------------
  const renderCartItems = () => {
    return cart.map((product) => (
      <div key={product.id} className="cartInfo cartContentParts row">
        {/* -------------------cart image-------------------- */}

        <div className="cartImg">
          <img src={formatImageUrl(product.productImage)} alt={product.name} />
        </div>

        {/* --------------------cart info---------------------- */}
        <div className="cartInfoRightSide">

          <div className="nameAndX">
            <div className="justifyBetween">
              <h3>{product.name}</h3>
              <p className="x" onClick={() => removeFromCart(product.id)}>
                <FaX/>
              </p>
            </div>
          </div>

          <div className="numAndPrice justifyBetween">
            <div className="numOfProduct row">
              <FaMinus onClick={() => decrement(product)} />
              <span>{product.quantitiy}</span>
              <FaPlus onClick={() => increment(product)} />
            </div>
            <div className="price row">${product.price}</div>
          </div>

        </div>
      </div>
    ));
  };

// ------------------------------GETTING 4 OFFER CART FROM API FOR EMPTY CART-------------------------------
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const totalFeaturedProducts = 4;
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_ALL_PRODUCTS)
      .then((res) => {
        const filteredProducts = res.data.slice(0, totalFeaturedProducts);
        setFeaturedProducts(filteredProducts);
      })
      .catch((err) => console.error(err));
  }, [id]);

// -----------------------------------------EMPTY CART-------------------------------------------------
  return (
    <section className="cart">
      <div className="cartContent">
        {cart.length === 0 ? (
          <div className="cartHeader">
            <p>{t("cart.ship")}</p>
            <div className="cartInfo">
              <div className="cartTitle">
                <h1>{t("cart.title")}</h1>
                <p>{t("cart.info")}</p>
              </div>
              <div className="productLinks">
                <div className="productLink row">

                  <Link to="/shop-all" className="shopProduct">
                    {t("cart.shop_suit")}
                  </Link>

                  <Link to="/shop-all" className="shopProduct">
                    {t("cart.shop_bag")}
                  </Link>

                  <Link to="/shop-all" className="shopProduct">
                    {t("cart.shop_accessories")}
                  </Link>
                </div>
              </div>
            </div>
{/*-------------------------------------- ADVICES CARTS --------------------------------------------*/}
            <div className="advices">
              <div className="column">

                <div className="advicesTitle">
                  <h3>{t("cart.advice")}</h3>
                </div>

                <div className="advicesCards row">
                  {featuredProducts.map((product) => (
                    <div className="oneAdviceCard" key={product.id}>
                      <div className="cardImg">
                        <Link to={`/Product/${id}`} className="imgLink">
                          <img
                            src={formatImageUrl(product.productImage)}
                            alt={product.name}
                          />
                        </Link>
                        <div className="cardInfo">
                          <Link to={`/Product/${id}`} className="cardInfoLink">
                            <div className="cardTitle">
                              <h4>{product.name}</h4>
                              <p>{t("cart.coast")}</p>
                              <p>{product.price}</p>
                            </div>
                          </Link>
                          <button
                            type="submit"
                            onClick={() => addToCart(product)}
                          >
                            {t("cart.add_btn")}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        ) : (
// --------------------------------CART FULL----------------------------------------------------------
          <section className="cartPage">
            <div className="container">
              <div className="cartTitle row">
                <h1>{t("cart.title")}</h1>
              </div>
              <div className="cartContent row">
    {/*------------------------CALLING CART----------------------------------*/}
                <div className="renderCart column">{renderCartItems()}</div>

    {/*----- -------------------BUYING CART---------------------------------------- */}
                <div className="buyingProduct cartContentParts">
                  <div className="justifyBetween">
                    <div className="left column">
                      <p>{t("cart.subtotal")}:</p>
                      <p>{t("cart.shipping")}</p>
                      <p className="total">
                        <b>{t("cart.total")}:</b>
                      </p>
                    </div>
                    <div className="right column">
                      <p>${totalPrice}</p>
                      <p>{t("cart.free")}</p>
                      <p className="totalPrice">
                        <b>${totalPrice}</b>
                      </p>
                    </div>
                  </div>
                  <hr />

                  <Link to="/check-out" className="checkout shopProduct">
                    {t("cart.checkout_btn")}
                  </Link>

                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Cart;
