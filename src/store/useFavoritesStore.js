import { create } from 'zustand/react';

export const useFavoritesStore = create((set, get) => {
  const loadFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  return {
    favorites: loadFavorites(),
    addFavorite: (imageId, favoriteId, imageUrl) => {
      const currentFavorites = get().favorites;
      const newFavorites = [...currentFavorites, { imageId, favoriteId, imageUrl }];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      set({ favorites: newFavorites });
    },
    removeFavorite: (favoriteId) => {
      const currentFavorites = get().favorites;
      const newFavorites = currentFavorites.filter((fav) => fav.favoriteId !== favoriteId);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      set({ favorites: newFavorites });
    },
  };
});

// Если использовать хранение в БД, то:
// import { create } from 'zustand/react';

// export const useFavoritesStore = create((set) => ({
//   favorites: [],
//   addFavorite: (imageId, favoriteId, imageUrl) =>
//     set((state) => ({
//       favorites: [...state.favorites, { imageId, favoriteId, imageUrl }],
//     })),
//   removeFavorite: (favoriteId) =>
//     set((state) => ({
//       favorites: state.favorites.filter((fav) => fav.favoriteId !== favoriteId),
//     })),
// }));
