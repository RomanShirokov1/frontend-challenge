import React from 'react';
import { Card, Skeleton } from '../components';
import { useFavoritesStore } from '../store';

export function FavCats() {
  const [isLoading, setIsLoading] = React.useState(true);
  const { favorites } = useFavoritesStore();
  const skeletons = [...new Array(18)].map((_, index) => <Skeleton key={index} />);

  React.useEffect(() => {
    setIsLoading(false);
  }, [favorites]);

  return (
    <>
      <main className="container">
        {isLoading
          ? skeletons
          : favorites.map((fav) => (
              <Card key={fav.favoriteId} catUrl={fav.imageUrl} catId={fav.imageId} />
            ))}
      </main>
      <div className="loading_container">
        {isLoading && <div className="loading">... загружаем котиков ...</div>}
        {favorites.length === 0 && !isLoading && (
          <div className="no_favorites">
            Нет избранных котиков. Добавить можно на основной странице!
          </div>
        )}
      </div>
    </>
  );
}
