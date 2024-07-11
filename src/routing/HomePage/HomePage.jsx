import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

function HomePage() {
  const {
    metaDataPackages: { data },
  } = useLoaderData();

  return (
    <div>
      <SearchBar />
      <h1>NPM REGISTRY</h1>
      {data.map(({ data: p }) => (
        <div>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <Link to={`/packages/${p.name}`}>
            <button>View</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
