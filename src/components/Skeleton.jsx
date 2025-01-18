import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={226}
    height={226}
    viewBox="0 0 226 226"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="1" y="0" rx="0" ry="0" width="225" height="225" />
  </ContentLoader>
);
