import React from 'react';
import title from '../assets/img/main_title.png';
import Categories from '../components/Categories/Categories';
import ProductBlock from '../components/ProductBlock/ProductBlock';
import products from '../assets/json/dataProduct.json';

const Home = () => {
  const [searchValue, setSearchValue] = React.useState('');


  const product = products
  .filter((obj) => {
    if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  })
  .map((obj) => <ProductBlock {...obj} />);
  return (
    <main className="main_wrapper">
      <div className="main_container">
        <div className="main_img">
          <img src={title} alt="" />
        </div>
        <div className="main_title">
          <h2>KazbanStore</h2>
          <h3>All for all</h3>
        </div>
      </div>
      <div className="main_search">
        <h2>Найди нужный тебе товар!</h2>
        <input type="text" onChange={(e) => setSearchValue(e.target.value)}/>
      </div>
      <div className="category_wrapper">
        <Categories />
      </div>
      <div className="product_part_wrapper">
        <div className="product_part_container">
{/*           {products.map((obj) => <ProductBlock key={obj.id} {...obj} />} */}
          {product}
        </div>
      </div>
    </main>
  );
};

export default Home;
