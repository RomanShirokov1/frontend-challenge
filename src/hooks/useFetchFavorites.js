import { useEffect } from 'react';
import axios from 'axios';
import { CAT_SECRET_KEY } from '../secrets';
import { useFavoritesStore } from '../store/index.js';

export const useFetchFavorites = () => {
  const { favorites, addFavorite } = useFavoritesStore();

  useEffect(() => {
    const fetchFavorites = async () => {
      if (favorites.length > 0) {
        // Если избранные уже загружены, не выполняем запрос
        return;
      }
      try {
        const response = await axios.get(`https://api.thecatapi.com/v1/favourites`, {
          headers: {
            'x-api-key': `${CAT_SECRET_KEY}`,
          },
        });
        response.data.forEach((fav) => {
          addFavorite(fav.image_id, fav.id, fav.image.url);
        });
        console.log('Favorites fetched:', response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [addFavorite]);
};
