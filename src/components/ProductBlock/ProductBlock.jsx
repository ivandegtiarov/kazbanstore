import React from 'react';
import '../ProductBlock/ProductBlock.scss';

const ProductBlock = ({ name, category, price, mainPhoto }) => {
  return (
    <div className="product_wrapper">
      <div className="product_container">
        <div className="product_img">
          <img src={mainPhoto} alt="" />
        </div>
        <div className="product_title_wrapper">
          <div className="product_title_container">
            <h2>{name}</h2>
          </div>
        </div>
        <div className="product_category">
          <h2>{category}</h2>
        </div>
        <div className="footer_part">
          <div className="buy_button">
            <button>Buy</button>
          </div>
          <div className="product_price">
            <h2>{price} грн</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
