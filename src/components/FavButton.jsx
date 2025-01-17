import React from 'react';
import favorite from 'src/icons/favorite.svg';
import favorite_hovered from 'src/icons/favorite_hovered.svg';
import favorite_clicked from 'src/icons/favorite_clicked.svg';

export const FavButton = () => {
  const [isFav, setIsFav] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsFav((prev) => !prev); // Переключаем состояние "избранное"
  };
  return (
    <button
      className="btn_fav"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}>
      <img src={isFav ? favorite_clicked : isHovered ? favorite_hovered : favorite} alt="Любимое" />
    </button>
  );
};
