import React, { useEffect } from 'react';
import { CAT_SECRET_KEY } from '../secrets';
import favorite from 'src/icons/favorite.svg';
import favorite_hovered from 'src/icons/favorite_hovered.svg';
import favorite_clicked from 'src/icons/favorite_clicked.svg';
import { useFavoritesStore } from '../store';
import axios from 'axios';

export const FavButton = ({ imageId, imageUrl }) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const [isFav, setIsFav] = React.useState(false);
  const [favoriteId, setFavoriteId] = React.useState(null);
  const [isHovered, setIsHovered] = React.useState(false);

  // Проверяем, находится ли изображение в избранном при первом рендере
  useEffect(() => {
    const favoriteItem = favorites.find((fav) => fav.imageId === imageId);
    if (favoriteItem) {
      setIsFav(true);
      setFavoriteId(favoriteItem.favoriteId);
    } else {
      setIsFav(false);
      setFavoriteId(null);
    }
  }, [favorites, imageId]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const newIsFav = !isFav;
    setIsFav(newIsFav);

    if (newIsFav) {
      // Если изображение не в избранном, добавляем его
      const newFavoriteId = Date.now(); // Генерируем уникальный ID для локального хранения
      addFavorite(imageId, newFavoriteId, imageUrl);
      setFavoriteId(newFavoriteId);
    } else {
      removeFavorite(favoriteId);
    }
  };
  // Вероятно, использовать localStorage для хранения избранных изображений быстрее,
  // но API позволяет реализовать хранение любимых котиков в БД, решение с БД примерно такое.

  // const handleClick = async () => {
  //   try {
  //     if (isFav) {
  //       // Если изображение уже в избранном, удаляем его
  //       await axios.delete(`https://api.thecatapi.com/v1/favourites/${favoriteId}`, {
  //         headers: {
  //           'x-api-key': `${CAT_SECRET_KEY}`,
  //         },
  //       });
  //       removeFavorite(favoriteId);
  //     } else {
  //       // Если изображение не в избранном, добавляем его
  //       const response = await axios.post(
  //         'https://api.thecatapi.com/v1/favourites',
  //         {
  //           image_id: imageId,
  //         },
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'x-api-key': `${CAT_SECRET_KEY}`,
  //           },
  //         },
  //       );
  //       if (response.data.id) {
  //         addFavorite(imageId, response.data.id, imageUrl);
  //         setFavoriteId(response.data.id);
  //       }
  //     }
  //     setIsFav((prev) => !prev);
  //   } catch (error) {
  //     console.error('Error handling favorite:', error);
  //   }
  // };

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
