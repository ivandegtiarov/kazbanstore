import React from 'react';
import '../Header/Header.scss';
/* import logo from '../../assets/img/header_logo.png'; */
import cart from '../../assets/img/header_cart.png';
import admin from '../../assets/img/header_admin.jpg';
import burger from '../../assets/img/burger.png';
import exit from '../../assets/img/exit.png';
import { ImHome } from 'react-icons/im';
import { ImStack } from 'react-icons/im';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="header_wrapper">
      {open && (
        <div className="opened_burger">
          <div className="img_exit">
            <img onClick={() => setOpen(false)} src={exit} alt="" />
          </div>
          <nav className="burger_nav">
            <ul>
              <Link className="Link" onClick={() => setOpen(false)} to="/">
                <li>
                  <ImHome className="home_img" /> Home
                </li>
              </Link>
              <Link className="Link" onClick={() => setOpen(false)} to="/">
                <li>
                  <ImStack className="home_img" /> Category
                </li>
              </Link>
              <Link className="Link" onClick={() => setOpen(false)} to="/cart">
                <li>
                  <AiOutlineShoppingCart className="home_img" /> Cart
                </li>
                <h2 className='cart_count'>1110</h2>
              </Link>
              <Link className="Link" onClick={() => setOpen(false)} to="/admin">
                <li>
                  <FaUserAlt className="home_img" /> Registration
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
      <header className="header_container">
        <div className="header_logo">
          <Link className="Link_logo" to="/">
            {/* <img src={cart} alt="" /> */}
            <div className="main_logo">
              <h1>K</h1>
            </div>
            <div className="main_logo_text">
              <h2>Kazban</h2>
              <h3>All for all</h3>
            </div>
          </Link>
        </div>
        <nav className="header_nav">
          <ul>
            <Link className="Link_li" to="/">
              <li>Home</li>
            </Link>
            <Link className="Link_li" to="/">
              <li>Category</li>
            </Link>
          </ul>
        </nav>
        <div className="active_header">
          <div className="cart_header">
            <Link to="/cart">
              <img src={cart} alt="" />
            </Link>
            <h2>0</h2>
          </div>
          <div className="admin_header">
            <Link to="/admin">
              <img src={admin} alt="" />
            </Link>
          </div>
        </div>
        <div className="burger_menu">
          <img onClick={() => setOpen(!false)} src={burger} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
