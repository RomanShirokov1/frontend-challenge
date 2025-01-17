import React from 'react';
import { Card } from '../components';

export function FavCats() {
  const renderItems = () => {
    return [...Array(5)].map((i, index) => <Card key={index} />);
  };

  return <main>{renderItems()}</main>;
}
