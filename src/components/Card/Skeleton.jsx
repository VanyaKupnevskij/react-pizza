import React from 'react';
import ContentLoader from 'react-content-loader';

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={281}
      height={459}
      viewBox="0 0 281 459"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="141" cy="126" r="126" />
      <rect x="18" y="271" rx="10" ry="10" width="246" height="24" />
      <rect x="1" y="428" rx="10" ry="10" width="98" height="24" />
      <rect x="0" y="317" rx="10" ry="10" width="281" height="85" />
      <rect x="149" y="419" rx="20" ry="20" width="132" height="40" />
    </ContentLoader>
  );
}

export default Skeleton;
