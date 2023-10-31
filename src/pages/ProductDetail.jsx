import React, { useContext ,useState, useEffect } from 'react';
import { CartContext } from '../utils/CartContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formatImageUrl } from '../utils/utils';
import { useTranslation } from 'react-i18next';

//---------------------------------- icons--------------------------------------
import { MdDoneAll } from "react-icons/md";

const Product = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_SINGLE_PRODUCT}${id}`)
    .then((res) => {
        if (res.data) {
          setProduct(res.data);
        } else {
          setProduct(null);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);


  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }


// -----------------------------------------------FAQ---------------------------------------------------
  const faqContent = [
    {
      question: t("product_detail.faq.size_detail"),
      answer: t("product_detail.faq.size_info")
    },
    {
      question: t("product_detail.faq.warranty"),
      answer: t("product_detail.faq.warranty_info")
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  
  return (
    <section className="productDetails">
      <div className="container">
      <div className="productDetailsContent row">
        {/* <div className="productLeftPart"> */}
          <div className="productImg" style={{backgroundImage: formatImageUrl(product?.productImage)}}>
            <img className='image' src={formatImageUrl(product?.productImage)} alt={product.name} />
          </div>
        {/* </div> */}
        <div className="productDetail">
          <div className="productMainInfo">
            <h2>{product?.name}</h2>
            <p>{product?.price}</p>
          </div>
          <div className="productInfo">
            <p className='detail'>{product?.details}</p>
{/* ----------------------------------ADD TO CART BUTTON-------------------------------------------------- */}
            <button className="addToCart" onClick={()=>addToCart(product)}>{t("product_detail.add_btn")} {product?.price}</button>

{/* ----------------------------------INFO PART---------------------------------------------- */}
            <div className="additionalInfo">
              <div className="row">
                <div className="info">
                  <p><MdDoneAll className='infoIcon'/> {t("product_detail.info.durable")}</p>
                </div>
                <div className="info">
                  <p><MdDoneAll className='infoIcon'/> {t("product_detail.info.wheel")}</p>
                </div>
                <div className="info">
                  <p><MdDoneAll className='infoIcon'/> {t("product_detail.info.interior")}</p>
                </div>
                <div className="info">
                  <p><MdDoneAll className='infoIcon'/> {t("product_detail.info.laundry")}</p>
                </div>
                <div className="info">
                  <p><MdDoneAll className='infoIcon'/> {t("product_detail.info.grab")}</p>
                </div>
                <div className="info">
                  <p><MdDoneAll className='infoIcon'/> {t("product_detail.info.days")}</p>
                </div>
              </div>
            </div>
{/* ----------------------------------------FAQ-------------------------------------------------------- */}
            <div className="faq">
            {faqContent.map((faq, index) => (
              <div key={index} className="faqItem">
                <p
                  className="question"
                  onClick={() => toggleFAQ(index)}
                >
                  {openIndex === index ? '-' : '+'} {faq.question}
                </p>
                {openIndex === index && (
                  <div>
                    <p className="answer">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Product;
