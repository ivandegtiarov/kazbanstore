import React from 'react';
import '../Categories/Categories.scss';

const Categories = () => {
  const categories = ["All","hook", "fastening", "grid", "hanger", "shelf"]

  const [active, setActive] = React.useState('')
  return (
    <div className="category_container">
      <div className="static_title_category_part">
        <h3>Our Products!</h3>
      </div>
      <div className="active_category_part">
        <div className="category_text">
          <ul>
          {
            categories.map((value, i) => {
                return (
                  <li key={i} onClick={() => setActive(i)} className={active === i ? 'active' : ''}>{value}</li>
                )
            })
          }
          </ul>
        </div>
        <div className="category_sorting">
          <h2>sort</h2>
        </div>
      </div>
    </div>
  );
};

export default Categories;
