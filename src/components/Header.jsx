import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const activeButton = location.pathname === '/favorites' ? 'favorites' : 'all';

  return (
    <header className="header">
      <div className="header_container">
        <Link to="/">
          <button className={`btn ${activeButton === 'all' ? 'btn_active' : ''} btn_all_cats`}>
            Все котики
          </button>
        </Link>
        <Link to="/favorites">
          <button
            className={`btn ${activeButton === 'favorites' ? 'btn_active' : ''} btn_fav_cats`}>
            Любимые котики
          </button>
        </Link>
      </div>
    </header>
  );
};
