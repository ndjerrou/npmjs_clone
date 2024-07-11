import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';

import { loaderHomePage } from './HomePage/loaderHomePage';
import SearchPage from './SearchPage/SearchPage';
import { loaderSearchPage } from './SearchPage/loaderSearchPage';
import { loaderDetailsPage } from './DetailsPage/loaderDetailsPage';
import DetailsPage from './DetailsPage/DetailsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    loader: loaderHomePage,
  },
  {
    path: '/search',
    element: <SearchPage />,
    loader: loaderSearchPage,
  },
  {
    path: '/packages/:packageName',
    element: <DetailsPage />,
    loader: loaderDetailsPage,
  },
]);
