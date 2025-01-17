import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <button className="btn btn_all_cats">Все котики</button>
        <button className="btn btn_active btn_fav_cats">Любимые котики</button>
      </div>
    </header>
  );
};
