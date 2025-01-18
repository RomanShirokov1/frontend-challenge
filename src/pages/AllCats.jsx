import React, { useCallback, useEffect } from 'react';
import { Card, Skeleton } from '../components';
import axios from 'axios';
import { CAT_SECRET_KEY } from '../secrets';

export function AllCats() {
  const [cats, setCats] = React.useState([]);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const [isScrollingInfinite, setIsScrollingInfinite] = React.useState(false);
  const skeletons = [...new Array(18)].map((_, index) => <Skeleton key={index} />);

  const fetchCats = async (count) => {
    setIsLoadingMore(true);
    try {
      const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${count}`, {
        headers: {
          'x-api-key': `${CAT_SECRET_KEY}`, // Замените на ваш ключ API
        },
      });
      setCats((prevCats) => [...prevCats, ...res.data]);
    } catch (error) {
      console.error('Error fetching cats:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // Запрашиваем начальные фотки
  React.useEffect(() => {
    fetchCats(18);
  }, []);

  const loadMoreCats = () => {
    if (!isLoadingMore) {
      fetchCats(12); // При скролле запрашиваем еще 6 котов
      setIsScrollingInfinite(true);
    }
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoadingMore
    )
      return;
    loadMoreCats();
  }, [isLoadingMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <main className="container">
        {cats.map((cat) => (
          <Card key={cat.id} catUrl={cat.url} catId={cat.id} />
        ))}
        {isLoadingMore && skeletons}
      </main>

      <div className="loading_container">
        {isLoadingMore && <div className="loading">... загружаем котиков ...</div>}
        {!isScrollingInfinite && !isLoadingMore && cats.length > 0 && (
          <button onClick={loadMoreCats} className="btn load-more-button">
            Смотреть дальше
          </button>
        )}
      </div>
    </>
  );
}
