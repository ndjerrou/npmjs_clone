import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function DetailsPage() {
  const {
    result: {
      maintainers: [m1, m2],
      license,
      name,
      homepage,
      description,
    },
  } = useLoaderData();

  //   console.log(result);
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{license}</p>
      <p>{homepage}</p>
      <p>{m1.name}</p>
      <p>{m2.name}</p>
      <Link to='/'>
        <button>Go to homepage</button>
      </Link>
    </div>
  );
}

export default DetailsPage;
