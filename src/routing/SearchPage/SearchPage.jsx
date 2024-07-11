import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function SearchPage() {
  const { results } = useLoaderData();

  console.log(results);

  const renderedResults = results.map(
    ({ package: { keywords, name, description } }) => (
      <div>
        <h1>{name}</h1>
        <h5>{description}</h5>
        <div>
          {keywords && (
            <div
              style={{
                display: 'flex',
                gap: 5,
              }}
            >
              <div style={{ border: '1px solid blue', padding: 5 }}>
                <span>{keywords[0]}</span>
              </div>
              <div style={{ border: '1px solid blue', padding: 5 }}>
                <span>{keywords[1]}</span>
              </div>
            </div>
          )}
          <div style={{ marginTop: '10px' }}>
            <Link to={`/packages/${name}`}>
              <button>View</button>
            </Link>
          </div>
        </div>
      </div>
    )
  );

  return <>{renderedResults}</>;
}

export default SearchPage;
