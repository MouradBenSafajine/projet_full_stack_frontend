import React, { useContext } from 'react';
import { CartContext } from './cart/cartcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHome, faList, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <header style={{ backgroundColor: '#35495e', padding: '20px' }}>
      <h1 style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
          Hardware Store
        </a>
      </h1>
      <nav style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <a
          href="/home"
          style={{ textDecoration: 'none', color: '#ffffff', padding: '0 20px', display: 'flex' }}
        >
          <FontAwesomeIcon icon={faHome} style={{ width: '20px' }} />
          Home
        </a>
        <a
          href="/produits/produits"
          style={{ textDecoration: 'none', color: '#ffffff', marginLeft: '20px' }}
        >
          <FontAwesomeIcon icon={faList} style={{ width: '20px' }} />
          All Products
        </a>
        <a
          href="/categories"
          style={{ textDecoration: 'none', color: '#ffffff', marginLeft: '20px' }}
        >
          <FontAwesomeIcon icon={faList} style={{ width: '20px' }} />
          All Categories
        </a>
        <a
          href="/about"
          style={{ textDecoration: 'none', color: '#ffffff', marginLeft: '20px' }}
        >
          <FontAwesomeIcon icon={faInfoCircle} style={{ width: '20px' }} />
          About
        </a>
        <a
          href="/panier"
          style={{ textDecoration: 'none', color: '#ffffff', marginLeft: '20px' }}
        >
          <FontAwesomeIcon icon={faShoppingCart} style={{ width: '20px' }} />
          Panier<span style={{ marginLeft: '5px' }}>{cartCount}</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
