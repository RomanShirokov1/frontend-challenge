import React, { useRef } from 'react';
import { FavButton } from './FavButton';

export const Card = ({ catUrl, catId }) => {
  return (
    <div className="cat_card">
      <img className="cat_img" src={catUrl} alt="Котик" />
      <FavButton imageId={catId} imageUrl={catUrl} />
    </div>
  );
};
