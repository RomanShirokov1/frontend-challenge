import React, { useRef } from 'react';
import { FavButton } from './FavButton';

export const Card = () => {
  return (
    <div className="cat_card">
      <img className="cat_img" src="https://cdn2.thecatapi.com/images/2vk.jpg" alt="Котик" />
      <FavButton />
    </div>
  );
};
