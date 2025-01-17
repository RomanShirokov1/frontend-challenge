import React from 'react';
import { Card } from '../components';

export function AllCats() {
  const renderItems = () => {
    return [...Array(12)].map((i, index) => <Card key={index} />);
  };

  const [cats, setCats] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {}, []);

  const secret_key = process.env.CAT_SECRET_KEY;

  return <main className="container">{renderItems()}</main>;
}
